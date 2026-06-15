# Competitive Review: agent.ai (Dharmesh Shah / HubSpot) vs. The Dude

> **Prepared:** June 2026
> **Author:** Competitive intelligence & strategic positioning
> **Scope:** Deep-dive on **agent.ai** — the closest "looks-like-us" competitor — and a candid reflection on what it means for The Dude's positioning and differentiation.
> **Method:** Fresh live web research (June 2026): agent.ai's own pricing/docs/blog, simple.ai (Dharmesh's newsletter), HubSpot earnings commentary, and 2026 third-party reviews. Builds on (does not duplicate) `competitive-landscape.md`. Figures labeled **[confirmed]** vs. **[estimate]** inline; full URLs in [Sources](#sources).

---

## 1. Executive Summary

agent.ai is the single most important competitor to study because, on the surface, it looks like the thing we want to build: an open, cross-use-case **marketplace + no-code builder for AI agents**, backed by a tier-1 distribution machine (HubSpot's CTO Dharmesh Shah and his ~250K-subscriber newsletter). It is **big and growing fast** — 2M+ users, 25,000+ builders, 44,000+ agents built — and it has a brand and community moat we cannot match on day one.

**But the resemblance is skin-deep on the one axis that defines our business: creator economics.** As of June 2026, agent.ai **does not pay builders for usage.** Its credits "cannot be bought, sold, or exchanged for money" **[confirmed]**; the new Feb 2026 paid plans ($10/agent/mo, $25/mo Pro) are **platform subscriptions that accrue to agent.ai, not revenue split to the builder**; builder revenue-sharing is still labeled **"coming soon"** **[confirmed]**. The only money builders have received to date is **one-off hackathon bounties** (e.g., a documented ~$27 per agent) **[confirmed]** — not a usage-metered payout model.

That gap is our wedge. agent.ai is, functionally, a **community + distribution play for marketers/SMBs gravitating toward HubSpot**, monetized like a freemium SaaS. The Dude is a **creator-monetized, cross-vertical, usage-metered marketplace** — economically a different animal (Apify/Stripe-Connect DNA, not "professional network" DNA).

**Single sharpest differentiation wedge:** **Real, usage-metered creator payouts** — builders on The Dude *get paid every time their agent runs* (target 80–95% to creator, 0%-to-first-traction honeymoon, Stripe Connect, Merchant-of-Record), whereas agent.ai builders get **visibility and reputation but $0 of recurring usage revenue**. We are a *business model* for builders; agent.ai is a *portfolio/résumé* for them.

**Honest caveat:** agent.ai could close this gap (it has signaled it wants to) and would do so from a position of enormous distribution strength. So the wedge must be paired with **neutrality (not CRM-locked), cross-vertical depth beyond marketing/SMB, and trust/verified-performance and agent-payment-rail features a HubSpot-aligned product is unlikely to prioritize.** We should treat creator monetization as a *land-grab to win and lock in supply before agent.ai turns payments on*, not as a permanent moat by itself.

---

## 2. What agent.ai Actually Is (as of 2026)

### 2.1 Positioning & tagline
- Self-described as **"the #1 (and only) professional network for AI agents"** and an **"agora for agents"** — a place to **discover, evaluate, hire, build, and share** agents that do real knowledge work **[confirmed]**.
- The framing is deliberately a **"LinkedIn/professional network for agents"** (followers, builder reputation, public profiles), not "an Apify/App Store with payouts." Monetization-for-builders is *not* the headline; **community, distribution, and reputation are.**

### 2.2 Target users
- **Demand side:** non-technical professionals — **marketers, sales/SDRs, recruiters, consultants, small-business owners** — who want a ready-made agent for research, outreach, meeting prep, content, etc. Heavily **marketing/sales/SMB/prosumer-skewed** (its agent "Teams" are literally *Sales Prospecting, Content Marketing, Social Content*) **[confirmed]**.
- **Supply side:** "citizen developer" builders — explicitly **"marketers, sales reps, educators, consultants, small business owners,"** not primarily professional software engineers **[confirmed]**.

### 2.3 Core features
- **No-code Agent Builder** — visual workflow editor; wire prompts + tools + decision logic with **60+ first-party "actions"** (LLM calls, web scraping, image/audio, integrations). No Python/API-key management required **[confirmed]**.
- **Agent directory / discovery** — searchable public catalog with **task counts, star ratings, model used, and builder identity** as social proof; follow-builders, bookmark, browse by tag **[confirmed]**.
- **Agent Teams** — multiple specialized agents collaborate/share context to run multi-step, end-to-end workflows **[confirmed]**.
- **Ranking** — usage + ratings driven; Shah notes a **strong power law** (a small number of agents get most of the use) **[confirmed]**.
- **Model access** — frontier + open models (Claude, OpenAI o-series, DeepSeek, Flux, Ideogram, etc.) bundled in **[confirmed]**.
- **Agent-native interfaces** — public **API**, **OpenAPI spec**, and an **MCP server (`mcp.agent.ai`)**, plus `llms.txt`/`pricing.md` for machine discovery **[confirmed]**. (Note: they are *also* investing in interop/AEO — we don't have a clean lead here by default.)
- **How agents are built:** primarily the **proprietary no-code builder** (you build *on* agent.ai's framework with their actions). It is **not** a "bring any framework / package your existing LangGraph/CrewAI agent" host. This is a meaningful contrast with our "publish an agent of any framework" pillar.

### 2.4 The HubSpot relationship (important nuance)
- agent.ai was **built by Dharmesh Shah (HubSpot co-founder & CTO) through his personal LLC, using freelancers — not HubSpot employees** — to move fast and stay off HubSpot's roadmap **[confirmed]**.
- **As of mid-2026 it still runs independently and is NOT owned by HubSpot** **[confirmed]**. Shah has openly signaled the intent for HubSpot to take it over eventually (he floated the same **"$1 acquisition"** path his prior side-project *ChatSpot* took before becoming HubSpot's **Breeze Copilot**) **[confirmed]**.
- HubSpot CEO Yamini Rangan has publicly endorsed it ("we've been incubating Agent.AI") on earnings calls **[confirmed]**. Separately, HubSpot ships its **own** first-party **Breeze Agents** inside the CRM — and may mine agent.ai for *which* agents to productize as Breeze Agents **[confirmed]**.
- **Practical read:** Treat agent.ai as **"HubSpot-gravitational"** — not formally HubSpot, but with a credible path to HubSpot's distribution, brand halo, and (eventually) CRM integration. The distribution threat is real *even though the cap-table is not HubSpot's today.*

---

## 3. Business Model & Economics (the crux)

### 3.1 Pricing (NEW as of Feb 2026 — this changed vs. "historically free")
agent.ai introduced **platform-based pricing for the first time in February 2026** **[confirmed]**:

| Plan | Price | What you get |
|---|---|---|
| **Free** | $0 | Full access to marketplace agents + full builder access; **weekly run limits** (not feature limits); no credit card; limited access to Premium agents |
| **Premium (per agent)** | **$10 / agent / month** | "Generous runs" on a single specialized Premium agent (meeting prep, follow-up, company research, etc.) |
| **Pro** | **$25 / month** | All Premium agents; newly launched Premium agents auto-included; single subscription |

No annual billing publicly listed **[confirmed]**.

### 3.2 Credit system
- Running an agent generally **costs 1 credit** **[confirmed]**.
- Credits are an **internal marketplace currency with explicitly NO monetary value** — **"cannot be bought, sold, or exchanged for money"** **[confirmed]**.
- Earned by community actions (completing profile, referrals) and **auto-replenished weekly** (top-up to 100 if you fall below 25). Hard limits are soft — they'll top you up on request **[confirmed]**.
- This is a **usage-gating / engagement mechanic**, not a payment rail.

### 3.3 Do builders actually get paid? — **No (not on usage), as of June 2026** **[confirmed]**
This is the decisive finding:
- **No usage-based revenue share to builders is live.** Builder revenue-sharing is described as **"coming soon" / on the roadmap** by multiple 2026 reviews and by agent.ai's own community framing **[confirmed]**.
- The **$10/$25 subscription dollars go to the platform**, not split to the builder of the agent you subscribe to (the public materials describe it as platform pricing for run volume, with **no published creator-payout formula**) **[confirmed; absence of any creator-split disclosure]**.
- The **only documented builder payments are one-off hackathon bounties** — e.g., a builder publicly reported **~$27 (₹2,500) per approved agent** during a hackathon **[confirmed]**. That is a contest prize, not recurring usage income.
- **What builders get today:** distribution, visibility, ratings, follower-based **reputation**, feedback, and lead-gen for their own services — i.e., **a storefront/résumé, not a paycheck** **[confirmed]**.

**Contrast (quantified):**
| | agent.ai (today) | The Dude (planned) |
|---|---|---|
| Builder earns on each run? | **No** — credits have $0 value; no usage payout | **Yes** — usage/outcome/subscription/rental, builder's choice |
| Builder share of revenue | **~0% of usage** (subscriptions accrue to platform) | **80–95% to creator** (target; 0%-to-first-$1M honeymoon option) |
| Payout rail | **None** (hackathon prizes only) | **Stripe Connect + Merchant-of-Record**, monthly payouts |
| Pricing control | Platform sets ($10/$25); builder cannot set price | **Builder sets price & model** |

> The contrast is stark: a builder whose agent is run 100,000×/month earns **$0 of recurring revenue on agent.ai**; on The Dude the same usage is **direct income** (e.g., at $0.05/run × 100K = $5,000 GMV → ~$4,000–$4,750/mo to the builder at an 80–95% split). **[illustrative estimate]**

---

## 4. Traction & Scale (latest)

| Metric | Figure | Date | Confidence |
|---|---|---|---|
| Registered users | **2,000,000+** (40x+ YoY from ~47K at INBOUND '24) | mid-2026 | **[confirmed]** (simple.ai, CX Today) |
| Builders (users who built ≥1 agent) | **25,337** | mid-2026 | **[confirmed]** |
| Agents built (total) | **44,000+** | mid-2026 | **[confirmed]** |
| Agents shared publicly | **~1,800** | mid-2026 | **[confirmed]** |
| Ratings submitted | **38,624+** (avg **4.2/5**) | early–mid 2026 | **[confirmed]** |
| Newsletter (Dharmesh / simple.ai) | **~250,000** subscribers | 2025–26 | **[confirmed]** |
| Usage distribution | Strong **power law** — small head captures most runs | 2026 | **[confirmed]** |

**Distribution advantage:** Beyond raw numbers, agent.ai rides **(a)** Dharmesh's personal audience (newsletter + LinkedIn + INBOUND keynote stage), **(b)** HubSpot's brand halo and earnings-call endorsement, and **(c)** a credible future path into HubSpot's **~250K+ paying customers** and Breeze ecosystem. This is a top-of-funnel we cannot buy — it must be routed *around*, not attacked head-on.

---

## 5. Strengths & Weaknesses (relative to a true creator-monetized, cross-vertical, usage-metered marketplace)

### 5.1 Strengths (be honest — several are things we can't match soon)
1. **Distribution & brand.** Dharmesh + HubSpot is arguably the best go-to-market gravity in the category. 2M users in ~18 months is real.
2. **Community / network effects.** Builder followers, ratings, leaderboards, "professional network" framing → genuine engagement loop and social proof at scale.
3. **Head start & supply density.** 44K agents and 25K builders is a cold-start most entrants can only dream of; their power-law head is already useful.
4. **No-code accessibility.** "Anyone builds in minutes" lowers the supply barrier and recruits *non-developers* (marketers, ops) we'd otherwise miss.
5. **Free + frontier models bundled.** Removes friction and model-cost anxiety for the prosumer demand side.
6. **Agent-native surface.** API + OpenAPI + MCP server + `llms.txt` — they're not asleep on interop/AEO.

### 5.2 Weaknesses / gaps (our openings)
1. **No creator monetization on usage** (the big one). Builders get reputation, not revenue. This caps the *professional/commercial* builder pool and leaves serious, monetization-motivated builders (Apify migrants, agencies, AI startups) underserved.
2. **Vertical skew → marketing/sales/SMB/prosumer.** Depth in dev-tools, data/ETL, finance/ops, legal, vertical-industry, and *engineer-grade* agents is thin. The catalog is "thin wrappers around ChatGPT with a fancy name" in places (per reviews) **[confirmed: third-party review characterization]**.
3. **Builder lock-in to *their* no-code framework.** You build *on* agent.ai with their 60+ actions — **not** "bring your existing LangGraph/CrewAI/custom agent and host it." Limits power-builders and serious engineering teams.
4. **HubSpot-gravitational, not neutral.** As it integrates toward HubSpot CRM, it becomes less attractive to builders/buyers who don't live in HubSpot's world (Salesforce shops, non-CRM use cases, competitors).
5. **Opaque credit UX & shallow autonomy.** Reviews flag credit opacity and agents that "follow the script but don't adapt"; "no built-in fact-checking/citation layer" **[confirmed: third-party reviews]**. Weak on **verified performance / trust as a product.**
6. **No usage-metered billing / outcome pricing / agent-to-agent payments.** Subscription + free-credits model; no per-outcome billing, no x402/AP2-style A2A rails, no Merchant-of-Record payouts — the modern monetization primitives we center on.
7. **Quality control at scale.** Power-law + free flooding = long-tail quality problem; trust signals are ratings only.

---

## 6. Head-to-Head: agent.ai vs. The Dude

| Dimension | **agent.ai** (2026, confirmed) | **The Dude** (planned) |
|---|---|---|
| **Positioning** | "Professional network / agora for AI agents" — community + distribution | "Apify × App Store for AI agents" — creator-monetized marketplace + rental |
| **Who publishes** | Citizen builders (marketers, sales, consultants) via **proprietary no-code builder** | **Anyone, any framework** (no-code *and* code/bring-your-own); engineer-grade welcome |
| **Monetization / payouts to builder** | **None on usage** — credits have $0 value; rev-share "coming soon"; only **hackathon bounties** paid | **Real usage/outcome/subscription/rental payouts**, builder sets price |
| **Builder revenue share** | Effectively **~0% of usage** (subs accrue to platform) | **80–95% to creator** target; 0%-to-traction honeymoon |
| **Payout rail** | None (no Stripe Connect payouts to builders) | **Stripe Connect + Merchant-of-Record**, monthly automated payouts |
| **Pricing to buyers** | Free (weekly run caps) / **$10 per agent** / **$25 Pro all-access** | Usage, per-outcome, subscription, rental — transparent, real-time cost |
| **Distribution** | **Elite:** Dharmesh + HubSpot + 250K newsletter + 2M users + INBOUND stage | Product-led SEO/AEO + **Apollo-powered outbound** + community/OSS (must be earned) |
| **Interop / neutrality** | API + MCP server, **but HubSpot-gravitational** & locked to own builder framework | **Framework-neutral, CRM-neutral**; MCP/A2A-native; "bring any framework" |
| **Trust / verified performance** | Ratings + task counts (avg 4.2★); no verified perf metrics | **Verified success rate, latency, cost-per-outcome, evals, tiered vetting, SLAs** as product |
| **Agent-to-agent / payment rails** | Not a focus | **x402 / AP2 / ACP / MPP** — agents can rent agents; outcome-based billing |
| **Target users** | Marketing/sales/SMB/prosumer; HubSpot-adjacent | **Cross-vertical**: indie devs, agencies, AI startups (supply) + SMB→enterprise (demand) |
| **UX/frontend** | Functional; credit UX criticized; "shallow autonomy" in reviews | **World-class console/landing** as an explicit wedge |
| **Scale today** | **2M users / 25K builders / 44K agents** | **Planning stage, pre-product** |

**Where agent.ai is genuinely ahead:** distribution, brand, community/network effects, supply density, and head start. We must concede these and **not** fight there.

**Where The Dude genuinely differs (and can win):** builder *income* (not just exposure), framework/CRM neutrality, cross-vertical and engineer-grade depth, usage/outcome billing + A2A rails, and trust/verified-performance as a first-class product.

---

## 7. Strategic Reflection

### 7.1 Is "universal cross-vertical agent marketplace" still defensible against a HubSpot/Dharmesh competitor?
**Yes — but not as a generic "open directory of agents."** That framing collides directly with agent.ai's strength (open catalog + distribution + community) where we are structurally behind. The defensible version of "universal" is **"the neutral, creator-monetized economic layer for agents of *any* framework and *any* vertical"** — i.e., we win on **the business model and the rails, not the directory.** agent.ai is a *network*; we are a *marketplace with a treasury*. Those are different categories that can coexist, and the second is the one with the durable take-rate business.

The key strategic insight: **don't out-network the network.** Out-*monetize* it, out-*neutral* it, and out-*depth* it in verticals/segments it under-serves.

### 7.2 Concrete differentiation wedges (actionable)

1. **Creator economics as the spearhead (primary wedge).**
   - Lead every builder-facing surface with **"get paid on every run"** — the exact thing agent.ai does *not* do. Quantify the contrast publicly (the $5,000/mo-vs-$0 example in §3.3).
   - Ship **Stripe Connect payouts + MoR + builder earnings dashboard** in the MVP. This is table-stakes for us and *absent* on agent.ai.
   - Use the **0%-to-first-$1M (or 6–10% Founding Builder) honeymoon** as a supply land-grab **before agent.ai turns on payments.** Speed matters: this window is the asset.

2. **Recruit the builders agent.ai can't satisfy.**
   - **Apify rental-sunset migrants** (monetization-savvy, want real payouts), **automation agencies**, and **AI-native startups** — segments that need *income and pricing control*, which agent.ai structurally denies. agent.ai owns the *citizen builder*; we should own the *professional builder*.

3. **Verticals/segments agent.ai under-serves.**
   - Go where agent.ai is thin: **dev-tools, data/ETL/extraction, finance/ops, legal/compliance, vertical-industry, and engineer-grade/code-based agents.** Avoid leading with marketing/SMB content agents (agent.ai's home turf).

4. **Neutrality & "bring any framework."**
   - Position as **CRM-neutral and framework-neutral**: "We don't want to own your CRM; publish a LangGraph/CrewAI/custom agent as-is." This is precisely what a HubSpot-gravitational, own-builder-only platform cannot credibly say.

5. **Modern payment rails / A2A / outcome-based billing.**
   - **x402/AP2/ACP/MPP**, agent-to-agent renting, and **per-outcome** billing are unlikely priorities for a marketing-SMB, subscription-credit product. Own this future-facing layer.

6. **Trust & verified performance as a product.**
   - Ship **verified success rate, latency, cost-per-outcome, uptime, sandboxed evals, tiered vetting badges, SLAs, refund windows.** agent.ai stops at ratings; we make trust *mechanical and earned* — directly attacking the pilot-failure fear that gates buyer adoption.

7. **World-class UX as a felt difference.**
   - Reviews ding agent.ai's credit opacity and shallow autonomy. A fast, transparent, real-time-cost console is a tangible wedge for serious buyers and builders.

**Explicitly avoid:** cloning agent.ai's "agora + no-code builder for marketers" play, leading with marketing/SMB content agents, or competing on community/network-effects/brand where they're years and millions of users ahead.

### 7.3 Risks — how agent.ai/HubSpot could crush us, and how we de-risk

| Risk | How it hurts | De-risk |
|---|---|---|
| **They add creator payouts** (it's on their roadmap) | Erases our primary wedge from a 2M-user base | **Move first and lock supply** with honeymoon economics + exclusivity-of-mindshare; make payouts table-stakes *plus* compound with neutrality, depth, rails, trust (a *bundle* they can't easily copy fast) |
| **HubSpot distribution / bundling** | They put agents in front of 250K paying customers for free | **Don't fight in HubSpot's lane.** Win Salesforce/non-CRM/engineer/cross-vertical demand; be the neutral option for anyone who *isn't* all-in on HubSpot |
| **"Free" + bundled models** | Hard to compete on price for prosumers | Compete on **builder income + buyer ROI/trust**, not on being cheapest; our buyers pay because the agent *works and is verified* |
| **Brand & audience** | Dharmesh's megaphone vs. our zero brand | **Product-led SEO/AEO + Apollo outbound + Founding Builders + OSS/Academy**; earn a *builder-economics* reputation, a different story than "professional network" |
| **They go cross-vertical & code-friendly** | Closes our neutrality/depth gap | Build **deep vertical liquidity + trust infra + payout rails** as a moat that's operationally hard to retrofit onto a no-code, HubSpot-aligned product |
| **We mistake "open directory" for the moat** | We lose head-on | **Moat = run + billing + payouts + trust**, not the listing. Own the economics, not just discovery |

---

## 8. Recommended Sharpened Positioning Statement

> **The Dude is the neutral, creator-monetized marketplace for the agent economy: publish an AI agent of *any* framework and *any* vertical and get paid every time it runs — with transparent usage/outcome pricing, verified performance, and modern payment rails.** Where agent.ai is a *professional network* that gives builders reputation, The Dude is the *business model* that gives builders revenue — and gives buyers agents they can *trust to work*, without locking either side into one CRM.

**One-line internal version:** *"agent.ai is LinkedIn-for-agents (reputation, no payouts, HubSpot-bound). The Dude is the App-Store-with-a-treasury for agents (real usage payouts, framework/CRM-neutral, trust-verified)."*

### Prioritized strategic moves (next 2–3 quarters)
1. **Ship usage payouts in the MVP** (Stripe Connect + MoR + builder earnings dashboard). Non-negotiable; it *is* the differentiation.
2. **Launch a Founding Builders land-grab** targeting Apify migrants, agencies, and AI-startup builders with honeymoon economics — *win supply before agent.ai turns on payments.*
3. **Pick 2–3 non-marketing verticals** (e.g., data/extraction, dev-tools, finance/ops) for concentrated liquidity — avoid agent.ai's home turf.
4. **Make trust a product**: verified success rate / latency / cost-per-outcome + tiered vetting badges in lead categories.
5. **Stand up "bring any framework" + MCP/A2A + outcome billing** as the neutral, future-facing layer agent.ai won't prioritize.
6. **Message the contrast explicitly** in builder GTM: "get paid on every run" with the $X/mo-vs-$0 comparison.
7. **Monitor agent.ai's roadmap** (esp. any builder revenue-share launch and HubSpot integration) as a trigger to accelerate supply lock-in and lean harder into neutrality/depth.

---

## Sources

*All accessed June 2026. Figures labeled [confirmed] are from agent.ai's own materials or named reporting; [estimate]/[illustrative] are clearly marked in-text.*

**agent.ai positioning, features, builder model**
- INBOUND 2024 keynote / "#1 professional network for AI agents," vision to bring agents to HubSpot — https://simple.ai/p/why-the-future-of-ai-is-agents ; https://www.youtube.com/watch?v=IityUpVVD38
- Origin / LLC-owned side project, "let a HubSpot team take it over" — https://simple.ai/p/secret-behind-agent-ai
- Features: no-code builder, 60+ actions, API/OpenAPI/MCP server, Teams (Sales Prospecting / Content Marketing / Social Content) — https://easy.ai/ (agent.ai resource index) ; agent.ai/agents ; agent.ai/team/* ; docs.agent.ai ; MCP `https://mcp.agent.ai/mcp`
- Third-party review (low-code builder, marketplace, fork/hire, credit opacity, shallow autonomy, no citation layer) — https://delv.tools/agents/agent-ai-marketplace
- "Agora for agents," catalog/teams, models bundled — https://www.cxtoday.com/crm/agent-ai-smashes-milestone-with-1000-public-agents-on-its-growing-network/ ; https://getcoai.com/news/one-of-bostons-most-influential-tech-leaders-is-working-on-a-new-ai-agents-platform/ ; https://chatgate.ai/post/agent-ai

**Pricing & credits (Feb 2026 change)**
- Platform-based pricing launch (Free / $10 per Premium agent / $25 Pro) — https://blog.agent.ai/agent.ai-is-introducing-platform-based-pricing-heres-whats-staying-free
- Pricing page — https://agent.ai/pricing
- Credits have **no monetary value**, cannot be bought/sold/exchanged, weekly replenish — https://docs.agent.ai/marketplace-credits
- 2026 pricing summary — https://agentsindex.ai/pricing/agent-ai

**Builder payouts / revenue share status**
- Builder revenue-sharing "coming soon" / not live; builders earn visibility & reputation today — https://chatgate.ai/post/agent-ai ; https://fast.io/resources/top-ai-agent-marketplaces/ ; https://medium.com/@smeuse29/best-ai-agent-marketplaces-in-2026-compared-3c263f9b3535
- Hackathon bounty (~$27 per agent) — the only documented builder payment — https://medium.com/write-a-catalyst/this-platform-paid-me-27-for-every-ai-agent-i-built-d33df71b673e
- "Get paid for usage" framing on builder onboarding (aspirational/visibility) — https://www.agenticedge.io/p/zero-to-ai-agent-a-non-technical-founder-s-guide-to-building-with-agent-ai

**Traction & HubSpot relationship**
- 2M+ users, 25,337 builders, 44,000 agents, 1,800 public — https://simple.ai/p/agent-ai-just-hit-2-million-users ; https://www.cxtoday.com/crm/over-2-million-people-are-using-hubspots-unofficial-ai-agent-platform/
- 1,000 public agents milestone, 38,624 ratings, avg 4.2★, power law — https://www.cxtoday.com/crm/agent-ai-smashes-milestone-with-1000-public-agents-on-its-growing-network/
- Independent LLC, freelancer-built, "$1 acquisition" path like ChatSpot→Breeze Copilot, 230K users / 250K newsletter / 280+ agents (early-2025 baseline) — https://www.bostonglobe.com/2025/01/31/business/hubspot-dharmesh-shah-ai-artificial-intelligence-agents/
- HubSpot CEO endorsement + separate Breeze Agents — https://www.cxtoday.com/crm/over-2-million-people-are-using-hubspots-unofficial-ai-agent-platform/

**For monetization-model contrast (industry context)**
- Marketplace rev-share norms (70–85% to creator); hybrid/outcome pricing trend — https://pickaxe.co/post/monetize-ai-agents-2026 ; https://fast.io/resources/top-ai-agent-marketplaces/

---

*Companion to `competitive-landscape.md` (which covers the full field). This brief deep-dives the single closest competitor and the positioning response. Revisit if agent.ai launches builder revenue-share or formally integrates with HubSpot — either would be a trigger to accelerate our supply land-grab and lean harder into neutrality + vertical depth.*
