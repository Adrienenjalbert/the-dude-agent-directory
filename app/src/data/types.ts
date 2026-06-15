/** Shared domain types for the marketplace mock data. */

export type CategoryId =
  | "sales"
  | "support"
  | "research"
  | "coding"
  | "data"
  | "marketing"
  | "ops"
  | "finance";

export type PricingModel =
  | "usage"
  | "outcome"
  | "subscription"
  | "hybrid"
  | "free";

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  /** lucide-react icon name, resolved at render time. */
  icon: string;
  agentCount: number;
}

export interface Pricing {
  model: PricingModel;
  /** Display price, e.g. "$0.04 / run" or "$49 / mo". */
  display: string;
  /** Numeric anchor (USD) used for sorting; meaning depends on model. */
  amount: number;
  /** Short unit label, e.g. "per run", "per qualified lead". */
  unit: string;
  /** Optional free trial / demo note. */
  note?: string;
}

export interface Metrics {
  /** 0–100 verified success rate. */
  successRate: number;
  /** Median latency in seconds. */
  latencySec: number;
  /** Verified uptime percent. */
  uptime: number;
  /** Lifetime runs across all buyers. */
  totalRuns: number;
  /** Average rating 0–5. */
  rating: number;
  /** Number of verified-usage reviews. */
  reviewCount: number;
}

export interface Review {
  author: string;
  role: string;
  rating: number;
  date: string;
  body: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  notes: string[];
}

/* ----------------------------- Run demo ------------------------------- */

/** A single metered event the run emits (drives the live cost meter). */
export interface MeterEvent {
  /** What is being metered, e.g. "Input tokens", "Tool call: enrich". */
  label: string;
  /** Number of units consumed. */
  units: number;
  /** Short unit name, e.g. "tokens", "calls", "records". */
  unit: string;
  /** USD cost per unit (already includes the all-in transparent price). */
  unitCost: number;
}

/** One step in the simulated agent run timeline. */
export interface RunStep {
  /** Phase shown in the stream, e.g. "Thinking", "Calling tool". */
  phase: "thinking" | "tool" | "writing" | "done";
  /** Human-readable line streamed to the user. */
  text: string;
  /** Tool name when phase === "tool". */
  tool?: string;
  /** Metered events emitted when this step completes. */
  meter?: MeterEvent[];
  /** Approx. ms this step "runs" in the simulation (scaled down at runtime). */
  durationMs: number;
}

/** A ready-to-run demo input the user can pick or edit. */
export interface DemoInput {
  label: string;
  /** Pretty-printed JSON string shown in the editor. */
  value: string;
}

/** The full interactive run-demo definition for an agent. */
export interface RunDemo {
  /** Short framing line above the input editor. */
  prompt: string;
  /** One or more sample inputs the user can load and edit. */
  inputs: DemoInput[];
  /** Ordered steps of the simulated run. */
  steps: RunStep[];
  /** Pretty-printed JSON result rendered when the run completes. */
  output: string;
  /** One-line natural-language summary of the result. */
  outcome: string;
}

export interface Agent {
  slug: string;
  name: string;
  tagline: string;
  author: string;
  authorHandle: string;
  category: CategoryId;
  /** Short blurb for cards. */
  summary: string;
  /** Longer overview for the detail page. */
  description: string;
  /** Markdown-ish README sections rendered as paragraphs/bullets. */
  readme: string[];
  verified: boolean;
  /** "new & promising" boost badge. */
  isNew?: boolean;
  /** Editorial featuring on the landing page. */
  featured?: boolean;
  framework: string;
  integrations: string[];
  pricing: Pricing;
  metrics: Metrics;
  reviews: Review[];
  changelog: ChangelogEntry[];
  /** Tailwind gradient classes for the card/hero artwork. */
  gradient: string;
  /** Builder's share of revenue (0–1). Marketplace keeps a flat 15%. */
  payoutShare: number;
}
