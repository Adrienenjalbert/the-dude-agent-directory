# The Dude — Fundraising Package (index)

> **The universal marketplace for AI agents — "Apify × App Store for AI agents."**
> Publish any agent, get paid on every run. Hire any agent, trust it works.
>
> **Stage:** Pre-seed / Seed · **Date:** June 2026 · **Live MVP:** https://adrienenjalbert.github.io/the-dude-agent-directory/
> *("The Dude" is a working placeholder name. All forward numbers are estimates.)*

This folder is the complete seed fundraising package: narrative docs, a bottoms-up financial model, and the reproducible CSV data layer behind it. Start with the **one-pager**, then the **pitch-deck**, then **use-of-funds** and **financial-model** for depth.

---

## The headline ask (one coherent story)

**Seed: ~$2.0M ($1.5–2.5M band) / ~18 months to Series A readiness (~$1–3M ARR + proven marketplace liquidity).**

**Cumulative capital through Series A ≈ $5–9M** (see `financial-model.md`, by scenario) — this is the *cumulative* capital across seed + a planned Series A over the full 36-month model horizon, **not** the seed ask. The seed gets to Series A readiness; a planned Series A funds the growth-staffed opex over the back half that produces the higher cumulative figure. Capital-efficiency thesis: **Apify reached ~$25M ARR on ~$3M raised** — we raise to *accelerate* a structurally lean take-rate + infra-margin marketplace, not to subsidize one.

---

## Base-case financials (the default cited in the deck & one-pager)

Base scenario from `financial-model.md` §1 and `scenarios.csv` (take + infra + subscriptions; infra margin layered on top of the take rate):

| Metric | Y3 (2029) | Y5 (2031) |
|---|---|---|
| **GMV intermediated** | **~$93M** | **~$301M** |
| **Take-rate revenue** | $14.9M | $54.2M |
| **Total platform revenue** | **~$20M** | **~$69M** |
| **EBITDA** | **+$5.8M (EBITDA-positive)** | **+$30.4M** |
| Gross margin | ~81% | ~83% |

Series-A readiness (~$1–3M ARR) is reached in **Y2 (2028)** in the base case. Conservative and aggressive scenarios bracket this (~$24M / ~$531M Y5 GMV respectively); see the model for full ranges.

---

## Files in this package

| File | What it is |
|---|---|
| `README.md` | This index — package overview, headline ask, base-case financials, open questions. |
| `one-pager.md` | One-page investor summary: problem, solution, why-now, wedge, market, model, GTM, traction, financials, the ask. Best first read. |
| `pitch-deck.md` | 16-slide investor narrative (problem → solution → product → market → model → competition → moat → GTM → traction → financials → roadmap → team & ask → vision). |
| `use-of-funds.md` | How the ~$2.0M seed is allocated (~40% eng, ~20% GTM, ~15% supply, ~15% trust/evals, ~10% G&A) and mapped to the 18-month roadmap. |
| `financial-model.md` | Bottoms-up, two-sided-marketplace model write-up: methodology, revenue streams, cost/P&L logic, SOM reconciliation, assumptions to pressure-test. The narrative over the CSVs. |
| `model-assumptions.csv` | Every editable driver (low / base / high) with sources. The input layer. |
| `revenue-buildup.csv` | Bottoms-up revenue build, monthly M1–M36 + annual Y1–Y5, per scenario. |
| `pnl-and-cash.csv` | P&L + cash (monthly + annual) per scenario, with CASH SUMMARY blocks (implied cumulative raise per scenario). |
| `unit-economics.csv` | CAC, payback, LTV, contribution margin/run, blended take, GMV retention — per year per scenario. |
| `scenarios.csv` | Side-by-side headline metrics (conservative / base / aggressive) + reconciliation to research SOM. |
| `_build_model.py` | The "formula" layer — regenerates every CSV from `model-assumptions.csv`. Run `python3 _build_model.py` to reproduce all numbers. |

**Consistency note:** the seed ask (~$2.0M / 18 months) and the base-case headline numbers above are stated identically across `pitch-deck.md`, `one-pager.md`, `use-of-funds.md`, and `financial-model.md`. The model's larger cash figure is framed everywhere as *cumulative capital through Series A*, never as the seed.

---

## Open questions to pressure-test

The numbers above are credible but rest on a handful of assumptions that move the answer. Before/during the raise, validate:

1. **GMV sensitivity — avg GMV/run × runs/buyer.** These two multiply directly into GMV and are the least-anchored inputs (interpolated, not measured). If real run frequency is half, GMV roughly halves. Validate against early-cohort telemetry ASAP. (See `financial-model.md` §7.1.)
2. **Runtime build-vs-buy & per-run COGS.** Sandboxed, multi-tenant execution of untrusted agent code is the hardest, highest-COGS-risk component and underpins the infra margin (and the whole model). Land a defensible per-run cost. (See `use-of-funds.md` §5.2.)
3. **Durable supply beyond Apify migrants.** The Apify rental-sunset pool (Oct 2026) is real but finite and time-boxed. Size second/third durable supply sources (indie/micro-SaaS, agencies), not just the migration campaign.
4. **Naming finalization.** "The Dude" is a working placeholder — finalize the brand before the raise to avoid a distracting conversation in the room.
