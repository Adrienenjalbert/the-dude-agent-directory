# The Dude — Investor Pitch Deck

> **The universal marketplace for AI agents — "Apify × App Store for AI agents."**
> Publish any agent, get paid on every run. Hire any agent, trust it works.
>
> **Stage:** Pre-seed / Seed · **Date:** June 2026 · **Deck:** 16 slides
> **Live MVP:** https://adrienenjalbert.github.io/the-dude-agent-directory/ · **Repo:** Adrienenjalbert/the-dude-agent-directory
>
> *Headline financials reference `financial-model.md` (separate deliverable). Naming: "The Dude" is a working placeholder.*

---

## Slide 1 — Title

# The Dude
### The universal marketplace for AI agents

**Publish any agent → get paid on every run. Hire any agent → trust it works.**

The neutral, cross-vertical, usage-metered layer for the agent economy — *Apify × App Store for AI agents.*

- **Live MVP shipped:** https://adrienenjalbert.github.io/the-dude-agent-directory/
- Raising a lean **~$2.0M seed ($1.5–2.5M, ~18 months)** to seed supply, build the trust/eval moat, and own the open quadrant before incumbents extend into the long tail.

> **Speaker notes:** Open with the live demo, not slides — show the directory, an agent detail page, the publish flow. The one-liner does the work: *Apify for AI agents.* Investors instantly map it to a proven, capital-efficient marketplace. We're not raising to find out if people want this — the MVP is live and the category is forming now. Frame the ask in one breath: we want to own the empty top-right quadrant (open publishing + real usage payouts) for mainstream, cross-vertical agents.

---

## Slide 2 — The Problem (both sides are broken)

The agent economy is inflecting, but **the market is broken on both sides** — and nobody is fixing both.

**Builders can't get distributed or paid fairly**
- ~**0.07%** of indie devs ever reach $10K MRR — distribution is the #1 bottleneck.
- Walled gardens broke payouts: **GPT Store** rev-share never broadly launched (invite-only, US-only, ~$0.03/conversation, $100–500/mo ceiling, can't set prices).
- **Apify is sunsetting its rental model in 2026** → pure pay-per-usage → reported **40–70% revenue drops** for unmigrated builders.

**Buyers can't tell what actually works**
- **95% of enterprise AI pilots fail** to deliver expected returns (MIT); **>40%** of agentic projects projected canceled by 2027 (Gartner).
- Only **~2–17%** of agents reach real production vs. **62–72%** experimenting — a massive trust/ROI gap.

> **Speaker notes:** This is a two-sided pain slide — emphasize that every existing player solves at most one side. The 95% pilot-failure stat is the emotional core for the demand side; the 0.07% indie-dev stat is the supply side. The punchline: the gap between experimentation (~72%) and production (~17%) is simultaneously the biggest risk in the market AND our entire opportunity — we monetize closing it.

---

## Slide 3 — Why Now (a 12–24 month window just opened)

Four preconditions for a universal agent marketplace **all landed in 2025–2026** — none existed 18 months ago.

| Unlock | Evidence | Why it matters |
|---|---|---|
| **Standards matured** | MCP ~**97M** downloads, 5,000+ servers; A2A 100–150+ orgs; both Linux-Foundation-governed | Cross-vendor "any agent" marketplace is now *technically possible* |
| **Payment rails arrived** | AP2 (60+ orgs), ACP (OpenAI+Stripe), x402 (140M+ txns, ~$0.0001 fee) | True per-use rental + agent-to-agent settlement |
| **Models commoditized** | GPT-4 API down **>90%** in 18 mo | Value moved from the model to the **distribution/trust layer** |
| **Budgets shifting** | ~**40%** of IT budgets moving from SaaS seats → agentic platforms | Spend is moving into exactly the category we serve |

**Plus a recruitable supply shock:** Apify's rental sunset (fully retired Oct 1, 2026) creates a pool of **monetization-savvy, ready-to-move builders** — our cold-start fuel.

> **Speaker notes:** "Why now" is the most important slide for a marketplace pitch — it answers "why didn't this exist before, and why won't it be too late." Three years ago there was no MCP, no A2A, no agent payment rails. The window is **12–24 months** before Microsoft/Salesforce/Google extend down into the long tail. Speed + neutrality are the hedges. The Apify sunset is the cherry on top: a competitor is literally evicting our ideal first cohort of suppliers on a known date.

---

## Slide 4 — The Solution

**The Dude is a vendor-neutral, cross-vertical, usage-metered two-sided marketplace.** Anyone publishes an agent of any type and gets paid when others rent or run it.

We own the **run + billing + trust layer** — not just the listing — so we capture usage economics *and* solve the trust gap that kills adoption.

- **Supply:** one-click publish (any framework — LangChain, CrewAI, AutoGen, OpenAI SDK, custom), metered execution, automatic payouts, SEO listing from day one.
- **Demand:** discover → trial in 60 seconds → rent (pay-per-run, per-outcome, subscription, or hybrid) with verified performance and transparent, all-in pricing.
- **Trust as a product:** verified metrics, automated evals, tiered vetting, sandboxed execution.

> **Speaker notes:** The key distinction vs. directories: we don't just *list* agents, we *run and bill* them — that's where the economics and the moat live. Directories monetize backlinks; we monetize usage. Emphasize "bring any framework" — we're not forcing a runtime religion, which is exactly why a neutral layer wins. Trust-as-a-product is the line that separates us from GPT Store's quality flood.

---

## Slide 5 — Product (5 surfaces + a live MVP)

Five surfaces, one marketplace. **The MVP is live today** — proof we execute, not just plan.

| # | Surface | What it does |
|---|---|---|
| 1 | **Discovery & Directory** | Semantic search, categories, comparisons, trust signals; every agent = an SEO-optimized landing page |
| 2 | **Publishing & SDK** | Declarative manifest + TS/Python SDK; container or hosted code; MCP/A2A export; guided wizard w/ mandatory sandbox test |
| 3 | **Execution Runtime** | Sandboxed, multi-tenant, metered runs (sync/async/scheduled/standby); full observability |
| 4 | **Monetization & Payouts** | Flexible pricing (usage/outcome/subscription/hybrid), Stripe Connect payouts, MoR tax, transparent real-time cost |
| 5 | **Trust, Console & Governance** | Verified badges, evals, Apify-grade builder analytics, buyer spend dashboards, enterprise SSO/RBAC/audit |

**Live MVP:** https://adrienenjalbert.github.io/the-dude-agent-directory/ — directory, agent detail pages, and publish/hire flows are demoable now.

> **Speaker notes:** Walk the live MVP here in person — it de-risks the "can they build it" question that kills most seed decks. *(Asset note: the repo currently has no captured screenshot files in `docs/design/screens/`; demo the live URL directly or capture fresh screenshots from the live site before sending the deck. Do not embed placeholder images.)* The 5 surfaces map 1:1 to the PRD pillars (Discovery, Publishing/SDK, Runtime, Monetization, Trust/Console) — so this isn't vaporware framing, it's a spec we're already shipping against.

---

## Slide 6 — How It Works

Two loops, one flywheel.

**Publish → Earn (supply)**
1. Sign up → auto-segmented as builder (Apollo enrichment).
2. Package agent (manifest + SDK, any framework).
3. Set pricing (usage / outcome / subscription / hybrid).
4. Mandatory sandbox test + automated eval.
5. Publish → SEO listing generated → "new & promising" boost.
6. Buyers run → usage metered → **automatic monthly payout**.

**Hire → Trust (demand)**
1. Search → agent detail with **verified** success rate, latency, cost-per-outcome.
2. Run a **60-second demo** (free first run).
3. Rent / subscribe / pay-per-run → see real-time, all-in spend.
4. Review outputs, rate, repeat & expand.

**The flywheel:** more builders → more SEO pages rank → more buyers → more paid runs → more builder earnings → more builders.

> **Speaker notes:** This is the marketplace flywheel slide — investors need to see the compounding loop. The SEO engine is the secret weapon: every published agent is an indexable landing page (Apify got ~14× organic traffic in 4 years this way), so roadmap velocity = free distribution velocity. The 60-second demo directly attacks the trust gap from Slide 2.

---

## Slide 7 — Market (TAM / SAM / SOM)

We size by **GMV-of-agent-spend** (dollars flowing through *rentable* agents), then convert via a take rate. We deliberately anchor to the **standalone** agent market, not Gartner's $200B+ embedded number.

```
TAM  Rentable AI-agent spend (2030)          ~$50–55B   (standalone, 40%+ CAGR from ~$8B in 2025)
└─ SAM  3rd-party marketplace-distributed     ~$9–11B    (~18–22% of TAM)
   └─ SOM  Platform revenue (Yr 3–5)          ~$15–60M base / up to ~$155M aggressive
            = ~$90M (Y3) → $330–780M (Y5) GMV intermediated × 15–20% take rate
```

- **Demand inflecting:** 72% of enterprises using/testing agents; 84% increasing investment.
- **Supply exploding:** **>1M custom agents built per quarter** (+130% QoQ); IDC projects **1.3B agents** by ~2028.
- **Upside (not planning TAM):** Gartner's *embedded* agentic-AI spend ~$202B (2026) → ~$753B (2029).

> **Speaker notes:** Defend the conservatism — we anchor to the standalone ~$50–55B figure, not the headline $200B+, because embedded-in-SaaS spend doesn't flow through a third-party marketplace. That earns credibility. The SAM (~18–22% of TAM) and SOM capture (low single-digit % of SAM) are our assumptions, calibrated to app-store/freelance-marketplace dynamics. Detailed bottoms-up in `financial-model.md`. The supply explosion is the key marketplace signal: inventory is not the constraint — trust and distribution are.

---

## Slide 8 — Business Model

**Take rate on GMV + metered infrastructure margin** — the proven Apify engine, designed for agents.

| Stream | Description | When |
|---|---|---|
| **Marketplace take rate** | % of GMV on every paid run / rental / outcome (primary) | Day one |
| **Infrastructure margin** | Metered compute + inference + tool-call + storage markup | Day one |
| **Subscriptions** | Prepaid usage / feature tiers (free → pro → scale → enterprise) | Phase 1 |
| **Enterprise** | SSO/governance/private marketplace, SLAs | Phase 3 |
| **Value-added** | Featured placement, certification, premium analytics | Phase 2+ |
| **Agent-payment rails** | Optional fee on A2A / delegated (x402/AP2) | Phase 2/3 |

**The supply-magnet posture:**
- **Founding Builders:** ultra-low fee (~6–10%) to seed supply.
- **0%-to-traction honeymoon** → step to **~10–15%** standard take rate (Shopify/Atlassian playbook).
- **Pay creators on ALL paid usage** (closes Apify's free-user gap) — the recruiting wedge.

> **Speaker notes:** The strategic principle: be *visibly the most creator-generous credible marketplace*, and earn primarily via **volume + infra margin**, not a high headline cut. That's how we beat Apify's effective 20%+ and RapidAPI's resented 25% on the supply side while still making money on every run. Infra margin is layered *underneath* the take rate — so the creator's headline split stays attractive while we still capture value per run. This is the single most important slide for understanding durable economics.

---

## Slide 9 — Competition & Positioning

The market fractured into four camps — **each leaves the same gap open.**

| Player | What they are | The gap they leave |
|---|---|---|
| **Apify** ⭐ | Closest analog: open publish, 80/20, pay-per-event | Automation/scraping only; **retiring rentals** in 2026 |
| **GPT Store** | Huge distribution (700M+ ChatGPT users) | Creator payouts **broken/absent**; quality flood |
| **Salesforce AgentExchange** | 1,000+ agents, $50M builder fund | Enterprise-only, partner-gated; **excludes small buyers** |
| **Moltify / Relevance / Lindy** | "AI employee" / vertical platforms | First-party catalog or single-vertical; not an open economy |

**The empty quadrant** (openness of publishing × creator usage payouts):

```
       CREATOR EARNS ON USAGE ▲
   Apify (automation) ● │ ● GitHub (95/5, dev)   ★ OUR TARGET:
   Olas (crypto)      ● │ ● Olas (crypto)            open + usage payouts,
  ───────────────────────┼──────────────────────►    mainstream UX, cross-vertical
   Lindy/Sintra/Beam  ● │ ● GPT Store / directories  (the open top-right)
       CREATOR DOESN'T EARN ▼   OPEN / ANYONE PUBLISHES →
```

> **Speaker notes:** The whole pitch geometrically reduces to this 2×2. Every payout-paying marketplace is vertical-locked (Apify, GitHub, Olas); every open one has broken/absent creator economics (GPT Store, directories). **No mainstream, cross-vertical, prosumer agent marketplace exists in the open top-right.** Incumbents won't move there fast — they're structurally ecosystem-locked (OpenAI's Apps SDK even *bans* selling digital products in-app). That structural lock-in is our window.

---

## Slide 10 — Differentiation & Moat

We win on the four things incumbents structurally can't do well at once.

| Dimension | Status quo | The Dude |
|---|---|---|
| **Trust / evals** | Self-policed, quality flooding (GPT Store) | **Verified perf metrics + automated evals + tiered vetting** — mechanical & earned |
| **Creator economics** | Apify 80/20 (removing rentals); RapidAPI 25% tax | **0%-to-traction → ~10–15%**, pay on all usage, hybrid pricing |
| **UX / frontend** | Functional but dated | **World-class console + landing** (a real wedge in dev/business tools) |
| **Interoperability** | Walled gardens | **MCP/A2A-native, bring-any-framework**; A2A payments optional |

**Compounding moats:** (1) liquidity flywheel (supply ↔ demand), (2) product-led SEO content moat, (3) trust/eval data that competitors can't replicate without the runs, (4) switching costs from analytics + payout history.

> **Speaker notes:** A seed investor's #1 fear is "Microsoft/OpenAI builds this." The answer: they're ecosystem-locked and conflicted (they sell their own models/agents and restrict external payments), they ignore the long tail (Salesforce explicitly excludes small buyers), and the moat is data + liquidity they don't accumulate in our segment. Trust-as-data is the durable one: the more runs we meter, the better our verified evals get — a flywheel a latecomer can't shortcut.

---

## Slide 11 — Go-To-Market (solving cold-start)

A two-sided marketplace lives or dies on **liquidity**. We sequence supply → demand, then compound.

**Cold-start (seed supply first):**
- Recruit **25–50 hand-picked Founding Builders** in 2–3 hot categories (SDR/sales, support, research/data, marketing).
- **Target the Apify rental-sunset pool** directly: "Bring your agent, keep your subscription floor." Monetization-savvy, disgruntled, ready to move.
- Bring demand **only** into seeded, dense categories (>3 quality results/search).

**Three compounding engines:**
1. **Product-led SEO** — every agent = an indexable page (Apify's #1 engine).
2. **Apollo-powered outbound** — enrich-on-signup + segmented sequences for both sides from day one.
3. **Community + open SDK/Academy** — durable, low-cost developer funnel.

**Motion:** PLG self-serve by default; sales-assist on PQL signal.

> **Speaker notes:** The cold-start answer is the make-or-break for marketplace investors. We don't "build it and hope" — we seed supply manually, concentrate launch into 2–3 categories to guarantee density, and only then spend on demand. The Apify migration campaign is a concrete, time-boxed supply unlock most competitors can't replicate. Apollo gives us a day-one outbound engine instead of waiting for SEO to compound.

---

## Slide 12 — Traction & Proof

We've already converted research into a shipped product.

- **Live MVP shipped** — https://adrienenjalbert.github.io/the-dude-agent-directory/ — directory, agent detail pages, and publish/hire flows are demoable today. **Proof of execution.**
- **Deep research base** — validated market sizing, full competitive teardown (20+ players), reverse-engineered Apify playbook, GTM + Apollo integration design, risk register with solutions. The strategy is grounded, not guessed.
- **Clear ICP & wedge** — the open top-right quadrant + a recruitable Founding-Builder cohort with a known migration deadline.

**Near-term proof points we'll hit (next 2 quarters):** first 25–50 Founding Builders signed; private beta in 2–3 categories; first metered GMV.

> **Speaker notes:** At pre-seed/seed, traction = evidence of execution velocity and a credible path to liquidity. We lead with the live MVP (most planning-stage founders have nothing to click) and the depth of research (de-risks strategy). Be honest that revenue is ahead of us — the value is a built product + a defensible plan + an imminent supply unlock. Set expectation: the next milestone is *liquidity in lead categories*, not vanity signups.

---

## Slide 13 — Financials (headline scenarios)

Platform revenue = **GMV × take rate + infra margin.** *(Detail & scenario CSVs in `financial-model.md`; figures below are the **base scenario** unless noted.)*

| Scenario | Year | GMV intermediated | Total platform revenue | EBITDA |
|---|---|---|---|---|
| **Base** | **Y3 (~2029)** | **~$93M** | **~$20M** ($14.9M take + infra + subs) | **+$5.8M (EBITDA-positive)** |
| **Base** | **Y5 (~2031)** | **~$301M** | **~$69M** ($54.2M take + infra + subs) | **+$30.4M** |
| Conservative | Y3 (~2029) | ~$24M | ~$4.8M | −$3.6M |
| Aggressive | Y5 (~2031) | ~$531M | ~$134M | +$71.6M |

*(All figures match the base/conservative/aggressive columns in `financial-model.md` §1 and `scenarios.csv`. Take rate ramps from a 0%-to-traction honeymoon to a mature 15–20%; infra margin is layered on top.)*

**Capital-efficiency thesis:** **Apify reached ~$25M ARR on ~$3M raised.** A take-rate + infra-margin marketplace is structurally capital-efficient — we raise to *accelerate*, not to *subsidize*. **Seed: ~$2.0M / 18 months to Series A readiness; cumulative capital through Series A ≈ $5–9M (see `financial-model.md`, by scenario).**

> **Speaker notes:** Two messages. (1) The revenue scenarios are scaffolding off the market research, ramping GMV capture of a fast-growing SAM — **base case ~$20M total platform revenue by Y3 (~$93M GMV), ~$69M by Y5 (~$301M GMV), EBITDA-positive in Y3.** (2) The capital-efficiency precedent is the differentiator vs. the model-layer arms race: while three labs raised $172B in Q1 2026, Apify proves you can build a $25M ARR marketplace on $3M. That's a *different, fundable story* — real take-rate revenue and liquidity, not a GPU burn. If asked about the model's higher ~$5–9M cash figure: that's *cumulative capital through Series A* over 36 months, not the seed — the seed is a lean ~$2.0M to reach the Series A bar. Point to `financial-model.md` for the bottoms-up build.

---

## Slide 14 — Roadmap & Milestones (18 months to Series A)

| Quarter | Milestone | Unlocks |
|---|---|---|
| **Q1** | Core runtime + SDK + Stripe Connect + listing pages; recruit 25–50 Founding Builders | Buildable supply |
| **Q2** | Private beta in 2–3 categories; Apollo enrich-on-signup; builder analytics | Activated supply |
| **Q3** | Public MVP launch; product-led SEO live; demand activation | **First GMV** |
| **Q4** | Verified badges + evals; deliverability layer; liquidity in lead categories | Trust moat + liquidity |
| **Q5** | A2A/MCP discovery; hybrid pricing; expand categories | **Series A readiness** ($1–3M ARR / liquidity) |
| **Q6** | Enterprise governance pilots; outcome-based billing; scale both sides | Enterprise pull |

**Series A bar (2026):** ~**$1–3M ARR + proven marketplace liquidity / autonomous task completion.**

> **Speaker notes:** This maps the seed money to concrete, dated outcomes. The North Star is GMV (and liquidity), so the milestones are sequenced around it: build → seed supply → first GMV → trust/liquidity → Series A. Be explicit that the seed round funds Q1–Q4 with margin to hit the Series A bar in Q5. The use-of-funds slide ties dollars to these milestones.

---

## Slide 15 — Team & The Ask

**Raising: ~$2.0M seed ($1.5–2.5M band) to reach Series A readiness in ~18 months.**

> **Seed: ~$2.0M / 18 months to Series A readiness; cumulative capital through Series A ≈ $5–9M (see `financial-model.md`, by scenario).** The seed is the headline ask; the ~$5–9M in the model is *cumulative* capital across seed + a planned Series A over the full 36-month horizon, not the seed.

**Use of funds (high level — detail in `use-of-funds.md`):**

| Category | ~% | What it unlocks |
|---|---|---|
| **Engineering** (runtime + frontend) | ~40% | Sandboxed metered runtime, SDK, world-class console (the wedge) |
| **Supply seeding** (Founding Builders) | ~15% | 25–50 builders incl. Apify migrants; liquidity in lead categories |
| **Trust & evals** | ~15% | Verified metrics, automated evals — the moat |
| **GTM** (Apollo + SEO + community) | ~20% | Day-one outbound + compounding SEO + Academy |
| **G&A & compliance** | ~10% | MoR/payouts, EU AI Act-aware governance, legal/finance |

**Capital-efficiency thesis:** we raise to *accelerate* a structurally lean take-rate business — Apify did ~$25M ARR on ~$3M.

> **Speaker notes:** State the number clearly and tie it to the 18-month roadmap and the Series A bar. The 40% engineering weighting reflects that the runtime + frontend are the product *and* the differentiator. Emphasize the round is deliberately lean — consistent with the capital-efficiency thesis — and that we're raising to compress the 12–24 month window, not to discover product-market fit (the MVP is live). Insert real founder/team bios here.

---

## Slide 16 — Vision & Close

### The agent economy needs a neutral marketplace. We're building it.

- Today: humans hiring agents that actually work, builders earning fairly on every run.
- Tomorrow: **agents renting agents** — autonomous A2A transactions over MCP/A2A + x402/AP2 rails, with trust, identity, and payouts as infrastructure.

We are the **run + billing + trust layer** for a world heading toward **1.3B agents in circulation.** The standards, the rails, the supply shock, and the budget shift all arrived at once — and the open quadrant is still empty.

**The window is 12–24 months. Let's own it.**

**Live MVP:** https://adrienenjalbert.github.io/the-dude-agent-directory/

> **Speaker notes:** End on the expansive vision (agents renting agents) but land back on the concrete, defensible wedge (the open quadrant + the now). The closing ask is urgency-driven: the preconditions converged, the incumbents are locked out of our segment, and we already shipped. Restate the round size and invite the next conversation. Leave the live MVP on screen.

---

## Appendix — Founder pressure-test (things to firm up before the room)

1. **Take rate vs. infra margin split** — the deck implies most durable margin comes from infra markup *under* a low take rate. The bottoms-up `financial-model.md` must prove infra margin is real and defensible (cost of sandbox + inference vs. price), or the "creator-generous + still profitable" story wobbles.
2. **Cold-start dependency on Apify migrants** — the migration pool is real but finite and time-boxed (Oct 2026). Have a second and third durable supply source (indie/micro-SaaS, agencies) sized, not just named.
3. **Runtime build-vs-buy & unit cost** — sandboxed multi-tenant execution of untrusted code is the hardest, most expensive part. Land a defensible per-run COGS number; it underpins the whole financial model.
4. **"Why won't OpenAI/Microsoft do this"** — strong structural answer (ecosystem lock-in, channel conflict, long-tail neglect), but expect it twice. Prepare the crisp version.
5. **GMV credibility at Y3 (~$90M base)** — needs a believable per-category liquidity build (agents × runs × price). Make sure the model's GMV ladder is bottoms-up, not just SAM × capture %.
6. **Trust/eval cost** — automated evals per category are a real, recurring cost and an operational lift. Confirm the 15% trust allocation actually covers continuous eval + drift detection at launch scale.
7. **Naming/brand** — "The Dude" is a placeholder; finalize before the raise to avoid a distracting conversation in the room.
8. **Screenshots** — capture real screenshots from the live MVP and embed them in Slide 5 before sending; do not ship with placeholders.
