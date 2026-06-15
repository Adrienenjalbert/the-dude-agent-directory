# The Dude — Use of Funds

> **Round:** Pre-seed / Seed · **June 2026**
> **Headline ask:** **$2.0M** seed (model a **$1.5M–$2.5M** band) for **~18 months** of runway to **Series A readiness** (~$1–3M ARR + proven marketplace liquidity).
> **Bridge:** **Seed: ~$2.0M / 18 months to Series A readiness; cumulative capital through Series A ≈ $5–9M (see `financial-model.md`, by scenario).** The seed gets to Series A; a planned Series A funds the growth-staffed opex over the back half of the 36-month model that drives the higher cumulative figure. The ~$5–9M in the model is *cumulative capital through Series A*, NOT the seed ask.
> **Thesis:** raise to *accelerate* a structurally lean take-rate business — **Apify reached ~$25M ARR on ~$3M raised** — not to subsidize one.
> *(Revenue scenarios and bottoms-up detail live in `financial-model.md`. "The Dude" is a working placeholder name. % allocations are planning targets, not exact line items.)*

---

## 1. Allocation at a glance

| # | Category | % of raise | $ (at $2.0M) | Primary outcome |
|---|---|---:|---:|---|
| 1 | **Engineering — runtime + frontend** | **40%** | $800K | Sandboxed metered runtime, SDK, world-class console (the product *and* the wedge) |
| 2 | **GTM — Apollo + product-led SEO + community** | **20%** | $400K | Day-one outbound + compounding SEO + Academy/community funnel |
| 3 | **Supply seeding — Founding Builders** | **15%** | $300K | 25–50 builders (incl. Apify migrants); liquidity in 2–3 lead categories |
| 4 | **Trust & evals** | **15%** | $300K | Verified perf metrics + automated evals + tiered vetting — the moat |
| 5 | **G&A & compliance** | **10%** | $200K | Payouts/MoR, EU AI Act-aware governance, legal/finance, ops |
| | **Total** | **100%** | **$2.0M** | ~18 months to Series A readiness |

> **Why engineering-heavy:** the runtime (securely running untrusted agents, metered) and the frontend (the explicit UX differentiator) *are* the product. Under-investing here loses the wedge. Everything else compounds on top of a runtime that works and a console builders love.

---

## 2. Category detail — what the money buys

### 1. Engineering — runtime + frontend (~40% · ~$800K)
**Headcount/spend:** 3–4 engineers (runtime/backend + full-stack/frontend), part-time design, and cloud/compute for the sandboxed execution layer.
**Buys:**
- **Sandboxed, multi-tenant, metered Execution Runtime** for untrusted agent code (sync/async/scheduled), with multi-dimensional metering (compute + inference + tool calls + storage) — the hardest, highest-COGS-risk component.
- **Manifest standard + TS/Python SDK**; container + hosted-code support; MCP/A2A export; guided publishing wizard with mandatory sandbox test.
- **World-class frontend** — directory, auto-generated SEO listing pages, builder console (Apify-grade analytics), buyer spend/run dashboards. This is the differentiator, not a cost center.
- **Stripe Connect** payout integration + transparent real-time cost display.

### 2. GTM — Apollo + product-led SEO + community (~20% · ~$400K)
**Headcount/spend:** founder-led growth + 1 growth/dev-rel hire; Apollo + deliverability tooling; content/SEO production; community/Academy.
**Buys:**
- **Apollo-powered outbound** from day one: enrich-on-signup, builder/buyer segmentation, segmented sequences (`gtm-service`), Customer.io lifecycle; later Instantly/Smartlead for deliverability and Clay for personalization.
- **Product-led SEO engine** — programmatic listing/category/comparison pages, AEO + MCP discoverability (`/.well-known/agents.md`).
- **Community + open SDK + Academy** — durable, low-cost developer funnel and content moat.

### 3. Supply seeding — Founding Builders (~15% · ~$300K)
**Spend:** Founding Builder incentives/credits, a dedicated **Apify-migration campaign**, builder support, and bounties/seed-content.
**Buys:**
- **25–50 hand-picked Founding Builders** in 2–3 hot categories (SDR/sales, support, research/data, marketing) — ultra-low fee (~6–10%), direct team access, co-design of SDK/payout/webhook decisions.
- **Apify rental-sunset migration** ("Bring your agent, keep your subscription floor") — a time-boxed, high-conviction supply unlock before Oct 2026.
- **Inventory density** (>3 quality results/search) so demand acquisition isn't wasted CAC.

### 4. Trust & evals (~15% · ~$300K)
**Headcount/spend:** trust/eval engineering, eval compute, and trust-&-safety ops.
**Buys:**
- **Automated eval suites per category** (correctness, safety, latency, cost) at publish + continuously; **drift detection**.
- **Verified performance metrics** on listings (success rate, latency, cost-per-outcome, uptime) and **tiered vetting** (auto for long tail; security review for Verified/Enterprise; gate paid listings behind verification).
- **Anti-spam / anti-manipulation** (no duplicate listings, keyword stuffing, self-reviews). Trust is the moat *and* the marketing.

### 5. G&A & compliance (~10% · ~$200K)
**Spend:** finance/legal, Merchant-of-Record fees, governance tooling, basic admin/ops.
**Buys:**
- **Payouts + MoR** for global tax; fraud controls.
- **EU AI Act-aware governance** (identity per agent, decoupled policy, auditable telemetry) — GPAI fines enforce from Aug 2, 2026.
- Standard company formation, accounting, contracts, insurance.

---

## 3. Funds mapped to the 18-month roadmap

Each milestone is funded by, and de-risks, the categories above. The North Star is **GMV / liquidity**; the round funds Q1–Q4 with margin to hit the Series A bar in Q5.

| Quarter | Milestone | Mainly funded by | What it unlocks |
|---|---|---|---|
| **Q1** | Core runtime + SDK + Stripe Connect + listing pages; recruit 25–50 Founding Builders | Eng (1), Supply (3) | **Buildable supply** — product exists, builders signed |
| **Q2** | Private beta in 2–3 categories; Apollo enrich-on-signup; builder analytics | Eng (1), GTM (2), Supply (3) | **Activated supply** — agents live, two onboarding tracks |
| **Q3** | Public MVP launch; product-led SEO live; demand activation | GTM (2), Eng (1) | **First metered GMV** — the revenue clock starts |
| **Q4** | Verified badges + evals; deliverability layer; liquidity in lead categories | Trust (4), GTM (2) | **Trust moat + liquidity** in lead categories |
| **Q5** | A2A/MCP discovery; hybrid pricing; expand categories | Eng (1), GTM (2) | **Series A readiness** (~$1–3M ARR / proven liquidity) |
| **Q6** | Enterprise governance pilots; outcome-based billing; scale both sides | Trust (4), G&A (5), Eng (1) | **Enterprise pull** + headroom past the raise |

**Series A bar (2026):** ~$1–3M ARR + proven marketplace liquidity / autonomous task completion — the round is sized to clear it with buffer.

---

## 4. Capital-efficiency framing (for the room)

- **Precedent:** Apify built ~$25M ARR on ~$3M total funding — a take-rate + infra-margin marketplace is structurally capital-efficient.
- **Lean by design:** ~40% to engineering reflects that runtime + frontend are the wedge; the remaining 60% buys liquidity (supply seeding + GTM) and the moat (trust/evals) — not headcount sprawl.
- **Different story than the model-layer arms race:** while three labs raised ~$172B in Q1 2026, our raise is small and the path to revenue is take-rate + infra margin from first GMV — a fundable, capital-efficient alternative.

---

## 5. Sensitivity & founder pressure-test

1. **Band, not a point.** At **$1.5M**, trim Q5–Q6 scope (defer enterprise governance, narrow categories) and treat the runway as ~14–15 months; at **$2.5M**, add a runtime/eng hire and an extra launch category to compress the window. State which scope flexes at which number.
2. **Runtime COGS is the swing factor.** The 40% eng allocation assumes a defensible per-run cost for sandboxed execution. If build-vs-buy lands expensive, infra margin (and therefore the whole model) compresses — reflect this in `financial-model.md`.
3. **Supply seeding is finite.** The Apify-migrant unlock is time-boxed (Oct 2026); the 15% supply line must also fund durable second/third supply sources (indie/micro-SaaS, agencies), not just the migration campaign.
4. **Trust is a recurring cost.** Continuous evals + drift detection are ongoing, not one-time — confirm 15% covers them at launch scale, or they leak into G&A.
5. **% are planning targets.** Reforecast quarterly against actual GMV/liquidity; shift dollars from GTM to supply (or vice versa) based on which side is the binding constraint on liquidity.
