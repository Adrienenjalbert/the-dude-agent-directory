# Business Plan & Business Model
## The Dude — Universal AI Agent Marketplace & Rental Platform

> **Version:** 1.0 (Draft) · **Date:** June 2026 · **Status:** For review
> **Supporting evidence:** `../01-research/market-research.md`, `competitive-landscape.md`, `apify-deep-dive.md`

---

## 1. Executive Summary

**The Dude** is a vendor-neutral, cross-vertical, usage-metered marketplace where anyone can publish an AI agent of any type and get paid when others rent or run it — the "Apify × App Store for AI agents," but designed natively for agents and for trust.

- **The opportunity:** The standalone AI agents market is ~$7.8B (2025), growing 40%+ CAGR to ~$50–53B by 2030. Marketplace-addressable spend (SAM) reaches ~$9–11B by 2030. Demand is inflecting (72–84% of enterprises investing) while supply is exploding (>1M agents built/quarter).
- **The wedge:** No one owns the **neutral, cross-vertical, creator-monetized** position. Walled gardens have broken creator payouts (GPT Store), incumbents are ecosystem-locked (Salesforce, Microsoft, Apify), and directories don't meter usage or pay creators. We own the **run + billing + trust** layer for the **SMB / prosumer / long-tail** segment incumbents ignore.
- **The model:** Two-sided marketplace. Revenue from a **take rate on GMV** (agent runs/rentals) plus metered infrastructure margin, plus future enterprise/SaaS and value-added services.
- **Why now:** Interop standards matured (MCP, A2A), payment rails arrived (AP2, ACP, x402), models commoditized (value moved to the distribution/trust layer), and **Apify is sunsetting its rental model in 2026 — creating a recruitable pool of monetization-savvy builders.** ~12–24 month window before incumbents extend into the long tail.
- **Capital efficiency precedent:** Apify reached ~$25M ARR on ~$3M raised. A capital-efficient, take-rate business is achievable.
- **Financial shape:** Modeled SOM ~$15–60M platform revenue by Year 3–5 (base), up to ~$110–155M aggressive, on ~$90M–$780M GMV intermediated at a 15–20% take rate.

---

## 2. Company & Vision

**Mission:** Become the trusted, neutral marketplace that powers the agent economy — where every builder can earn fairly and every business can hire an agent that actually works.

**Vision:** The default "App Store layer" for AI agents across all verticals, with the trust, billing, and interoperability infrastructure the ecosystem needs — including agents transacting with other agents.

**Naming note:** "The Dude" is a working placeholder. Candidate directions: a neutral, memorable, brandable name evoking trust + agents + marketplace (to be finalized; see growth doc for brand considerations).

---

## 3. Market Analysis (summary)

*Full detail and sources in `../01-research/market-research.md`.*

### 3.1 Sizing

| Lens | 2026 | 2030 |
|---|---|---|
| Standalone AI agents market (TAM) | ~$10–11B | ~$50–55B |
| Marketplace-addressable (SAM, ~15–22% of TAM) | ~$1.5B | ~$9–11B |
| Our platform revenue (SOM, Yr3–5) | — | ~$15–60M base / up to ~$155M aggressive |

(Gartner's *embedded* agentic-AI spend is ~$202B in 2026 → ~$753B by 2029, but only a fraction is marketplace-addressable — treated as upside, not planning TAM.)

### 3.2 Demand & supply signals
- **Demand:** 72% of enterprises using/testing agents; 84% plan to increase investment; SMB AI spend ~$18.4K/yr, mid-market ~$127K/yr, enterprise ~$1.4M/yr. But only ~2–17% in production → huge latent demand gated by trust/ROI.
- **Supply:** >1M custom agents built/quarter; micro-SaaS market $15.7B→$59.6B; 1.57B global freelancers; AI/ML is the highest-paying freelance field. Distribution is builders' #1 problem.

### 3.3 Timing ("Why now")
Standards (MCP ~97M downloads, A2A 100+ orgs), payment rails (AP2/ACP/x402), model commoditization (GPT-4 API −90%), budget shift (~40% of IT budget moving from SaaS seats to agentic platforms), and the Apify rental sunset together open a **12–24 month window**.

---

## 4. Competitive Positioning

*Full detail in `../01-research/competitive-landscape.md`.*

### 4.1 The gap we own
Two axes — **openness of publishing** × **creator monetization on usage** — reveal the top-right quadrant (open + usage payouts) is sparsely populated and **no mainstream, cross-vertical, prosumer agent marketplace exists** there. Apify (automation), GitHub (dev), Olas (crypto) occupy adjacent niches.

### 4.2 Differentiation

| Dimension | Status quo | The Dude |
|---|---|---|
| Vertical scope | Locked (Apify/Salesforce/GitHub) | **Universal, cross-vertical** |
| Creator payouts | Broken (GPT Store) / absent (directories) / crypto-only (Olas) | **Real usage payouts, mainstream UX** |
| Economics | Apify 80/20 (removing rentals); RapidAPI 25% "tax" | **Creator-generous: 0%-to-traction → competitive split** |
| Pricing models | Often single | **Usage / outcome / subscription / hybrid — builder's choice** |
| Trust | Self-policed, flooding | **Verified perf metrics, evals, tiered vetting, SLAs** |
| UX/frontend | Functional/dated | **World-class** |
| Onboarding/GTM | Inbound/manual | **Apollo-enriched + outbound from day one** |
| Interop | Walled | **MCP/A2A-native; A2A payments optional** |

### 4.3 Pitfalls we explicitly avoid
Broken/opaque monetization (let creators set prices, publish the formula), credit-model backlash (usage metering + real-time cost), low-quality flooding (anti-spam + tiered vetting), over-taxing creators (≤15–20% + honeymoon), enterprise-only gating (serve the long tail).

---

## 5. Business Model

### 5.1 How we make money (revenue streams)

| # | Stream | Description | When |
|---|---|---|---|
| 1 | **Marketplace take rate** | % of GMV on every paid run/rental/outcome. Primary stream. | Day one |
| 2 | **Infrastructure margin** | Metered compute + inference + tool-call + storage markup on runs (Apify's hidden margin engine). | Day one |
| 3 | **Subscriptions (platform plans)** | Prepaid usage / feature tiers for buyers & builders (free → pro → scale → enterprise). | Phase 1 |
| 4 | **Enterprise** | SSO/governance/private marketplace, SLAs, dedicated support, custom terms. | Phase 3 |
| 5 | **Value-added services** | Featured placement/promotion, certification/verification fees, premium analytics, white-label. | Phase 2+ |
| 6 | **Agent-payment rails** | Optional fee on A2A / delegated transactions (x402/AP2). | Phase 2/3 |

### 5.2 Take-rate strategy (the supply magnet)

Learning from the research: GitHub (95/5) is most generous; Shopify/Atlassian use **0% to first $1M lifetime → ~15%**; Apify is 80/20 (and removing rentals); RapidAPI's 25% is resented.

**Recommended posture:**
- **Founding Builders:** ultra-low fee (e.g., 6–10%) for an initial cohort/period to seed supply (mirrors Moltify's "6% for 6 months" and Shopify's honeymoon).
- **Standard:** **~10–15% take rate** on GMV — beating Apify's effective 20%+ and RapidAPI's 25%, competitive with the best app stores.
- **0%-to-traction honeymoon:** consider 0% until a creator reaches a lifetime revenue threshold, then step to the standard rate (Shopify/Atlassian playbook) — strongest supply-side acquisition lever.
- **Close Apify's free-user payout gap:** pay creators on **all paid usage**; be transparent with a published formula.
- **Infrastructure margin** is layered on top of the take rate (so headline creator split stays attractive while we still earn on every run).

> Exact numbers require the financial model (§8). The strategic principle: **be visibly the most creator-generous credible marketplace**, and earn primarily via volume + infra margin rather than a high headline cut.

### 5.3 Pricing for buyers
- **Transparent, all-in, predictable** pricing (avoid Apify's confusing layered costs).
- Support **usage, outcome, and subscription/rental** — matching the market's shift to usage/outcome pricing.
- **Free tier / first-run incentive** to drive demand activation.
- **No opaque credits** (avoid Lindy-style backlash); real-time cost display.

### 5.4 Unit economics (framework)
- **GMV per run** × **take rate** = marketplace revenue; **+ infra margin per run**.
- Key levers: GMV growth (liquidity), take rate, infra gross margin, payment/processing costs, payout/MoR fees, CAC (Apollo-driven outbound + product-led SEO), retention/repeat usage.
- Target a **blended contribution margin** that improves with scale as infra costs amortize and CU-style volume discounts kick in.

---

## 6. Go-To-Market (summary)

*Full plan in `../05-growth/gtm-strategy.md`.*

- **Cold-start solution:** seed supply first (Founding Builders program), recruiting from the **Apify rental-sunset pool** and indie/agency/AI-startup communities; then bring demand into categories where supply is dense.
- **Product-led SEO:** every published agent = an indexable landing page (Apify's #1 growth engine; ~14× organic traffic in 4 years).
- **Apollo-powered outbound:** enrich-on-signup + segmented sequences for both supply and demand from day one.
- **Open-source / developer community + Academy** as a durable top-of-funnel (Crawlee/Academy analog).
- **PLG + sales-assist hybrid:** self-serve default; human touch on PQL signals.

---

## 7. Operations (summary)

*Full plan in `../06-operations/operations-strategy.md`.*

- **Trust & safety:** tiered vetting, automated evals, dispute resolution, anti-spam — the operational moat.
- **Payouts & finance:** automated monthly payouts (Stripe Connect), MoR for global tax, fraud controls.
- **Support:** self-serve docs/Academy + tiered support by plan.
- **Marketplace health:** liquidity, density, activation, retention dashboards.

---

## 8. Financial Plan (framework & scenarios)

> Numbers below are **modeling scaffolding** derived from the market research; a detailed bottoms-up model is a follow-up deliverable.

### 8.1 Revenue scenarios (platform revenue = GMV × take rate + infra margin)

| Scenario | Year | GMV intermediated | Take rate | Platform revenue (approx.) |
|---|---|---|---|---|
| Conservative | Y3 (~2029) | ~$30M | 15% | ~$4.5M |
| Base | Y3 (~2029) | ~$90M | 15–18% | ~$14–16M |
| Base | Y5 (~2031) | ~$330M | 18% | ~$60M |
| Aggressive | Y5 (~2031) | ~$550M | 20% | ~$110M |

(Infra margin adds incremental revenue on top of take-rate figures.)

### 8.2 Cost structure (major buckets)
- **COGS:** compute/inference/sandbox infra, payment processing, payouts/MoR fees, proxy/storage/data transfer.
- **R&D:** engineering (runtime, marketplace, console, SDK), product, design (frontend is a priority investment).
- **GTM:** Apollo + deliverability tooling, content/SEO, community/Academy, sales-assist.
- **G&A:** trust & safety ops, compliance (EU AI Act), finance, legal.

### 8.3 Capital efficiency thesis
Apify's ~$25M ARR on ~$3M raised proves the take-rate + infra-margin model is capital-efficient. We assume a **lean, two-sided, take-rate-from-day-one** approach, raising primarily to (a) accelerate supply seeding, (b) build the trust/eval moat, and (c) fund the frontend + runtime engineering.

### 8.4 Funding
- **Pre-seed/Seed:** fund Phase 0–1 (core build, supply seeding, MVP launch). Series A bar (2026) ≈ **$1–3M ARR + proven autonomous task completion / marketplace liquidity**.
- Position against the funding-concentration risk (mega-rounds favor model labs) by demonstrating **real take-rate revenue and liquidity** early — a different, capital-efficient story than the model-layer arms race.

---

## 9. Risks (summary)

*Full register + reverse-engineered solutions in `risks-and-solutions.md`.*

Top risks: pilot-failure/ROI gap (→ verified/benchmarked agents), trust/reliability (→ evals, SLAs, sandboxing), security/fraud (→ identity, policy engine, audit), big-platform competition (→ neutrality + superior creator economics + long-tail focus), regulation/EU AI Act (→ governance-aware architecture), cold-start (→ seed supply + curation), capital concentration (→ capital-efficient take-rate model).

---

## 10. Milestones (18-month view)

| Quarter | Milestone |
|---|---|
| Q1 | Core runtime + SDK + Stripe Connect + listing pages; recruit 25–50 Founding Builders |
| Q2 | Private beta in 2–3 categories; Apollo enrich-on-signup; builder analytics |
| Q3 | Public MVP launch; product-led SEO live; demand activation; first GMV |
| Q4 | Verified badges + evals; deliverability layer; reach liquidity in lead categories |
| Q5 | A2A/MCP discovery; hybrid pricing; expand categories; Series A readiness ($1–3M ARR / liquidity) |
| Q6 | Enterprise governance pilots; outcome-based billing; scale supply + demand |

---

*This plan is a living document; revisit quarterly against actuals and the market research.*
