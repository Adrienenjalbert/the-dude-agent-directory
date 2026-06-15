# Ongoing Management & Operations Strategy
## The Dude — Universal AI Agent Marketplace & Rental Platform

> **Version:** 1.0 (Draft) · **Date:** June 2026 · **Status:** For review
> **Supporting evidence:** `../01-research/competitive-landscape.md`, `apify-deep-dive.md`, `market-research.md`

---

## 1. Operating Philosophy

The Dude is **three businesses in one**: supply (builders), demand (buyers), and the **matching + trust engine** between them. Operations exist to keep the marketplace **liquid, trustworthy, and fair** while staying **capital-efficient** (Apify reached ~$25M ARR on ~$3M raised). Our operational moat is **trust** — making agent quality, safety, and performance *mechanical and earned*, not self-policed.

---

## 2. Trust & Safety (the operational moat)

> The biggest unsolved problem in agent adoption is trust: 95% of enterprise AI pilots fail, >40% of agentic projects projected canceled by 2027. Whoever operationalizes trust best, wins.

### 2.1 Tiered vetting (avoid flooding without killing the long tail)
*Lesson: Chrome Web Store flooding/backlogs vs. Salesforce over-gating.*

| Tier | Requirements | Who | Outcome |
|---|---|---|---|
| **Listed (long tail)** | Automated checks: manifest validation, anti-spam (no duplicate/keyword-stuffed listings), mandatory sandbox test run, basic eval | Anyone | Discoverable; lower default ranking |
| **Verified** | Identity/business verification, security scan, passing category eval suite | Opt-in builders | "Verified" badge, eligible for paid listing + curation |
| **Enterprise-grade** | Deeper security review, data-handling attestation, SLA commitment | Premium builders | "Enterprise" badge, private-marketplace eligibility |

- **Gate paid listings behind Verified** (trust without throttling the free long tail).
- **Anti-spam from day one:** ban duplicate listings, keyword stuffing, fake/self reviews; permission minimization speeds review.

### 2.2 Automated evals & continuous monitoring
- **Standardized eval suites per category** (correctness, safety, latency, cost) run at publish + continuously.
- **Drift detection:** agents change tool-use/behavior over time (voids conformity assessments) — monitor and re-flag.
- **Published verified metrics** on listings: success rate, median latency, cost-per-outcome, uptime.

### 2.3 Reviews & reputation
- **Verified-usage reviews only** (tied to actual paid runs); anti-manipulation enforcement.
- Transparent reputation score combining usage, satisfaction, eval performance, freshness.

### 2.4 Runtime safety
- Strong sandbox isolation (multi-tenant), egress controls, secret management, per-agent identity, audit trail, fail-closed defaults. (See `../04-technical/architecture.md`.)

---

## 3. Marketplace Operations

### 3.1 Liquidity management
- **Daily/weekly liquidity dashboards:** % searches → successful run, inventory density per category, supply/demand ratio.
- **Demand routing:** boost new high-quality agents (anti-cold-start); route demand into dense categories.
- **Supply gap detection:** identify high-demand/low-supply categories → targeted Apollo supply recruitment.

### 3.2 Catalog quality
- Listing-quality scoring (README completeness, schema clarity, pricing transparency, eval pass).
- Deprecation/retirement flow for stale or failing agents.
- Curation/editorial featuring for high-utility, high-satisfaction agents.

### 3.3 Pricing governance
- Builders set prices; platform enforces **transparency** (all-in, predictable) and a **published take-rate formula**.
- Change-control on monetization (notice period; rate-limited price changes) to protect buyers (Apify model).

---

## 4. Payments, Payouts & Finance Ops

### 4.1 Payouts
- **Automated monthly payouts** via Stripe Connect; low minimum threshold (beat Apify's $20/$100); configurable schedule (flexible payouts ≈ +20% seller retention).
- **Pay creators on all paid usage** (close Apify's free-user gap); auto-generated payout invoices with review window + dispute path.
- **Merchant-of-Record** handling for global tax/compliance (Gumroad model) — removes a major creator friction.

### 4.2 Disputes & refunds
- Defined SLAs; refund window (e.g., 7 days); escrow option for higher-value/per-task transactions (Moltify-style trust).
- Dispute resolution workflow in the ops console.

### 4.3 Fraud & risk
- Identity per agent + buyer; anomaly detection on usage/billing (Visa reports +25–40% malicious bot-initiated transactions); fail-closed on suspicious activity.
- Suppression lists; KYC for payouts; chargeback handling.

---

## 5. Compliance & Governance

### 5.1 EU AI Act readiness
- GPAI fines enforce from **Aug 2, 2026** (up to €15M / 3% turnover); high-risk up to €35M / 7%; Article 50 transparency deadline Aug 2 2026.
- **Governance-aware architecture:** per-agent identity, decoupled policy engine, auditable telemetry, drift detection, transparency disclosures.
- Tier compliance obligations by agent risk category; maintain conformity documentation for high-risk listings.

### 5.2 Data & privacy
- GDPR/CCPA; PII minimization in logs; encrypted storage of revealed contact data (Apollo); explicit data-retention + opt-out (community-sourced outreach data).
- Data-boundary / API-scope controls for enterprise buyers.

### 5.3 Marketplace policy
- Clear publishing T&Cs (revenue share, prohibited content/behavior, IP), acceptable-use policy, and enforcement ladder.

---

## 6. Support & Success

| Tier | Channel | Audience |
|---|---|---|
| Self-serve | Docs, Academy, community, status page | All |
| Standard | Chat/email support | Paid plans |
| Priority | Faster SLAs, onboarding help | Scale/Business |
| Enterprise | Dedicated AM, SLAs, training | Enterprise |

- **Builder success:** publishing help, pricing guidance, analytics reviews, growth tips.
- **Buyer success:** activation nudges, integration help, expansion guidance; sales-assist on PQL.

---

## 7. Data, Analytics & Instrumentation

- **Marketplace health:** GMV, liquidity, density, supply/demand ratio, take-rate revenue, infra margin.
- **Two activation funnels:** supply (signup→publish→first transaction) and demand (visitor→run→repeat).
- **Builder analytics (match/beat Apify):** revenue, cost, profit, success rate, acquisition funnel, shareable debug runs.
- **Ops dashboards:** verification queue, dispute backlog, eval failures, drift alerts, fraud signals.

---

## 8. Team & Org (lean, phased)

| Phase | Focus hires |
|---|---|
| Phase 0–1 | Founding eng (runtime, marketplace, frontend), product/design, founder-led GTM + trust ops |
| Phase 2 | Trust & safety lead, developer relations/community, growth/RevOps (Apollo), support |
| Phase 3 | Enterprise sales/SE, compliance/legal, finance ops (payouts/MoR), data/ML for ranking & evals |

- **Capital-efficient by design** (Apify precedent). Outsource/automate where possible (MoR, deliverability, eval tooling).
- Invest disproportionately in **frontend/design** (explicit differentiator) and **trust & safety** (the moat).

---

## 9. Operational KPIs & Cadence

| KPI | Cadence | Owner |
|---|---|---|
| GMV, liquidity, density | Daily/weekly | Growth/Product |
| Verification queue SLA | Daily | Trust & Safety |
| Dispute/refund resolution time | Weekly | Ops/Finance |
| Eval pass rate / drift alerts | Continuous | Trust & Safety |
| Payout accuracy & timeliness | Monthly | Finance |
| Support CSAT / response time | Weekly | Support |
| Fraud incidents | Continuous | Risk |
| Compliance posture (EU AI Act) | Quarterly | Legal/Compliance |

**Operating rhythm:** weekly marketplace-health review, monthly payout/finance close, quarterly compliance + strategy review against the market research.

---

## 10. Scaling Playbook

1. **Reach liquidity in a category → expand to the next** (repeat supply-then-demand sequencing).
2. **Automate trust** (more eval coverage, auto-verification) as volume grows to avoid review backlogs.
3. **Tier infrastructure costs** with volume discounts (CU-style) as runs scale.
4. **Layer enterprise** (governance, private marketplaces) once mid-market liquidity is proven.
5. **Enable agent-to-agent economy** (x402/AP2) as a new demand source once trust + metering are mature.

---

*Living document — revisit quarterly; tighten SLAs and automation as volume scales.*
