import type { Category, CategoryId } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "sales",
    name: "Sales & SDR",
    tagline: "Prospecting, outreach & qualification",
    icon: "Target",
    agentCount: 412,
  },
  {
    id: "support",
    name: "Customer Support",
    tagline: "Tickets, deflection & CSAT",
    icon: "Headphones",
    agentCount: 318,
  },
  {
    id: "research",
    name: "Research",
    tagline: "Market, competitive & deep research",
    icon: "Telescope",
    agentCount: 276,
  },
  {
    id: "coding",
    name: "Coding",
    tagline: "Review, migration & QA agents",
    icon: "Code2",
    agentCount: 389,
  },
  {
    id: "data",
    name: "Data & Extraction",
    tagline: "Scraping, enrichment & ETL",
    icon: "Database",
    agentCount: 301,
  },
  {
    id: "marketing",
    name: "Marketing",
    tagline: "Content, SEO & campaigns",
    icon: "Megaphone",
    agentCount: 254,
  },
  {
    id: "ops",
    name: "Operations",
    tagline: "Workflow & back-office automation",
    icon: "Settings2",
    agentCount: 198,
  },
  {
    id: "finance",
    name: "Finance",
    tagline: "Reconciliation, FP&A & invoicing",
    icon: "Landmark",
    agentCount: 143,
  },
];

export const CATEGORY_MAP: Record<CategoryId, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;

export function categoryName(id: CategoryId): string {
  return CATEGORY_MAP[id].name;
}
