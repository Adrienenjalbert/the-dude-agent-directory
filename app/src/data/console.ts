/** Mock data for the console dashboards (builder + buyer views). */

export interface TrendPoint {
  month: string;
  value: number;
  secondary: number;
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
  outcome: string;
}

export interface RentalRow {
  agent: string;
  model: string;
  spendThisMonth: number;
  nextBill: string;
}

/* ---------------------------- Builder view ---------------------------- */

export const BUILDER_KPIS = [
  { label: "Net earnings (30d)", value: "$24,180", delta: "+18%", positive: true },
  { label: "Total runs (30d)", value: "412,900", delta: "+9%", positive: true },
  { label: "Avg success rate", value: "90.4%", delta: "+1.2pt", positive: true },
  { label: "Next payout", value: "$8,640", delta: "Jun 30", positive: true },
];

export const BUILDER_EARNINGS: TrendPoint[] = [
  { month: "Jan", value: 9200, secondary: 142000 },
  { month: "Feb", value: 11400, secondary: 168000 },
  { month: "Mar", value: 14800, secondary: 221000 },
  { month: "Apr", value: 16100, secondary: 256000 },
  { month: "May", value: 20400, secondary: 331000 },
  { month: "Jun", value: 24180, secondary: 412900 },
];

export const BUILDER_AGENTS: BuilderAgentRow[] = [
  { name: "Closer SDR", runs: 248300, successRate: 91, revenue: 12440, trend: "up" },
  { name: "Signal Prospector", runs: 174300, successRate: 85, revenue: 6210, trend: "up" },
  { name: "Patch Pilot", runs: 512700, successRate: 89, revenue: 3980, trend: "flat" },
  { name: "Harvest ETL", runs: 318050, successRate: 95, revenue: 1090, trend: "down" },
  { name: "Deep Scout", runs: 96400, successRate: 93, revenue: 460, trend: "up" },
];

/* ----------------------------- Buyer view ----------------------------- */

export const BUYER_KPIS = [
  { label: "Spend this month", value: "$3,420", delta: "-6%", positive: true },
  { label: "Active rentals", value: "7", delta: "+2", positive: true },
  { label: "Runs this month", value: "9,840", delta: "+22%", positive: true },
  { label: "Avg cost / run", value: "$0.35", delta: "-11%", positive: true },
];

export const BUYER_SPEND: TrendPoint[] = [
  { month: "Jan", value: 2100, secondary: 5200 },
  { month: "Feb", value: 2480, secondary: 6100 },
  { month: "Mar", value: 3100, secondary: 7400 },
  { month: "Apr", value: 2950, secondary: 8050 },
  { month: "May", value: 3640, secondary: 9200 },
  { month: "Jun", value: 3420, secondary: 9840 },
];

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
    outcome: "Resolved billing question",
  },
  {
    agent: "Deep Scout",
    status: "running",
    cost: 0.9,
    date: "Just now",
    outcome: "Competitive teardown in progress",
  },
  {
    agent: "Closer SDR",
    status: "completed",
    cost: 18,
    date: "1 hr ago",
    outcome: "Booked meeting with Acme Co.",
  },
  {
    agent: "Harvest ETL",
    status: "completed",
    cost: 2.4,
    date: "3 hr ago",
    outcome: "Extracted 3,012 records",
  },
  {
    agent: "Patch Pilot",
    status: "failed",
    cost: 0,
    date: "5 hr ago",
    outcome: "Repo access expired — retry",
  },
];
