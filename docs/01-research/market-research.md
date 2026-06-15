# Market Research: Universal AI Agent Marketplace & Rental Platform

**Prepared:** June 2026
**Author:** Market Research & Industry Analysis
**Purpose:** Market sizing and trend analysis to support the business plan and fundraising for a universal AI agent marketplace and rental platform — a two-sided platform where anyone can publish an AI agent and earn when others rent/use it.

---

## 0. Executive Summary

- The **standalone AI agents software market** is ~**$7.8B in 2025** and is forecast to compound at **~40–50% CAGR** to **~$50–53B by 2030** (analyst consensus), with longer-horizon estimates of **$139B–$236B by 2033–2034**. ([MarketsandMarkets](https://www.marketsandmarkets.com/PressReleases/ai-agents.asp), [Grand View Research](https://www.grandviewresearch.com/press-release/global-ai-agents-market-report), [SendToTeam roundup](https://www.sendtoteam.com/blog/agentic-ai-industry-report-2026/))
- A **much larger "embedded" view** exists: Gartner sizes **agentic AI spending at ~$202B in 2026**, growing to **~$753B by 2029**, because it counts agent capabilities embedded inside enterprise software. ([Software Strategies Blog](https://softwarestrategiesblog.com/2026/02/26/roundup-of-agentic-ai-forecasts-and-market-estimates-2026/))
- **Adoption is broad but shallow:** ~**72%** of large enterprises are using or testing agents (Zapier), ~**62%** are at least experimenting (McKinsey), but only **~23% have scaled** agentic AI anywhere and **<10% in any single function**. ([Zapier](https://www.zapier.com/blog/ai-agents-survey/), [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai))
- **Interoperability standards have arrived:** MCP crossed **~97M cumulative SDK downloads** with **5,000+ registry servers** and cross-vendor adoption; A2A has **100–150+ participating orgs**. Both are now governed by the Linux Foundation. This is the technical precondition for a cross-platform agent marketplace. ([Stellagent](https://stellagent.ai/insights/mcp-vs-a2a-vs-ap2-protocol-comparison), [DigitalApplied](https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp))
- **Capital is flooding in:** Agentic-AI startup funding hit **~$12B in Q1 2026** (3× YoY), and agent-specific infrastructure funding reached **~$18.7B in Q1 2026** vs. $2.1B in all of 2025. ([CallSphere](https://callsphere.ai/blog/agentic-ai-startup-funding-12-billion-q1-2026-tripling-year-over-year), [RapidClaw](https://rapidclaw.app/blog/vc-242-billion-q1-2026-ai-agents-investment))
- **Derived sizing for an agent marketplace (GMV-of-agent-spend lens):** **TAM ≈ $50–55B (2030)** standalone agent spend addressable via marketplaces; **SAM ≈ $8–12B (2030)** third-party/marketplace-distributed, rentable agents; **SOM ≈ $80–240M revenue (Year 3–5)** at a 1–3% SAM capture with a ~15–20% take rate. Full reasoning in Section 6.

> **Confidence note:** Throughout, **[Confirmed]** marks reported figures from named analyst firms/surveys; **[Estimate]** marks figures we derived or that are modeled/forecast. All forecasts beyond 2026 are inherently estimates regardless of source.

---

## 1. Market Sizing

### 1.1 The Core AI Agents Market (standalone software)

There is strong cross-firm agreement on the **2025 baseline (~$7–8B)** and on the **shape (40%+ CAGR)**, but wide divergence on the long-horizon endpoint depending on scope (standalone platforms vs. embedded capability vs. agentic commerce).

**Table 1 — AI Agents Market: Analyst Forecasts (standalone/broad agent software)**

| Firm | Base year & value | Endpoint | CAGR | Scope | Confidence | Source |
|---|---|---|---|---|---|---|
| MarketsandMarkets | $7.84B (2025) | $52.62B (2030) | 46.3% | AI agents, broad | [Confirmed] | [link](https://www.marketsandmarkets.com/PressReleases/ai-agents.asp) |
| Grand View Research | $5.40B (2024) | $50.31B (2030) | 45.8% | AI agents, broad | [Confirmed] | [link](https://www.grandviewresearch.com/press-release/global-ai-agents-market-report) |
| Grand View Research (long) | $7.63B (2025) | $182.97B (2033) | 49.6% | Full horizon | [Confirmed] | [link](https://www.grandviewresearch.com/press-release/global-ai-agents-market-report) |
| Fortune Business Insights | $7.29B (2025) | $139.19B (2034) | 40.5% | Agentic AI software | [Confirmed] | [link](https://softwarestrategiesblog.com/2026/02/26/roundup-of-agentic-ai-forecasts-and-market-estimates-2026/) |
| Precedence Research | $7.55B (2025) | $199.05B–$236B (2034) | 43.8–45.8% | Broad definition | [Confirmed] | [link](https://www.sendtoteam.com/blog/agentic-ai-industry-report-2026/) |
| Roots Analysis | ~$15B (2026) | $221B (2035) | 34.6% | Broad | [Confirmed] | [link](https://agentmarketcap.ai/blog/2026/04/08/ai-agent-market-size-reality-check-2026) |
| BCC Research | — | $48.3B (2030) | 43.3% | AI agents | [Confirmed] | [link](https://www.sendtoteam.com/blog/agentic-ai-industry-report-2026/) |
| MarkNtel Advisors | — | $33.24B (2030) | 30.5% | Agentic AI only (narrow) | [Confirmed] | [link](https://agentmarketcap.ai/blog/2026/08/23/ai-agent-market-size-projection-stack-reconciliation) |
| Global Market Insights | — | $105.6B (2034) | 38.5% | AI agents | [Confirmed] | [link](https://www.sendtoteam.com/blog/agentic-ai-industry-report-2026/) |
| Mordor Intelligence | $9.89B (2026) | $57.42B (2031) | 42.1% | Agentic AI | [Confirmed] | [link](https://agentmarketcap.ai/blog/2026/04/11/agentic-ai-market-11-billion-2026-growth-analysis) |

**Table 2 — Consensus Trajectory (modeled mid-point path)**

| Year | Low (narrow scope) | Consensus mid | High (broad scope) | Basis |
|---|---|---|---|---|
| 2024 | $5.26B | $5.4B | $7.3B | M&M / GVR [Confirmed] |
| 2025 | $7.29B | $7.8B | $8.5B | Cross-firm cluster [Confirmed] |
| 2026 | $8.1B | $10.9B | $15B | GVR/M&M/Roots [Confirmed] |
| 2028 | ~$16B | ~$23B | ~$35B | [Estimate, interpolated at ~45% CAGR] |
| 2030 | $33B | **$50–53B** | $93B+ | M&M/GVR/BCC [Confirmed]; broad [Estimate] |
| 2033–34 | $105B | ~$140–185B | $236B | GVR/FBI/Precedence [Confirmed] |

> **Reconciliation:** The **2025 baseline (~$7.8B) is the single most reliable data point** — confirmed across four+ firms. The **$50–53B by 2030 is the consensus middle**. Divergence at the long end reflects a *measurement problem*, not a disagreement on direction: every major firm agrees on **40%+ CAGR**. ([AgentMarketCap reconciliation](https://agentmarketcap.ai/blog/2026/08/23/ai-agent-market-size-projection-stack-reconciliation))

### 1.2 The "Embedded / Agentic AI Spending" View (much larger)

Gartner counts agentic capability **embedded across enterprise software**, producing far larger numbers:

- **Agentic AI spending ≈ $201.9B in 2026**, projected to overtake chatbot spending by 2027. ([Software Strategies Blog](https://softwarestrategiesblog.com/2026/02/26/roundup-of-agentic-ai-forecasts-and-market-estimates-2026/)) **[Confirmed — Gartner]**
- Agentic AI compounds at **~119% CAGR**, expanding from **~$15B to ~$753B by 2029** within Gartner's $4.71T total-AI forecast. ([Software Strategies Blog](https://softwarestrategiesblog.com/2026/01/22/gartner-4q25-agentic-ai-data-readiness-4-71t-market/)) **[Confirmed — Gartner]**
- By 2035, agentic AI could drive **~30% of enterprise application software revenue, >$450B**, up from 2% in 2025. ([digit.fyi / Gartner](https://www.digit.fyi/agentic-ai-in-enterprise-gartner/)) **[Confirmed — Gartner]**

> The ~25x gap between the standalone view (~$8B) and Gartner's embedded view (~$202B) in 2026 is a **scope artifact**. For a *marketplace* business, the relevant base is closer to the standalone/third-party-distributed slice (Section 6), not the full embedded number.

### 1.3 Adjacent & Reference Markets

These markets define the substitution and expansion surface for an agent marketplace — agents increasingly displace SaaS seats, automate via RPA-like workflows, democratize like no-code, and monetize labor like the gig economy.

**Table 3 — Adjacent Market Sizes**

| Market | 2025/26 size | Forecast | CAGR | Confidence | Source |
|---|---|---|---|---|---|
| SaaS (global) | $435–465B (2025–26) | $819B (2030) / $977B (2031) | 12–17.6% | [Confirmed] | [GVR](https://www.grandviewresearch.com/industry-analysis/saas-market-report), [Mordor](https://www.mordorintelligence.com/industry-reports/software-as-a-service-market) |
| RPA / automation | $5.67B (2025); $8.12B (2026) | $28.60B (2031) | 28.6% | [Confirmed] | [Mordor](https://www.mordorintelligence.com/industry-reports/robotic-process-automation-market) |
| Low-code / no-code | — | ~$65B (2027) | ~25%+ | [Confirmed] | [Mendix](https://www.mendix.com/blog/low-code-market/) |
| API management | $10.32B (2026) | $22.11B (2031) | ~16% | [Confirmed] | [Mordor (cited)](https://www.mordorintelligence.com/industry-reports/software-as-a-service-market) |
| Freelance/gig economy (global) | $582B (2026) | — | — | [Confirmed] | [Capital Counselor](https://capitalcounselor.com/blog/freelance-statistics/) |
| Freelance platform market | $7.65B (2026) | — | — | [Confirmed] | [Capital Counselor](https://capitalcounselor.com/blog/freelance-statistics/) |
| Micro-SaaS (indie devs) | $15.7B (2025) | $59.6B (2030) | ~30.6% | [Confirmed] | [Fungies](https://fungies.io/indie-developer-market-2026-complete-analysis-data-trends-forecasts-6/) |

**Why adjacency matters (the substitution thesis):**
- Gartner: by 2028, **>50% of enterprises will stop paying for assistive AI** and shift to outcome/workflow platforms; CIO reporting suggests **~40% of IT budgets are being redirected from traditional SaaS subscriptions to agentic platforms + LLM token consumption**, with enterprises "stopping seat expansion." ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-04-02-gartner-expects-most-enterprises-to-abandon-assistive-ai-for-outcome-focused-workflow-by-2028), [CIO.inc](https://www.cio.inc/blogs/from-copilot-to-agentic-how-cios-should-make-room-for-ai-p-4100)) **[Confirmed]**
- The freelance/gig economy (**$582B**) and micro-SaaS (**$15.7B → $59.6B**) markets are the **labor and supply pools** that an agent marketplace digitizes: agents are "digital labor" that can be rented like a freelancer and distributed like micro-SaaS. ([Capital Counselor](https://capitalcounselor.com/blog/freelance-statistics/), [Fungies](https://fungies.io/indie-developer-market-2026-complete-analysis-data-trends-forecasts-6/)) **[Confirmed]**

---

## 2. Trends & Tailwinds

### 2.1 Enterprise adoption: broad experimentation, narrow production

**Table 4 — Adoption Snapshot (2025–2026)**

| Metric | Value | Source | Confidence |
|---|---|---|---|
| Enterprises using/testing AI agents | 72% | [Zapier (525 US C-suite, 1,000+ employees)](https://www.zapier.com/blog/ai-agents-survey/) | [Confirmed] |
| Plan to increase agent investment next 12 mo | 84% | [Zapier](https://www.zapier.com/blog/ai-agents-survey/) | [Confirmed] |
| Orgs at least experimenting with agents | 62% | [McKinsey State of AI 2025](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) | [Confirmed] |
| Orgs scaling agentic AI somewhere | 23% | [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) | [Confirmed] |
| Scaling agents in any single function | <10% | [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) | [Confirmed] |
| Orgs using AI in ≥1 function | 88% | [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) | [Confirmed] |
| Actual production agent deployment (CIO survey) | 17% | [Gartner CIO Survey 2026 (via GoGloby)](https://gogloby.com/insights/ai-adoption-statistics/) | [Confirmed] |
| Full operational scale | ~2% | [Kore.ai/Deloitte (via Paperclipped)](https://www.paperclipped.de/en/blog/ai-agent-deployment-failure-rate/) | [Confirmed] |
| Customer support teams deploying agents | 49% | [Zapier](https://www.zapier.com/blog/ai-agents-survey/) | [Confirmed] |
| Operations teams deploying agents | 47% | [Zapier](https://www.zapier.com/blog/ai-agents-survey/) | [Confirmed] |

**Takeaway:** The **gap between experimentation (~62–72%) and production (~2–17%)** is the central market dynamic. It is simultaneously the **biggest tailwind** (huge latent demand to convert) and **biggest risk** (pilots stall). A marketplace that lowers the cost of *finding agents that actually work* directly attacks this gap.

### 2.2 The shift from copilots → autonomous agents

- Gartner: **40% of enterprise applications will feature task-specific AI agents by end of 2026**, up from **<5% in 2025**. ([digit.fyi](https://www.digit.fyi/agentic-ai-in-enterprise-gartner/), [DEVOPSdigest](https://www.devopsdigest.com/gartner-40-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026)) **[Confirmed — Gartner]** *(Note: independent analysis argues this is "directionally correct but precisely wrong," depending on whether copilots count as "agents." [MegaOne](https://megaoneai.com/blog/agentic-ai-enterprise-prediction-2026/))*
- By **2027**, ~one-third of agentic implementations will combine multiple agents (multi-agent). By **2028**, a third of UX shifts from native apps to **agentic front-ends**; ≥15% of daily work decisions made autonomously. ([DEVOPSdigest](https://www.devopsdigest.com/gartner-40-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026), [CIO.inc](https://www.cio.inc/blogs/from-copilot-to-agentic-how-cios-should-make-room-for-ai-p-4100)) **[Confirmed — Gartner]**
- By **2030**, Gartner warns SaaS vendors that merely "bolt on" AI face **up to 80% margin compression** vs. those redesigned for agentic execution. ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-04-02-gartner-expects-most-enterprises-to-abandon-assistive-ai-for-outcome-focused-workflow-by-2028)) **[Confirmed — Gartner]**

### 2.3 Interoperability standards — the platform precondition

**Table 5 — Agent Protocol Stack (2026)**

| Protocol | Layer | Origin | Adoption | Governance | Source |
|---|---|---|---|---|---|
| **MCP** (Model Context Protocol) | Agent → tools | Anthropic, Nov 2024 | ~**97M cumulative downloads**; 5,000+ registry servers; adopted by OpenAI, Google, Microsoft | Linux Foundation (AAIF), Dec 2025 | [Stellagent](https://stellagent.ai/insights/mcp-vs-a2a-vs-ap2-protocol-comparison) |
| **A2A** (Agent2Agent) | Agent ↔ agent | Google, Apr 2025 | **100–150+ orgs**; v1.0 added Signed Agent Cards + multi-tenancy; IBM ACP merged in | Linux Foundation, Jun 2025 | [Stellagent](https://stellagent.ai/insights/mcp-vs-a2a-vs-ap2-protocol-comparison), [VentureBeat](https://venturebeat.com/orchestration/mcp-solved-tool-calling-a2a-solved-coordination-what-solves-transport) |
| **AP2** (Agent Payments Protocol) | Agent payments | Google, Sep 2025 | **60+ partner orgs** (Mastercard, PayPal, Amex, Adobe, Alibaba); cryptographically signed mandates | Open standard | [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants) |
| **ACP** (Agentic Commerce Protocol) | Commerce checkout | OpenAI + Stripe | Launched 2025 | Open | [Hexagon](https://joinhexagon.com/blogs/agentic-commerce-statistics-2026-every-number-you-need-to-kn-mmi9bzwl-pjzd) |
| **UCP** (Universal Commerce Protocol) | Commerce data | Google/Shopify | 20+ retailers/platforms (Visa, Mastercard, Stripe, Best Buy, Macy's) | Open | [Hexagon](https://joinhexagon.com/blogs/agentic-commerce-statistics-2026-every-number-you-need-to-kn-mmi9bzwl-pjzd) |

**Why this is decisive for a marketplace:** MCP and A2A are **complementary, vendor-neutral, and Linux-Foundation-governed**. They make a *universal* (cross-vendor, any-agent) marketplace technically feasible for the first time — agents can be discovered (A2A Agent Cards), invoke tools (MCP), and transact (AP2/ACP) without bespoke integration. ([SAP](https://architecture.learning.sap.com/docs/ref-arch/ca1d2a3e/1), [DigitalApplied](https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp)) **[Confirmed]**

### 2.4 The "agent economy" — agents transacting

- **Agentic commerce (US):** Bain estimates **$300–500B by 2030 (15–25% of e-commerce)**; J.P. Morgan up to **25% of US online sales**; Morgan Stanley **10–20%**. ([Bain](https://www.bain.com/insights/2030-forecast-how-agentic-ai-will-reshape-us-retail-snap-chart/), [Hexagon](https://joinhexagon.com/blogs/agentic-commerce-statistics-2026-every-number-you-need-to-kn-mmi9bzwl-pjzd)) **[Confirmed]**
- **Global agentic commerce opportunity:** McKinsey **$3–5T by 2030**; US B2C orchestrated revenue **up to $1T**. ([McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants)) **[Confirmed]**
- **Agentic payment market:** **$7B → $93B by 2032 (13× expansion)** (Galileo). ([Hexagon](https://joinhexagon.com/blogs/agentic-commerce-statistics-2026-every-number-you-need-to-kn-mmi9bzwl-pjzd)) **[Confirmed]**
- IDC predicts **1.3B agents in circulation** by ~2028; **>1M custom agents built in a single quarter (130% QoQ growth)**; 80%+ of the Fortune 500 deploying agents. ([Stactize](https://stactize.com/artikel/where-do-1-3-billion-ai-agents-get-sold/)) **[Confirmed — IDC/Microsoft figures cited]**

### 2.5 SMB vs. enterprise demand

- **SMB:** AI agents now start at **$20/month per agent**; typical SMB AI stack **$200–500/month** can replace 2–3 FTEs for ~80% of repetitive work; **73% of SMBs report productivity gains within 90 days**. Median SMB annual AI spend ≈ **$18.4K**. ([Reinventing.ai](https://insights.reinventing.ai/articles/ai-agents-smb-affordability-2026-02-19), [AIStackHub](https://aistackhub.ai/ai-spending-by-industry)) **[Confirmed]**
- **Mid-market:** median ≈ **$127K/year**; production-grade adopters run **144 AI agents per human employee** (vs. **59:1 for small businesses**). ([AIStackHub](https://aistackhub.ai/ai-spending-by-industry), [Techaisle](https://techaisle.com/blog/694-144-ai-agents-per-employee-midmarket-smb?format=amp)) **[Confirmed]**
- **Enterprise:** median ≈ **$1.4M/year**; at scale **implementation & integration is 41% of spend** (vs. subscriptions ~48–52% for SMBs). Enterprise AI agent budgets rose **44% YoY**. ([AIStackHub](https://aistackhub.ai/ai-spending-by-industry), [Paperclipped](https://www.paperclipped.de/en/blog/ai-agent-deployment-failure-rate/)) **[Confirmed]**

---

## 3. Buyer & Seller Personas

### 3.1 Sellers (who builds & publishes agents)

**Table 6 — Seller Personas**

| Persona | Who | Motivation | Supply pool / signal | Willingness to list | Source |
|---|---|---|---|---|---|
| **Indie developers / solopreneurs** | Solo founders, "micro-SaaS" builders | New monetization channel without building a full SaaS + distribution | Micro-SaaS market **$15.7B→$59.6B**; only **~0.07%** of indie devs hit $10K MRR (distribution is the bottleneck) | Very high — marketplace solves their #1 problem (distribution) | [Fungies](https://fungies.io/indie-developer-market-2026-complete-analysis-data-trends-forecasts-6/) |
| **Freelancers / agencies** | Dev shops, automation agencies, AI/ML freelancers | Productize repeat work; AI/ML is the **highest-paying freelance field ($150–300/hr)** | **1.57B** global freelancers; **6.9M** US independent pros; AI Agent Store lists an **agency directory + RFQ** | High — recurring rental income vs. one-off projects | [Capital Counselor](https://capitalcounselor.com/blog/freelance-statistics/), [Planetary Labour](https://planetarylabour.com/articles/ai-agents-platforms) |
| **AI-native startups** | Vertical agent companies (Decagon, Sierra, Harvey, Cognition, etc.) | Distribution + procurement reach; outcome-based monetization | Top 25 agent companies raised **>$25B early 2026**; Salesforce AgentExchange had **200+ launch partners** | Medium-high — but may prefer direct enterprise GTM | [AgentMarketCap](https://agentmarketcap.ai/blog/2026/04/10/17-us-ai-companies-100m-plus-q1-2026-capital-concentration), [RapidClaw](https://rapidclaw.dev/blog/ai-agent-marketplace-guide-2026) |
| **Enterprises (internal builders)** | Teams that built internal agents | Recoup build cost; expose reusable capabilities | **>1M custom agents built per quarter**; 230,000+ orgs building/customizing | Medium — governance & IP concerns | [Stactize](https://stactize.com/artikel/where-do-1-3-billion-ai-agents-get-sold/) |
| **ISV / SaaS vendors** | Existing software vendors adding agents | Defend against margin compression; new SKU | Gartner: bolt-on SaaS faces **up to 80% margin compression by 2030** | Medium — likely list on incumbent marketplaces first | [Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-04-02-gartner-expects-most-enterprises-to-abandon-assistive-ai-for-outcome-focused-workflow-by-2028) |

### 3.2 Buyers (who rents/uses agents)

**Table 7 — Buyer Personas & Willingness to Pay**

| Persona | Budget signal | What they rent | WTP per agent | Source |
|---|---|---|---|---|
| **SMBs (5–50 employees)** | ~$18.4K/yr median AI spend; $200–500/mo stacks | Lead-qual, support, marketing, bookkeeping agents | **$20–200/mo per agent** (vs. $2,000–4,000/mo human) | [AIStackHub](https://aistackhub.ai/ai-spending-by-industry), [Reinventing.ai](https://insights.reinventing.ai/articles/ai-agents-smb-affordability-2026-02-19) |
| **Mid-market ($5–50M rev)** | ~$127K/yr median; 144 agents/employee at scale | Workflow/integration "connective tissue" agents | Bundles; usage-based | [AIStackHub](https://aistackhub.ai/ai-spending-by-industry), [Techaisle](https://techaisle.com/blog/694-144-ai-agents-per-employee-midmarket-smb?format=amp) |
| **Enterprises ($50M+ rev)** | ~$1.4M/yr median; +44% YoY; 41% on integration | Vertical & multi-agent systems; governance | Per-conversation $0.50–2.00; per-seat $15/user/mo; per-robot $8–10K/yr; AELA flat fees | [AIAgentROI](https://aiagentroi.io/research/2026-q2-ai-agent-pricing-benchmark.html) |
| **Non-technical operators** | Part of SMB/mid-market budgets | No-/low-code packaged agents; "hire an agent" UX | Subscription, low-friction | [Reinventing.ai](https://insights.reinventing.ai/articles/ai-agents-smb-affordability-2026-02-19) |

**Table 8 — Observed Agent Pricing Models (2026 benchmark)**

| Vendor | Model | Price point | Source |
|---|---|---|---|
| Salesforce Agentforce | Flex Credits / hybrid | $0.10/action (20 credits), $0.15 voice; $2.00/conversation (legacy) | [AIAgentROI](https://aiagentroi.io/research/2026-q2-ai-agent-pricing-benchmark.html) |
| HubSpot Breeze | Outcome-based | $0.50 / resolved conversation | [AIAgentROI](https://aiagentroi.io/research/2026-q2-ai-agent-pricing-benchmark.html) |
| Microsoft Agent 365 | Per-user | $15 / user / month | [AIAgentROI](https://aiagentroi.io/research/2026-q2-ai-agent-pricing-benchmark.html) |
| UiPath | Per-robot/year | $8,000–10,000 / unattended robot / yr | [AIAgentROI](https://aiagentroi.io/research/2026-q2-ai-agent-pricing-benchmark.html) |
| OpenAI API | Per-token | GPT-4.1 $2 in / $8 out per 1M tokens | [AIAgentROI](https://aiagentroi.io/research/2026-q2-ai-agent-pricing-benchmark.html) |
| SMB tools (Zapier/Make/n8n) | Subscription | $10–50 / month | [Reinventing.ai](https://insights.reinventing.ai/articles/ai-agents-smb-affordability-2026-02-19) |

> **Pricing implication for the platform:** The market is converging on **usage- and outcome-based** pricing, which is **marketplace-friendly** (per-call / per-outcome metering is the natural unit for a rental take-rate). Marketplaces like Google Cloud report vendors see **112% larger deal sizes** selling through the marketplace channel. ([Stactize](https://stactize.com/artikel/where-do-1-3-billion-ai-agents-get-sold/)) **[Confirmed]**

---

## 4. Competitive Landscape

**Table 9 — Existing Agent Marketplaces (2026)**

| Marketplace | Owner | Catalog size | Model / take | Positioning vs. us | Source |
|---|---|---|---|---|---|
| Microsoft Marketplace | Microsoft | 11,000+ models, 4,000–5,000+ AI apps/agents | Flat **3% transaction fee**; counts toward Azure commit; Agent 365 governance | Walled to MS ecosystem | [Presenc](https://presenc.ai/research/ai-agent-marketplaces-landscape-2026), [Stactize](https://stactize.com/artikel/where-do-1-3-billion-ai-agents-get-sold/) |
| Salesforce AgentExchange | Salesforce | 1,000+ Agentforce agents; 10,000+ AppExchange; 2,600+ Slack | Private offers, unified billing; **$50M Builders Initiative** | Tied to Salesforce CRM contracts; excludes small buyers | [SalesforceDevops](https://salesforcedevops.net/index.php/2026/04/14/agentexchange-salesforces-bet-that-trust-can-scale-with-agentic-speed/) |
| Google Gemini Enterprise (ex-Agentspace) | Google | Folded into Gemini Enterprise | Subscription/usage/outcome/private; A2A-validated | Bundled, not standalone | [Presenc](https://presenc.ai/research/ai-agent-marketplaces-landscape-2026), [RapidClaw](https://rapidclaw.dev/blog/ai-agent-marketplace-guide-2026) |
| AWS Marketplace (AI Agents & Tools) | Amazon | Bedrock + 3rd-party agents | Unified billing, IAM; MCP/A2A filters | AWS data-gravity buyers | [AWS](https://aws.amazon.com/about-aws/whats-new/2025/07/ai-agents-tools-aws-marketplace/) |
| OpenAI ChatGPT Workspace Agents | OpenAI | Per-team (not a public catalog) | ~$0.03/conversation rev-share historically (weak monetization) | Consumer/team, weak creator economics | [Presenc](https://presenc.ai/research/ai-agent-marketplaces-landscape-2026) |
| Agent Skills Directory (open) | Anthropic + OpenAI | **1.2M+ skills** | Open spec (Dec 2025) | Cross-vendor skills, not a rental marketplace | [Presenc](https://presenc.ai/research/ai-agent-marketplaces-landscape-2026) |
| Independent directories | AI Agents Directory, AI Agent Store, Fetch.ai | 500–2,000+ agents each | Reviews, RFQ, free + paid | Discovery only, thin commerce/governance | [Planetary Labour](https://planetarylabour.com/articles/ai-agents-platforms) |

**The gap / wedge for a *universal* marketplace:** Every major marketplace today is **anchored to its own cloud/CRM ecosystem** (vendor lock-in) or is a **thin directory** without rental metering, governance, and payouts. A genuinely **vendor-neutral, any-agent, MCP/A2A-native rental platform with built-in trust/governance and creator payouts** is the open position — analogous to how independent app stores and Stripe-style payments layers emerged atop fragmented platforms. ([RapidClaw](https://rapidclaw.dev/blog/ai-agent-marketplace-guide-2026), [diginomica](https://diginomica.com/salesforce-tdx-2026-how-agentexchange-moves-point-purchase-closer-actual-work)) **[Estimate — strategic interpretation]**

---

## 5. Headwinds & Risks

**Table 10 — Risk Register**

| Risk | Evidence | Severity | Mitigation lever for the platform |
|---|---|---|---|
| **Pilot failure / unclear ROI** | MIT: **95% of enterprise AI pilots** fail to deliver expected returns; Gartner: **>40% of agentic projects canceled by 2027**; only **~2–11%** in real production | High | Curate verified, benchmarked agents; outcome-based pricing; ROI dashboards |
| **Trust, reliability, hallucination** | Most shoppers not comfortable letting AI complete end-to-end transactions (Bain); reliability cited as top scaling barrier | High | Reviews/ratings, SLAs, sandboxing, containment metrics |
| **Security / fraud** | Visa: **+25% malicious bot-initiated transactions** (6 mo), **+40% in US**; **78% of FIs expect AI-agent fraud**; "malicious marketplace agents already in the wild" | High | Identity per agent, runtime policy engine, audit trail, fail-closed |
| **Regulation (EU AI Act)** | In force since 2024; **GPAI fines enforce from Aug 2, 2026** (up to **€15M / 3%** turnover); high-risk fines up to **€35M / 7%**; Article 50 transparency deadline Aug 2 2026; high-risk Annex III deadlines reshuffled by May 2026 Digital Omnibus (possible defer to Dec 2027) | High | Governance-aware architecture; identity, decoupled policy, auditable telemetry, drift detection |
| **Model commoditization** | GPT-4 API price fell **>90% in 18 months**; Khosla: "the model is a GPU-intensive commodity"; value migrates to application/orchestration layer | Medium (net tailwind for marketplaces) | Be model-agnostic; capture value at distribution/trust layer, not model layer |
| **Big-platform competition** | Microsoft (3% fee, Azure commit), Salesforce ($50M builder fund), Google, AWS all launched marketplaces; a16z/Sequoia/Tiger took ~70% of Feb 2026 VC | High | Vendor-neutrality, cross-platform, superior creator economics, governance/trust as moat |
| **Capital concentration / funding bar** | 3 labs raised **$172B in Q1 2026**; Series A now needs **$1–3M ARR + proven autonomous task completion** | Medium | Capital-efficient two-sided model; take-rate revenue from day one |
| **Behavioral drift / governance debt** | Agents change tool-use over time, voiding conformity assessments; observability is where budget will land | Medium | Built-in monitoring/observability as a platform feature |

**Sources:** [Paperclipped](https://www.paperclipped.de/en/blog/ai-agent-deployment-failure-rate/), [GoGloby](https://gogloby.com/insights/ai-adoption-statistics/), [Bain](https://www.bain.com/insights/2030-forecast-how-agentic-ai-will-reshape-us-retail-snap-chart/), [commercetools](https://commercetools.com/blog/agentic-commerce-stats-enterprise-guide), [Axis Intelligence](https://axis-intelligence.com/eu-ai-act-enforcement-guide/), [Stibbe](https://www.stibbe.com/publications-and-insights/ai-act-reloaded-what-the-latest-ai-act-changes-mean-in-practice), [Cerbos](https://www.cerbos.dev/blog/authorization-for-ai-agents-what-to-build-before-eu-ai-act-deadline), [arXiv compliance architecture](https://arxiv.org/html/2604.04604), [Vamsi Talks Tech](https://www.vamsitalkstech.com/agentic-ai/agentic-ai-value-chain-why-enterprise-software-not-hyperscale-compute-drives-durable-returns/), [AgentMarketCap (mega-rounds)](https://agentmarketcap.ai/blog/2026/04/05/vc-mega-round-concentration-risk-openai-anthropic-xai-q1-2026-ai-funding).

---

## 6. TAM / SAM / SOM Framework

We size the opportunity through a **GMV / agent-spend lens** (the dollars flowing through *rentable* agents that a marketplace can intermediate), then convert to **platform revenue** via a take rate. We deliberately **anchor to the standalone agent market (~$8B 2025 → ~$50–53B 2030)**, *not* Gartner's embedded $200B+ figure, because embedded-in-SaaS spend does not flow through a third-party rental marketplace.

### 6.1 Definitions & assumptions

- **TAM** = total annual spend on AI-agent software that *could* be transacted through marketplaces (global, all buyers, all agent types).
- **SAM** = the slice realistically **distributed via third-party marketplaces and rentable** (vs. built in-house, bundled into incumbent SaaS, or sold direct enterprise) — modeled at **~15–22% of TAM** by 2030.
- **SOM** = a credible **3-to-5-year capture** for a new, vendor-neutral entrant, expressed as **platform revenue** at a **15–20% take rate** (consistent with app-store/freelance-marketplace economics; Microsoft's marketplace fee is 3% for pure transactions but full rental/managed marketplaces with payments, trust, and governance command 15–30%).

### 6.2 TAM

**Table 11 — TAM (rentable agent spend)**

| Year | AI agent market (consensus) | TAM rationale | TAM | Confidence |
|---|---|---|---|---|
| 2026 | ~$10.9B | Most agent spend addressable in principle | **~$10–11B** | [Confirmed base] |
| 2028 | ~$23B | ~45% CAGR midpoint | **~$23B** | [Estimate] |
| 2030 | $50–53B | Consensus middle (M&M/GVR/BCC) | **~$50–55B** | [Confirmed base / Estimate fwd] |
| 2033–34 | $139–236B | Long-horizon analyst range | **$140–236B** | [Confirmed source / Estimate fwd] |

- **Optional broader TAM:** if one includes Gartner's embedded agentic-AI spending (**~$202B in 2026 → ~$753B by 2029**), the *theoretical ceiling* is far larger, but only a fraction is marketplace-addressable. We treat this as an **upside scenario**, not the planning TAM. ([Software Strategies Blog](https://softwarestrategiesblog.com/2026/02/26/roundup-of-agentic-ai-forecasts-and-market-estimates-2026/)) **[Confirmed — Gartner]**

### 6.3 SAM

Reasoning for the marketplace-addressable fraction:
- Microsoft/Salesforce/Google/AWS marketplaces, plus independents, already prove a meaningful share of agents flow through marketplaces (1,000–5,000+ agents per platform; 200+ ISV partners on AgentExchange alone). ([Stactize](https://stactize.com/artikel/where-do-1-3-billion-ai-agents-get-sold/))
- Counterweight: enterprises spend **41% on implementation/integration** (not buyable off-the-shelf), much enterprise demand is **direct/custom**, and **>1M agents/quarter are built in-house**. ([AIStackHub](https://aistackhub.ai/ai-spending-by-industry), [Stactize](https://stactize.com/artikel/where-do-1-3-billion-ai-agents-get-sold/))
- We therefore model **third-party-marketplace-distributed, rentable agent spend at ~15–22% of TAM**, weighted toward SMB/mid-market and "horizontal" agents (the long tail that benefits most from a universal marketplace).

**Table 12 — SAM**

| Year | TAM | Marketplace-addressable % | **SAM** | Confidence |
|---|---|---|---|---|
| 2026 | ~$10.5B | ~15% | **~$1.5B** | [Estimate] |
| 2028 | ~$23B | ~18% | **~$4.1B** | [Estimate] |
| 2030 | ~$52B | ~18–22% | **~$9–11B** | [Estimate] |

### 6.4 SOM

A new vendor-neutral entrant must win against incumbent-bundled marketplaces. We model **GMV capture of the SAM** and a **take rate**, ramping over 5 years:

**Table 13 — SOM (platform revenue)**

| Scenario | Yr | SAM | GMV capture | GMV through platform | Take rate | **Platform revenue (SOM)** |
|---|---|---|---|---|---|---|
| Conservative | Y3 (~2029) | ~$6B | 0.5% | ~$30M | 15% | **~$4.5M** |
| Base | Y3 (~2029) | ~$6B | 1.5% | ~$90M | 18% | **~$16M** |
| Base | Y5 (~2031) | ~$11B | 3% | ~$330M | 18% | **~$60M** |
| Aggressive | Y5 (~2031) | ~$11B | 5% | ~$550M | 20% | **~$110M** |
| Aggressive+ | Y5 (~2031) | ~$13B | 6% | ~$780M | 20% | **~$155M** |

- **Headline SOM:** **~$15–60M platform revenue by Year 3–5** in the base case; **up to ~$110–155M** in aggressive scenarios. Expressed as **GMV/agent-rental spend intermediated, ~$90M (Y3) → $330–780M (Y5)**.
- **Why these capture rates are credible:** independent agent directories already aggregate **500–2,000+ agents** with no payments layer; a marketplace that adds **rental metering + trust/governance + creator payouts** can plausibly capture low-single-digit % of a fast-growing SAM, especially in the **SMB/long-tail** segment that incumbents under-serve (Salesforce explicitly "excludes small buyers"). ([AIAgentROI](https://aiagentroi.io/research/2026-q2-ai-agent-pricing-benchmark.html), [Planetary Labour](https://planetarylabour.com/articles/ai-agents-platforms))

**Visual (nested funnel):**

```
TAM  (2030 rentable agent spend)         ~$50–55B
└─ SAM (3rd-party marketplace-distributed)  ~$9–11B   (~18–22% of TAM)
   └─ SOM (Yr3–5 platform revenue)          ~$15–60M base / up to ~$155M aggressive
      (= ~$90M–$780M GMV intermediated × 15–20% take rate)
```

> **Caveats on the model:** (1) All forward TAM beyond 2026 is an **[Estimate]** built on analyst-consensus CAGR; (2) the marketplace-addressable % (SAM) and capture % (SOM) are **our assumptions**, calibrated to comparable app-store and freelance-marketplace dynamics, not reported figures; (3) take-rate assumes a full managed marketplace (payments + governance), not a thin directory.

---

## 7. Timing — "Why Now?" (2026)

A concise thesis grounded in the evidence above:

1. **Standards just matured.** MCP (~97M downloads) and A2A (100–150+ orgs) are now Linux-Foundation-governed and production-grade — *the technical precondition for a universal cross-vendor marketplace did not exist 18 months ago.* ([Stellagent](https://stellagent.ai/insights/mcp-vs-a2a-vs-ap2-protocol-comparison)) **[Confirmed]**
2. **Payment rails for agents are being laid now.** AP2 (60+ orgs), ACP (OpenAI+Stripe), UCP (Visa/Mastercard/Stripe) make **machine-to-machine settlement** feasible — the rental/payout backbone of a marketplace. ([McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants)) **[Confirmed]**
3. **Demand is inflecting, supply is exploding.** 72–84% of enterprises using/planning to increase agent investment; **>1M custom agents built per quarter (+130% QoQ)**; IDC projects **1.3B agents** by ~2028. ([Zapier](https://www.zapier.com/blog/ai-agents-survey/), [Stactize](https://stactize.com/artikel/where-do-1-3-billion-ai-agents-get-sold/)) **[Confirmed]**
4. **Models commoditized; value moved to the distribution/trust layer.** GPT-4 API down **>90%**; VCs explicitly reallocating from model layer to the application/orchestration layer where a marketplace sits. ([Vamsi](https://www.vamsitalkstech.com/agentic-ai/agentic-ai-value-chain-why-enterprise-software-not-hyperscale-compute-drives-durable-returns/), [RapidClaw](https://rapidclaw.app/blog/vc-242-billion-q1-2026-ai-agents-investment)) **[Confirmed]**
5. **Budgets are shifting structurally.** ~40% of IT budgets redirecting from SaaS seats to agentic platforms; Gartner says >50% of enterprises abandon assistive AI by 2028. The spend is moving to exactly the category we serve. ([CIO.inc](https://www.cio.inc/blogs/from-copilot-to-agentic-how-cios-should-make-room-for-ai-p-4100), [Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-04-02-gartner-expects-most-enterprises-to-abandon-assistive-ai-for-outcome-focused-workflow-by-2028)) **[Confirmed]**
6. **Incumbent marketplaces validate the category but leave the universal/long-tail gap open** — all are ecosystem-locked or thin directories; Salesforce explicitly excludes small buyers. ([RapidClaw](https://rapidclaw.dev/blog/ai-agent-marketplace-guide-2026)) **[Confirmed + Estimate]**
7. **The trust/ROI gap is a feature opportunity.** With 95% pilot-failure and 40% project-cancellation risk, a marketplace that *curates, benchmarks, governs, and meters* agents directly monetizes the missing trust layer. ([Paperclipped](https://www.paperclipped.de/en/blog/ai-agent-deployment-failure-rate/)) **[Confirmed]**

**Risk to the timing thesis:** a window of **~12–24 months** before incumbents extend into the long tail; capital concentration raises the funding bar. Speed and vendor-neutral positioning are the hedges.

---

## 8. Sources

> All URLs accessed June 2026. Forecasts beyond 2026 are estimates by the cited firm.

**AI agents / agentic AI market sizing**
1. MarketsandMarkets — AI Agents Market worth $52.62B by 2030 — https://www.marketsandmarkets.com/PressReleases/ai-agents.asp
2. MarketsandMarkets — AI Agents Market blog (2024 $5.26B → 2025 $7.84B) — https://www.marketsandmarkets.com/blog/ICT/ai-agents-market
3. Grand View Research — AI Agents Market to $182.97B by 2033 (49.6% CAGR) — https://www.grandviewresearch.com/press-release/global-ai-agents-market-report
4. AgentMarketCap — Market Size Reality Check 2026 (cross-firm table) — https://agentmarketcap.ai/blog/2026/04/08/ai-agent-market-size-reality-check-2026
5. AgentMarketCap — Why $52.62B by 2030 Is the Consensus Middle — https://agentmarketcap.ai/blog/2026/08/23/ai-agent-market-size-projection-stack-reconciliation
6. AgentMarketCap — Agentic AI Crosses $10B in 2026 (Q1 funding) — https://agentmarketcap.ai/blog/2026/04/11/agentic-ai-market-11-billion-2026-growth-analysis
7. SendToTeam — State of the Agentic AI Industry 2026 (Precedence $236B, GMI $105.6B, BCC $48.3B) — https://www.sendtoteam.com/blog/agentic-ai-industry-report-2026/
8. Software Strategies Blog — Roundup of agentic AI forecasts 2026 (Gartner $201.9B 2026; Deloitte $35–45B 2030) — https://softwarestrategiesblog.com/2026/02/26/roundup-of-agentic-ai-forecasts-and-market-estimates-2026/
9. Software Strategies Blog — Gartner 4Q25 $4.71T AI / agentic $15B→$753B by 2029 — https://softwarestrategiesblog.com/2026/01/22/gartner-4q25-agentic-ai-data-readiness-4-71t-market/

**Adoption & copilot→agent shift**
10. Zapier — State of agentic AI adoption survey 2026 (72%, 84%) — https://www.zapier.com/blog/ai-agents-survey/
11. McKinsey — The State of AI: Global Survey 2025 (88%, 62%, 23%) — https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai
12. GoGloby — AI Agent Adoption Statistics 2026 (Gartner CIO 17%) — https://gogloby.com/insights/ai-adoption-statistics/
13. Pixelbrainy — AI Agent Adoption Statistics 2026 — https://www.pixelbrainy.com/blog/ai-agent-adoption-statistics
14. Paperclipped — AI Agent Deployment Failure Rate 2026 (MIT 95%, 2–11% production, +44% budgets) — https://www.paperclipped.de/en/blog/ai-agent-deployment-failure-rate/
15. digit.fyi — Gartner: 40% of enterprise apps to feature AI agents by 2026 — https://www.digit.fyi/agentic-ai-in-enterprise-gartner/
16. DEVOPSdigest — Gartner 40% task-specific agents / $450B by 2035 — https://www.devopsdigest.com/gartner-40-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026
17. Gartner — Enterprises abandon assistive AI for outcome-focused workflow by 2028 — https://www.gartner.com/en/newsroom/press-releases/2026-04-02-gartner-expects-most-enterprises-to-abandon-assistive-ai-for-outcome-focused-workflow-by-2028
18. CIO.inc — From Copilot to Agentic (40% IT budget shift) — https://www.cio.inc/blogs/from-copilot-to-agentic-how-cios-should-make-room-for-ai-p-4100
19. MegaOne — Will 40% of apps have agents? (critical view) — https://megaoneai.com/blog/agentic-ai-enterprise-prediction-2026/

**Interoperability standards & agent economy**
20. Stellagent — MCP vs A2A vs AP2 vs UCP vs ACP (97M downloads, 100+ orgs) — https://stellagent.ai/insights/mcp-vs-a2a-vs-ap2-protocol-comparison
21. DigitalApplied — AI Agent Protocol Ecosystem Map 2026 — https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp
22. VentureBeat — MCP solved tool calling, A2A solved coordination — https://venturebeat.com/orchestration/mcp-solved-tool-calling-a2a-solved-coordination-what-solves-transport
23. SAP Architecture Center — A2A and MCP for Interoperability — https://architecture.learning.sap.com/docs/ref-arch/ca1d2a3e/1
24. Jangwook — A2A + MCP Hybrid Architecture 2026 — https://jangwook.net/en/blog/en/a2a-mcp-hybrid-architecture-production-guide/

**Agentic commerce**
25. Bain — 2030 Forecast: agentic AI reshapes US retail ($300–500B) — https://www.bain.com/insights/2030-forecast-how-agentic-ai-will-reshape-us-retail-snap-chart/
26. Digital Commerce 360 — Bain: 25% of US ecommerce by 2030 — https://www.digitalcommerce360.com/2025/12/22/bain-agentic-ai-us-ecommerce-sales-2030/
27. McKinsey — Agentic commerce opportunity ($3–5T global) — https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants
28. Hexagon — Agentic Commerce Statistics 2026 (Galileo $7B→$93B; Morgan Stanley 10–20%) — https://joinhexagon.com/blogs/agentic-commerce-statistics-2026-every-number-you-need-to-kn-mmi9bzwl-pjzd
29. commercetools — Agentic Commerce Stats 2026 (J.P. Morgan 25%; Visa fraud +25%) — https://commercetools.com/blog/agentic-commerce-stats-enterprise-guide

**Adjacent markets**
30. Grand View Research — SaaS market ($399B 2024 → $819B 2030) — https://www.grandviewresearch.com/industry-analysis/saas-market-report
31. Mordor Intelligence — SaaS market ($435B 2026 → $977B 2031) — https://www.mordorintelligence.com/industry-reports/software-as-a-service-market
32. Mordor Intelligence — RPA market ($8.12B 2026 → $28.6B 2031) — https://www.mordorintelligence.com/industry-reports/robotic-process-automation-market
33. Technavio — SaaS market (+$616B, 21.7% CAGR) — https://www.technavio.com/report/software-as-a-service-saas-market-size-industry-analysis
34. Mendix — Low-code market (~$65B by 2027) — https://www.mendix.com/blog/low-code-market/

**Freelance / gig / indie supply pool**
35. Capital Counselor — Freelance statistics 2026 ($582B gig economy; $7.65B platform market) — https://capitalcounselor.com/blog/freelance-statistics/
36. Fiverr — Freelancing Statistics 2026 — https://www.fiverr.com/resources/guides/reports/freelancing-and-future-of-work-statistics
37. Upwork — Q4/FY2025 financial results — https://investors.upwork.com/news-releases/news-release-details/upwork-reports-fourth-quarter-and-full-year-2025-financial
38. Fungies — Indie Developer Market 2026 (micro-SaaS $15.7B→$59.6B) — https://fungies.io/indie-developer-market-2026-complete-analysis-data-trends-forecasts-6/

**Marketplaces, pricing, budgets, funding**
39. Salesforce — AgentExchange — https://www.salesforce.com/agentforce/agentexchange/
40. SalesforceDevops — AgentExchange launch ($50M builder fund, 200+ partners) — https://salesforcedevops.net/index.php/2026/04/14/agentexchange-salesforces-bet-that-trust-can-scale-with-agentic-speed/
41. diginomica — Salesforce TDX 2026 AgentExchange analysis — https://diginomica.com/salesforce-tdx-2026-how-agentexchange-moves-point-purchase-closer-actual-work
42. Presenc AI — AI Agent Marketplaces Landscape 2026 — https://presenc.ai/research/ai-agent-marketplaces-landscape-2026
43. RapidClaw — AI Agent Marketplaces 2026 guide — https://rapidclaw.dev/blog/ai-agent-marketplace-guide-2026
44. Planetary Labour — AI Agents Platforms & Marketplaces 2026 — https://planetarylabour.com/articles/ai-agents-platforms
45. AWS — AI agents and tools in AWS Marketplace — https://aws.amazon.com/about-aws/whats-new/2025/07/ai-agents-tools-aws-marketplace/
46. Stactize — Where do 1.3B AI agents get sold? (IDC 1.3B; 1M agents/quarter; 112% larger deals) — https://stactize.com/artikel/where-do-1-3-billion-ai-agents-get-sold/
47. AIAgentROI — 2026 Q2 AI Agent Pricing Benchmark — https://aiagentroi.io/research/2026-q2-ai-agent-pricing-benchmark.html
48. Reinventing.ai — Small Business AI Agent Adoption ($20/mo) — https://insights.reinventing.ai/articles/ai-agents-smb-affordability-2026-02-19
49. JPMorganChase Institute — AI use among small businesses ($20–30/mo entry) — https://www.jpmorganchase.com/institute/all-topics/business-growth-and-entrepreneurship/understanding-ai-use-by-small-businesses
50. AIStackHub — AI Spending by Industry 2026 ($18.4K SMB / $127K mid / $1.4M ent) — https://aistackhub.ai/ai-spending-by-industry
51. Techaisle — 144 AI agents per employee (midmarket); 59:1 (SMB) — https://techaisle.com/blog/694-144-ai-agents-per-employee-midmarket-smb?format=amp
52. ibl.ai — AI agents for small businesses: owned vs SaaS — https://ibl.ai/blog/ai-agents-for-small-businesses-owned-vs-saas

**Funding & model commoditization**
53. CallSphere — Agentic AI funding $12B Q1 2026 (3× YoY) — https://callsphere.ai/blog/agentic-ai-startup-funding-12-billion-q1-2026-tripling-year-over-year
54. RapidClaw — $242B Q1 2026 VC; agent infra $18.7B vs $2.1B 2025 — https://rapidclaw.app/blog/vc-242-billion-q1-2026-ai-agents-investment
55. AgentMarketCap — Three labs raised $172B in Q1 2026 — https://agentmarketcap.ai/blog/2026/04/05/vc-mega-round-concentration-risk-openai-anthropic-xai-q1-2026-ai-funding
56. AgentMarketCap — One mega-round every 2.9 days (top 25 agents $25B) — https://agentmarketcap.ai/blog/2026/04/10/17-us-ai-companies-100m-plus-q1-2026-capital-concentration
57. Vamsi Talks Tech — Agentic AI value chain (GPT-4 API −90%) — https://www.vamsitalkstech.com/agentic-ai/agentic-ai-value-chain-why-enterprise-software-not-hyperscale-compute-drives-durable-returns/

**Regulation**
58. EUR-Lex — Regulation (EU) 2024/1689 (AI Act, full text) — https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?qid=1725233228416&uri=OJ%3AL_202401689
59. Axis Intelligence — EU AI Act Enforcement 2026 (post-Omnibus; GPAI fines Aug 2 2026) — https://axis-intelligence.com/eu-ai-act-enforcement-guide/
60. Stibbe — AI Act reloaded: latest changes (Digital Omnibus, May 2026) — https://www.stibbe.com/publications-and-insights/ai-act-reloaded-what-the-latest-ai-act-changes-mean-in-practice
61. Cerbos — Authorization for AI Agents before EU AI Act deadline — https://www.cerbos.dev/blog/authorization-for-ai-agents-what-to-build-before-eu-ai-act-deadline
62. arXiv — AI Agents Under EU Law: A Compliance Architecture — https://arxiv.org/html/2604.04604
