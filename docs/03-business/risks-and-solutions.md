# Problems, Risks & Reverse-Engineered Solutions
## The Dude — Universal AI Agent Marketplace & Rental Platform

> **Version:** 1.0 (Draft) · **Date:** June 2026 · **Status:** For review
> **Method:** For each problem, we identify the **failure mode** (often observed in a real competitor), then **reverse-engineer the solution** into a concrete platform requirement.
> **Supporting evidence:** `../01-research/competitive-landscape.md`, `apify-deep-dive.md`, `market-research.md`, `apollo-integration-research.md`

---

## 1. How to read this document

Each entry follows: **Problem → Evidence (who failed and how) → Root cause → Reverse-engineered solution → Where it lives (doc/requirement).** This is the "what breaks and how we fix it" companion to the PRD and business plan.

---

## 2. Marketplace / Cold-Start Problems

### 2.1 Cold-start: no supply → no demand → no supply
- **Evidence:** Every new marketplace's core risk; Apify's ranking rewards existing usage/ratings, so new listings start disadvantaged.
- **Root cause:** Liquidity is a chicken-and-egg problem; ranking algorithms entrench incumbents.
- **Solution:**
  - Seed **supply first** (Founding Builders), then bring demand into dense categories (sequencing).
  - **Anti-cold-start ranking:** "new & promising" boost window + editorial curation + demand-routing to new high-quality agents.
  - Concentrate launch in 2–3 categories to guarantee inventory density (> 3 results/search).
- **Lives in:** `gtm-strategy.md` §2, PRD R-A3.

### 2.2 Demand acquired before supply is ready
- **Evidence:** Marketplace research — demand before supply density = wasted CAC + churn.
- **Solution:** Gate paid demand acquisition until a category hits liquidity; instrument inventory density as a go/no-go.
- **Lives in:** `gtm-strategy.md` §2.2, `operations-strategy.md` §3.1.

---

## 3. Monetization Problems

### 3.1 Broken/opaque creator monetization
- **Evidence:** **OpenAI GPT Store** — revenue share never broadly launched; invite-only, US-only, ~$0.03/conversation, $100–500/mo ceiling, creators can't set prices.
- **Root cause:** Platform retained pricing control + opaque, engagement-based payouts.
- **Solution:** Creators **set their own prices**; **publish the take-rate formula**; pay transparently on usage; show payout invoices + analytics.
- **Lives in:** PRD R-D1, `business-plan.md` §5.2.

### 3.2 Credit-model backlash
- **Evidence:** **Lindy** — Trustpilot 2.4/5 driven by unpredictable credit consumption.
- **Root cause:** Opaque credit units → unpredictable bills → resentment.
- **Solution:** **Usage/event metering with real-time cost display**; predictable, all-in pricing; no opaque credits.
- **Lives in:** PRD R-D2, `business-plan.md` §5.3.

### 3.3 Over-taxing creators
- **Evidence:** **RapidAPI** raised to 25% — now seen as a "distribution tax"; providers churn once their brand drives demand.
- **Root cause:** High headline take rate misaligns with creators once they have leverage.
- **Solution:** **Low take rate (~10–15%)** + **0%-to-traction honeymoon** (Shopify/Atlassian); earn via volume + infra margin, not a high cut. Aggregate fees at account level.
- **Lives in:** `business-plan.md` §5.2.

### 3.4 No subscription floor (income volatility)
- **Evidence:** **Apify** is removing rentals → pure pay-per-usage → "earn nothing if nobody runs it"; reported 40–70% revenue drops for migrants.
- **Root cause:** Usage-only pricing removes predictable income for creators.
- **Solution:** Offer **hybrid (subscription floor + usage)**, monthly rental, and guaranteed minimums for top creators. Market this directly to Apify migrants.
- **Lives in:** PRD R-D1, `business-plan.md` §5.2, `gtm-strategy.md` §6.2.

### 3.5 Free-user payout gap erodes trust
- **Evidence:** **Apify** — runs by free-plan users pay developers $0; Apify keeps the value; developers publicly complain.
- **Root cause:** Platform monetizes free-tier usage without sharing.
- **Solution:** **Pay creators on all paid usage**; transparent accounting. Use as a recruiting wedge.
- **Lives in:** `business-plan.md` §5.2, `operations-strategy.md` §4.1.

### 3.6 Confusing total cost for buyers
- **Evidence:** **Apify** — layered platform-usage + Actor fee + proxy/storage → "$20/mo" really $35–50; unpredictable.
- **Solution:** **Transparent, all-in, predictable** buyer pricing; real-time spend display.
- **Lives in:** PRD R-D2.

---

## 4. Trust, Quality & Safety Problems

### 4.1 Low-quality flooding & duplicate spam
- **Evidence:** **Chrome Web Store** — submission surges → multi-week review backlogs; duplicate-content, keyword-stuffing, fake-review abuse. **GPT Store** — 3–5M GPTs, long-tail noise.
- **Root cause:** Open publishing without tiered vetting or anti-spam.
- **Solution:** **Tiered vetting** (auto for long tail, security review for Verified/Enterprise); **anti-spam from day one** (ban duplicates, keyword stuffing, self-reviews); gate **paid** listings behind verification.
- **Lives in:** PRD R-A4 / R-E1, `operations-strategy.md` §2.1.

### 4.2 Unreliable agents / pilot failure
- **Evidence:** **95% of enterprise AI pilots** fail; **>40% of agentic projects** projected canceled by 2027; only ~2–17% in production.
- **Root cause:** No way to know which agents actually work before buying.
- **Solution:** **Automated eval suites** (correctness/safety/latency/cost) at publish + continuous; **verified performance metrics** on listings; SLAs + performance guarantees for verified agents; **outcome-based pricing** to align incentives.
- **Lives in:** PRD R-E2, `operations-strategy.md` §2.2.

### 4.3 Behavioral drift voids quality guarantees
- **Evidence:** Agents change tool-use over time → voids conformity assessments (EU AI Act concern).
- **Solution:** **Drift detection** + continuous re-eval; re-flag/re-verify on drift; observability as a platform feature.
- **Lives in:** PRD R-E2, `operations-strategy.md` §2.2 / §5.1.

### 4.4 Review manipulation
- **Evidence:** Chrome/app-store fake-review abuse.
- **Solution:** **Verified-usage reviews only** (tied to paid runs); anti-manipulation enforcement; reputation blends usage + satisfaction + eval + freshness.
- **Lives in:** PRD R-E3, `operations-strategy.md` §2.3.

### 4.5 Security & fraud (malicious agents/transactions)
- **Evidence:** Visa: +25% malicious bot-initiated transactions (6 mo), +40% in US; 78% of FIs expect AI-agent fraud; "malicious marketplace agents already in the wild."
- **Root cause:** Untrusted code + automated transactions + weak identity.
- **Solution:** **Strong sandbox isolation**, per-agent identity, runtime **policy engine** + egress controls, **audit trail**, anomaly detection on usage/billing, KYC for payouts, fail-closed defaults.
- **Lives in:** PRD R-C1 / R-E4, `architecture.md` (security), `operations-strategy.md` §2.4 / §4.3.

---

## 5. Platform / Competitive Problems

### 5.1 Big-platform competition (walled gardens)
- **Evidence:** Microsoft (3% fee + Azure commit), Salesforce ($50M builder fund, gated/vetted), Google, AWS all launched marketplaces; a16z/Sequoia/Tiger took ~70% of Feb 2026 VC.
- **Root cause:** Incumbents bundle distribution with their cloud/CRM; capital concentration.
- **Solution:** **Vendor-neutrality + cross-platform** (MCP/A2A), **superior creator economics**, and **long-tail/SMB focus** (Salesforce explicitly excludes small buyers). Move fast in the 12–24 month window.
- **Lives in:** `business-plan.md` §4, `market-research.md` §5/§7.

### 5.2 Walled-garden payment restrictions
- **Evidence:** OpenAI Apps SDK **bans** selling digital products/subscriptions in-app.
- **Solution:** Be the **neutral, payments-open** layer the gardens won't be; support flexible pricing + A2A payment rails (x402/AP2).
- **Lives in:** PRD R-D5, `competitive-landscape.md` §6.

### 5.3 Enterprise-only gating kills the long tail
- **Evidence:** Salesforce/Microsoft partner-gating + heavy review.
- **Solution:** **Serve prosumers/indies with light vetting**; reserve heavy review for premium/enterprise badges (tiered).
- **Lives in:** PRD R-E1, `operations-strategy.md` §2.1.

### 5.4 "Discovery-only" ≠ marketplace
- **Evidence:** AI agent directories monetize backlinks/sponsorship, never touch usage; HF Spaces hosts but doesn't pay authors on usage.
- **Solution:** **Own the run + billing**, not just the listing — capture usage economics + creator payouts.
- **Lives in:** PRD §1.2, `business-plan.md` §5.

### 5.5 Hype without a business model
- **Evidence:** **AgentGPT** archived Jan 2026 — viral autonomy demo, no monetization loop.
- **Solution:** Tie the product to a **real monetization loop** (take rate + infra margin) from day one.
- **Lives in:** `business-plan.md` §5.

---

## 6. Technical Problems (summary; detail in architecture doc)

### 6.1 Securely running untrusted agent code at scale
- **Problem:** Multi-tenant execution of arbitrary developer agents is a major attack surface.
- **Solution (preview):** Strong isolation (microVM/sandbox — e.g., Firecracker/gVisor/E2B-class), egress controls, secret management, per-run metering. **See `../04-technical/architecture.md`.**

### 6.2 Multi-dimensional metering & revenue split
- **Problem:** Must meter compute + inference/tokens + tool calls + storage + custom events, then split revenue and pay out.
- **Solution (preview):** Usage-metering layer + Stripe Connect payouts + MoR; usage-based billing tooling (Orb/Metronome/Lago class). **See architecture doc.**

### 6.3 Apollo integration pitfalls
- **Evidence:** Apollo webhooks aren't Stripe-grade; rate limits (~600/hr key endpoints); email accuracy ~65–90%.
- **Solution:** Internal `gtm-service` (queue-backed) with caching, credit budgeting, 429 backoff, **polling fallback**, and **secondary email verification** before cold sends; dedicated sender (Instantly/Smartlead) for volume.
- **Lives in:** `apollo-integration-research.md`, `gtm-strategy.md` §4.

### 6.4 Cold-start ranking / discovery quality
- **Problem:** Ranking on usage entrenches incumbents; poor relevance kills demand activation.
- **Solution:** New-agent boost + curation + semantic search + good listing metadata; instrument search→view→transact drop-off.
- **Lives in:** PRD R-A2/R-A3.

---

## 7. Regulatory & Compliance Problems

### 7.1 EU AI Act exposure
- **Evidence:** GPAI fines from Aug 2, 2026 (up to €15M / 3%); high-risk up to €35M / 7%; Article 50 transparency deadline.
- **Solution:** **Governance-aware architecture** (per-agent identity, decoupled policy, auditable telemetry, drift detection); tier obligations by agent risk; conformity docs for high-risk listings; transparency disclosures.
- **Lives in:** `operations-strategy.md` §5.1.

### 7.2 Data/privacy & outreach compliance
- **Evidence:** Apollo data is community-sourced; GDPR/CAN-SPAM/CASL vary by region.
- **Solution:** PII minimization, encryption, retention/opt-out policies, suppression lists, lawful-basis review per region.
- **Lives in:** `operations-strategy.md` §5.2, `apollo-integration-research.md` §3.6.

---

## 8. Business / Funding Problems

### 8.1 Capital concentration raises the bar
- **Evidence:** 3 labs raised $172B in Q1 2026; Series A now needs ~$1–3M ARR + proven autonomous task completion.
- **Solution:** **Capital-efficient, take-rate-from-day-one** model (Apify: ~$25M ARR on ~$3M); demonstrate **real revenue + liquidity** early — a different story than the model-layer arms race.
- **Lives in:** `business-plan.md` §8.

### 8.2 Model commoditization
- **Evidence:** GPT-4 API price −90% in 18 months; "the model is a commodity."
- **Solution (net tailwind):** Be **model-agnostic**; capture value at the **distribution/trust layer**, not the model layer.
- **Lives in:** `business-plan.md` §3.3, `market-research.md` §5.

---

## 9. Risk Register (consolidated)

| Risk | Severity | Primary mitigation | Doc |
|---|---|---|---|
| Cold-start / no liquidity | High | Seed supply first; anti-cold-start ranking; concentrate categories | gtm §2 |
| Broken/opaque monetization | High | Creators set prices; published formula; transparent payouts | biz §5.2 |
| Credit-model backlash | Med | Usage metering + real-time cost | biz §5.3 |
| Low-quality flooding | High | Tiered vetting + anti-spam | ops §2.1 |
| Pilot failure / unreliable agents | High | Evals + verified metrics + SLAs + outcome pricing | ops §2.2 |
| Security / fraud | High | Sandbox isolation, identity, policy engine, audit | arch + ops §2.4/4.3 |
| Big-platform competition | High | Neutrality + creator economics + long-tail; move fast | biz §4 |
| EU AI Act / regulation | High | Governance-aware architecture; tiered compliance | ops §5.1 |
| Capital concentration | Med | Capital-efficient take-rate model | biz §8 |
| Apollo/data deliverability | Med | gtm-service + polling + verification + dedicated sender | gtm §4 |
| Behavioral drift | Med | Drift detection + continuous re-eval | ops §2.2 |
| Income volatility for creators | Med | Hybrid pricing + minimums | biz §5.2 |

---

*Living document — add new failure modes as competitors evolve and as we encounter them operationally.*
