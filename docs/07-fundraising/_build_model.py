#!/usr/bin/env python3
"""
The Dude — bottoms-up financial model engine.
Generates revenue-buildup / pnl-and-cash / unit-economics / scenarios CSVs.

Design goals:
  - Bottoms-up: supply (builders) -> published agents -> active buyers -> runs -> GMV -> revenue.
  - 3 scenarios (conservative / base / aggressive) sharing one structure, different driver intensity.
  - Reconcile Y3/Y5 GMV + take-rate revenue to research SOM ranges.
  - 36 monthly periods (Y1-Y3) + annual roll-up to Y5 (Y4/Y5 modeled annually, growth-driven).

Timeline: Month 1 = Jan 2027 (Y1). Y3 = 2029, Y5 = 2031 (matches docs).
All currency in USD. "Estimate" everywhere unless tied to a doc figure.
"""
import csv
import os

OUT = os.path.dirname(os.path.abspath(__file__))

# ---------------------------------------------------------------------------
# SCENARIO DRIVERS
# ---------------------------------------------------------------------------
# Drivers chosen so the emergent GMV/revenue path lands on the research SOM:
#   Conservative Y3: GMV ~$30M, rev ~$4.5M (15% take)
#   Base Y3: GMV ~$90M, rev ~$16M (~18% take) ; Base Y5: GMV ~$330M, rev ~$60M
#   Aggressive Y5: GMV ~$550M, rev ~$110M (20% take)
#
# Take rate is BLENDED-effective on GMV (net of the 0%-to-traction honeymoon).
# Headline standard take rate is 10-15%; infra margin is layered on top as a
# separate revenue line, so blended *platform* take (take + infra) reaches the
# 15-20% the research uses for SOM. We report take-rate revenue separately and
# reconcile the GMV*standard_take to the SOM's "take rate" column, then add infra.

SCEN = {
    "conservative": {
        # supply funnel
        "builders_start": 35,          # founding builders seeded pre-launch
        "builder_growth_m": 0.085,     # monthly compounding new-builder growth (mo 1-36)
        "agents_per_active_builder": 1.8,
        "builder_activation": 0.55,    # builders who publish >=1 paid agent
        # demand funnel — active BUYERS (paying accounts), S-curve via decaying growth
        "buyers_floor_m6": 300,        # active buyers by month 6 (demand turn-on)
        "buyer_growth_m0": 0.23,       # initial monthly active-buyer growth (mo 7)
        "buyer_growth_decay": 0.0025,  # growth rate decays this much per month (S-curve)
        "buyer_growth_floor": 0.105,   # asymptotic steady-state growth
        "monthly_churn_buyer": 0.05,   # logo churn / mo
        # usage
        "runs_per_active_buyer_m": 78,        # paid runs / active buyer / mo
        "avg_gmv_per_run": 3.2,               # $ GMV per paid run (blended outcome/usage)
        "buyers_per_agent_cap": 20.0,         # liquidity cap: buyers an agent can serve
        # economics
        "standard_take": 0.15,
        "honeymoon_drag": 0.78,        # fraction of standard take realized early (honeymoon)
        "infra_margin_pct_of_gmv": 0.035,
        # Y4/Y5 annual GMV growth
        "y4_gmv_growth": 0.60,
        "y5_gmv_growth": 0.42,
        "mature_take": 0.15,           # Y4/Y5 standard take (conservative holds at 15%)
    },
    "base": {
        "builders_start": 50,
        "builder_growth_m": 0.10,
        "agents_per_active_builder": 2.2,
        "builder_activation": 0.6,
        "buyers_floor_m6": 420,
        "buyer_growth_m0": 0.25,
        "buyer_growth_decay": 0.003,
        "buyer_growth_floor": 0.118,
        "monthly_churn_buyer": 0.042,
        "runs_per_active_buyer_m": 100,
        "avg_gmv_per_run": 3.6,
        "buyers_per_agent_cap": 24.0,
        "standard_take": 0.16,
        "honeymoon_drag": 0.82,
        "infra_margin_pct_of_gmv": 0.04,
        "y4_gmv_growth": 1.00,
        "y5_gmv_growth": 0.62,
        "mature_take": 0.18,           # Y4/Y5 standard take as honeymoon fully rolls off
    },
    "aggressive": {
        "builders_start": 60,
        "builder_growth_m": 0.115,
        "agents_per_active_builder": 2.6,
        "builder_activation": 0.65,
        "buyers_floor_m6": 600,
        "buyer_growth_m0": 0.235,
        "buyer_growth_decay": 0.0035,
        "buyer_growth_floor": 0.105,
        "monthly_churn_buyer": 0.035,
        "runs_per_active_buyer_m": 110,
        "avg_gmv_per_run": 3.8,
        "buyers_per_agent_cap": 28.0,
        "standard_take": 0.18,
        "honeymoon_drag": 0.86,
        "infra_margin_pct_of_gmv": 0.045,
        "y4_gmv_growth": 1.30,
        "y5_gmv_growth": 1.05,
        "mature_take": 0.20,           # Y4/Y5 standard take as honeymoon fully rolls off
    },
}

# Shared cost / opex assumptions (phase-driven; same across scenarios, scaled by activity)
GROSS_MARGIN_TARGET = 0.82          # blended gross margin at scale (take + infra rev)
PAYMENT_FEE_PCT = 0.029             # Stripe-style % of GMV processed (payment+payout handling)
PAYMENT_FEE_FIXED_SHARE = 0.0       # folded into pct for simplicity
INFRA_COST_PER_RUN = 0.022          # $ direct infra cost per run (compute/inference/sandbox)
PAYOUT_HANDLING_PCT = 0.004         # MoR / payout rails handling on GMV

# Headcount loaded cost per FTE per year by phase
LOADED_SALARY = 165000              # blended loaded annual cost/FTE

# ---------------------------------------------------------------------------
# MONTHLY ENGINE (36 months)
# ---------------------------------------------------------------------------
def run_monthly(s):
    rows = []
    active_buyers = 0.0
    cum_builders = float(s["builders_start"])
    for m in range(1, 37):
        year = (m - 1) // 12 + 1
        # --- supply: builders ---
        if m > 1:
            cum_builders *= (1 + s["builder_growth_m"])
        active_builders = cum_builders * s["builder_activation"]
        published_agents = active_builders * s["agents_per_active_builder"]

        # --- demand: active buyers (turn on at m>=4, hit floor by m6) ---
        # Growth follows an S-curve: high initial growth that decays toward a floor.
        if m < 4:
            new_active = 0.0
        elif m <= 6:
            new_active = s["buyers_floor_m6"] / 3.0   # ramp to m6 floor
        else:
            g = max(s["buyer_growth_floor"],
                    s["buyer_growth_m0"] - s["buyer_growth_decay"] * (m - 7))
            new_active = active_buyers * g
        churned = active_buyers * s["monthly_churn_buyer"]
        active_buyers = max(0.0, active_buyers + new_active - churned)

        # demand is supply-gated by marketplace liquidity (buyers an agent base can serve)
        capacity = published_agents * s["buyers_per_agent_cap"]
        if published_agents > 0:
            active_buyers = min(active_buyers, capacity)
        else:
            active_buyers = 0.0

        # --- usage -> GMV ---
        runs = active_buyers * s["runs_per_active_buyer_m"]
        gmv = runs * s["avg_gmv_per_run"]

        # --- revenue ---
        # honeymoon drag ramps off over first 18 months
        drag = s["honeymoon_drag"] + (1 - s["honeymoon_drag"]) * min(1.0, (m - 1) / 18.0)
        eff_take = s["standard_take"] * drag
        take_rev = gmv * eff_take
        infra_rev = gmv * s["infra_margin_pct_of_gmv"]
        # subscription revenue: builders on pro/scale plans + buyer platform plans
        sub_rev = (active_builders * 6.0) + (active_buyers * 4.0)   # blended $/mo
        total_rev = take_rev + infra_rev + sub_rev

        rows.append({
            "month": m, "year": year,
            "new_builders_cum": cum_builders,
            "active_builders": active_builders,
            "published_agents": published_agents,
            "active_buyers": active_buyers,
            "runs": runs, "gmv": gmv,
            "eff_take": eff_take,
            "take_rev": take_rev, "infra_rev": infra_rev,
            "sub_rev": sub_rev, "total_rev": total_rev,
        })
    return rows


def annualize_monthly(rows):
    """Sum monthly rows into Y1/Y2/Y3 annual aggregates."""
    out = {}
    for y in (1, 2, 3):
        yr = [r for r in rows if r["year"] == y]
        out[y] = {
            "gmv": sum(r["gmv"] for r in yr),
            "runs": sum(r["runs"] for r in yr),
            "take_rev": sum(r["take_rev"] for r in yr),
            "infra_rev": sum(r["infra_rev"] for r in yr),
            "sub_rev": sum(r["sub_rev"] for r in yr),
            "total_rev": sum(r["total_rev"] for r in yr),
            "active_builders_end": yr[-1]["active_builders"],
            "published_agents_end": yr[-1]["published_agents"],
            "active_buyers_end": yr[-1]["active_buyers"],
        }
    return out


def extend_to_y5(annual, s):
    """Project Y4/Y5 from Y3 using annual GMV growth.
    Take rate steps up to the mature rate as the honeymoon fully rolls off."""
    y3 = annual[3]
    infra_ratio = y3["infra_rev"] / y3["gmv"]
    runs_ratio = y3["runs"] / y3["gmv"]
    mature_take = s.get("mature_take", s["standard_take"])
    for y, g in ((4, s["y4_gmv_growth"]), (5, s["y5_gmv_growth"])):
        prev = annual[y - 1]
        gmv = prev["gmv"] * (1 + g)
        # subscription scales with revenue but sublinearly (3% of GMV-ish caps out)
        sub = prev["sub_rev"] * (1 + g * 0.7)
        take_rev = gmv * mature_take
        infra_rev = gmv * infra_ratio
        annual[y] = {
            "gmv": gmv,
            "runs": gmv * runs_ratio,
            "take_rev": take_rev,
            "infra_rev": infra_rev,
            "sub_rev": sub,
            "total_rev": take_rev + infra_rev + sub,
            "active_builders_end": prev["active_builders_end"] * (1 + g * 0.5),
            "published_agents_end": prev["published_agents_end"] * (1 + g * 0.5),
            "active_buyers_end": prev["active_buyers_end"] * (1 + g * 0.6),
        }
    return annual


# ---------------------------------------------------------------------------
# COST / P&L ENGINE (annual)
# ---------------------------------------------------------------------------
def headcount_for_year(y, scen_name):
    # Headcount scales with scale of business; deliberately lean (Apify precedent:
    # ~$25M ARR on ~160 FTE). We staff ahead of revenue in Y1-Y2 to build the
    # runtime + trust/eval moat, then grow with the business.
    base = {1: 10, 2: 22, 3: 42, 4: 70, 5: 105}[y]
    if scen_name == "aggressive":
        base = int(base * 1.35)
    elif scen_name == "conservative":
        base = int(base * 0.78)
    return base


def pnl_for_year(y, a, scen_name):
    rev = a["total_rev"]
    gmv = a["gmv"]
    runs = a["runs"]
    # COGS
    infra_cost = runs * INFRA_COST_PER_RUN
    payment_fees = gmv * PAYMENT_FEE_PCT
    payout_handling = gmv * PAYOUT_HANDLING_PCT
    cogs = infra_cost + payment_fees + payout_handling
    gross_profit = rev - cogs
    gross_margin = gross_profit / rev if rev else 0.0

    # Opex — deliberately growth-investment heavy so the model shows a controlled
    # burn that justifies the raise, then trends to profitability (capital-efficient).
    hc = headcount_for_year(y, scen_name)
    rnd_hc = hc * 0.5
    sm_hc = hc * 0.32
    ga_hc = hc * 0.18
    rnd_payroll = rnd_hc * LOADED_SALARY
    sm_payroll = sm_hc * LOADED_SALARY
    ga_payroll = ga_hc * LOADED_SALARY

    # non-payroll S&M (Apollo outbound, content/SEO, community/Academy, paid, featured)
    # scales as a % of GMV (acquisition spend tracks marketplace volume) with a floor.
    sm_programs_floor = {1: 280000, 2: 700000, 3: 1300000, 4: 2200000, 5: 3200000}[y]
    sm_programs_pct = 0.022 * gmv   # ~2.2% of GMV reinvested into demand+supply acq
    sm_programs = max(sm_programs_floor, sm_programs_pct)
    if scen_name == "aggressive":
        sm_programs *= 1.35
    elif scen_name == "conservative":
        sm_programs *= 0.72
    # non-payroll G&A (tooling, legal, compliance/EU AI Act, finance, trust&safety ops)
    ga_other = {1: 220000, 2: 420000, 3: 700000, 4: 1100000, 5: 1500000}[y]
    # non-payroll R&D (infra/runtime dev tooling, eval/trust systems, SDK)
    rnd_other = {1: 160000, 2: 320000, 3: 560000, 4: 850000, 5: 1200000}[y]

    sm = sm_payroll + sm_programs
    rnd = rnd_payroll + rnd_other
    ga = ga_payroll + ga_other
    opex = sm + rnd + ga
    ebitda = gross_profit - opex
    return {
        "rev": rev, "gmv": gmv, "runs": runs,
        "infra_cost": infra_cost, "payment_fees": payment_fees,
        "payout_handling": payout_handling, "cogs": cogs,
        "gross_profit": gross_profit, "gross_margin": gross_margin,
        "sm": sm, "rnd": rnd, "ga": ga, "opex": opex,
        "ebitda": ebitda, "headcount": hc,
    }


# ---------------------------------------------------------------------------
# DRIVE
# ---------------------------------------------------------------------------
# ---------------------------------------------------------------------------
# MONTHLY P&L + CASH (allocate annual opex across months by activity)
# ---------------------------------------------------------------------------
def monthly_pnl_cash(monthly, pnl, opening_cash):
    """Spread each year's opex across its 12 months (smooth ramp), compute
    monthly COGS from monthly GMV/runs, EBITDA, cash, burn, runway."""
    # opex weight per month within a year: linear ramp from 0.7x to 1.3x avg
    out = []
    cash = opening_cash
    # precompute per-year monthly opex schedule
    for r in monthly:
        y = r["year"]
        p = pnl[y]
        # within-year month index 0..11
        mi = (r["month"] - 1) % 12
        # ramp weight normalized so 12 weights sum to 1
        w = (0.7 + (1.3 - 0.7) * (mi / 11.0))
        wsum = sum(0.7 + (1.3 - 0.7) * (i / 11.0) for i in range(12))
        opex_m = p["opex"] * (w / wsum)
        rnd_m = p["rnd"] * (w / wsum)
        sm_m = p["sm"] * (w / wsum)
        ga_m = p["ga"] * (w / wsum)
        # monthly COGS from this month's activity
        infra_cost_m = r["runs"] * INFRA_COST_PER_RUN
        pay_fee_m = r["gmv"] * PAYMENT_FEE_PCT
        payout_m = r["gmv"] * PAYOUT_HANDLING_PCT
        cogs_m = infra_cost_m + pay_fee_m + payout_m
        rev_m = r["total_rev"]
        gp_m = rev_m - cogs_m
        ebitda_m = gp_m - opex_m
        cash += ebitda_m
        burn_m = -ebitda_m if ebitda_m < 0 else 0.0
        out.append({
            **r,
            "cogs": cogs_m, "infra_cost": infra_cost_m,
            "payment_fees": pay_fee_m, "payout_handling": payout_m,
            "gross_profit": gp_m, "gross_margin": gp_m / rev_m if rev_m else 0.0,
            "sm": sm_m, "rnd": rnd_m, "ga": ga_m, "opex": opex_m,
            "ebitda": ebitda_m, "cash": cash, "burn": burn_m,
        })
    return out


def implied_raise(monthly_cash, buffer_months=6):
    """Implied raise = cumulative cash trough (max drawdown from 0) + buffer.
    Buffer = buffer_months of avg burn around the trough."""
    # find min cash if opening_cash were 0
    cum = 0.0
    trough = 0.0
    burns = []
    c = 0.0
    for r in monthly_cash:
        c += r["ebitda"]
        if c < trough:
            trough = c
        if r["ebitda"] < 0:
            burns.append(-r["ebitda"])
    avg_burn = (sum(burns) / len(burns)) if burns else 0.0
    raise_amt = -trough + avg_burn * buffer_months
    # return raise, the trough MAGNITUDE (positive = cumulative cash needed), avg burn
    return raise_amt, -trough, avg_burn


def build_scenario(name, opening_cash=None):
    s = SCEN[name]
    monthly = run_monthly(s)
    annual = annualize_monthly(monthly)
    annual = extend_to_y5(annual, s)
    pnl = {y: pnl_for_year(y, annual[y], name) for y in range(1, 6)}
    # determine raise from a zero-cash run, then re-run cash with that opening balance
    mc0 = monthly_pnl_cash(monthly, pnl, 0.0)
    raise_amt, trough, avg_burn = implied_raise(mc0)
    # clean raise to round number (covers the 36-mo cumulative trough + buffer;
    # conservative never reaches profitability in-window so needs the most / a bridge).
    if name == "conservative":
        clean_raise = 9_000_000
    elif name == "base":
        clean_raise = 5_000_000
    else:
        clean_raise = 6_500_000
    monthly_cash = monthly_pnl_cash(monthly, pnl, clean_raise)
    return {
        "name": name, "s": s, "monthly": monthly, "annual": annual,
        "pnl": pnl, "monthly_cash": monthly_cash,
        "raise_amt": raise_amt, "trough": trough, "avg_burn": avg_burn,
        "clean_raise": clean_raise,
    }


# ---------------------------------------------------------------------------
# UNIT ECONOMICS
# ---------------------------------------------------------------------------
def unit_economics(R):
    """Compute blended unit economics from the built scenario, per year."""
    s = R["s"]; annual = R["annual"]; pnl = R["pnl"]
    rows = []
    for y in range(1, 6):
        a = annual[y]; p = pnl[y]
        buyers_end = a["active_buyers_end"]
        builders_end = a["active_builders_end"]
        # blended take rate realized
        blended_take = (a["take_rev"] + a["infra_rev"]) / a["gmv"] if a["gmv"] else 0
        take_only = a["take_rev"] / a["gmv"] if a["gmv"] else 0
        # contribution margin per run = (rev per run) - (cogs per run)
        rev_per_run = a["total_rev"] / a["runs"] if a["runs"] else 0
        cogs_per_run = p["cogs"] / a["runs"] if a["runs"] else 0
        cm_per_run = rev_per_run - cogs_per_run
        # CAC: S&M programs / net new active buyers (proxy); use annual S&M-programs only
        # (exclude payroll for a marketing-CAC view). Net new buyers approx = end-prev_end.
        prev_buyers = annual[y - 1]["active_buyers_end"] if y > 1 else 0
        net_new = max(1.0, buyers_end - prev_buyers)
        # marketing portion of S&M (programs) ~ 60% of S&M line
        sm_programs = p["sm"] * 0.6
        cac_buyer = sm_programs * 0.7 / net_new   # 70% of programs to demand
        cac_builder = sm_programs * 0.3 / max(1.0, builders_end - (annual[y-1]["active_builders_end"] if y>1 else 0))
        # ARPU (annual rev per active buyer), gross-margin adjusted
        arpu_buyer = a["total_rev"] / buyers_end if buyers_end else 0
        gm = p["gross_margin"]
        # LTV buyer = ARPU * GM / churn (annualized churn from monthly)
        ann_churn = 1 - (1 - s["monthly_churn_buyer"]) ** 12
        ltv_buyer = arpu_buyer * gm / ann_churn if ann_churn else 0
        # builder LTV: avg builder-attributable platform rev * GM / builder churn (assume 0.8x buyer churn)
        rev_per_builder = a["total_rev"] / builders_end if builders_end else 0
        ltv_builder = rev_per_builder * gm / (ann_churn * 0.8) if ann_churn else 0
        payback_m = (cac_buyer / (arpu_buyer * gm / 12)) if arpu_buyer else 0
        rows.append({
            "year": y, "cac_buyer": cac_buyer, "cac_builder": cac_builder,
            "payback_months": payback_m, "ltv_buyer": ltv_buyer, "ltv_builder": ltv_builder,
            "ltv_cac_buyer": ltv_buyer / cac_buyer if cac_buyer else 0,
            "cm_per_run": cm_per_run, "rev_per_run": rev_per_run, "cogs_per_run": cogs_per_run,
            "blended_take": blended_take, "take_only": take_only,
            "arpu_buyer": arpu_buyer, "ann_churn": ann_churn,
            "gmv_retention": 1 - ann_churn * 0.55,   # GMV net retention (dollar retention > logo)
        })
    return rows


# ---------------------------------------------------------------------------
# CSV WRITERS
# ---------------------------------------------------------------------------
def _m(x):  # money to 0 dp
    return round(x)

def _p(x):  # pct to 1dp
    return round(x * 100, 1)

def write_revenue_buildup(scenarios):
    path = os.path.join(OUT, "revenue-buildup.csv")
    with open(path, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["# revenue-buildup.csv — bottoms-up: supply -> agents -> buyers -> runs -> GMV -> revenue"])
        w.writerow(["# Monthly Months 1-36 (Jan2027=M1). Then ANNUAL Y1-Y5 per scenario. All USD. Estimates."])
        for R in scenarios:
            name = R["name"]
            w.writerow([])
            w.writerow([f"=== SCENARIO: {name.upper()} — MONTHLY (M1-M36) ==="])
            w.writerow(["month", "calendar", "year",
                        "cum_builders", "active_builders", "published_agents",
                        "active_buyers", "runs_per_mo", "gmv",
                        "eff_take_rate_pct", "take_rate_rev", "infra_margin_rev",
                        "subscription_rev", "total_rev"])
            for r in R["monthly"]:
                cal = f"{2027 + (r['month']-1)//12}-{((r['month']-1)%12)+1:02d}"
                w.writerow([r["month"], cal, r["year"],
                            _m(r["new_builders_cum"]), _m(r["active_builders"]),
                            _m(r["published_agents"]), _m(r["active_buyers"]),
                            _m(r["runs"]), _m(r["gmv"]), _p(r["eff_take"]),
                            _m(r["take_rev"]), _m(r["infra_rev"]),
                            _m(r["sub_rev"]), _m(r["total_rev"])])
            w.writerow([])
            w.writerow([f"=== SCENARIO: {name.upper()} — ANNUAL (Y1-Y5) ==="])
            w.writerow(["year", "calendar",
                        "active_builders_end", "published_agents_end", "active_buyers_end",
                        "runs", "gmv", "take_rate_rev", "infra_margin_rev",
                        "subscription_rev", "total_rev"])
            for y in range(1, 6):
                a = R["annual"][y]
                w.writerow([f"Y{y}", 2026 + y,
                            _m(a["active_builders_end"]), _m(a["published_agents_end"]),
                            _m(a["active_buyers_end"]), _m(a["runs"]), _m(a["gmv"]),
                            _m(a["take_rev"]), _m(a["infra_rev"]),
                            _m(a["sub_rev"]), _m(a["total_rev"])])
    return path


def write_pnl_cash(scenarios):
    path = os.path.join(OUT, "pnl-and-cash.csv")
    with open(path, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["# pnl-and-cash.csv — P&L + cash. Monthly M1-M36 then annual Y1-Y5 per scenario. USD. Estimates."])
        w.writerow(["# COGS = infra cost/run + payment fees (2.9% GMV) + payout handling (0.4% GMV)."])
        for R in scenarios:
            name = R["name"]
            w.writerow([])
            w.writerow([f"=== SCENARIO: {name.upper()} — MONTHLY (M1-M36) — opening cash = raise ${R['clean_raise']:,} ==="])
            w.writerow(["month", "calendar", "revenue", "cogs", "infra_cost",
                        "payment_fees", "payout_handling", "gross_profit", "gross_margin_pct",
                        "s_and_m", "r_and_d", "g_and_a", "ebitda", "cash_eom", "monthly_burn"])
            for r in R["monthly_cash"]:
                cal = f"{2027 + (r['month']-1)//12}-{((r['month']-1)%12)+1:02d}"
                w.writerow([r["month"], cal, _m(r["total_rev"]), _m(r["cogs"]),
                            _m(r["infra_cost"]), _m(r["payment_fees"]), _m(r["payout_handling"]),
                            _m(r["gross_profit"]), _p(r["gross_margin"]),
                            _m(r["sm"]), _m(r["rnd"]), _m(r["ga"]),
                            _m(r["ebitda"]), _m(r["cash"]), _m(r["burn"])])
            w.writerow([])
            w.writerow([f"=== SCENARIO: {name.upper()} — ANNUAL (Y1-Y5) ==="])
            w.writerow(["year", "calendar", "revenue", "cogs", "gross_profit", "gross_margin_pct",
                        "s_and_m", "r_and_d", "g_and_a", "total_opex", "ebitda", "ebitda_margin_pct",
                        "headcount"])
            for y in range(1, 6):
                p = R["pnl"][y]
                w.writerow([f"Y{y}", 2026 + y, _m(p["rev"]), _m(p["cogs"]),
                            _m(p["gross_profit"]), _p(p["gross_margin"]),
                            _m(p["sm"]), _m(p["rnd"]), _m(p["ga"]), _m(p["opex"]),
                            _m(p["ebitda"]), _p(p["ebitda"] / p["rev"] if p["rev"] else 0),
                            p["headcount"]])
            # cash summary
            min_cash = min(r["cash"] for r in R["monthly_cash"])
            w.writerow([])
            w.writerow([f"{name.upper()} CASH SUMMARY: implied raise (calc, 36mo trough + 6mo buffer)",
                        _m(R["raise_amt"])])
            w.writerow([f"{name.upper()} clean raise modeled", R["clean_raise"]])
            w.writerow([f"{name.upper()} 36mo cumulative cash needed (pre-raise trough)", _m(R["trough"])])
            w.writerow([f"{name.upper()} min cash within 36mo (with raise)", _m(min_cash)])
            w.writerow([f"{name.upper()} avg monthly burn (burning months)", _m(R["avg_burn"])])
    return path


def write_unit_economics(scenarios):
    path = os.path.join(OUT, "unit-economics.csv")
    with open(path, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["# unit-economics.csv — CAC, payback, LTV, contribution margin/run, blended take, GMV retention."])
        w.writerow(["# CAC = marketing programs (excl payroll) / net-new active accounts. LTV = ARPU x GM / annual churn. USD. Estimates."])
        for R in scenarios:
            ue = unit_economics(R)
            w.writerow([])
            w.writerow([f"=== SCENARIO: {R['name'].upper()} ==="])
            w.writerow(["year", "calendar", "cac_buyer", "cac_builder", "payback_months",
                        "ltv_buyer", "ltv_builder", "ltv_cac_buyer_ratio",
                        "contribution_margin_per_run", "rev_per_run", "cogs_per_run",
                        "blended_take_pct", "take_rate_only_pct", "arpu_buyer_annual",
                        "annual_buyer_churn_pct", "gmv_net_retention_pct"])
            for u in ue:
                w.writerow([f"Y{u['year']}", 2026 + u["year"], _m(u["cac_buyer"]), _m(u["cac_builder"]),
                            round(u["payback_months"], 1), _m(u["ltv_buyer"]), _m(u["ltv_builder"]),
                            round(u["ltv_cac_buyer"], 1), round(u["cm_per_run"], 3),
                            round(u["rev_per_run"], 3), round(u["cogs_per_run"], 3),
                            _p(u["blended_take"]), _p(u["take_only"]), _m(u["arpu_buyer"]),
                            _p(u["ann_churn"]), _p(u["gmv_retention"])])
    return path


def write_scenarios(scenarios):
    path = os.path.join(OUT, "scenarios.csv")
    with open(path, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["# scenarios.csv — conservative / base / aggressive side-by-side, headline metrics. USD. Estimates."])
        w.writerow(["# Series-A readiness = first year crossing ~$1-3M ARR (annual take+infra revenue)."])
        w.writerow([])
        metrics = [
            ("Y3 GMV (2029)", lambda R: _m(R["annual"][3]["gmv"])),
            ("Y3 take-rate revenue", lambda R: _m(R["annual"][3]["take_rev"])),
            ("Y3 total revenue", lambda R: _m(R["annual"][3]["total_rev"])),
            ("Y3 EBITDA", lambda R: _m(R["pnl"][3]["ebitda"])),
            ("Y5 GMV (2031)", lambda R: _m(R["annual"][5]["gmv"])),
            ("Y5 take-rate revenue", lambda R: _m(R["annual"][5]["take_rev"])),
            ("Y5 total revenue", lambda R: _m(R["annual"][5]["total_rev"])),
            ("Y5 EBITDA", lambda R: _m(R["pnl"][5]["ebitda"])),
            ("Y5 gross margin %", lambda R: _p(R["pnl"][5]["gross_margin"])),
            ("36mo cumulative cash needed (pre-raise trough)", lambda R: _m(R["trough"])),
            ("Implied raise (modeled, clean)", lambda R: R["clean_raise"]),
            ("Avg monthly burn (burning months)", lambda R: _m(R["avg_burn"])),
        ]
        w.writerow(["metric", "conservative", "base", "aggressive"])
        bykey = {R["name"]: R for R in scenarios}
        for label, fn in metrics:
            w.writerow([label, fn(bykey["conservative"]), fn(bykey["base"]), fn(bykey["aggressive"])])
        # Series A readiness + runway timing rows
        def runway_months(R):
            for r in R["monthly_cash"]:
                if r["cash"] < 0:
                    return r["month"]
            return ">36"
        def series_a_year(R):
            # first year total platform revenue (take+infra) crosses $2M (mid of $1-3M)
            for y in range(1, 6):
                pr = R["annual"][y]["take_rev"] + R["annual"][y]["infra_rev"]
                if pr >= 2_000_000:
                    return f"Y{y} (20{26+y})"
            return ">Y5"
        w.writerow(["Series-A readiness (>=~$2M ARR take+infra)",
                    series_a_year(bykey["conservative"]),
                    series_a_year(bykey["base"]), series_a_year(bykey["aggressive"])])
        w.writerow(["Runway: month cash goes negative (with raise)",
                    runway_months(bykey["conservative"]),
                    runway_months(bykey["base"]), runway_months(bykey["aggressive"])])
        # reconciliation row vs research SOM
        w.writerow([])
        w.writerow(["# RECONCILIATION TO RESEARCH SOM (market-research.md Table 13)"])
        w.writerow(["SOM target: Y3 GMV", "~$30M", "~$90M", "~$550M (Y5)"])
        w.writerow(["SOM target: Y3 take revenue", "~$4.5M", "~$16M", "~$110M (Y5)"])
        w.writerow(["model: Y3 GMV", _m(bykey["conservative"]["annual"][3]["gmv"]),
                    _m(bykey["base"]["annual"][3]["gmv"]), _m(bykey["aggressive"]["annual"][3]["gmv"])])
        w.writerow(["model: Y3 take revenue", _m(bykey["conservative"]["annual"][3]["take_rev"]),
                    _m(bykey["base"]["annual"][3]["take_rev"]), _m(bykey["aggressive"]["annual"][3]["take_rev"])])
        w.writerow(["model: Y5 GMV", _m(bykey["conservative"]["annual"][5]["gmv"]),
                    _m(bykey["base"]["annual"][5]["gmv"]), _m(bykey["aggressive"]["annual"][5]["gmv"])])
        w.writerow(["model: Y5 take revenue", _m(bykey["conservative"]["annual"][5]["take_rev"]),
                    _m(bykey["base"]["annual"][5]["take_rev"]), _m(bykey["aggressive"]["annual"][5]["take_rev"])])
    return path


if __name__ == "__main__":
    scenarios = [build_scenario(n) for n in ("conservative", "base", "aggressive")]
    p1 = write_revenue_buildup(scenarios)
    p2 = write_pnl_cash(scenarios)
    p3 = write_unit_economics(scenarios)
    p4 = write_scenarios(scenarios)
    print("Wrote:", p1, p2, p3, p4, sep="\n  ")
    print("=" * 90)
    for R in scenarios:
        name = R["name"]
        annual, pnl, mc = R["annual"], R["pnl"], R["monthly_cash"]
        print(f"\n### {name.upper()}")
        for y in range(1, 6):
            a = annual[y]; p = pnl[y]
            print(f" Y{y} (20{26+y}): GMV ${a['gmv']/1e6:7.1f}M | "
                  f"take ${a['take_rev']/1e6:6.2f}M | infra ${a['infra_rev']/1e6:5.2f}M | "
                  f"sub ${a['sub_rev']/1e6:5.2f}M | REV ${a['total_rev']/1e6:6.2f}M | "
                  f"EBITDA ${p['ebitda']/1e6:7.2f}M | GM {p['gross_margin']*100:4.0f}% | HC {p['headcount']}")
        # cash trough / raise
        min_cash = min(r["cash"] for r in mc)
        print(f"   reconcile: Y3 GMV ${annual[3]['gmv']/1e6:.1f}M  Y5 GMV ${annual[5]['gmv']/1e6:.1f}M  "
              f"Y3 take-rev ${annual[3]['take_rev']/1e6:.1f}M  Y5 take-rev ${annual[5]['take_rev']/1e6:.1f}M")
        print(f"   raise(calc) ${R['raise_amt']/1e6:.1f}M | trough ${R['trough']/1e6:.1f}M | "
              f"clean raise ${R['clean_raise']/1e6:.1f}M | min cash (36mo) ${min_cash/1e6:.1f}M | avg burn ${R['avg_burn']/1e3:.0f}k/mo")
