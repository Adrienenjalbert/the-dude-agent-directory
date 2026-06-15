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
}
