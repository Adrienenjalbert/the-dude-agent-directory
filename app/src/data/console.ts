/** Mock data for the console dashboards (builder + buyer views). */

export type TimeRange = "7d" | "30d" | "6m" | "12m";

export const TIME_RANGES: { key: TimeRange; label: string }[] = [
  { key: "7d", label: "7 days" },
  { key: "30d", label: "30 days" },
  { key: "6m", label: "6 months" },
  { key: "12m", label: "12 months" },
];

export interface TrendPoint {
  /** X-axis label (day or month). */
  label: string;
  /** Primary series — revenue/spend in USD. */
  value: number;
  /** Secondary series — run volume. */
  runs: number;
}

export interface Kpi {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}

export interface BuilderAgentRow {
  name: string;
  runs: number;
  successRate: number;
  revenue: number;
  trend: "up" | "down" | "flat";
}

export interface BuyerRunRow {
  agent: string;
  status: "completed" | "running" | "failed";
  cost: number;
  date: string;
  /** Sortable recency in minutes-ago (smaller = more recent). */
  agoMinutes: number;
  outcome: string;
}

export interface RentalRow {
  agent: string;
  model: string;
  spendThisMonth: number;
  nextBill: string;
}

export interface ConsoleRangeData {
  kpis: Kpi[];
  trend: TrendPoint[];
  trendSubtitle: string;
}

/* --------------------------- Trend builders --------------------------- */

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS_6 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const MONTHS_12 = [
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
];

/* ----------------------------- Builder -------------------------------- */

const BUILDER_RANGES: Record<TimeRange, ConsoleRangeData> = {
  "7d": {
    trendSubtitle: "Last 7 days",
    kpis: [
      { label: "Net earnings (7d)", value: "$6,120", delta: "+12%", positive: true },
      { label: "Runs (7d)", value: "98,400", delta: "+7%", positive: true },
      { label: "Avg success rate", value: "90.8%", delta: "+0.6pt", positive: true },
      { label: "Next payout", value: "$8,640", delta: "Jun 30", positive: true },
    ],
    trend: DAY_LABELS.map((label, i) => ({
      label,
      value: [720, 810, 760, 940, 1080, 920, 890][i],
      runs: [12100, 13400, 12600, 15200, 16800, 14300, 14000][i],
    })),
  },
  "30d": {
    trendSubtitle: "Last 30 days",
    kpis: [
      { label: "Net earnings (30d)", value: "$24,180", delta: "+18%", positive: true },
      { label: "Total runs (30d)", value: "412,900", delta: "+9%", positive: true },
      { label: "Avg success rate", value: "90.4%", delta: "+1.2pt", positive: true },
      { label: "Next payout", value: "$8,640", delta: "Jun 30", positive: true },
    ],
    trend: ["W1", "W2", "W3", "W4"].map((label, i) => ({
      label,
      value: [5200, 5840, 6210, 6930][i],
      runs: [94000, 101000, 105400, 112500][i],
    })),
  },
  "6m": {
    trendSubtitle: "Last 6 months",
    kpis: [
      { label: "Net earnings (6m)", value: "$96,180", delta: "+162%", positive: true },
      { label: "Total runs (6m)", value: "1.53M", delta: "+89%", positive: true },
      { label: "Avg success rate", value: "89.7%", delta: "+3.1pt", positive: true },
      { label: "Next payout", value: "$8,640", delta: "Jun 30", positive: true },
    ],
    trend: MONTHS_6.map((label, i) => ({
      label,
      value: [9200, 11400, 14800, 16100, 20400, 24180][i],
      runs: [142000, 168000, 221000, 256000, 331000, 412900][i],
    })),
  },
  "12m": {
    trendSubtitle: "Last 12 months",
    kpis: [
      { label: "Net earnings (12m)", value: "$148,400", delta: "+240%", positive: true },
      { label: "Total runs (12m)", value: "2.71M", delta: "+154%", positive: true },
      { label: "Avg success rate", value: "88.9%", delta: "+5.4pt", positive: true },
      { label: "Next payout", value: "$8,640", delta: "Jun 30", positive: true },
    ],
    trend: MONTHS_12.map((label, i) => ({
      label,
      value: [4100, 5200, 5900, 6800, 7400, 8200, 9200, 11400, 14800, 16100, 20400, 24180][i],
      runs: [
        61000, 78000, 86000, 99000, 108000, 121000, 142000, 168000, 221000, 256000, 331000,
        412900,
      ][i],
    })),
  },
};

export const BUILDER_AGENTS: BuilderAgentRow[] = [
  { name: "Closer SDR", runs: 248300, successRate: 91, revenue: 12440, trend: "up" },
  { name: "Signal Prospector", runs: 174300, successRate: 85, revenue: 6210, trend: "up" },
  { name: "Patch Pilot", runs: 512700, successRate: 89, revenue: 3980, trend: "flat" },
  { name: "Harvest ETL", runs: 318050, successRate: 95, revenue: 1090, trend: "down" },
  { name: "Deep Scout", runs: 96400, successRate: 93, revenue: 460, trend: "up" },
];

/* ------------------------------- Buyer -------------------------------- */

const BUYER_RANGES: Record<TimeRange, ConsoleRangeData> = {
  "7d": {
    trendSubtitle: "Last 7 days",
    kpis: [
      { label: "Spend (7d)", value: "$840", delta: "-4%", positive: true },
      { label: "Active rentals", value: "7", delta: "+1", positive: true },
      { label: "Runs (7d)", value: "2,310", delta: "+18%", positive: true },
      { label: "Avg cost / run", value: "$0.36", delta: "-9%", positive: true },
    ],
    trend: DAY_LABELS.map((label, i) => ({
      label,
      value: [96, 118, 104, 142, 156, 118, 106][i],
      runs: [280, 340, 300, 410, 460, 290, 230][i],
    })),
  },
  "30d": {
    trendSubtitle: "Last 30 days",
    kpis: [
      { label: "Spend this month", value: "$3,420", delta: "-6%", positive: true },
      { label: "Active rentals", value: "7", delta: "+2", positive: true },
      { label: "Runs this month", value: "9,840", delta: "+22%", positive: true },
      { label: "Avg cost / run", value: "$0.35", delta: "-11%", positive: true },
    ],
    trend: ["W1", "W2", "W3", "W4"].map((label, i) => ({
      label,
      value: [760, 840, 910, 910][i],
      runs: [2200, 2410, 2580, 2650][i],
    })),
  },
  "6m": {
    trendSubtitle: "Last 6 months",
    kpis: [
      { label: "Spend (6m)", value: "$17,690", delta: "+63%", positive: true },
      { label: "Active rentals", value: "7", delta: "+4", positive: true },
      { label: "Runs (6m)", value: "45,990", delta: "+89%", positive: true },
      { label: "Avg cost / run", value: "$0.38", delta: "-18%", positive: true },
    ],
    trend: MONTHS_6.map((label, i) => ({
      label,
      value: [2100, 2480, 3100, 2950, 3640, 3420][i],
      runs: [5200, 6100, 7400, 8050, 9200, 9840][i],
    })),
  },
  "12m": {
    trendSubtitle: "Last 12 months",
    kpis: [
      { label: "Spend (12m)", value: "$29,540", delta: "+118%", positive: true },
      { label: "Active rentals", value: "7", delta: "+6", positive: true },
      { label: "Runs (12m)", value: "71,200", delta: "+162%", positive: true },
      { label: "Avg cost / run", value: "$0.41", delta: "-24%", positive: true },
    ],
    trend: MONTHS_12.map((label, i) => ({
      label,
      value: [980, 1140, 1280, 1490, 1620, 1810, 2100, 2480, 3100, 2950, 3640, 3420][i],
      runs: [1900, 2300, 2600, 3000, 3300, 3700, 5200, 6100, 7400, 8050, 9200, 9840][i],
    })),
  },
};

export const BUYER_RENTALS: RentalRow[] = [
  { agent: "Triage Desk", model: "Per resolved ticket", spendThisMonth: 1180, nextBill: "Metered" },
  { agent: "Ledger Lens", model: "Subscription", spendThisMonth: 199, nextBill: "Jul 1" },
  { agent: "Flowwright Ops", model: "Hybrid", spendThisMonth: 412, nextBill: "Jul 1" },
  { agent: "Deep Scout", model: "Per brief", spendThisMonth: 268, nextBill: "Metered" },
];

export const BUYER_RUNS: BuyerRunRow[] = [
  {
    agent: "Triage Desk",
    status: "completed",
    cost: 0.45,
    date: "2 min ago",
    agoMinutes: 2,
    outcome: "Resolved billing question",
  },
  {
    agent: "Deep Scout",
    status: "running",
    cost: 0.9,
    date: "Just now",
    agoMinutes: 0,
    outcome: "Competitive teardown in progress",
  },
  {
    agent: "Closer SDR",
    status: "completed",
    cost: 18,
    date: "1 hr ago",
    agoMinutes: 60,
    outcome: "Booked meeting with Acme Co.",
  },
  {
    agent: "Harvest ETL",
    status: "completed",
    cost: 2.4,
    date: "3 hr ago",
    agoMinutes: 180,
    outcome: "Extracted 3,012 records",
  },
  {
    agent: "Patch Pilot",
    status: "failed",
    cost: 0,
    date: "5 hr ago",
    agoMinutes: 300,
    outcome: "Repo access expired — retry",
  },
];

/* ------------------------------ Accessors ----------------------------- */

export function builderData(range: TimeRange): ConsoleRangeData {
  return BUILDER_RANGES[range];
}

export function buyerData(range: TimeRange): ConsoleRangeData {
  return BUYER_RANGES[range];
}
