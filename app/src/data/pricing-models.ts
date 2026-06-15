import type { PricingModel } from "./types";

export interface PricingModelInfo {
  id: PricingModel;
  label: string;
  tagline: string;
  description: string;
  /** lucide-react icon name. */
  icon: string;
  example: string;
}

export const PRICING_MODELS: PricingModelInfo[] = [
  {
    id: "usage",
    label: "Pay per run",
    tagline: "The market default",
    description:
      "Charge per run or per billable event. Aligned with where the market is heading — buyers pay for exactly what they use.",
    icon: "Zap",
    example: "$0.04 per run",
  },
  {
    id: "outcome",
    label: "Pay per outcome",
    tagline: "Rides the outcome trend",
    description:
      "Charge only when the agent delivers a result — a resolved ticket, a qualified lead, a completed migration. Easy for buyers to defend.",
    icon: "Target",
    example: "$18 per qualified meeting",
  },
  {
    id: "subscription",
    label: "Monthly rental",
    tagline: "Predictable floor",
    description:
      "A flat monthly subscription. Retained deliberately — exactly the model legacy marketplaces are removing.",
    icon: "CalendarClock",
    example: "$49 / month",
  },
  {
    id: "hybrid",
    label: "Hybrid",
    tagline: "Floor + usage",
    description:
      "A subscription floor plus per-use pricing. Solves the 'earn nothing if idle' problem while keeping buyers' costs predictable.",
    icon: "Layers",
    example: "$49 / mo + $0.02 per step",
  },
  {
    id: "free",
    label: "Free",
    tagline: "Grow distribution",
    description:
      "List for free to build reputation and reviews, then introduce paid tiers once you have traction and trust.",
    icon: "Gift",
    example: "Free to run",
  },
];

export const PRICING_MODEL_MAP: Record<PricingModel, PricingModelInfo> =
  Object.fromEntries(PRICING_MODELS.map((m) => [m.id, m])) as Record<
    PricingModel,
    PricingModelInfo
  >;
