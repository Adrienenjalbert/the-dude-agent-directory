# Product Requirements Document (PRD)
## The Dude — Universal AI Agent Marketplace & Rental Platform

> **Version:** 1.0 (Draft)
> **Date:** June 2026
> **Owner:** Founder / Product
> **Status:** For review
> **Related docs:** `../01-research/*`, `../03-business/business-plan.md`, `../04-technical/architecture.md`, `../05-growth/gtm-strategy.md`

---

## 1. Overview

### 1.1 Problem statement

The AI agent economy is inflecting: 72–84% of enterprises are using or planning to increase agent investment, >1M custom agents are being built per quarter, and standards (MCP, A2A, AP2) just matured. Yet the market is broken on **both sides**:

- **Builders** (indie devs, agencies, AI startups, internal teams) can build powerful agents but face a brutal distribution problem (~0.07% of indie devs reach $10K MRR). They lack a channel to find paying customers, handle billing/metering, and get paid fairly.
- **Buyers** (SMBs, mid-market, enterprises, non-technical operators) can't tell which agents actually work. 95% of enterprise AI pilots fail; >40% of agentic projects are projected to be canceled by 2027. They face discovery, trust, integration, and procurement friction.

Existing marketplaces are either **walled gardens with broken creator monetization** (OpenAI GPT Store: rev-share never broadly launched), **vertical/platform-locked** (Apify=automation, Salesforce=CRM, GitHub=dev tools), **thin directories with no usage metering or payouts**, or **crypto-native with limited mainstream reach** (Olas, Fetch.ai).

### 1.2 Solution

**The Dude** is a **vendor-neutral, cross-vertical, usage-metered two-sided marketplace** where anyone can publish an AI agent of any type and get paid when others rent or run it. We own the **run + billing + trust layer** — not just the listing — capturing usage economics while solving the trust gap that kills agent adoption.

### 1.3 Goals & non-goals

**Goals (first 18 months)**
- Become the default **neutral marketplace** for the long-tail / SMB / prosumer segment that incumbents underserve.
- Deliver **best-in-class creator economics** (generous revenue share + flexible monetization) to win supply.
- Make **trust a product**: verified performance metrics, evals, reviews, SLAs, sandboxed execution.
- Deliver a **world-class frontend** (the explicit differentiator) — a beautiful landing experience and a powerful console.
- Integrate **Apollo.io** for outbound supply/demand acquisition and frictionless, enriched onboarding.

**Non-goals (initially)**
- We are **not** building our own foundation models.
- We are **not** building first-party "AI employee" agents to compete with our supply (no channel conflict at launch).
- We are **not** initially targeting heavily-regulated enterprise deployments requiring on-prem (Phase 3+).
- We are **not** crypto-first; agent-payment rails (x402/AP2) are an option, not the default UX.

### 1.4 Success metrics (North Star + supporting)

| Metric | Definition | Why |
|---|---|---|
| **North Star: Marketplace GMV** | $ value of agent runs/rentals transacted through the platform | Captures both sides + usage |
| **Liquidity** | % of buyer searches that result in a successful run within 7 days | Core marketplace health |
| Supply activation | % of builder signups that publish a first agent | Supply funnel |
| Demand activation | % of buyer signups that complete a first rental/run | Demand funnel |
| Time-to-first-publish | Median signup → discoverable agent | Supply friction |
| Inventory density | Median # of quality results per search (target > 3) | Matching |
| Repeat usage / retention | % of buyers running ≥1 agent in month N+1 | Retention |
| Take-rate revenue | Platform revenue = GMV × take rate | Business |

---

## 2. Market context (summary)

*Full analysis in `../01-research/market-research.md`, `competitive-landscape.md`, `apify-deep-dive.md`.*

- **Market size:** Standalone AI agents market ~$7.8B (2025) → ~$50–53B (2030) at 40%+ CAGR (analyst consensus). Marketplace-addressable SAM ~$9–11B by 2030; modeled SOM ~$15–60M platform revenue by Year 3–5.
- **Timing ("why now"):** Standards matured (MCP ~97M downloads; A2A 100+ orgs), payment rails arrived (AP2, ACP, x402), demand inflecting, models commoditized (value moved to distribution/trust layer), budgets shifting from SaaS seats to agentic platforms. ~12–24 month window before incumbents extend into the long tail.
- **Benchmark — Apify:** 80/20 creator split, pay-per-event metering, transparent listing analytics, product-led SEO (each listing = a ranking page), ~$25M ARR on ~$3M raised. **Critically, Apify is sunsetting its rental model in 2026 → a recruitable pool of disgruntled, monetization-savvy creators.**
- **Best-in-class economics to emulate:** GitHub (95/5), Shopify/Atlassian (0% to first $1M lifetime → 15%). RapidAPI's 25% is now seen as a "distribution tax."
- **Pitfalls to avoid:** broken/opaque monetization (GPT Store), credit-model backlash (Lindy 2.4/5), low-quality flooding (Chrome Web Store), over-taxing creators, enterprise-only gating that kills the long tail.

---

## 3. Personas

### 3.1 Supply-side (builders)

| Persona | Description | Top need | Key feature |
|---|---|---|---|
| **Indie developer / solopreneur** | Builds micro-SaaS / agents solo | Distribution + monetization without building billing | One-click publish, payouts, SEO listing |
| **Automation agency / freelancer** | Productizes repeat client work | Recurring rental income | Multiple pricing models, white-label, analytics |
| **AI-native startup** | Vertical agent company | Procurement reach, outcome billing | Enterprise distribution, outcome-based pricing |
| **Enterprise internal builder** | Built internal agents | Recoup build cost, governance | Private listings, IP controls, org management |

### 3.2 Demand-side (buyers)

| Persona | Description | Top need | Key feature |
|---|---|---|---|
| **SMB operator (non-technical)** | 5–50 employees, ~$18K/yr AI budget | "Hire an agent" simplicity + trust | Curated catalog, transparent pricing, 60-sec demo |
| **Mid-market ops/RevOps** | Workflow "connective tissue" | Reliability, integration | MCP/A2A integration, SLAs, usage dashboards |
| **Enterprise buyer** | $1.4M/yr AI budget, governance-driven | Security, audit, compliance | SSO, audit logs, data boundaries, private marketplace |
| **Developer / agent (A2A)** | An agent renting another agent | Programmatic discovery + payment | API + MCP + agent-payment rails |

---

## 4. Core product pillars & features

### 4.1 Pillar A — Discovery & Directory

**Goal:** Make finding a trustworthy agent effortless; beat the cold-start ranking problem.

- **Browse & search:** full-text + semantic search, categories (by function: support, sales/SDR, research, coding, data, marketing, ops, finance, vertical-specific), filters (price model, rating, latency, verified status, integrations, framework).
- **Agent detail page (SEO-optimized, auto-generated):** description, README, demo, pricing (all-in, transparent), verified performance metrics (success rate, median latency, cost-per-outcome, uptime), ratings & reviews, usage counts, last-updated, supported integrations (MCP/A2A), changelog.
- **Trust signals:** verified badge tiers, performance benchmarks, security/data-scope disclosures, refund policy.
- **Ranking:** weighted by genuine usage + satisfaction + freshness, with **editorial featuring and demand-routing to new high-quality agents** (anti-cold-start). Explicit anti-spam: no duplicate listings, keyword stuffing, or self-reviews.
- **Comparisons:** side-by-side agent comparison.

**Requirements**
- R-A1: Every published agent gets a unique, indexable, templated landing page (product-led SEO).
- R-A2: Search returns ranked results with trust/perf metadata in < 300ms p95.
- R-A3: New agents receive a "new & promising" boost window + curation eligibility.
- R-A4: Anti-spam policy enforced at publish time (duplicate/keyword/review checks).

### 4.2 Pillar B — Publishing & SDK

**Goal:** Anyone can package and publish any agent (any framework) in minutes.

- **Agent manifest standard:** a declarative manifest (name, description, inputs/outputs schema, pricing, runtime, resources, integrations, eval suite). "Bring any framework" — LangChain, CrewAI, AutoGen, OpenAI Agents SDK, custom.
- **Packaging:** container-based (Dockerfile) or hosted-code; MCP-native (expose agent as MCP tool) and A2A Agent Card support.
- **Guided publishing wizard:** step-by-step with templates, SDK starters, pricing guidance, sandbox test, and pre-publish eval/validation.
- **Versioning & changelog:** semantic versions, rollback, deprecation flow.
- **Private & org listings:** publish privately, to an org, or publicly.

**Requirements**
- R-B1: Provide an SDK (TS + Python) for packaging, local run, charging events, and reading inputs/outputs.
- R-B2: Support a standard manifest validated at publish.
- R-B3: Publishing wizard includes a mandatory sandbox test run before going live.
- R-B4: Support container and hosted-code agents; MCP + A2A export.

### 4.3 Pillar C — Execution Runtime (rent/run)

**Goal:** Securely run untrusted agents at scale, metered, multi-tenant.

- **Sandboxed execution:** isolated, multi-tenant runtime for untrusted code (see `../04-technical/architecture.md` for chosen approach — microVM/sandbox).
- **Run modes:** synchronous (interactive), async (job), scheduled, and standby/always-on.
- **State & memory:** managed storage primitives (datasets, key-value/object store, conversation/session memory, request/task queues).
- **Observability:** per-run logs, traces, tool-call inspection, cost breakdown; shareable debug runs.
- **Metering:** meter compute + tokens/inference + tool calls + storage + custom billable events.

**Requirements**
- R-C1: Untrusted agents run in strong isolation; no cross-tenant access; egress controls.
- R-C2: Every run is metered across all cost dimensions and attributed to a buyer + agent.
- R-C3: Runs produce structured outputs + full observability artifacts.
- R-C4: Support sync, async, scheduled, and standby execution.

### 4.4 Pillar D — Monetization, Billing & Payouts

**Goal:** Flexible, transparent monetization; fair, automatic payouts. Avoid Apify's gaps and credit-model backlash.

- **Pricing models (builder's choice, can combine):**
  - **Pay-per-run / pay-per-event** (usage) — the default, aligned with market shift.
  - **Pay-per-outcome** (e.g., per resolved ticket, per qualified lead) — rides the outcome-based pricing trend.
  - **Monthly rental / subscription** (predictable floor) — explicitly retained since Apify is removing it.
  - **Hybrid** (subscription floor + usage) — solves the "earn nothing if idle" problem.
  - **Free.**
- **Transparent all-in pricing:** buyers see predictable, all-in cost (avoid Apify's confusing layered fees). Real-time cost display during/after runs.
- **Revenue share:** generous, transparent, published formula. **0%-to-traction honeymoon then competitive split** (see business plan for exact numbers). Aggregate at account level.
- **Payouts:** automatic monthly payouts via Stripe Connect; low minimum threshold; **pay creators on all paid usage** (close Apify's free-user payout gap as a recruiting wedge). Merchant-of-Record handling for global tax.
- **Trust/refunds:** refund window (e.g., 7 days), dispute resolution, performance guarantees for verified agents.
- **Agent-payment rails (optional):** x402 / AP2 support so agents can rent agents (A2A) and for delegated/authorized spend.

**Requirements**
- R-D1: Builders can set/combine pricing models and their own prices; platform publishes the take-rate formula transparently.
- R-D2: Buyers always see all-in, predictable pricing and real-time spend.
- R-D3: Automatic, auditable monthly payouts; configurable payout schedule; MoR tax handling.
- R-D4: Dispute + refund workflow with defined SLAs.
- R-D5: Optional x402/AP2 rails for A2A and delegated spend.

### 4.5 Pillar E — Trust, Safety & Governance

**Goal:** Make trust mechanical and earned; this is our moat.

- **Tiered vetting:** light/automated review for the long tail; **rigorous review + security scan for "Verified" / "Enterprise" badges**; gate **paid** listings behind verification.
- **Automated evals:** standardized eval suites per category (correctness, safety, latency, cost) run at publish + continuously; published as verified metrics.
- **Reviews & ratings:** verified-usage reviews only; anti-manipulation.
- **Runtime safety:** policy engine, egress controls, secret management, audit trail, fail-closed defaults.
- **Governance (enterprise):** SSO, RBAC, audit logs, data-boundary/API-scope controls, private marketplace, EU AI Act-aware telemetry (identity per agent, decoupled policy, drift detection).

**Requirements**
- R-E1: Tiered verification with a security review for Verified/Enterprise.
- R-E2: Continuous eval + drift detection; surface verified perf metrics on listings.
- R-E3: Reviews tied to verified usage; anti-spam/anti-manipulation enforcement.
- R-E4: Enterprise governance: SSO, RBAC, audit logs, data boundaries.

### 4.6 Pillar F — Onboarding & CRM (Apollo-powered)

**Goal:** Near-zero-friction, segmented onboarding for both sides; Apollo-driven outreach.

*Full design in `../01-research/apollo-integration-research.md` and `../05-growth/gtm-strategy.md`.*

- **Enrich-on-signup:** Apollo enrichment (`people/match` + `organizations/enrich`) auto-fills profile and **segments builder vs. buyer**; signup form stays minimal (email + password).
- **Two onboarding tracks:** supply enablement (publish first agent, SDK, payout setup) and demand activation (find agents, run first rental). Progressive profiling.
- **Sales-assist on signal (PQL):** human outreach only on high-intent/high-fit accounts; self-serve for everyone else.
- **Closed-loop:** product events (first publish, first rental) drive lifecycle messaging + sequence transitions.

**Requirements**
- R-F1: Signup triggers async enrichment + segmentation behind an internal `gtm-service` (never client-side).
- R-F2: Two instrumented onboarding funnels with distinct activation metrics.
- R-F3: PQL-triggered sales-assist; PLG self-serve default.
- R-F4: Cache enrichment + convert to Apollo Contacts to control credit spend.

### 4.7 Pillar G — Console & Dashboards

**Goal:** A powerful, beautiful logged-in experience for both sides.

- **Builder console:** earnings/payouts, usage & run analytics, success rate, cost/profit trends, acquisition funnel, logs/debug, version management, listing editor, eval results.
- **Buyer console:** spend dashboard, active rentals/subscriptions, run history & outputs, saved/favorite agents, team management, billing.
- **Admin/ops console:** moderation, verification queue, dispute management, marketplace health metrics.

**Requirements**
- R-G1: Builder analytics match/exceed Apify's transparency (revenue, cost, profit, success rate, funnel).
- R-G2: Buyer spend + run history with exportable data.
- R-G3: Internal ops console for trust & safety workflows.

---

## 5. Functional requirements summary (MoSCoW)

| ID | Requirement | Priority | Phase |
|---|---|---|---|
| R-A1 | Auto-generated SEO listing pages | Must | MVP |
| R-A2 | Fast ranked search w/ trust metadata | Must | MVP |
| R-B1 | SDK (TS/Python) | Must | MVP |
| R-B3 | Publishing wizard + mandatory sandbox test | Must | MVP |
| R-C1 | Sandboxed multi-tenant execution | Must | MVP |
| R-C2 | Full multi-dimensional metering | Must | MVP |
| R-D1 | Flexible pricing models + transparent take rate | Must | MVP |
| R-D3 | Automatic Stripe Connect payouts + MoR | Must | MVP |
| R-E1 | Tiered verification + security review | Must | MVP (light) / Phase 2 (full) |
| R-F1 | Apollo enrich-on-signup + segmentation | Must | MVP |
| R-G1 | Builder analytics dashboard | Must | MVP |
| R-A3 | Anti-cold-start boost + curation | Should | Phase 2 |
| R-D5 | x402/AP2 A2A payment rails | Could | Phase 2/3 |
| R-E4 | Enterprise governance (SSO/RBAC/audit) | Should | Phase 2/3 |
| R-C4 | Standby/always-on agents | Should | Phase 2 |

---

## 6. User flows (high level)

### 6.1 Builder: publish → earn
1. Sign up → Apollo enrich → segmented as builder → enablement onboarding.
2. Create agent (manifest + container/hosted code via SDK).
3. Configure pricing (usage/outcome/subscription/hybrid).
4. Mandatory sandbox test + automated eval.
5. Publish → SEO listing generated → (new-agent boost).
6. Buyers run/rent → usage metered → monthly automatic payout.
7. Monitor earnings/analytics in builder console.

### 6.2 Buyer: discover → run → repeat
1. Sign up → Apollo enrich → segmented as buyer → activation onboarding.
2. Search/browse → view agent detail (verified metrics, transparent price).
3. Run a 60-second demo / first run (trial incentive).
4. Rent/subscribe or pay-per-run → see real-time spend.
5. Review outputs in buyer console; rate the agent.
6. Repeat usage / expand; PQL signal may trigger sales-assist.

### 6.3 Agent-to-agent (Phase 2+)
- Agent discovers another agent via API/MCP/A2A Agent Card → authorizes spend (AP2) → pays per task (x402) → consumes output.

---

## 7. Phased roadmap (product scope)

| Phase | Theme | Scope |
|---|---|---|
| **Phase 0 — Foundations (0–3 mo)** | Build core | Manifest + SDK, sandboxed runtime (managed/E2B-style), metering, Stripe Connect, listing pages, basic search, builder/buyer consoles, Apollo enrich-on-signup. **Seed supply manually (Founding Builders).** |
| **Phase 1 — MVP marketplace (3–6 mo)** | Liquidity | Public launch in 2–3 focused categories, transparent pricing, reviews, light vetting, two onboarding funnels, builder analytics, demand activation incentives. |
| **Phase 2 — Trust & scale (6–12 mo)** | Moat | Verified badges + security review, automated evals + drift detection, anti-cold-start curation, hybrid pricing, deliverability (Instantly/Smartlead), A2A/MCP discovery, standby agents. |
| **Phase 3 — Enterprise & agent economy (12–18 mo)** | Expand | SSO/RBAC/audit, private marketplaces, data boundaries, x402/AP2 A2A payments, outcome-based billing at scale, enterprise GTM. |

---

## 8. Dependencies & assumptions

- Payments/payouts: Stripe + Stripe Connect (+ MoR partner for global tax).
- Outreach/onboarding: Apollo.io (+ Customer.io lifecycle, optional Instantly/Smartlead, Clay later).
- Execution: managed sandbox provider or self-hosted microVM/sandbox (see technical doc).
- Interop: MCP + A2A standards (Linux Foundation governed) assumed stable.
- Assumption: a recruitable pool of monetization-savvy builders exists (Apify rental sunset) in mid–late 2026.

---

## 9. Open questions

- Exact revenue-share numbers & honeymoon threshold (see business plan; needs financial modeling).
- Build vs. buy on the sandbox runtime (cost/security/cold-start trade-offs — technical doc).
- First 2–3 launch categories (where supply can be seeded densely + demand is hot).
- Brand/name finalization ("The Dude" is a placeholder).
- Crypto/agent-payment rails timing (Phase 2 vs. 3).

---

*This PRD is a living document. Cross-reference the research and business/technical/growth docs for supporting evidence and detail.*
