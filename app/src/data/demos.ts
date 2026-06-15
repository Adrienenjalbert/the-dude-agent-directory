import type { Agent, RunDemo, RunStep, MeterEvent } from "./types";

/**
 * Interactive run-demo definitions, keyed by agent slug.
 *
 * Each demo drives the client-side simulation on the agent detail page:
 * a sample input the user can edit, an ordered set of "thinking → tool →
 * writing → done" steps, metered events that tally into a live cost meter,
 * and a fake-but-realistic structured output. Purely front-end — no backend.
 *
 * Authoring guidance: keep token/tool counts believable for the pricing
 * model, and make the output JSON match the agent's actual job. Steps that
 * emit `meter` events grow the running cost as the stream plays.
 */

const json = (obj: unknown): string => JSON.stringify(obj, null, 2);

/* ----------------------------- Per-agent ------------------------------ */

const DEMOS: Record<string, RunDemo> = {
  "closer-sdr": {
    prompt: "Give Closer SDR a target account. It will research, write, and book.",
    inputs: [
      {
        label: "Series-B fintech",
        value: json({
          account: "Northbeam (Series B fintech)",
          contact: { name: "Priya Anand", title: "VP RevOps" },
          icp: "RevOps leaders at 50–200 person B2B SaaS",
          goal: "Book a 20-min intro for our pipeline-attribution tool",
        }),
      },
      {
        label: "Dev-tools startup",
        value: json({
          account: "Forklift CI (seed dev-tools)",
          contact: { name: "Marco Reyes", title: "Head of Eng" },
          icp: "Eng leaders adopting AI code review",
          goal: "Book a technical demo",
        }),
      },
    ],
    steps: [
      step("thinking", "Reading ICP and goal, planning a 1-touch sequence…", 900),
      tool("Enriching account from Apollo + web signals", "apollo.enrich", 1300, [
        meter("Input tokens", 1840, "tokens", 0.0000022),
        meter("Tool call: apollo.enrich", 1, "call", 0.018),
      ]),
      tool("Checking recent funding & hiring signals", "signals.scan", 1100, [
        meter("Tool call: signals.scan", 1, "call", 0.012),
      ]),
      step("writing", "Drafting a personalized first-touch email…", 1500, [
        meter("Output tokens", 720, "tokens", 0.0000088),
      ]),
      tool("Finding an open slot and booking the meeting", "calendar.book", 1000, [
        meter("Tool call: calendar.book", 1, "call", 0.009),
      ]),
      done("Meeting booked and synced to your calendar."),
    ],
    output: json({
      status: "meeting_booked",
      contact: "Priya Anand · VP RevOps · Northbeam",
      signal_used: "Closed $40M Series B (May 2026); hiring 4 RevOps roles",
      email_subject: "Northbeam's Series B + attribution gaps",
      meeting: { when: "Thu 2:30pm PT", duration_min: 20, calendar: "synced" },
      confidence: 0.92,
    }),
    outcome: "Booked a qualified 20-minute meeting with the VP RevOps.",
  },

  "triage-desk": {
    prompt: "Paste a customer ticket. Triage Desk resolves it or escalates with context.",
    inputs: [
      {
        label: "Billing question",
        value: json({
          subject: "Charged twice this month?",
          body: "Hi — I see two $49 charges on June 3. Did I get double-billed?",
          customer: { plan: "Pro", tenure_months: 14 },
        }),
      },
      {
        label: "Password reset",
        value: json({
          subject: "Can't log in",
          body: "Reset link says expired every time. Help!",
          customer: { plan: "Free", tenure_months: 2 },
        }),
      },
    ],
    steps: [
      step("thinking", "Classifying intent and pulling account context…", 700),
      tool("Searching help center + past resolved tickets", "kb.search", 900, [
        meter("Input tokens", 1120, "tokens", 0.0000019),
        meter("Tool call: kb.search", 1, "call", 0.004),
      ]),
      tool("Checking billing system for duplicate charge", "billing.lookup", 1000, [
        meter("Tool call: billing.lookup", 1, "call", 0.006),
      ]),
      step("writing", "Composing an on-brand reply with the fix…", 1200, [
        meter("Output tokens", 410, "tokens", 0.0000079),
      ]),
      done("Resolved with confidence above threshold — reply sent."),
    ],
    output: json({
      status: "resolved",
      confidence: 0.94,
      root_cause: "Annual-to-monthly proration created a one-time second line item",
      action_taken: "Refunded the duplicate $49; sent itemized explanation",
      reply_preview: "Good catch! That second charge was a proration artifact — refunded now…",
      csat_predicted: 4.7,
    }),
    outcome: "Auto-resolved a billing ticket and issued a refund.",
  },

  "deep-scout": {
    prompt: "Ask for a research brief. Deep Scout gathers, cross-checks, and cites.",
    inputs: [
      {
        label: "Competitive teardown",
        value: json({
          question: "Teardown of the top 3 AI meeting-notetakers",
          dimensions: ["pricing", "differentiation", "weaknesses"],
          depth: "analyst",
        }),
      },
    ],
    steps: [
      step("thinking", "Decomposing the question into sub-queries…", 800),
      tool("Searching the web across 14 sources", "web.search", 1400, [
        meter("Input tokens", 3200, "tokens", 0.0000021),
        meter("Tool call: web.search", 3, "calls", 0.005),
      ]),
      tool("Reading and cross-checking sources", "web.read", 1500, [
        meter("Tool call: web.read", 11, "pages", 0.002),
      ]),
      step("writing", "Synthesizing an analyst-grade brief with citations…", 1700, [
        meter("Output tokens", 1850, "tokens", 0.0000091),
      ]),
      done("Brief complete with 14 cited sources."),
    ],
    output: json({
      status: "brief_ready",
      title: "AI Notetakers — Competitive Teardown",
      key_finding: "All three converge on price; differentiation is shifting to CRM sync depth",
      sources_cited: 14,
      sections: ["Market map", "Pricing matrix", "Differentiation", "Whitespace"],
      confidence: 0.9,
    }),
    outcome: "Produced a cited, analyst-grade competitive brief.",
  },

  "patch-pilot": {
    prompt: "Point Patch Pilot at a PR. It reviews, suggests fixes, and flags risk.",
    inputs: [
      {
        label: "Pull request",
        value: json({
          repo: "acme/payments-api",
          pr: 1182,
          title: "Add idempotency keys to charge endpoint",
          files_changed: 7,
          diff_lines: 240,
        }),
      },
    ],
    steps: [
      step("thinking", "Cloning context and reading the diff…", 800),
      tool("Static analysis + dependency graph", "code.analyze", 1300, [
        meter("Input tokens", 4100, "tokens", 0.0000018),
        meter("Tool call: code.analyze", 1, "call", 0.003),
      ]),
      tool("Running the affected test suite", "ci.run_tests", 1400, [
        meter("Tool call: ci.run_tests", 1, "call", 0.008),
      ]),
      step("writing", "Writing inline review comments and a summary…", 1300, [
        meter("Output tokens", 980, "tokens", 0.0000084),
      ]),
      done("Review posted: 3 comments, 1 blocking."),
    ],
    output: json({
      status: "review_complete",
      verdict: "request_changes",
      comments: 3,
      blocking: 1,
      highlight: "Idempotency key not scoped per-tenant — possible cross-account replay",
      tests: { added: 0, passing: "18/18 existing" },
      risk_score: 0.41,
    }),
    outcome: "Reviewed the PR and flagged a blocking security issue.",
  },

  "harvest-etl": {
    prompt: "Give Harvest a source and a schema. It extracts clean, validated data.",
    inputs: [
      {
        label: "Scrape to schema",
        value: json({
          source: "https://example-directory.com/vendors",
          schema: { name: "string", category: "string", url: "string", rating: "number" },
          pages: "auto",
        }),
      },
    ],
    steps: [
      step("thinking", "Inspecting the source and planning pagination…", 700),
      tool("Crawling pages and extracting fields", "web.crawl", 1600, [
        meter("Tool call: web.crawl", 18, "pages", 0.0006),
      ]),
      tool("Validating + de-duplicating against schema", "data.validate", 1100, [
        meter("Records extracted", 3012, "records", 0.0008),
      ]),
      step("writing", "Writing results to your warehouse…", 900),
      done("Delivered 3,012 validated records."),
    ],
    output: json({
      status: "delivered",
      records: 3012,
      completeness: 0.987,
      duplicates_removed: 144,
      destination: "BigQuery · vendors_raw",
      schema_valid: true,
    }),
    outcome: "Extracted and delivered 3,012 schema-valid records.",
  },

  "copy-forge": {
    prompt: "Brief Copy Forge on a campaign. It produces on-brand, on-spec copy.",
    inputs: [
      {
        label: "Launch campaign",
        value: json({
          product: "Realtime fraud alerts",
          channel: "email + landing",
          tone: "confident, plain-spoken",
          variants: 3,
        }),
      },
    ],
    steps: [
      step("thinking", "Loading brand voice and the campaign brief…", 800),
      tool("Pulling brand guidelines + past winners", "brand.fetch", 900, [
        meter("Input tokens", 2400, "tokens", 0.000002),
        meter("Tool call: brand.fetch", 1, "call", 0.003),
      ]),
      step("writing", "Drafting 3 on-brand variants…", 1800, [
        meter("Output tokens", 1600, "tokens", 0.0000086),
      ]),
      tool("Brand-safety + readability check", "brand.lint", 800, [
        meter("Tool call: brand.lint", 1, "call", 0.002),
      ]),
      done("3 variants ready, all passing brand-safety."),
    ],
    output: json({
      status: "drafted",
      variants: 3,
      best_subject: "Fraud, caught in the act — in real time",
      readability: "Grade 7",
      brand_safe: true,
      predicted_ctr_lift: "+12% vs control",
    }),
    outcome: "Produced 3 on-brand, brand-safe copy variants.",
  },

  "flowwright-ops": {
    prompt: "Describe an ops workflow. Flowwright builds and runs it.",
    inputs: [
      {
        label: "Onboarding workflow",
        value: json({
          trigger: "New customer signs contract",
          steps: ["Provision workspace", "Send welcome kit", "Schedule kickoff"],
          systems: ["HubSpot", "Notion", "Slack"],
        }),
      },
    ],
    steps: [
      step("thinking", "Mapping the workflow into discrete actions…", 800),
      tool("Connecting to HubSpot, Notion, Slack", "integrations.connect", 1100, [
        meter("Tool call: integrations.connect", 3, "calls", 0.004),
      ]),
      tool("Executing the 3-step workflow", "workflow.run", 1500, [
        meter("Input tokens", 1500, "tokens", 0.0000019),
        meter("Workflow steps", 3, "steps", 0.02),
      ]),
      step("writing", "Writing a run report…", 800),
      done("Workflow executed end-to-end."),
    ],
    output: json({
      status: "completed",
      steps_run: 3,
      duration_sec: 41,
      systems_touched: ["HubSpot", "Notion", "Slack"],
      next_run: "on trigger",
    }),
    outcome: "Built and ran a 3-step onboarding workflow.",
  },

  "ledger-lens": {
    prompt: "Hand Ledger Lens a close task. It reconciles and flags anomalies.",
    inputs: [
      {
        label: "Monthly close",
        value: json({
          period: "2026-05",
          accounts: ["bank", "stripe", "ledger"],
          tolerance_usd: 1,
        }),
      },
    ],
    steps: [
      step("thinking", "Loading the period and matching rules…", 800),
      tool("Pulling transactions from 3 sources", "finance.fetch", 1300, [
        meter("Tool call: finance.fetch", 3, "calls", 0.005),
      ]),
      tool("Reconciling and detecting anomalies", "finance.reconcile", 1500, [
        meter("Input tokens", 5200, "tokens", 0.0000018),
        meter("Transactions matched", 1840, "txns", 0.0004),
      ]),
      step("writing", "Writing the close summary…", 900),
      done("Close reconciled — 2 anomalies flagged."),
    ],
    output: json({
      status: "reconciled",
      period: "2026-05",
      matched: "1,838 / 1,840",
      anomalies: 2,
      largest_variance_usd: 312.4,
      ready_to_close: false,
    }),
    outcome: "Reconciled the monthly close and flagged 2 anomalies.",
  },

  "signal-prospector": {
    prompt: "Set a trigger. Signal Prospector finds and scores fresh prospects.",
    inputs: [
      {
        label: "Hiring-signal trigger",
        value: json({
          signal: "Posted a 'Head of AI' role in last 14 days",
          icp: "Mid-market B2B, 200–2000 employees",
          limit: 25,
        }),
      },
    ],
    steps: [
      step("thinking", "Translating the signal into a search…", 700),
      tool("Scanning job boards + news for the signal", "signals.scan", 1400, [
        meter("Tool call: signals.scan", 1, "call", 0.012),
      ]),
      tool("Enriching + scoring matches", "lead.enrich", 1300, [
        meter("Input tokens", 2600, "tokens", 0.0000019),
        meter("Leads enriched", 25, "leads", 0.004),
      ]),
      step("writing", "Building the scored prospect list…", 900),
      done("25 prospects found and scored."),
    ],
    output: json({
      status: "list_ready",
      prospects: 25,
      avg_fit_score: 0.78,
      top_match: "Brightwave Health — posted 'Head of AI' 3 days ago",
      delivered_to: "Salesforce (new campaign)",
    }),
    outcome: "Found and scored 25 fresh, on-signal prospects.",
  },

  "insight-pulse": {
    prompt: "Ask Insight Pulse a question of your data. It queries and explains.",
    inputs: [
      {
        label: "Revenue question",
        value: json({
          question: "Why did MRR dip in May?",
          dataset: "warehouse.metrics",
          period: "2026-04..2026-05",
        }),
      },
    ],
    steps: [
      step("thinking", "Planning the analysis and metrics needed…", 800),
      tool("Querying the warehouse", "sql.query", 1300, [
        meter("Tool call: sql.query", 4, "queries", 0.003),
      ]),
      step("writing", "Explaining the driver and the math…", 1400, [
        meter("Input tokens", 2100, "tokens", 0.0000019),
        meter("Output tokens", 900, "tokens", 0.0000088),
      ]),
      done("Answer ready with the root-cause driver."),
    ],
    output: json({
      status: "answered",
      headline: "MRR dipped 3.1% on a one-time enterprise churn",
      driver: "Acme downgrade (-$4.2k MRR) — not a trend",
      net_new_excluding: "+2.4%",
      chart: "waterfall",
    }),
    outcome: "Answered the revenue question with a clear root cause.",
  },

  "migrate-mate": {
    prompt: "Describe a migration. Migrate Mate plans, runs, and verifies it.",
    inputs: [
      {
        label: "Framework upgrade",
        value: json({
          from: "React 17 + CRA",
          to: "React 19 + Vite",
          repo: "acme/web",
          mode: "PR",
        }),
      },
    ],
    steps: [
      step("thinking", "Building a migration plan and risk map…", 900),
      tool("Codemodding + updating dependencies", "code.transform", 1700, [
        meter("Input tokens", 6400, "tokens", 0.0000018),
        meter("Files transformed", 84, "files", 0.0009),
      ]),
      tool("Running the build + test suite", "ci.run_tests", 1500, [
        meter("Tool call: ci.run_tests", 1, "call", 0.008),
      ]),
      step("writing", "Opening a PR with the migration report…", 900),
      done("Migration PR opened — build green."),
    ],
    output: json({
      status: "pr_opened",
      files_changed: 84,
      build: "passing",
      tests: "212/214 passing",
      manual_followups: ["2 deprecated APIs need review"],
      pr: "acme/web#0421",
    }),
    outcome: "Migrated the codebase and opened a green PR.",
  },

  "seo-cartographer": {
    prompt: "Give a domain + topic. SEO Cartographer maps the content opportunity.",
    inputs: [
      {
        label: "Topic cluster",
        value: json({
          domain: "yoursaas.com",
          topic: "AI agent pricing",
          competitors: ["a16z.com", "apify.com"],
        }),
      },
    ],
    steps: [
      step("thinking", "Clustering keywords and intent…", 800),
      tool("Pulling SERP + competitor gaps", "seo.serp", 1400, [
        meter("Tool call: seo.serp", 1, "call", 0.01),
      ]),
      tool("Scoring opportunity per keyword", "seo.score", 1200, [
        meter("Input tokens", 3100, "tokens", 0.0000019),
        meter("Keywords scored", 240, "keywords", 0.0003),
      ]),
      step("writing", "Drafting a prioritized content map…", 1100, [
        meter("Output tokens", 1200, "tokens", 0.0000087),
      ]),
      done("Content map ready — 12 priority pages."),
    ],
    output: json({
      status: "map_ready",
      keywords_analyzed: 240,
      priority_pages: 12,
      quickest_win: "'usage-based AI pricing' — KD 18, 1.9k vol",
      est_traffic_uplift: "+8.4k/mo at 90 days",
    }),
    outcome: "Mapped 240 keywords into 12 priority content pages.",
  },

  "onboard-orchestra": {
    prompt: "Hand off a new hire. Onboard Orchestra runs the whole first week.",
    inputs: [
      {
        label: "New engineer",
        value: json({
          hire: { name: "Sam Okoro", role: "Backend Engineer", start: "2026-06-22" },
          checklist: ["accounts", "hardware", "intro meetings", "first task"],
        }),
      },
    ],
    steps: [
      step("thinking", "Building the personalized onboarding plan…", 800),
      tool("Provisioning accounts + hardware order", "it.provision", 1300, [
        meter("Tool call: it.provision", 5, "calls", 0.004),
      ]),
      tool("Scheduling intros + assigning a first task", "calendar.book", 1200, [
        meter("Input tokens", 1900, "tokens", 0.0000019),
        meter("Tool call: calendar.book", 4, "calls", 0.009),
      ]),
      step("writing", "Sending the welcome plan…", 800),
      done("First-week plan scheduled and sent."),
    ],
    output: json({
      status: "scheduled",
      accounts_created: 5,
      meetings_booked: 4,
      first_task: "Fix flaky auth test (good first issue)",
      buddy_assigned: "Dana R.",
    }),
    outcome: "Provisioned and scheduled a full first week for the new hire.",
  },

  "invoice-sentry": {
    prompt: "Feed Invoice Sentry your AR. It chases payment and reconciles.",
    inputs: [
      {
        label: "Overdue invoices",
        value: json({
          source: "QuickBooks",
          filter: "overdue > 7 days",
          tone: "firm but friendly",
        }),
      },
    ],
    steps: [
      step("thinking", "Loading overdue invoices and aging buckets…", 800),
      tool("Pulling AR from QuickBooks", "finance.fetch", 1100, [
        meter("Tool call: finance.fetch", 1, "call", 0.005),
      ]),
      step("writing", "Drafting tailored reminders per customer…", 1500, [
        meter("Input tokens", 2800, "tokens", 0.0000019),
        meter("Output tokens", 1100, "tokens", 0.0000086),
      ]),
      tool("Sending reminders + logging follow-ups", "email.send", 1000, [
        meter("Reminders sent", 9, "emails", 0.006),
      ]),
      done("9 reminders sent; 2 marked likely-to-pay."),
    ],
    output: json({
      status: "chasing",
      invoices_overdue: 9,
      total_outstanding_usd: 38420,
      reminders_sent: 9,
      predicted_recovery_30d_usd: 26800,
      dso_impact_days: -6,
    }),
    outcome: "Sent 9 tailored payment reminders and forecast recovery.",
  },
};

/* ----------------------------- Fallback ------------------------------- */

function step(
  phase: RunStep["phase"],
  text: string,
  durationMs: number,
  meter?: MeterEvent[],
): RunStep {
  return { phase, text, durationMs, meter };
}

function tool(
  text: string,
  toolName: string,
  durationMs: number,
  meter?: MeterEvent[],
): RunStep {
  return { phase: "tool", text, tool: toolName, durationMs, meter };
}

function done(text: string): RunStep {
  return { phase: "done", text, durationMs: 500 };
}

function meter(label: string, units: number, unit: string, unitCost: number): MeterEvent {
  return { label, units, unit, unitCost };
}

/** A generic, on-brand demo for any agent without a hand-authored script. */
function fallbackDemo(agent: Agent): RunDemo {
  return {
    prompt: `Give ${agent.name} a sample task. It will run end-to-end.`,
    inputs: [
      {
        label: "Sample task",
        value: json({ task: agent.tagline, category: agent.category }),
      },
    ],
    steps: [
      step("thinking", "Reading the task and planning the run…", 800),
      tool(`Calling ${agent.integrations[1] ?? "tool"}`, "tool.call", 1300, [
        meter("Input tokens", 1800, "tokens", 0.000002),
        meter("Tool call", 1, "call", 0.006),
      ]),
      step("writing", "Producing the result…", 1400, [
        meter("Output tokens", 700, "tokens", 0.0000088),
      ]),
      done("Run complete."),
    ],
    output: json({ status: "completed", agent: agent.name, confidence: 0.9 }),
    outcome: `${agent.name} completed the task.`,
  };
}

export function getRunDemo(agent: Agent): RunDemo {
  return DEMOS[agent.slug] ?? fallbackDemo(agent);
}
