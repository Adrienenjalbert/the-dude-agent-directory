# Competitive Landscape: AI Agent Marketplaces & Rental Platforms

> **Prepared:** June 2026
> **Scope:** Competitive intelligence for a *universal AI agent marketplace and rental platform* — a directory where anyone can publish an AI agent (any vertical) and earn when others rent/use it. Internal shorthand: "Apify for AI agents" / "App Store for AI agents."
> **Method:** Live web research (June 2026 sources). Numbers cited inline with sources in the [Sources](#sources) section.

---

## 1. Executive Summary

The market we are entering is real, large, and growing fast — but **no one yet owns the "universal, cross-vertical, creator-monetized agent marketplace" position.** The space has fractured into four camps, each leaving a gap:

1. **Walled-garden platform stores** (OpenAI GPT Store, Microsoft Agent Store, Salesforce AgentExchange, Google Agentspace, AWS Bedrock) — huge distribution, but **monetization for independent creators is broken or absent.** OpenAI's revenue share never broadly launched (still invite-only, US-only, ~$0.03/conversation, opaque). Enterprise stores (Salesforce, Microsoft) are gated to certified partners and enterprise buyers.
2. **Single-vendor "AI employee" platforms** (Lindy, Sintra, Relevance AI, Beam AI) — polished products, but **the agents are theirs or a thin curated catalog**, not an open creator economy. Relevance AI is the closest to a true marketplace and notably takes **0% commission** today.
3. **Aggregator / SEO directories** (AI Agents Directory, theresanaiforthat, etc.) — pure discovery layers monetized by **sponsored listings, backlinks, affiliate** — they don't run the agents, don't process usage, and don't pay creators on usage.
4. **Web3 agent bazaars** (Olas Mech Marketplace, Fetch.ai, Theoriq) — genuinely novel agent-to-agent (A2A) payment rails and "rent a skill" economics, but **crypto-native UX limits mainstream reach.**

**The single best structural analog to our vision is Apify** (web-scraping/automation actor store): open publishing, **80/20 creator split**, pay-per-event usage billing, transparent analytics, and it explicitly added "AI agent projects" to its store. The best *economic* analogs for creator-friendly take rates are **GitHub Marketplace (95% to dev)**, **Shopify (0% to first $1M, then 15%)**, and **Make.com (partners keep 100%)**.

**The white space we can own:** a *consumer-and-prosumer-friendly, cross-vertical, usage-metered* agent marketplace with (a) a creator-generous revenue share, (b) real usage-based "rental" billing (not just lead-gen), (c) trust/vetting + verified performance metrics, and (d) modern agent-payment rails (x402 / AP2 / ACP) so agents can even rent each other autonomously.

---

## 2. Market Context (Why Now)

| Metric | Figure | Source |
|---|---|---|
| Global agentic AI market, 2025 | ~$7.9–8.0B | Grand View / Precedence (via Axis Intelligence) |
| Global agentic AI market, 2026 (consensus) | ~$10.9–11.8B | Grand View / Precedence / BCC |
| Agentic AI market, 2026 (broader TAM incl. infra) | ~$40B central ($33–48B) | Information Matters Q1 2026 report |
| Gartner "AI agent software spending," 2026 | $206.5B (broad scope, +139% YoY) | Gartner (via Axis) |
| Gartner: % enterprise apps embedding agents by end-2026 | 40% (up from <5% in 2025) | Gartner (via Axis) |
| VC into agentic AI, Q1 2026 | $2.66B across 44 rounds (+142.6% YoY); avg round ~$60M | AgentMarketCap |
| Cumulative US agentic-AI funding | $17.7B+ | AgentMarketCap |
| Top startup valuations | Glean $4.6B, Sierra $4.5B, Cognition/Devin $2B, Writer $1.9B, Harvey $1.5B | Value Add VC / PitchBook |

**Takeaway:** Capital and enterprise demand are abundant, but the dollars are flowing to *single-agent vertical apps* and *infrastructure/runtimes*, **not** to neutral cross-vertical marketplaces. The "App Store layer" is structurally under-served relative to the apps themselves — exactly the gap a marketplace plays.

A second tailwind: **agent-native payment rails matured in 2025–26** (x402, AP2, ACP, MPP), making true per-use "rental" and even agent-to-agent purchasing technically feasible for the first time (see §6).

---

## 3. Category 1 — Direct AI Agent Marketplaces

### 3.1 Comparison Table

| Player | What it is | Who publishes | Who buys | Monetization / Rev-share | Traction | Gap it leaves open |
|---|---|---|---|---|---|---|
| **Agent.ai** (Dharmesh Shah / HubSpot) | Consumer "agora for agents" + builder | Community + Dharmesh | Marketers, SMBs, prosumers | Credit-based runs; Free tier w/ weekly limits; Premium agents $10/agent/mo; Pro $25/mo all-access. Historically free; **creator payouts not the core model** | 230K+ users, 250K newsletter, 280+ agents (early 2025) | No real **creator revenue share**; consumption credits accrue to platform, not publishers |
| **OpenAI GPT Store** | GPTs inside ChatGPT | Anyone (3–5M GPTs) | 700M+ ChatGPT weekly users | **Rev-share never broadly launched** — invite-only, US-only, engagement-based (~Spotify pro-rata). ~$0.03/conversation; most creators $100–500/mo ceiling | 3–5M GPTs; long-tail dominates, tiny head captures usage | Monetization is the cautionary tale: opaque, creators can't set prices, no real payouts |
| **Microsoft Agent Store / Copilot Studio** | Agents inside M365 Copilot & Teams | Partners (via Partner Center) + org makers | Enterprise admins/users | SaaS offers via Commercial Marketplace; **MS standard marketplace economics (3% transact + enterprise terms)**; admin-gated publishing | Embedded in M365 install base | Gated to enterprise + admin approval; not an open consumer creator economy |
| **Salesforce AgentExchange** | Unified marketplace (merged AppExchange + Slack + Agentforce) | Certified ISV partners | 160K+ Salesforce enterprise customers | PNR rev-share **15% ISVforce / 25% OEM** (marginal rates drop with scale); $50M Builder Initiative | 10K+ apps, 1,000+ agents/tools, 2,600+ Slack apps | Enterprise-only, heavy vetting, partner-gated; no long-tail/indie publishing |
| **Google Agentspace / Vertex Agent Builder** | Enterprise knowledge+action layer; ADK dev platform | Enterprises / developers | Enterprise (gated rollout) | Workspace add-on pricing; **no creator marketplace payouts** | ADK 7M+ downloads; Wells Fargo deployment | No open marketplace; build-your-own, not rent-others |
| **AWS Bedrock AgentCore** | Managed agent runtime (GA Oct 2025) | Developers (any framework/model) | Enterprise builders | Infra/usage billing; pre-built agents from **AWS Marketplace (~3% SaaS listing fee)** | 180% YoY Bedrock growth | Runtime + infra, not a consumer agent storefront with creator payouts |
| **Poe** (Quora) | Consumer multi-bot app | Bot creators (US, ~23 regions) | Consumers (points budget) | **Price-per-message** set by creator (max $10K/1,000 msgs) + per-subscription bounty (up to $20/sub). Paid in USD, Stripe, $10 min payout | "Tens of millions/yr" in creator payments run-rate | Chat-bot framing only; not task/automation agents; consumer-only |
| **Relevance AI Marketplace** | Curated agent/tool marketplace atop GTM agent platform | "Relevance Builders" | GTM/sales teams, ops | **Creator sets price; Relevance takes 0% commission** (only Stripe fees); 7-day refund window; clonable per-project | Marketplace live; platform from $19/mo Pro | Tied to Relevance platform; GTM-skewed; small catalog vs. universal |
| **Lindy** | No-code agent builder ("AI employees") | Mostly first-party templates | SMBs, support/sales teams | Credit-based: Free 400cr, Pro $49.99/5,000cr, Business $199.99/20,000cr. **Trustpilot 2.4/5 — credit unpredictability** | Widely used; billing is the weak point | Not a creator marketplace; you build your own; credit model resented |
| **Sintra AI** | Pre-built "AI employee" helpers | First-party only | Solopreneurs | Subscription ~$97/mo (Starter) / $197 (Pro); 250 credits/mo | Popular w/ solopreneurs | Closed catalog; no third-party publishing or payouts |
| **Beam AI** | Enterprise agentic process automation | First-party / custom | Mid-market & enterprise finance/ops | Custom enterprise (~$25K–$150K+/yr est.); public tiers $990–$3,990/mo | Enterprise BPO/finance focus | No marketplace; bespoke; opaque pricing |
| **AgentGPT (Reworkd)** | Autonomous agent demo (OSS) | — | — | **Archived Jan 2026; maintenance mode only** | Historically viral | Dead as a commercial play — cautionary tale on "autonomous agent" hype without a business model |
| **Hugging Face Spaces** | Host/run ML demos & agents | Anyone | Developers/community | Compute-metered (ZeroGPU free quota; PRO $9/mo; over-quota $1/10min GPU). **Community GPU grants**; no creator usage-payout to authors | Massive developer community | Hosting/compute model, **no mechanism to pay Space authors for usage** |

### 3.2 Web3 / Decentralized Agent Bazaars

| Player | Model | Rent/monetize mechanism | Traction | Gap |
|---|---|---|---|---|
| **Olas (Autonolas) — Mech Marketplace** | "AI Agent Bazaar"; agents hire other agents' skills | Crypto **micropayments per skill**, fully autonomous A2A; agents register skills for hire; ERC-721 agent/component registries; OLAS staking ("proof of active agent") | 1.6M+ agent txns across 8 chains; ~1,200 agents by ~44 operators; 1B OLAS cap (10yr) then 2% inflation | Crypto-native UX; mainstream/prosumer adoption limited |
| **Fetch.ai** | Agent network + token economy | uAgents, agent registration & discovery, token-incentivized | Long-running crypto-AI project | Crypto UX; niche vs. mainstream creators |
| **Theoriq (THQ)** | Decentralized multi-agent protocol; "Infinity Hub" marketplace | Agent discovery + scoring + monetization, DeFi-focused ("AgentFi") | Vault products (AlphaVault, Gold Vault) | Narrow DeFi/yield focus; not general-purpose |

**Why Web3 matters to us:** Olas's Mech Marketplace is the clearest existing proof that **"agents renting skills from other agents for micropayments"** works mechanically. The lesson is the *economic primitive*, not necessarily the crypto stack — though x402/AP2 (see §6) let us adopt the primitive with mainstream UX.

---

## 4. Category 2 — Adjacent API / Automation Marketplaces (Model Lessons)

| Player | Rev-share / take rate | Billing model | Who publishes / buys | Key lesson for us |
|---|---|---|---|---|
| **Apify (Actor Store)** ⭐ | **Creator keeps 80%** (`profit = 0.8×revenue − platform costs`); free-tier users excluded from cost calc; loss-floored at $0/Actor | **Pay-per-event (PPE)** + pay-per-usage; rental model being **sunset in 2026** → all moving to usage; most prices $1–10 / 1,000 results | Devs publish scrapers/automation/**AI agents**; anyone runs them | **The blueprint.** Usage-metered, generous split, transparent analytics dashboard (revenue, cost, success rate, funnel), tiered enterprise discounts. Explicitly supports "AI agent projects." |
| **RapidAPI (Nokia)** | **25% flat marketplace fee** (raised from 20% Nov 2025) + PayPal payout fees | Subscriptions + pay-as-you-go; provider sets price | 40K+ APIs, 4M+ devs | High take rate (25%) becomes a "distribution tax" — providers churn off once their brand generates demand. **Don't over-tax at scale.** |
| **Zapier** | No app-store payout; partner program rewards via leads/placement, not revenue | Task/activity-based; "Zapier Agents" add-on; MCP server exposes 8,000+ apps/40,000+ actions to any LLM | Integration partners / SMB ops | The catalog (8,000+ apps) is the moat. Becoming the **"tools API" for external LLMs** is a strategic posture worth noting. |
| **Make.com** | **Partners keep 100%** (no native marketplace billing yet) | Operation-based; Community Apps self-monetized; suggested $1–10/mo SMB, $50–500 enterprise | Integration partners | No payment infra = friction; **opportunity to do the billing they don't.** |
| **n8n** | No native per-run rev-share | Execution-based (1 execution regardless of steps — cheap for complex flows); template/endpoint sales via 3rd-party | Technical teams, self-host | Execution-based pricing is **cost-predictable** and loved by power users — contrast with credit-model backlash. |
| **GitHub Marketplace** ⭐ | **Developer keeps 95%** (GitHub 5%; down from 25% in 2021) | Flat-rate or per-unit; $500/mo min payout; verified publishers for paid | Devs publish apps/Actions/Copilot extensions | **Most creator-generous take rate in the space.** Verified-publisher gating for paid plans = trust without killing the long tail. |
| **Gumroad** | **10% + $0.50** direct; **30%** via Discover marketplace | One-time/subscription; Merchant-of-Record (handles tax since Jan 2025) | Any digital creator | Two-tier insight: **charge more only when *you* drive the sale** (Discover 30%) vs. creator's own traffic (10%). MoR removes global tax burden. |
| **Hugging Face Hub** | Compute-metered; no author usage-payout | PRO $9/mo, enterprise seats; inference providers | ML community | Community grants + free compute drive supply; but **no author monetization is a missed loop.** |

⭐ = strongest models to emulate.

---

## 5. Category 3 — Plugin / App Store Models (Rev-share, Vetting, Discovery, Ranking)

| Store | Rev-share | Vetting | Discovery / Ranking | Lesson |
|---|---|---|---|---|
| **Shopify App Store** | **0% on first $1M lifetime, then 15%** (lifetime cap as of Jan 2025; was annual reset) + 2.9% processing | App review for quality/security | Category browse, featured, search; 16,000+ apps; $1B+ paid to devs | **0%-until-traction is a phenomenal supply-side magnet.** Lifetime (not annual) cap is the "platform grew up" move once you have scale. |
| **Salesforce AppExchange** | 15% ISVforce / 25% OEM; marginal rates fall above $1M AOV | **Rigorous security review** ($300–$2,700, ~2 months) | AI-guided search (Fall '26), curated, 13M+ installs | Heavy vetting = enterprise trust, but high friction for indie creators. **Tier your vetting.** |
| **Atlassian Marketplace** | **0% to first $1M lifetime Forge revenue** (from Jan 2026); then 16%→17% Forge / 20%→25% Connect | App review; Forge (hosted) vs Connect | Category + featured | Following Shopify's "0% to $1M" pattern; **rewards building on the native (Forge) runtime with lower fees** — a lever to push creators onto your stack. |
| **Chrome Web Store** | (Payments deprecated) | **Hybrid auto + manual review**; spam policy bans repetitive/duplicate listings, fake reviews, keyword stuffing (>5 instances flagged); permission minimization speeds review | Featured badge, search ranking, install/rating signals | **The flooding cautionary tale.** Surge in submissions → multi-week review backlogs; duplicate-content & review-manipulation are the dominant abuse vectors. **Design anti-spam from day one.** |

### 5.1 Cross-cutting best practices distilled

- **Revenue share:** The winning supply-side magnet in 2026 is **0% until a creator hits ~$1M lifetime**, then 15% (Shopify, Atlassian). GitHub's flat **95/5** is the most generous. RapidAPI's **25%** is now seen as a "distribution tax." → Land between **80–95% to creator**, with a **0%-to-traction honeymoon**.
- **Billing:** Usage/execution-based (Apify PPE, n8n executions) is preferred and predictable; **credit systems generate backlash** when opaque (Lindy 2.4/5 Trustpilot). → Meter on clear events; show real-time cost.
- **Vetting:** **Tier it.** Light/automated for the long tail (Chrome), rigorous security review for "verified"/"enterprise" badges (Salesforce, GitHub verified publisher). Gate **paid** listings behind verification.
- **Discovery & ranking:** Reward genuine usage + satisfaction (OpenAI's stated intent, Apify success-rate metrics) and **explicitly forbid** review manipulation, duplicate/keyword spam (Chrome policies).
- **Trust mechanisms:** Verified performance metrics (success rate, latency, cost-per-result à la Apify analytics), refund windows (Relevance 7-day), Merchant-of-Record tax handling (Gumroad), and security/data-scope controls (Salesforce admin data boundaries).

---

## 6. Emerging Layer — Agent Payment Rails (Critical Enabler for "Rental")

True per-use *rental* — and agent-to-agent renting — now has standards:

| Protocol | By | Layer | Relevance to us |
|---|---|---|---|
| **x402** | Coinbase | Settlement (HTTP 402, stablecoin) | Pay-per-request, no accounts; 140M+ txns, ~$0.0001 fee, <200ms; **ideal for metered agent rental + A2A micropayments**; "Bazaar" discovery layer on roadmap |
| **AP2** | Google + 60–100 partners | Authorization / trust (signed mandates) | Proves an agent has user permission to spend; rail-agnostic; **enterprise auditability** for delegated agent spend |
| **ACP** | OpenAI + Stripe | Checkout / merchant | In-chat instant checkout; **4% merchant fee**; physical goods today, digital later |
| **MPP** | Stripe + Tempo | Sessions / streaming micropayments | Hybrid fiat/crypto streaming — fits subscription-ish metered usage |

**Strategic implication:** We can offer creators **"rent my agent per task/per token/per outcome"** with x402/MPP rails and AP2 authorization — something the walled gardens (which restrict external/digital payments, e.g. OpenAI Apps SDK *bans* selling digital products/subscriptions in-app today) structurally can't or won't do. This is a defensible wedge.

---

## 7. Competitive Positioning Map

Two axes: **Openness of publishing** (closed/first-party ↔ open/anyone) × **Creator monetization on usage** (none ↔ usage-metered payouts).

```
                      CREATOR EARNS ON USAGE (payouts)
                                  ▲
                                  │
   Poe (per-msg) ●                │             ● Apify (80/20 PPE)  ⭐ closest analog
   Relevance Mktpl (0% fee) ●     │             ● Olas Mech (A2A crypto)
                                  │             ● GitHub Mktpl (95/5)
                                  │
   ───────────────────────────────┼───────────────────────────────►
   CLOSED / FIRST-PARTY            │              OPEN / ANYONE PUBLISHES
                                  │
   Sintra ●  Lindy ●  Beam ●      │   ● GPT Store (open pub, broken payouts)
   Agentspace ●                   │   ● AI Agents Directory (open, no usage payout)
   Agent.ai (credits, no payout) ●│   ● HF Spaces (open, no author payout)
   MS Agent Store ● (gated)       │   ● Salesforce AgentExchange (gated/vetted)
                                  ▼
                       CREATOR DOES NOT EARN ON USAGE

         ┌─────────────────────────────────────────────┐
         │   ★ OUR TARGET: top-right quadrant, but with │
         │   mainstream (non-crypto) UX + cross-vertical│
         │   breadth + usage-metered creator payouts    │
         └─────────────────────────────────────────────┘
```

**Niche occupancy summary:**
- **Top-right (open + usage payouts):** sparsely populated — **Apify** (automation/scraping, adding agents), **Olas** (crypto), **GitHub** (dev tools). **None is a mainstream, cross-vertical, prosumer agent marketplace.** ← our space.
- **Top-left (closed + payouts):** Poe (chat bots), Relevance (GTM).
- **Bottom-right (open + no usage payout):** GPT Store, HF Spaces, directories, AgentExchange — big distribution, weak/absent creator economics.
- **Bottom-left (closed + no payout):** the "AI employee" SaaS (Lindy/Sintra/Beam) and enterprise layers.

---

## 8. White Space — Gaps We Can Own

1. **Universal + cross-vertical + indie-friendly.** Every credible payout marketplace is *vertical-locked* (Apify=automation, GitHub=dev, Relevance=GTM, Theoriq=DeFi) or *platform-locked* (GPT/Salesforce/MS). **No neutral, any-vertical "App Store for agents" with real creator payouts exists.**
2. **Working usage-based "rental" with creator payouts in mainstream UX.** GPT Store's payouts are broken; HF/directories don't pay on usage; Olas pays but is crypto-native. We can deliver **Apify-style 80%+ usage payouts with consumer-grade UX** and modern rails (x402/AP2/MPP) so even *agents can rent agents.*
3. **Trust & verified performance as a product.** Surface **verified success rate, latency, cost-per-outcome, uptime** (Apify-style analytics) + tiered vetting badges. Directories sell "verified" badges as a $99 gimmick — we can make verification *mechanical and earned.*
4. **Creator-generous economics as acquisition.** A **0%-to-first-$1M, then 15%** (Shopify/Atlassian) or **flat ~90/10** posture would be best-in-class vs. RapidAPI's 25% and the absent payouts elsewhere — a supply-side flywheel magnet.
5. **Merchant-of-Record + global payouts** (Gumroad model) to remove tax/compliance friction creators hate.
6. **Outcome-based pricing primitive.** VC thesis (Value Add VC): agents are increasingly **priced on outcomes, not seats.** A marketplace that natively supports per-outcome/per-task billing (vs. per-seat) rides this shift.

---

## 9. Best Practices to Copy

| Lever | Copy from | Specific |
|---|---|---|
| Revenue share | Shopify / Atlassian / GitHub | 0% to first $1M lifetime → 15%; or flat 90/10. Aggregate at account level. |
| Billing model | Apify / n8n | Usage/event-based, transparent real-time cost; avoid opaque credits |
| Creator analytics | Apify | Revenue/cost/profit trends, success rate, cost-per-1K-results, acquisition funnel, shared debug runs |
| Vetting tiers | Salesforce + GitHub + Chrome | Auto-review long tail; security review for "verified"; gate **paid** listings behind verification |
| Trust/refunds | Relevance AI / Gumroad | 7-day refund window; Merchant-of-Record for tax |
| Discovery | OpenAI (stated) / Apify | Rank on genuine usage + satisfaction; feature high-utility, high-satisfaction agents |
| Payment rails | Coinbase x402 / Google AP2 / Stripe MPP | Per-use + A2A micropayments; signed mandates for delegated spend |
| Enterprise pull | Salesforce | Data-boundary/API-scope controls, admin governance for the enterprise tier |

## 10. Pitfalls to Avoid

| Pitfall | Evidence | Mitigation |
|---|---|---|
| **Broken/opaque monetization** | GPT Store rev-share never broadly launched; invite-only, US-only, ~$0.03/conversation, $100–500/mo ceiling; creators can't set prices | Let creators **set their own prices**; pay transparently on usage; publish the formula |
| **Credit-model backlash** | Lindy Trustpilot 2.4/5 on unpredictable credits | Usage/event metering with real-time cost display; predictable bills |
| **Over-taxing creators** | RapidAPI 25% seen as "distribution tax"; providers churn once branded | Keep take rate low (≤15–20%), 0%-to-traction honeymoon |
| **Low-quality flooding & duplicates** | Chrome Web Store: submission surge → multi-week backlogs; duplicate/keyword-spam & fake-review abuse | Anti-spam policy from day one: ban duplicate listings, keyword stuffing, self-reviews; permission minimization |
| **Hype without a business model** | AgentGPT archived Jan 2026 | Tie product to a real monetization loop, not autonomy demos |
| **Walled-garden dependency** | OpenAI Apps SDK *bans* selling digital products/subscriptions in-app | Be the **neutral, payments-open** layer the gardens won't be |
| **Enterprise-only gating kills the long tail** | Salesforce/MS partner-gating + heavy review | Serve prosumers/indies with light vetting; reserve heavy review for premium/enterprise badges |
| **Discovery-only ≠ marketplace** | Directories monetize backlinks/sponsorship, never touch usage | Own the **run + billing**, not just the listing, to capture usage economics |

---

## Sources

*All accessed June 2026.*

**Direct AI agent marketplaces**
- Agent.ai pricing — https://blog.agent.ai/agent.ai-is-introducing-platform-based-pricing-heres-whats-staying-free ; Agent Teams — https://simple.ai/p/ai-agent-teams ; Boston Globe (230K users, 280+ agents) — https://www.bostonglobe.com/2025/01/31/business/hubspot-dharmesh-shah-ai-artificial-intelligence-agents/
- GPT Store economics — https://presenc.ai/research/ai-tool-marketplace-economics-2026 ; rev-share status — https://www.monacocpa.cpa/post/openai-gpt-store-ai-agent-taxes ; OpenAI community thread — https://community.openai.com/t/what-is-the-status-with-gpt-store-revenue-share/839172 ; $100–500/mo ceiling — https://www.digitalapplied.com/blog/gpt-store-custom-gpts-business-guide-2026
- OpenAI Apps SDK & monetization rules — https://developers.openai.com/apps-sdk/app-submission-guidelines ; https://openai.com/index/introducing-apps-in-chatgpt ; community monetization Q&A — https://community.openai.com/t/chatgpt-app-monetization-apps-sdk/1372343 ; Instant Checkout/ACP — https://openai.com/index/buy-it-in-chatgpt/
- Microsoft Agent Store / Copilot Studio — https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-agent-store ; submission — https://learn.microsoft.com/en-us/microsoft-agent-365/developer/submit-agent-partner-center ; transacting — https://learn.microsoft.com/en-us/partner-center/marketplace-offers/transacting-commercial-marketplace
- Salesforce AgentExchange — https://www.salesforce.com/agentforce/agentexchange/ ; TDX 2026 — https://diginomica.com/salesforce-tdx-2026-market-marketbut-actually-only-one-market-now-agentexchange-becomes-corporate ; $50M initiative — https://www.salesforceben.com/appexchange-slack-marketplace-and-the-agentforce-ecosystem-are-now-one-with-fresh-50m-funding/ ; launch PR — https://www.salesforce.com/news/press-releases/2025/03/04/agentexchange-announcement/
- Google Agentspace / Vertex / AWS Bedrock comparison — https://agentmarketcap.ai/blog/2026/04/09/aws-bedrock-agentcore-vs-azure-ai-agent-service-vs-google-vertex-ai-agents-q2-2026 ; AgentCore GA — https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-is-now-generally-available/ ; Agentspace — https://thedebuggersitsolutions.com/blog/google-ai-agents-explained
- Poe creator monetization — https://help.poe.com/hc/en-us/articles/21921312368020-Poe-Creator-Monetization-FAQs ; per-message launch — https://poe.com/blog/new-on-poe-creator-monetization-via-price-per-message ; TechCrunch — https://techcrunch.com/2024/04/09/poe-introduces-a-price-per-message-revenue-model-for-ai-bot-creators/
- Relevance AI marketplace (0% commission, 7-day refund) — https://relevanceai.com/docs/get-started/marketplace/introduction ; pricing — https://relevanceai.com/docs/get-started/pricing
- Lindy pricing/credits — https://docs.lindy.ai/account-billing/credits ; Trustpilot 2.4/5 & state of platforms — https://www.teamday.ai/blog/state-of-ai-agent-platforms-2026 ; Sintra — https://agent-finder.co/reviews/sintra-ai
- Beam AI pricing — https://toolradar.com/tools/beam-ai ; https://agent-finder.co/reviews/beam-ai
- Hugging Face Spaces ZeroGPU — https://huggingface.co/docs/hub/spaces-zerogpu ; pricing — https://www.metacto.com/blogs/the-true-cost-of-hugging-face-a-guide-to-pricing-and-integration ; Spaces GPU/grants — https://huggingface.co/docs/hub/spaces-gpus

**Web3 agent marketplaces**
- Olas Mech Marketplace — https://olas.network/blog/olas-launches-the-mech-marketplace-the-ai-agent-bazaar ; OLAS token/traction — https://phemex.com/academy/what-is-olas-token-ai ; Alea Research (1.6M txns, 1,200 agents) — https://alearesearch.substack.com/p/olas-co-own-general-purpose-ai-agents
- Theoriq — https://www.theoriq.ai/blog/wen-agents-3-introducing-theoriqs-ai-marketplace-with-the-innovative-infinity-hub ; THQ tokenomics — https://medium.com/@0xjacobzhao/theoriq-research-report-the-evolution-of-agentfi-in-liquidity-mining-yields-fd2c36a6fd4e

**Adjacent API/automation marketplaces**
- Apify monetization (80/20, PPE) — https://docs.apify.com/platform/actors/publishing/monetize ; pricing/costs — https://docs.apify.com/platform/actors/publishing/monetize/pricing-and-costs ; PPE — https://docs.apify.com/platform/actors/publishing/monetize/pay-per-event ; rental sunset — https://docs.apify.com/academy/actor-marketing-playbook/store-basics/how-actor-monetization-works
- RapidAPI 25% fee — https://docs.rapidapi.com/docs/payouts-and-finance ; payout calc — https://rapidapi.zendesk.com/hc/en-us/articles/19308532866068 ; alternatives/rev-share table — https://www.buildmvpfast.com/alternatives/rapidapi
- Zapier/Make/n8n 2026 — https://medium.com/@automation.labs/zapier-vs-make-vs-n8n-in-2026-where-ai-agents-actually-fit-1edbbeff85f3 ; Zapier partner program — https://zapier.com/developer-platform/partner-program ; Make community apps (100% to partner) — https://developers.make.com/custom-apps-documentation/community-apps/how-does-it-work.md ; n8n vs Zapier — https://tech-insider.org/n8n-vs-zapier-2026-2/
- GitHub Marketplace 95/5 — https://github.com/github/docs/blob/main/content/site-policy/github-terms/github-marketplace-developer-agreement.md ; rev-share change — https://github.blog/news-insights/company-news/github-reduces-marketplace-transaction-fees-revamps-technology-partner-program/
- Gumroad fees (10%/30%) — https://gumroad.com/pricing ; https://gumroad.com/help/article/66-gumroads-fees.html ; MoR comparison — https://www.globalsolo.global/blog/stripe-vs-paddle-vs-lemon-squeezy-2026

**Plugin / app store models**
- Shopify rev-share (0%→15%, $1M lifetime) — https://shopify.dev/docs/apps/launch/distribution/revenue-share ; change announcement — https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share ; analysis — https://www.massaad.ca/shopify/apps/platform-economics/business/2026/04/06/shopify-kills-the-1m-exemption
- Salesforce AppExchange PNR (15%/25%, marginal) — https://www.salesforceben.com/what-is-salesforce-oem-how-do-i-get-started-with-my-app-idea/ ; partner program/marginal PNR — https://partners.salesforce.com/s/education/appinnovators/AppExchange_Partner_Program
- Atlassian Marketplace 2026 rev-share — https://www.atlassian.com/blog/development/updates-to-marketplace-revenue-share-2026
- Chrome Web Store review/spam — https://developer.chrome.com/docs/webstore/review-process ; spam FAQ — https://developer.chrome.com/docs/webstore/program-policies/spam-faq ; review backlog PSA — https://groups.google.com/a/chromium.org/g/chromium-extensions/c/VJ6DcpEn51Y

**Market size, funding & payment rails**
- Market size/adoption — https://axis-intelligence.com/ai-agents-statistics/ ; $40B TAM report — https://informationmatters.net/wp-content/uploads/2026/04/agentic-ai-market-report-forecast-Q1-2026.pdf ; $100B+ thesis/valuations — https://valueaddvc.com/blog/ai-agent-startups-the-100b-market-taking-shape-in-2026 ; Q1 funding surge — https://agentmarketcap.ai/blog/2026/04/11/agentic-ai-market-11-billion-2026-growth-analysis ; PitchBook Q2 2026 — https://pitchbook.com/news/reports/q2-2026-building-backing-and-buying-ai
- Payment rails (x402/AP2/ACP/MPP) — https://www.crossmint.com/learn/agentic-payments-protocols-compared ; https://www.openfort.io/blog/agentic-payments-landscape ; AP2 — https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol ; x402 — https://docs.cdp.coinbase.com/x402/welcome ; rails explainer — https://www.ccn.com/education/crypto/ai-agents-payment-rails-mpp-acp-ap2-x402-explained/

> **Note on figures:** Market-size and earnings figures are drawn from third-party research/aggregators and vendor disclosures; where a number is a community estimate or analyst projection (e.g., GPT Store creator earnings, Beam AI annual pricing, broad TAM), it is labeled as such inline. Revenue-share percentages and platform pricing are taken from official docs where available.
