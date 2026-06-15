import type { Agent, CategoryId } from "./types";

/**
 * Mock marketplace inventory. ~14 agents spanning every category, with
 * realistic names, authors, pricing models, verified metrics, reviews and
 * changelogs. This is the single source of truth for all surfaces.
 */
export const AGENTS: Agent[] = [
  {
    slug: "closer-sdr",
    name: "Closer SDR",
    tagline: "Books meetings while you sleep",
    author: "Northwind Labs",
    authorHandle: "northwind",
    category: "sales",
    summary:
      "Researches accounts, writes personalized multi-touch sequences, and books qualified meetings straight into your calendar.",
    description:
      "Closer SDR runs a full outbound motion end-to-end: it enriches your target accounts, finds the right contacts, writes genuinely personalized first-touch emails, handles replies, and books meetings on your calendar. It hands warm context to your reps so nothing falls through the cracks.",
    readme: [
      "Closer SDR is a fully autonomous sales development representative. Point it at an ICP definition and a calendar, and it will run a compliant outbound motion that prioritizes reply quality over volume.",
      "## What it does",
      "- Enriches accounts and contacts from your CRM or a CSV",
      "- Writes per-prospect first-touch copy grounded in real signals (funding, hiring, tech stack)",
      "- Handles objections and reschedules across a 5-touch cadence",
      "- Books meetings directly into Google / Outlook calendars",
      "## Inputs",
      "An ICP definition, a sending domain (warmed), and calendar access. Optionally connect your CRM for two-way sync.",
      "## Guarantees",
      "Verified reply-rate benchmark published monthly. Refunds available within the 7-day window if the agent under-delivers against its stated success rate.",
    ],
    verified: true,
    featured: true,
    framework: "LangGraph",
    integrations: ["MCP", "A2A", "Salesforce", "Gmail", "Apollo"],
    pricing: {
      model: "outcome",
      display: "$18 / meeting booked",
      amount: 18,
      unit: "per qualified meeting",
      note: "First 3 meetings free",
    },
    metrics: {
      successRate: 91,
      latencySec: 42,
      uptime: 99.95,
      totalRuns: 248_300,
      rating: 4.8,
      reviewCount: 412,
    },
    reviews: [
      {
        author: "Dana Whitfield",
        role: "VP Sales, Loomwork",
        rating: 5,
        date: "2026-05-22",
        body: "Replaced two-thirds of our manual prospecting. The personalization is genuinely good — prospects reply thinking a human wrote it.",
      },
      {
        author: "Marcus Lee",
        role: "Founder, Tessellate",
        rating: 5,
        date: "2026-04-30",
        body: "Outcome pricing means I only pay when it books. Easiest ROI call I've ever made.",
      },
      {
        author: "Priya Nair",
        role: "RevOps Lead, Cohere Retail",
        rating: 4,
        date: "2026-04-11",
        body: "Excellent once tuned to our ICP. The first week needs supervision but it learns fast.",
      },
    ],
    changelog: [
      {
        version: "3.4.0",
        date: "2026-05-18",
        notes: ["Added Outlook calendar support", "Improved objection handling on pricing replies"],
      },
      {
        version: "3.2.1",
        date: "2026-04-02",
        notes: ["Apollo enrichment caching to cut cost-per-meeting 12%"],
      },
    ],
    gradient: "from-[#E8703A] to-[#D9A441]",
  },
  {
    slug: "triage-desk",
    name: "Triage Desk",
    tagline: "Resolves tier-1 tickets autonomously",
    author: "Cedar Support Co.",
    authorHandle: "cedarsupport",
    category: "support",
    summary:
      "Reads your help center and past tickets, then resolves common requests with on-brand replies and clean escalation handoffs.",
    description:
      "Triage Desk ingests your knowledge base and historical tickets to deflect tier-1 volume. It drafts or sends on-brand replies, tags and routes anything it can't confidently solve, and writes a crisp summary for the human who picks it up.",
    readme: [
      "Triage Desk is a customer support agent that resolves repetitive tickets and escalates the rest with full context.",
      "## What it does",
      "- Indexes your help center, macros, and past resolved tickets",
      "- Auto-resolves password resets, billing questions, and how-to requests",
      "- Escalates with a one-paragraph summary and suggested next action",
      "- Keeps a confidence threshold you control",
      "## Safety",
      "Fail-closed: below your confidence threshold it never sends — it routes to a human. Every action is logged for audit.",
    ],
    verified: true,
    featured: true,
    framework: "OpenAI Agents SDK",
    integrations: ["MCP", "Zendesk", "Intercom", "Slack"],
    pricing: {
      model: "outcome",
      display: "$0.45 / resolved ticket",
      amount: 0.45,
      unit: "per resolved ticket",
      note: "Pay only on confident resolutions",
    },
    metrics: {
      successRate: 87,
      latencySec: 6,
      uptime: 99.98,
      totalRuns: 1_420_900,
      rating: 4.7,
      reviewCount: 689,
    },
    reviews: [
      {
        author: "Helena Soto",
        role: "Head of CX, Brightly",
        rating: 5,
        date: "2026-05-29",
        body: "Deflected 61% of tier-1 in month one. The escalation summaries save our agents real time.",
      },
      {
        author: "Tom Becker",
        role: "Support Manager, Patchwork",
        rating: 4,
        date: "2026-05-02",
        body: "Tone matching is spot on. Wish the analytics drilldown was a bit deeper.",
      },
    ],
    changelog: [
      {
        version: "2.9.0",
        date: "2026-05-25",
        notes: ["Multilingual replies (12 languages)", "Confidence threshold now per-queue"],
      },
    ],
    gradient: "from-[#4F8A5B] to-[#E8703A]",
  },
  {
    slug: "deep-scout",
    name: "Deep Scout",
    tagline: "Analyst-grade research, on demand",
    author: "Atlas Intelligence",
    authorHandle: "atlas",
    category: "research",
    summary:
      "Runs multi-source research and returns a cited, structured brief with key findings, risks, and a confidence score.",
    description:
      "Deep Scout plans a research strategy, searches across the open web and your private docs, cross-checks claims, and writes a cited brief. Every claim links to a source and carries a confidence rating so you know what to trust.",
    readme: [
      "Deep Scout is a research analyst that produces cited, structured briefs you can hand to a stakeholder.",
      "## What it does",
      "- Decomposes a question into a research plan",
      "- Searches the web and your connected knowledge base",
      "- Cross-checks claims across sources and flags disagreement",
      "- Returns a structured brief with citations and a confidence score",
      "## Output",
      "Markdown or JSON. Every factual claim is footnoted to a retrievable source.",
    ],
    verified: true,
    featured: true,
    framework: "CrewAI",
    integrations: ["MCP", "A2A", "Notion", "Google Drive"],
    pricing: {
      model: "usage",
      display: "$0.90 / brief",
      amount: 0.9,
      unit: "per research brief",
      note: "60-second demo run free",
    },
    metrics: {
      successRate: 93,
      latencySec: 78,
      uptime: 99.9,
      totalRuns: 96_400,
      rating: 4.9,
      reviewCount: 233,
    },
    reviews: [
      {
        author: "Ravi Menon",
        role: "Strategy, Vector Capital",
        rating: 5,
        date: "2026-05-14",
        body: "The citations are what sold me. I can verify everything in minutes instead of trusting a black box.",
      },
      {
        author: "Sofia Klein",
        role: "Product Marketing, Halcyon",
        rating: 5,
        date: "2026-04-21",
        body: "Competitive teardowns that used to take me a day now take ten minutes.",
      },
    ],
    changelog: [
      {
        version: "1.8.0",
        date: "2026-05-10",
        notes: ["Confidence scoring per claim", "PDF source ingestion"],
      },
    ],
    gradient: "from-[#3B6FB0] to-[#4F8A5B]",
  },
  {
    slug: "patch-pilot",
    name: "Patch Pilot",
    tagline: "Reviews PRs like a staff engineer",
    author: "Forge Systems",
    authorHandle: "forge",
    category: "coding",
    summary:
      "Reviews pull requests for bugs, security issues, and style — leaving inline comments and a risk-ranked summary.",
    description:
      "Patch Pilot reviews every pull request the way a careful staff engineer would: it reasons about intent, flags real bugs and security issues, checks tests, and leaves actionable inline comments plus a risk-ranked summary.",
    readme: [
      "Patch Pilot is an automated code reviewer that catches bugs before they merge.",
      "## What it does",
      "- Reviews diffs for logic errors, security issues, and edge cases",
      "- Verifies test coverage for changed lines",
      "- Leaves inline comments and a risk-ranked PR summary",
      "- Learns your conventions from an AGENTS.md / style guide",
      "## Integrations",
      "GitHub and GitLab. Runs as a check on every PR; never blocks merges unless you configure it to.",
    ],
    verified: true,
    featured: true,
    framework: "Custom (TypeScript)",
    integrations: ["MCP", "GitHub", "GitLab"],
    pricing: {
      model: "usage",
      display: "$0.12 / PR reviewed",
      amount: 0.12,
      unit: "per pull request",
    },
    metrics: {
      successRate: 89,
      latencySec: 31,
      uptime: 99.99,
      totalRuns: 512_700,
      rating: 4.8,
      reviewCount: 558,
    },
    reviews: [
      {
        author: "Yuki Tanaka",
        role: "Eng Lead, Driftwood",
        rating: 5,
        date: "2026-06-01",
        body: "Caught a race condition our whole team missed. Worth it for that alone.",
      },
      {
        author: "Omar Haddad",
        role: "CTO, Stacklane",
        rating: 4,
        date: "2026-05-08",
        body: "Great signal-to-noise. Occasionally nitpicky but you can tune verbosity.",
      },
    ],
    changelog: [
      {
        version: "4.1.0",
        date: "2026-05-28",
        notes: ["GitLab support", "Reads AGENTS.md for conventions"],
      },
    ],
    gradient: "from-[#211C18] to-[#E8703A]",
  },
  {
    slug: "harvest-etl",
    name: "Harvest ETL",
    tagline: "Turn any website into clean data",
    author: "Gridline Data",
    authorHandle: "gridline",
    category: "data",
    summary:
      "Extracts structured data from messy sites and APIs, validates it against your schema, and delivers it wherever you need.",
    description:
      "Harvest ETL handles the unglamorous work of getting clean data out of websites and APIs. It navigates dynamic pages, extracts to your schema, validates and de-duplicates, and pushes results to a warehouse, sheet, or webhook.",
    readme: [
      "Harvest ETL is a data extraction and transformation agent for messy, real-world sources.",
      "## What it does",
      "- Navigates JS-heavy sites and paginated APIs",
      "- Extracts to a JSON schema you define",
      "- Validates, de-duplicates, and normalizes",
      "- Delivers to BigQuery, Snowflake, Sheets, or a webhook",
      "## Reliability",
      "Auto-retries with backoff and reports a per-field completeness score on every run.",
    ],
    verified: true,
    framework: "LangChain",
    integrations: ["MCP", "BigQuery", "Snowflake", "Webhooks"],
    pricing: {
      model: "usage",
      display: "$0.0008 / record",
      amount: 0.0008,
      unit: "per extracted record",
    },
    metrics: {
      successRate: 95,
      latencySec: 14,
      uptime: 99.9,
      totalRuns: 3_180_500,
      rating: 4.6,
      reviewCount: 401,
    },
    reviews: [
      {
        author: "Lena Fischer",
        role: "Data Eng, Polymath",
        rating: 5,
        date: "2026-05-19",
        body: "Replaced a brittle scraping stack we maintained for years. Completeness scores are a lifesaver.",
      },
    ],
    changelog: [
      {
        version: "5.0.2",
        date: "2026-05-21",
        notes: ["Snowflake direct load", "Per-field completeness scoring"],
      },
    ],
    gradient: "from-[#3B6FB0] to-[#211C18]",
  },
  {
    slug: "copy-forge",
    name: "Copy Forge",
    tagline: "On-brand content at campaign scale",
    author: "Kindling Studio",
    authorHandle: "kindling",
    category: "marketing",
    summary:
      "Generates on-brand blog posts, ads, and landing copy from a brief — trained on your voice and proven performers.",
    description:
      "Copy Forge learns your brand voice from existing content, then produces blog posts, ad variations, and landing copy from a short brief. It self-edits against your guidelines and proposes A/B variants ranked by predicted performance.",
    readme: [
      "Copy Forge is a marketing content agent tuned to your brand voice.",
      "## What it does",
      "- Learns voice from your best-performing content",
      "- Drafts blogs, ads, emails, and landing copy from a brief",
      "- Generates ranked A/B variants",
      "- Self-edits against your style guide before delivering",
    ],
    verified: false,
    isNew: true,
    framework: "OpenAI Agents SDK",
    integrations: ["MCP", "HubSpot", "WordPress"],
    pricing: {
      model: "subscription",
      display: "$79 / mo",
      amount: 79,
      unit: "per month",
      note: "14-day free trial",
    },
    metrics: {
      successRate: 82,
      latencySec: 22,
      uptime: 99.8,
      totalRuns: 41_200,
      rating: 4.4,
      reviewCount: 96,
    },
    reviews: [
      {
        author: "Grace Owusu",
        role: "Content Lead, Maple & Co.",
        rating: 4,
        date: "2026-05-27",
        body: "Voice matching is impressive for a new agent. Excited to see where this goes.",
      },
    ],
    changelog: [
      {
        version: "0.9.0",
        date: "2026-05-30",
        notes: ["Public beta", "WordPress publishing"],
      },
    ],
    gradient: "from-[#E8703A] to-[#C2552F]",
  },
  {
    slug: "flowwright-ops",
    name: "Flowwright Ops",
    tagline: "Automates the back-office grind",
    author: "Beacon Automations",
    authorHandle: "beacon",
    category: "ops",
    summary:
      "Connects your tools and runs multi-step operational workflows — onboarding, approvals, data hygiene — on a schedule or trigger.",
    description:
      "Flowwright Ops is the connective tissue for back-office work. It watches for triggers across your tools, runs multi-step workflows with human-in-the-loop checkpoints, and keeps an audit trail of every action.",
    readme: [
      "Flowwright Ops automates multi-step operational workflows across your tool stack.",
      "## What it does",
      "- Triggers on events from Slack, email, CRM, or a schedule",
      "- Runs branching workflows with approval checkpoints",
      "- Keeps systems in sync and data clean",
      "- Full audit log of every step",
    ],
    verified: true,
    framework: "LangGraph",
    integrations: ["MCP", "A2A", "Slack", "Notion", "Airtable"],
    pricing: {
      model: "hybrid",
      display: "$49 / mo + $0.02 / step",
      amount: 49,
      unit: "subscription + per step",
      note: "Floor + usage",
    },
    metrics: {
      successRate: 90,
      latencySec: 9,
      uptime: 99.95,
      totalRuns: 287_600,
      rating: 4.7,
      reviewCount: 174,
    },
    reviews: [
      {
        author: "Ben Carter",
        role: "COO, Northstar Logistics",
        rating: 5,
        date: "2026-05-16",
        body: "The hybrid pricing is honest — predictable floor, pay for what we use. Onboarding automation alone paid for it.",
      },
    ],
    changelog: [
      {
        version: "2.3.0",
        date: "2026-05-12",
        notes: ["Airtable triggers", "Approval checkpoints via Slack"],
      },
    ],
    gradient: "from-[#4F8A5B] to-[#3B6FB0]",
  },
  {
    slug: "ledger-lens",
    name: "Ledger Lens",
    tagline: "Reconciliation without the headache",
    author: "Quillan Finance",
    authorHandle: "quillan",
    category: "finance",
    summary:
      "Matches transactions, flags anomalies, and drafts month-end close entries with a full, auditable trail.",
    description:
      "Ledger Lens automates the tedious parts of the close: it matches transactions across bank feeds and your ledger, flags anomalies and duplicates, and drafts journal entries for review. Everything is auditable and reversible.",
    readme: [
      "Ledger Lens is a finance agent that accelerates reconciliation and month-end close.",
      "## What it does",
      "- Matches transactions across bank feeds and your GL",
      "- Flags anomalies, duplicates, and policy violations",
      "- Drafts journal entries for human approval",
      "- Produces an auditable trail for every match",
      "## Compliance",
      "Read-only by default. No entry is posted without explicit human approval.",
    ],
    verified: true,
    framework: "Custom (Python)",
    integrations: ["MCP", "QuickBooks", "NetSuite", "Plaid"],
    pricing: {
      model: "subscription",
      display: "$199 / mo",
      amount: 199,
      unit: "per month",
      note: "Up to 10k transactions",
    },
    metrics: {
      successRate: 96,
      latencySec: 11,
      uptime: 99.97,
      totalRuns: 58_900,
      rating: 4.9,
      reviewCount: 88,
    },
    reviews: [
      {
        author: "Maria Gonzalez",
        role: "Controller, Vellum Inc.",
        rating: 5,
        date: "2026-05-23",
        body: "Cut our close from five days to two. The audit trail makes our accountants happy.",
      },
    ],
    changelog: [
      {
        version: "3.0.0",
        date: "2026-05-09",
        notes: ["NetSuite integration", "Anomaly explanations"],
      },
    ],
    gradient: "from-[#211C18] to-[#4F8A5B]",
  },
  {
    slug: "signal-prospector",
    name: "Signal Prospector",
    tagline: "Finds buyers at the moment of intent",
    author: "Northwind Labs",
    authorHandle: "northwind",
    category: "sales",
    summary:
      "Monitors hiring, funding, and tech-stack signals to surface accounts that are ready to buy — with a suggested opening line.",
    description:
      "Signal Prospector watches the market for buying signals — new funding, key hires, tech-stack changes — and surfaces a ranked list of accounts to reach out to, each with a tailored opening line grounded in the signal that triggered it.",
    readme: [
      "Signal Prospector turns market signals into a prioritized outreach list.",
      "## What it does",
      "- Monitors funding, hiring, and tech-stack changes",
      "- Scores accounts by buying intent",
      "- Suggests an opening line per account, grounded in the signal",
      "- Syncs to your CRM",
    ],
    verified: true,
    framework: "LangChain",
    integrations: ["MCP", "Salesforce", "HubSpot", "Apollo"],
    pricing: {
      model: "usage",
      display: "$0.06 / scored account",
      amount: 0.06,
      unit: "per scored account",
    },
    metrics: {
      successRate: 85,
      latencySec: 18,
      uptime: 99.9,
      totalRuns: 174_300,
      rating: 4.5,
      reviewCount: 142,
    },
    reviews: [
      {
        author: "Chris Patel",
        role: "Sales Ops, Quanta",
        rating: 5,
        date: "2026-05-06",
        body: "Our SDRs stopped guessing who to call. The signals are timely and the opener actually lands.",
      },
    ],
    changelog: [
      {
        version: "1.6.0",
        date: "2026-05-04",
        notes: ["Tech-stack change detection", "Apollo enrichment"],
      },
    ],
    gradient: "from-[#D9A441] to-[#E8703A]",
  },
  {
    slug: "insight-pulse",
    name: "Insight Pulse",
    tagline: "Synthesizes user feedback into themes",
    author: "Atlas Intelligence",
    authorHandle: "atlas",
    category: "research",
    summary:
      "Ingests reviews, tickets, and call notes and returns clustered themes, sentiment trends, and prioritized opportunities.",
    description:
      "Insight Pulse reads everything your users tell you — reviews, support tickets, sales call notes — and clusters it into themes with sentiment trends and a prioritized list of opportunities, each backed by representative quotes.",
    readme: [
      "Insight Pulse turns scattered qualitative feedback into prioritized product insight.",
      "## What it does",
      "- Ingests reviews, tickets, NPS, and call transcripts",
      "- Clusters into themes with sentiment over time",
      "- Surfaces prioritized opportunities with representative quotes",
    ],
    verified: false,
    isNew: true,
    framework: "CrewAI",
    integrations: ["MCP", "Zendesk", "Gong", "Notion"],
    pricing: {
      model: "free",
      display: "Free",
      amount: 0,
      unit: "free to run",
      note: "Free during beta",
    },
    metrics: {
      successRate: 80,
      latencySec: 35,
      uptime: 99.7,
      totalRuns: 12_800,
      rating: 4.3,
      reviewCount: 37,
    },
    reviews: [
      {
        author: "Aisha Rahman",
        role: "PM, Loftworks",
        rating: 4,
        date: "2026-06-02",
        body: "Free and surprisingly sharp. The theme clustering surfaced something we'd been missing for months.",
      },
    ],
    changelog: [
      {
        version: "0.7.0",
        date: "2026-06-01",
        notes: ["Gong transcript ingestion", "Sentiment trendlines"],
      },
    ],
    gradient: "from-[#3B6FB0] to-[#D9A441]",
  },
  {
    slug: "migrate-mate",
    name: "Migrate Mate",
    tagline: "Framework & dependency migrations",
    author: "Forge Systems",
    authorHandle: "forge",
    category: "coding",
    summary:
      "Plans and executes codebase migrations — framework upgrades, dependency bumps, API rewrites — with tests at every step.",
    description:
      "Migrate Mate takes on the migrations engineers dread. It plans the change, applies codemods incrementally, runs your test suite at each step, and opens reviewable PRs so you stay in control the whole way.",
    readme: [
      "Migrate Mate executes large, mechanical code migrations safely and incrementally.",
      "## What it does",
      "- Plans a migration into reviewable, test-gated steps",
      "- Applies codemods and rewrites call sites",
      "- Runs your tests after each step and rolls back on failure",
      "- Opens small PRs you can review and merge",
    ],
    verified: true,
    framework: "Custom (TypeScript)",
    integrations: ["MCP", "GitHub"],
    pricing: {
      model: "outcome",
      display: "$240 / completed migration",
      amount: 240,
      unit: "per completed migration",
      note: "Pay on green CI",
    },
    metrics: {
      successRate: 88,
      latencySec: 320,
      uptime: 99.9,
      totalRuns: 9_100,
      rating: 4.7,
      reviewCount: 61,
    },
    reviews: [
      {
        author: "Daniel Roth",
        role: "Staff Eng, Pendle",
        rating: 5,
        date: "2026-05-13",
        body: "Migrated us off a deprecated framework over a weekend with green CI the whole way. Pay-on-success is the right model.",
      },
    ],
    changelog: [
      {
        version: "2.0.0",
        date: "2026-05-07",
        notes: ["Incremental rollback", "Monorepo support"],
      },
    ],
    gradient: "from-[#E8703A] to-[#3B6FB0]",
  },
  {
    slug: "seo-cartographer",
    name: "SEO Cartographer",
    tagline: "Maps and fills your content gaps",
    author: "Kindling Studio",
    authorHandle: "kindling",
    category: "marketing",
    summary:
      "Audits your site against competitors, finds ranking opportunities, and drafts briefs for the highest-impact pages.",
    description:
      "SEO Cartographer crawls your site and your competitors', clusters keywords by intent, and identifies the content gaps with the best effort-to-impact ratio — then drafts optimized briefs your writers can run with.",
    readme: [
      "SEO Cartographer finds and prioritizes content opportunities, then drafts briefs.",
      "## What it does",
      "- Crawls your site and competitor sites",
      "- Clusters keywords by search intent",
      "- Ranks content gaps by impact and difficulty",
      "- Drafts optimized content briefs",
    ],
    verified: true,
    framework: "LangChain",
    integrations: ["MCP", "Google Search Console", "Ahrefs"],
    pricing: {
      model: "hybrid",
      display: "$39 / mo + $0.50 / brief",
      amount: 39,
      unit: "subscription + per brief",
    },
    metrics: {
      successRate: 86,
      latencySec: 46,
      uptime: 99.9,
      totalRuns: 67_400,
      rating: 4.6,
      reviewCount: 119,
    },
    reviews: [
      {
        author: "Nina Petrova",
        role: "Growth, Tideline",
        rating: 5,
        date: "2026-05-20",
        body: "Surfaced a cluster of high-intent keywords we'd completely overlooked. Briefs are genuinely usable.",
      },
    ],
    changelog: [
      {
        version: "1.4.0",
        date: "2026-05-15",
        notes: ["Search Console integration", "Intent clustering v2"],
      },
    ],
    gradient: "from-[#4F8A5B] to-[#D9A441]",
  },
  {
    slug: "onboard-orchestra",
    name: "Onboard Orchestra",
    tagline: "Zero-touch customer onboarding",
    author: "Beacon Automations",
    authorHandle: "beacon",
    category: "ops",
    summary:
      "Drives new customers from signup to activated — provisioning, scheduling, nudges, and handoffs — without manual work.",
    description:
      "Onboard Orchestra runs your onboarding playbook autonomously: it provisions accounts, schedules kickoffs, sends contextual nudges, and escalates at-risk accounts to a human — keeping a clean record of every touch.",
    readme: [
      "Onboard Orchestra automates customer onboarding from signup to activation.",
      "## What it does",
      "- Provisions accounts and resources on signup",
      "- Schedules kickoffs and sends contextual nudges",
      "- Detects stalled onboarding and escalates to a human",
      "- Tracks time-to-activation per cohort",
    ],
    verified: false,
    isNew: true,
    framework: "LangGraph",
    integrations: ["MCP", "Slack", "Calendly", "Segment"],
    pricing: {
      model: "subscription",
      display: "$129 / mo",
      amount: 129,
      unit: "per month",
      note: "14-day free trial",
    },
    metrics: {
      successRate: 83,
      latencySec: 12,
      uptime: 99.8,
      totalRuns: 23_500,
      rating: 4.4,
      reviewCount: 44,
    },
    reviews: [
      {
        author: "Eli Brooks",
        role: "Ops, Cresting",
        rating: 4,
        date: "2026-05-31",
        body: "Cut our manual onboarding work dramatically. Still tuning the nudge cadence but the foundation is strong.",
      },
    ],
    changelog: [
      {
        version: "0.8.0",
        date: "2026-05-29",
        notes: ["Segment events", "Cohort time-to-activation reporting"],
      },
    ],
    gradient: "from-[#D9A441] to-[#4F8A5B]",
  },
  {
    slug: "invoice-sentry",
    name: "Invoice Sentry",
    tagline: "Chase invoices, politely & on time",
    author: "Quillan Finance",
    authorHandle: "quillan",
    category: "finance",
    summary:
      "Tracks receivables, sends escalating reminders in your voice, and flags disputes before they age into bad debt.",
    description:
      "Invoice Sentry manages accounts receivable so you don't have to. It tracks every invoice, sends polite escalating reminders in your brand voice, reconciles payments, and flags disputes early — improving DSO without straining relationships.",
    readme: [
      "Invoice Sentry automates accounts-receivable follow-up and dispute triage.",
      "## What it does",
      "- Tracks outstanding invoices and aging",
      "- Sends escalating, on-brand reminders",
      "- Reconciles incoming payments",
      "- Flags disputes and at-risk accounts early",
    ],
    verified: true,
    framework: "Custom (Python)",
    integrations: ["MCP", "Stripe", "QuickBooks", "Gmail"],
    pricing: {
      model: "usage",
      display: "$0.30 / invoice tracked",
      amount: 0.3,
      unit: "per invoice / month",
    },
    metrics: {
      successRate: 92,
      latencySec: 8,
      uptime: 99.96,
      totalRuns: 134_700,
      rating: 4.7,
      reviewCount: 97,
    },
    reviews: [
      {
        author: "Hannah Cole",
        role: "Finance, Brisk Goods",
        rating: 5,
        date: "2026-05-18",
        body: "DSO dropped 14 days in a quarter. The reminders sound like us, not a robot.",
      },
    ],
    changelog: [
      {
        version: "2.1.0",
        date: "2026-05-11",
        notes: ["Stripe payment reconciliation", "Dispute early-warning"],
      },
    ],
    gradient: "from-[#3B6FB0] to-[#E8703A]",
  },
];

/** Build-time helper: every slug, for generateStaticParams. */
export const AGENT_SLUGS: string[] = AGENTS.map((a) => a.slug);

export function getAgentBySlug(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}

export function getFeaturedAgents(): Agent[] {
  return AGENTS.filter((a) => a.featured);
}

export function getAgentsByCategory(category: CategoryId): Agent[] {
  return AGENTS.filter((a) => a.category === category);
}

export function getRelatedAgents(agent: Agent, limit = 3): Agent[] {
  return AGENTS.filter(
    (a) => a.slug !== agent.slug && a.category === agent.category,
  )
    .concat(AGENTS.filter((a) => a.slug !== agent.slug && a.category !== agent.category))
    .slice(0, limit);
}
