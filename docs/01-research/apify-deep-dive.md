# Apify Deep Dive — Reverse-Engineering the "Apify for AI Agents" Playbook

> **Purpose:** Reverse-engineer how Apify (apify.com) is built, monetized, and grown, so we can model our own **AI agent marketplace & rental platform** ("Apify for AI agents") after it.
>
> **Date of research:** June 2026
> **Author:** Market & business-model research analyst (subagent)
> **Status:** Confirmed facts cited to source URLs; estimates explicitly flagged as `[ESTIMATE]` or `[UNVERIFIED]`.

---

## 0. Executive snapshot

Apify is a Prague-based, **bootstrapped** "full-stack platform for web scraping, browser automation, and AI data tools." Its core primitive is the **Actor** — a serverless, containerized cloud program. Developers build Actors, publish them to the **Apify Store** (24,000+ public Actors as of mid-2026), and earn **80% of revenue** while Apify keeps a **20% commission** plus underlying platform usage margin. Apify reports **~$25M ARR**, **~160 employees**, **15,000+ customers**, and **~40,000 active developers** — built on only ~$3M of total funding.

The company is mid-pivot from "web scraping platform" to **"data & tool infrastructure for AI agents"** — shipping an MCP server exposing thousands of Actors as agent tools, and agentic payment rails (x402/USDC, Skyfire). This pivot, plus the **sunset of the flat-rate "rental" model (fully retired Oct 1, 2026)** in favor of usage-based **Pay-Per-Event**, defines both the opportunity and the friction we can exploit.

---

## 1. Business model — how Apify makes money

Apify runs a **two-sided, usage-metered marketplace** with three overlapping revenue streams:

### 1.1 Revenue streams

| Stream | Description | Who pays |
|---|---|---|
| **Platform subscriptions + usage** | Monthly plan fee = prepaid "platform usage credits." Overage billed pay-as-you-go. | End customers (data buyers / Actor users) |
| **Marketplace commission** | Apify keeps **20%** of all paid-Actor revenue (developers keep 80%). | Taken from Actor developers' gross |
| **Infrastructure margin** | Proxies (residential/datacenter/SERP), storage, data transfer, compute — all marked up and metered. | End customers; partially passed to developers |

The genius is that **all three streams are denominated in the same metering currency** — *platform usage credits* — measured primarily in **Compute Units (CU)**.

> **1 CU = 1 GB of RAM running for 1 hour.** `CU cost = (memory in GB) × (runtime in hours)`. Most scraping runs consume 0.01–0.5 CU.
> Source: <https://docs.apify.com/platform/actors/publishing/monetize/pricing-and-costs>, <https://use-apify.com/docs/what-is-apify/apify-pricing>

### 1.2 Pricing tiers (confirmed, June 2026)

| Plan | Monthly | Annual (per mo) | Prepaid usage / mo | CU price | Max RAM | Max concurrent runs | Store discount tier | Support |
|---|---|---|---|---|---|---|---|---|
| **Free** | $0 | $0 | $5 | $0.20 / CU | 8 GB | 25 | None (FREE) | Community |
| **Starter** | $29 | $26 | $29 | $0.20 / CU | 32 GB | 32 | Bronze | Chat |
| **Scale** | $199 | $179 | $199 | $0.16 / CU | 128 GB | 128 | Silver | Priority chat + 1 hr/qtr training |
| **Business** | $999 | $899 | $999 | $0.13 / CU | 256 GB | 256 | Gold | Account manager + 1 hr/mo training |
| **Enterprise** | Custom | Custom | Custom | Custom | Custom | Custom | Platinum / Diamond | SSO, SLAs, dedicated team |

Source: <https://apify.com/pricing>, <https://data.tansohq.com/c/apify> (verified May 2026)

**Key mechanics:**
- The monthly fee is **essentially prepaid credits**, not a pure license. $29/mo Starter gives you $29 of usage.
- **Unused credits expire** at end of billing cycle — **no rollover**. (Strong margin lever — customers routinely under-consume prepaid balances.)
- **Free plan is hard-capped:** when the $5 is exhausted, access is **blocked** until next cycle (no overage). Paid plans allow overage billing.
- **CU price decreases with tier** ($0.20 → $0.13) — volume discount that also raises switching costs.
- Higher tiers also unlock **cheaper proxies and storage** and **Store discounts** (Bronze/Silver/Gold) on third-party paid Actors.

### 1.3 Proxy & infrastructure pricing (the hidden margin engine)

| Service | Free / Bronze | Silver | Gold |
|---|---|---|---|
| Compute unit (per CU) | $0.20 | $0.16 | $0.13 |
| Residential proxies (per GB) | $8 | $7.5 | $7 |
| SERP proxy (per 1,000 SERPs) | $2.5 | $2 | $1.7 |
| Datacenter proxy | from $1/IP (Starter) | from $0.8/IP | from $0.6/IP |
| Data transfer – external (per GB) | $0.20 | $0.19 | $0.18 |
| Data transfer – internal (per GB) | $0.05 | $0.045 | $0.04 |
| Dataset writes (per 1,000) | $0.005 | $0.0045 | $0.004 |
| Key-value store writes (per 1,000) | $0.05 | $0.045 | $0.04 |
| Request queue writes (per 1,000) | $0.01 | $0.009 | $0.008 |

Source: <https://docs.apify.com/platform/actors/publishing/monetize/pricing-and-costs>, <https://apify.com/pricing>

### 1.4 Add-ons & discounts

- **Add-ons:** concurrent runs ($5/run), Actor RAM ($1/GB), datacenter proxy (from $0.60/IP), priority support ($100), personal training ($150/hr). Source: <https://apify.com/pricing>
- **Discounts:** startups 30% off Scale; students 30% off Starter/Scale; nonprofits personalized. Source: <https://apify.com/pricing>

> **Takeaway for us:** Apify's moat isn't the subscription — it's the **metered infrastructure underneath every transaction**. Compute, proxy, storage, and data-transfer markups compound on *every* Actor run, on top of the 20% marketplace cut. For an AI-agent marketplace, the analog is **metered inference/compute + tool-call execution + memory/storage** as the universal billing currency.

---

## 2. The Apify Store marketplace

### 2.1 What the Store is

- The **world's largest marketplace of web-scraping / automation / AI tools**: **24,000+ public Actors** (mid-2026), up from ~6,000 (early 2025) and ~10,000 (2025). Most are built by **community developers**, not Apify.
- Every Actor gets a **dedicated, SEO-optimized landing page** with README docs, pricing, ratings, install/user counts, and last-updated stamps.
- Sources: <https://apify.com/extractmaster01/apify-store-scraper/api/mcp>, <https://blog.apify.com/configure-mcp-server-with-apify-actors/>, <https://docs.apify.com/academy/build-and-publish/why>

### 2.2 How developers publish (the funnel)

1. **Develop** — build with Apify SDK (JS/Python), Crawlee, or Actor templates; or any containerized code via Dockerfile.
2. **Publish** — set display info, description, README, input/output schema, and monetization in **Apify Console → My Actors → Publication**.
3. **Test** — automated/manual tests for reliability (feeds quality score).
4. **Promote** — SEO READMEs, Reddit/Quora/social, tutorials, Product Hunt.

Source: <https://docs.apify.com/academy/build-and-publish/why>, <https://docs.apify.com/platform/actors/publishing/monetize>

### 2.3 Monetization / pricing models available to developers

| Model | How it works | Developer take | Status |
|---|---|---|---|
| **Free** | No charge; users only pay their own platform usage. | $0 | Active |
| **Pay-per-event (PPE)** | Developer triggers billable events in code via `Actor.charge({ eventName, count })`. Any custom event can be priced. | **80% of revenue − platform costs** (configurable who pays platform costs) | **Active / preferred** — AI/MCP compatible, priority placement |
| **Pay-per-result (PPR)** | Flat price per 1,000 dataset items; users don't pay platform usage separately. | **80% of revenue − platform costs** | Active (older; PPE more flexible) |
| **Pay-per-usage (PPU)** | Users pay only platform usage; developer gets a fixed small share of what's left. | Low (often **$0.003–$0.02 net/run** on scraping) | Active — also the **auto-migration fallback** |
| **Monthly Rental** | Flat $X/mo per user after a free trial; users also pay platform usage. | **80% of monthly fees** (capped, no usage scaling) | **DEPRECATED** — no new rentals since Apr 1, 2026; fully retired Oct 1, 2026 |

Sources: <https://docs.apify.com/platform/actors/publishing/monetize>, <https://docs.apify.com/platform/actors/publishing/monetize/pay-per-event>, <https://docs.apify.com/platform/actors/publishing/monetize/rental>, <https://docs.apify.com/legal/store-publishing-terms-and-conditions>

### 2.4 The revenue-share math (CONFIRMED, with worked examples)

**Headline rule:** Developer earns **80%** of paid-user revenue; Apify keeps **20%**. For PPE/PPR, the developer's 80% is **further reduced by platform usage cost** of the runs (if the developer chose to absorb it).

> **PPE profit formula:** `profit = (0.8 × revenue) − platform_costs`
> Source: <https://docs.apify.com/platform/actors/publishing/monetize/pay-per-event>

**Worked example 1 (from Apify T&Cs):** Actor priced at $5 / 1,000 events; one paying user runs 1,000 events; platform cost $0.50 absorbed by developer.
`Payout = (0.8 × $5) − $0.50 = $3.50`
Source: <https://docs.apify.com/legal/store-publishing-terms-and-conditions> §10.2

**Worked example 2 (PPE, multi-user, from docs):** 3 users (2 paid, 1 free). Only paid users count.
- Revenue (paid only): $20 + $11 = **$31**
- Platform cost (paid only): $2.50 + $1.50 = **$4**
- **Profit = 0.8 × $31 − $4 = $20.80**
Source: <https://docs.apify.com/platform/actors/publishing/monetize/pay-per-event>

### 2.5 Payout mechanics (CONFIRMED)

- **Invoices auto-generated on the 11th** of each month for the prior month's profits across all Actors.
- Developer has **3 days to review/approve/dispute**; auto-approved on the **14th**; funds disbursed shortly after.
- **Minimum payout thresholds:** **$20 (PayPal)** or **$100 (other methods)**; below threshold, balance **rolls over** to next month.
- **Negative-profit protection:** if a PPE Actor's price doesn't cover its platform cost, Apify sets that Actor's profit to **$0** (a single Actor's loss never reduces total payout).
- **Only paying customers count** — runs by Apify free-plan users generate **$0** to the developer; Apify keeps that value as platform credit.
- **Change-control:** major monetization changes (raise prices, change model, add events) require a **14-day notice** and are limited to **once per month**; price *decreases* take effect immediately.

Sources: <https://docs.apify.com/platform/actors/publishing/monetize>, <https://godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026/>

### 2.6 Quality, ratings & discovery

- Every listing publicly shows **monthly users, runs, ratings (★/5), review count, pricing, and last-updated** — unusually transparent (a "competitive-intelligence goldmine," per Apify's own Academy).
- **Quality score** factors in: run success rate, README quality, whether platform costs are hidden from users (hiding them *lowers* the score), and freshness. High performers cluster at **4.5★+** with high install counts.
- **Store search ranking** factors: number of users, runs, recency, and rating → **strong cold-start disadvantage** for new Actors.
- AI-readiness is now scored: an **"Actor Scoring for AI Agents"** tool rates Actors across ~17 heuristics.
- Sources: <https://docs.apify.com/academy/build-and-publish/actor-ideas/actor-validation>, <https://blog.apify.com/configure-mcp-server-with-apify-actors/>, <https://dev.to/agenthustler/i-published-10-web-scrapers-on-apify-in-2-weeks-heres-what-actually-happened-540h>

---

## 3. Platform architecture (conceptual)

### 3.1 The Actor model

An **Actor** is a **serverless, containerized cloud program**:
- Takes **structured JSON input**, performs a task, optionally produces **structured output**.
- Packaged as: a **Dockerfile** (source + build + run), **README.md**, **input/output schemas**, metadata (name, description, author, version), and access to built-in storage.
- Run **manually (Console), via API, CLI, or scheduler**; Actors can **call each other** to compose larger systems.
- Can run for seconds, hours, or indefinitely (e.g., **Standby Actors** for always-on services).
- Sources: <https://docs.apify.com/platform/actors>, <https://crawlee.dev/js/docs/deployment/apify-platform>

### 3.2 Storage primitives (managed, metered)

| Primitive | Purpose | Format |
|---|---|---|
| **Dataset** | Append-only structured results (rows) | List of JSON objects |
| **Key-value store** | Arbitrary files/blobs + run state; `INPUT` key holds run config | Key → record (JSON, PNG, HTML, PDF…) |
| **Request queue** | Deduplicated URL frontier for crawls; supports resume-after-crash | Deduplicated request objects |

- **Named storage persists indefinitely; unnamed storage** follows the plan retention window (Free keeps only the **10 most recent runs**, up to ~4 months).
- Accessible via Console, REST API, API clients, and SDKs. Datasets/KV stores support concurrent multi-Actor read/write; request queues are single-writer-run.
- Sources: <https://docs.apify.com/platform/storage/usage>, <https://use-apify.com/docs/what-is-apify/apify-storage-guide>

### 3.3 SDK, CLI & developer experience

- **Apify SDK** (JS/TS + Python): lifecycle (`Actor.init`), data (`Actor.pushData`/`push_data`), input (`Actor.get_input`), billing (`Actor.charge`), local storage, events. Any containerized code can be an Actor.
- **Crawlee** (open-source, formerly "Apify SDK"): the crawling/scraping engine (Playwright/Puppeteer/Cheerio, anti-blocking, fingerprinting). **Platform-agnostic** but optimized for Apify deploy.
- **Apify Console** (console.apify.com): web UI for runs, storage, scheduling, monetization, analytics; includes an **in-browser code editor**.
- **Apify API + webhooks + scheduler** for orchestration.
- Sources: <https://docs.apify.com/sdk>, <https://crawlee.dev/js/docs/deployment/apify-platform>

### 3.4 Infrastructure & integrations

- Managed **proxy infrastructure** (residential, datacenter, SERP), CAPTCHA handling, headless browsers, autoscaling, scheduling — all abstracted away from the developer.
- **99.95% uptime**; **SOC 2 Type II, GDPR, CCPA** compliant; customers include **Intercom** and the **European Commission**.
- Integrations: Zapier, Make, LangChain, LlamaIndex, CrewAI, Hugging Face, n8n.
- **AI-native layer:** an **MCP server at `mcp.apify.com`** exposes thousands of Actors as agent tools (`search-actors`, `fetch-actor-details`, run/management, storage, docs). Supports OAuth (Claude.ai, VS Code), dynamic Actor discovery, and an **MCP Configurator** to expose a curated subset (10–15 tools) for better tool-selection accuracy.
- **Agentic payments:** **x402** (USDC on Base, no Apify account needed; PPE-only; $1 min, prepaid balance, 60-min idle refund) and **Skyfire** (PAY tokens). Plus exploring Cloudflare pay-per-crawl. CLI: `@apify/mcpc` auto-signs payments on HTTP 402.
- Apify is a **Silver member of the Linux Foundation's agentic-AI standards** effort; publishes `/.well-known/agents.md` and agent-skills for agent onboarding.
- Sources: <https://github.com/apify/apify-mcp-server>, <https://apify.com/.well-known/agents.md>, <https://docs.apify.com/platform/integrations/x402>, <https://www.softwareadvice.com.au/software/198361/apify>, <https://apify.com/about>

---

## 4. Company background

| Attribute | Detail | Source |
|---|---|---|
| **Founded** | 2015 (as **Apifier**; renamed **Apify** ~2017) | <https://apify.com/about>, <https://blog.apify.com/apifier-is-now-apify/> |
| **Founders** | **Jan Čurn** (CEO) & **Jakub Balada** — Charles University (Prague) classmates | <https://blog.apify.com/apify-origin-story/> |
| **Origin** | Inaugural **Y Combinator Fellowship** (Mountain View, 2015); launched on Hacker News Oct 20, 2015 (2,200 visits, 101 upvotes, 120 signups) | <https://blog.apify.com/apify-origin-story/> |
| **HQ** | Prague, Czech Republic (team mostly in Europe) | <https://apify.com/about> |
| **Team size** | **~160 employees** (2026; CEO interview). LinkedIn shows ~135 (lagging). | <https://cerebralvalley.beehiiv.com/p/apify-is-building-the-infrastructure-for-ai-s-data-problem> |
| **ARR** | **~$25M (2026)**, up from **$13.3M (2024)** and **$6.4–7.4M (2023)** | CEO interview (2026); <https://getlatka.com/companies/apify>; <https://www.cbinsights.com/company/apify/financials> |
| **Customers** | **15,000+** customers; **~40,000** active developers | <https://cerebralvalley.beehiiv.com/p/apify-is-building-the-infrastructure-for-ai-s-data-problem> |
| **Funding (total)** | **~$3M** (largely bootstrapped). Latest: **€2.8M (~$2.97M) seed, Apr 15, 2024**, led by **J&T Ventures** w/ **Reflex Capital**. Earlier angel/seed 2016–2019. | <https://www.crunchbase.com/organization/apify>, <https://tracxn.com/d/companies/apify> |

> **Note on funding discrepancies:** Sources disagree (Crunchbase/Tracxn ~$2.98–3.2M total; CB Insights labels the 2024 round "Series B"; GetLatka shows ~$552K across 2015–2019 angel rounds). The consistent, important fact: **Apify scaled to ~$25M ARR on only ~$3M raised — extreme capital efficiency / near-bootstrapped.** `[Funding total is approximate due to conflicting trackers.]`

**Milestones:** 2015 Apifier (YC) → 2016 moved to Czech Republic + seed → 2017 "Actor" platform launch + rename to Apify → 2019 secondary → 2022 Crawlee open-sourced (Apify SDK successor) → 2024 €2.8M seed + AI pivot → 2025–26 MCP server, x402/Skyfire agentic payments, rental sunset.

---

## 5. Go-to-market & growth

### 5.1 Product-led SEO (the primary growth engine)

- **The product writes its own content.** Every published Actor auto-generates a rich, templated, SEO-optimized landing page (`/store/{actor}`). Roadmap velocity = content velocity.
- **Results:** ~**14× organic traffic growth in 4 years**; ~**DR 75**, **~135k monthly organic visits**, **5k+ indexed pages**, **~40k ranking keywords**, **400k+ backlinks** (mid-2025).
- A small set of templates does the heavy lifting: ~5 store pages drive ~40% of new organic visits; ~150 "downloader" tool pages add ~35%.
- Built-in **E-E-A-T signals**: live usage counters, success-rate stats, pricing clarity, last-updated stamps.
- Sources: <https://surdeepsingh.com/product-management/case-study/product-led-seo-example-apify-seo-case-study/>, <https://surdeepsingh.com/seo/product-led-seo-examples-that-generate-millions-in-traffic/>

### 5.2 Open source as a top-of-funnel

- **Crawlee** (open-source, ~**20,000+ GitHub stars**) is a community magnet and adoption funnel — usable anywhere, but optimized to deploy onto Apify.
- Source: <https://blog.apify.com/announcing-crawlee-the-web-scraping-and-browser-automation-library/>, <https://docs.apify.com/academy/build-and-publish/actor-ideas/actor-validation>

### 5.3 Education, community & developer supply

- **Apify Academy** — free courses on building/publishing/monetizing Actors (also doubles as SEO/AEO content).
- Active **Discord**, ~50 meetups/conferences/year, Prague "Crawl" events.
- **Developer-supply flywheel:** developers build Actors → SEO pages rank → users adopt → paid runs → developers earn → more developers join.
- Sources: <https://apify.com/pricing> (Academy), <https://cerebralvalley.beehiiv.com/p/apify-is-building-the-infrastructure-for-ai-s-data-problem>

### 5.4 AI-channel land-grab (current focus)

- Positioning shift to **"infrastructure for AI's data problem."** MCP server + agentic payments + framework integrations (LangChain, CrewAI, n8n) aim to make Apify the **default tool-execution layer for AI agents**.
- Sources: <https://cerebralvalley.beehiiv.com/p/apify-is-building-the-infrastructure-for-ai-s-data-problem>, <https://github.com/apify/apify-mcp-server>

---

## 6. Strengths, weaknesses & gaps (for an AI-agent-focused competitor)

### 6.1 Strengths (what to copy)

1. **Unified usage-metering currency (CU)** — one billing primitive spans subscriptions, marketplace cut, and infra margin. Compounding revenue on every action.
2. **Self-generating SEO surface** — each marketplace listing = a ranking landing page. Free, compounding distribution.
3. **80/20 + infra margin** — developers feel "fair" (80%) while Apify also earns on the platform usage underneath.
4. **Radical listing transparency** — public users/runs/ratings build trust and create a self-improving quality signal.
5. **Open-source funnel (Crawlee) + free Academy** — cheap, durable developer acquisition.
6. **Full-stack abstraction** — proxies, browsers, scaling, storage, scheduling, payments, payouts all handled → low developer friction.
7. **Capital efficiency** — ~$25M ARR on ~$3M raised proves the model can be bootstrapped.
8. **Early AI-native rails** — MCP server, x402/Skyfire agentic payments, agent-readiness scoring.

### 6.2 Weaknesses & gaps (what to exploit)

1. **Built for scraping, retrofitted for agents.** Actors are stateless input→output jobs; the abstraction, docs, and metering are scraping-shaped. A platform **designed natively for stateful, multi-step, memory-using AI agents** (with conversation/session context, tool orchestration, long-horizon tasks) has a structural advantage. *(Source for scraping-centric framing: <https://docs.apify.com/platform/actors>.)*
2. **Free-user payout gap erodes developer trust.** Runs by free-plan users pay developers **$0**; Apify keeps the value. Developers call this out publicly. → **We could pay developers on *all* paid usage, or share even on trials**, as a recruiting wedge. Source: <https://godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026/>
3. **Rental sunset = developer churn moment (NOW).** Forced migration to PPE/PPU by **Oct 1, 2026** is causing reported **40–70% revenue drops** for unmigrated developers and loss of the subscription "floor." → **Active pool of disgruntled, monetization-savvy developers to recruit in 2026.** Sources: <https://docs.apify.com/platform/actors/publishing/monetize/rental>, <https://godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026/>
4. **No subscription floor for developers** under PPU/PPE — income is volatile, "earn nothing if nobody runs it." → Offer **hybrid models (subscription + usage), retainers, or guaranteed minimums** for top creators. Source: <https://dev.to/agenthustler/...-540h>
5. **Cold-start problem for new listings.** Ranking rewards existing users/runs/ratings → new Actors start at a disadvantage. → **Better new-creator discovery, curation, editorial featuring, and demand-routing** is a differentiator.
6. **Confusing total cost for buyers.** Layered platform-usage + Actor fee + proxy/storage makes spend unpredictable (e.g., "$20/mo" Actor really costing $35–50). → **Transparent, all-in, predictable agent pricing** is a UX wedge. Source: <https://docs.apify.com/platform/actors/publishing/monetize/rental>
7. **Expiring prepaid credits feel anti-customer.** No rollover. → **Rollover / fairer credit policy** as a positioning lever.
8. **Anti-bot fragility (scraping-specific).** Some targets (DataDome, Reddit DC-IP blocks) are unreliable; quality varies by Actor. Less relevant to a *general* AI-agent marketplace, but a reminder that **reliability/quality vetting** is where trust is won. Source: <https://dev.to/agenthustler/...-540h>
9. **Quality is uneven & largely self-policed.** 24,000+ Actors, mostly community — vetting is via quality score + ratings, not strong human curation. → **Stronger trust/safety, eval-based certification for agents** (correctness, safety, latency) is a real differentiator for AI agents specifically.
10. **Geographic/funding constraints.** Bootstrapped, EU-centric, thin capital → likely slower to defend against a well-funded, AI-native entrant moving fast on the agent category.

### 6.3 Direct implications for "Apify for AI agents"

- **Adopt the metering+marketplace model**, but make the metering currency **agent-native** (tokens/inference + tool calls + memory/storage), not CU-for-RAM.
- **Match or beat 80/20**, and **close the free-user payout gap** to recruit developers.
- **Time a developer-recruitment campaign to the rental sunset (mid–late 2026)** — Apify creators are actively re-evaluating.
- **Offer hybrid monetization** (subscription floor + usage + PPE) so creators get predictable income.
- **Invest in agent-specific trust:** evals, certification, safety review, observability, and transparent all-in pricing.
- **Copy product-led SEO**: every published agent = a ranking landing page; lean into AEO (answer-engine optimization) and MCP discoverability from day one.
- **Be MCP-native and agentic-payment-native (x402/Skyfire) from launch** — Apify is early here, so parity + better UX is achievable.

---

## 7. Open questions / things to verify before modeling

- Exact **gross margin** on platform usage (CU/proxy markups) — not publicly disclosed `[UNVERIFIED]`.
- Current precise **Actor count, paid-vs-free split, and top-creator earnings distribution** — only ranges available `[ESTIMATE]`.
- Whether the 2024 round was truly "seed" vs "Series B" (trackers conflict) `[UNVERIFIED]`.
- Real-world **PPE net economics** for typical agents (vs scraping) — extrapolated from scraping data `[ESTIMATE]`.

---

## 8. Sources

**Apify official**
- Pricing: <https://apify.com/pricing>
- About / company: <https://apify.com/about>
- Monetize your Actor: <https://docs.apify.com/platform/actors/publishing/monetize>
- Pay-per-event: <https://docs.apify.com/platform/actors/publishing/monetize/pay-per-event>
- Pricing & costs (developer tiers): <https://docs.apify.com/platform/actors/publishing/monetize/pricing-and-costs>
- Rental sunset: <https://docs.apify.com/platform/actors/publishing/monetize/rental>
- Store publishing T&Cs (revenue share §10): <https://docs.apify.com/legal/store-publishing-terms-and-conditions>
- Why publish on Apify (Academy): <https://docs.apify.com/academy/build-and-publish/why>
- Actor idea validation (Academy): <https://docs.apify.com/academy/build-and-publish/actor-ideas/actor-validation>
- Actors (platform): <https://docs.apify.com/platform/actors>
- Storage usage: <https://docs.apify.com/platform/storage/usage>
- SDK: <https://docs.apify.com/sdk>
- x402 agentic payments: <https://docs.apify.com/platform/integrations/x402>
- MCP server (GitHub): <https://github.com/apify/apify-mcp-server>
- AGENTS.md: <https://apify.com/.well-known/agents.md>
- MCP configurator blog: <https://blog.apify.com/configure-mcp-server-with-apify-actors/>
- Crawlee announcement: <https://blog.apify.com/announcing-crawlee-the-web-scraping-and-browser-automation-library/>
- Origin story: <https://blog.apify.com/apify-origin-story/>
- Apifier → Apify: <https://blog.apify.com/apifier-is-now-apify/>
- Crawlee × Apify deploy docs: <https://crawlee.dev/js/docs/deployment/apify-platform>

**Third-party / analyst**
- CEO interview, ARR/team/customers (Cerebral Valley, 2026): <https://cerebralvalley.beehiiv.com/p/apify-is-building-the-infrastructure-for-ai-s-data-problem>
- Crunchbase: <https://www.crunchbase.com/organization/apify>
- Tracxn: <https://tracxn.com/d/companies/apify>
- CB Insights financials: <https://www.cbinsights.com/company/apify/financials>
- GetLatka (ARR history): <https://getlatka.com/companies/apify>
- Pricing analysis (Use Apify): <https://use-apify.com/docs/what-is-apify/apify-pricing>
- Pricing comparison (Scrapewise, 2026): <https://scrapewise.ai/blogs/scraping-api-pricing-comparison-2026>
- Pricing data (Tanso Data Lab, verified May 2026): <https://data.tansohq.com/c/apify>
- Product-led SEO case study: <https://surdeepsingh.com/product-management/case-study/product-led-seo-example-apify-seo-case-study/>
- Product-led SEO examples: <https://surdeepsingh.com/seo/product-led-seo-examples-that-generate-millions-in-traffic/>
- PPE migration playbook (developer perspective): <https://godberrystudios.com/posts/apify-pay-per-event-migration-playbook-2026/>
- Developer experience (DEV.to): <https://dev.to/agenthustler/i-published-10-web-scrapers-on-apify-in-2-weeks-heres-what-actually-happened-540h>
- Platform overview / compliance (SoftwareAdvice): <https://www.softwareadvice.com.au/software/198361/apify>
- Store scale / pricing-model enums (Store Scraper listing): <https://apify.com/extractmaster01/apify-store-scraper/api/mcp>
- LinkedIn company profile: <https://linkedin.com/company/apifytech>
