"use client";

import { useMemo, useState } from "react";
import {
  LayoutDashboard,
  Wallet,
  PlayCircle,
  Settings,
  TrendingUp,
  TrendingDown,
  Minus,
  Bot,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Loader2,
  XCircle,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  type LucideIcon,
} from "lucide-react";
import { TrendChart } from "@/components/console/trend-chart";
import {
  TIME_RANGES,
  builderData,
  buyerData,
  BUILDER_AGENTS,
  BUYER_RENTALS,
  BUYER_RUNS,
  type TimeRange,
  type Kpi,
  type BuilderAgentRow,
  type BuyerRunRow,
  type RentalRow,
} from "@/data/console";
import { cn, formatNumber } from "@/lib/utils";

type View = "builder" | "buyer";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    notation: "compact",
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 1,
  }).format(n);

export function ConsoleDashboard() {
  const [view, setView] = useState<View>("builder");
  const [range, setRange] = useState<TimeRange>("6m");

  const NAV: { label: string; icon: LucideIcon; active?: boolean }[] =
    view === "builder"
      ? [
          { label: "Overview", icon: LayoutDashboard, active: true },
          { label: "Earnings", icon: Wallet },
          { label: "Runs & logs", icon: PlayCircle },
          { label: "Settings", icon: Settings },
        ]
      : [
          { label: "Overview", icon: LayoutDashboard, active: true },
          { label: "Spend", icon: Wallet },
          { label: "Run history", icon: PlayCircle },
          { label: "Settings", icon: Settings },
        ];

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      {/* Sidebar */}
      <aside className="flex h-fit flex-col gap-4 lg:sticky lg:top-24">
        {/* View toggle */}
        <div
          role="radiogroup"
          aria-label="Console view"
          className="grid grid-cols-2 gap-1 rounded-pill bg-background-alt p-1"
        >
          <ToggleButton
            active={view === "builder"}
            onClick={() => setView("builder")}
            icon={Bot}
            label="Builder"
          />
          <ToggleButton
            active={view === "buyer"}
            onClick={() => setView("buyer")}
            icon={ShoppingBag}
            label="Buyer"
          />
        </div>

        <nav className="flex flex-col gap-1" aria-label="Console sections">
          {NAV.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-card text-foreground shadow-soft"
                    : "text-muted-foreground hover:bg-background-alt hover:text-foreground",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="rounded-card border border-border bg-card p-4 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {view === "builder" ? "Payout account" : "Billing"}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            {view === "builder" ? "Stripe Connect · Active" : "Visa ···· 4242"}
          </p>
          <span className="mt-2 inline-flex items-center gap-1 rounded-pill bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
            <CheckCircle2 className="size-3" aria-hidden />
            Verified
          </span>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-col gap-6">
        {/* Header + time-range selector */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Header
            title={view === "builder" ? "Builder console" : "Buyer console"}
            subtitle={
              view === "builder"
                ? "Your earnings, runs, and agent performance at a glance."
                : "Your spend, active rentals, and recent runs."
            }
          />
          <RangePicker range={range} onChange={setRange} />
        </div>

        {view === "builder" ? (
          <BuilderView range={range} />
        ) : (
          <BuyerView range={range} />
        )}
      </div>
    </div>
  );
}

function RangePicker({
  range,
  onChange,
}: {
  range: TimeRange;
  onChange: (r: TimeRange) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Time range"
      className="flex shrink-0 gap-1 rounded-pill bg-background-alt p-1"
    >
      {TIME_RANGES.map((r) => (
        <button
          key={r.key}
          type="button"
          role="radio"
          aria-checked={range === r.key}
          onClick={() => onChange(r.key)}
          className={cn(
            "rounded-pill px-3 py-1.5 text-xs font-semibold transition-colors",
            range === r.key
              ? "bg-card text-foreground shadow-soft"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-1.5 rounded-pill px-3 py-2 text-sm font-semibold transition-colors",
        active
          ? "bg-card text-foreground shadow-soft"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      <Icon className="size-4" aria-hidden />
      {label}
    </button>
  );
}

/* ----------------------------- Builder view ---------------------------- */

function BuilderView({ range }: { range: TimeRange }) {
  const data = useMemo(() => builderData(range), [range]);
  return (
    <>
      <KpiGrid kpis={data.kpis} />

      <Card>
        <CardHeader title="Earnings & runs" subtitle={data.trendSubtitle} />
        <TrendChart data={data.trend} formatValue={usd} label="Earnings" />
      </Card>

      <Card>
        <CardHeader title="Top agents" subtitle="By revenue (30 days)" />
        <SortableTable<BuilderAgentRow>
          rows={BUILDER_AGENTS}
          initialSort="revenue"
          columns={[
            {
              key: "name",
              header: "Agent",
              sortable: true,
              accessor: (a) => a.name,
              cell: (a) => (
                <span className="font-medium text-foreground">{a.name}</span>
              ),
            },
            {
              key: "runs",
              header: "Runs",
              sortable: true,
              numeric: true,
              accessor: (a) => a.runs,
              cell: (a) => formatNumber(a.runs),
            },
            {
              key: "successRate",
              header: "Success",
              sortable: true,
              numeric: true,
              accessor: (a) => a.successRate,
              cell: (a) => <SuccessPill value={a.successRate} />,
            },
            {
              key: "revenue",
              header: "Revenue",
              sortable: true,
              numeric: true,
              accessor: (a) => a.revenue,
              cell: (a) => (
                <span className="font-semibold text-foreground">
                  {usd(a.revenue)}
                </span>
              ),
            },
            {
              key: "trend",
              header: "",
              sortable: false,
              accessor: (a) => a.trend,
              cell: (a) => <TrendIcon trend={a.trend} />,
            },
          ]}
        />
      </Card>
    </>
  );
}

/* ------------------------------ Buyer view ----------------------------- */

function BuyerView({ range }: { range: TimeRange }) {
  const data = useMemo(() => buyerData(range), [range]);
  return (
    <>
      <KpiGrid kpis={data.kpis} />

      <Card>
        <CardHeader title="Spend & runs" subtitle={data.trendSubtitle} />
        <TrendChart data={data.trend} formatValue={usd} label="Spend" />
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader title="Active rentals" subtitle="7 agents in use" />
          <SortableTable<RentalRow>
            rows={BUYER_RENTALS}
            initialSort="spendThisMonth"
            columns={[
              {
                key: "agent",
                header: "Agent",
                sortable: true,
                accessor: (r) => r.agent,
                cell: (r) => (
                  <span className="font-medium text-foreground">{r.agent}</span>
                ),
              },
              {
                key: "model",
                header: "Model",
                sortable: true,
                accessor: (r) => r.model,
                cell: (r) => (
                  <span className="text-muted-foreground">{r.model}</span>
                ),
              },
              {
                key: "spendThisMonth",
                header: "Spend",
                sortable: true,
                numeric: true,
                accessor: (r) => r.spendThisMonth,
                cell: (r) => (
                  <span className="font-semibold text-foreground">
                    {usd(r.spendThisMonth)}
                  </span>
                ),
              },
              {
                key: "nextBill",
                header: "Next bill",
                sortable: false,
                accessor: (r) => r.nextBill,
                cell: (r) => (
                  <span className="text-muted-foreground">{r.nextBill}</span>
                ),
              },
            ]}
          />
        </Card>

        <Card>
          <CardHeader title="Recent runs" subtitle="Live activity" />
          <SortableTable<BuyerRunRow>
            rows={BUYER_RUNS}
            initialSort="agoMinutes"
            initialDir="asc"
            columns={[
              {
                key: "agent",
                header: "Agent",
                sortable: true,
                accessor: (r) => r.agent,
                cell: (r) => (
                  <span className="flex items-center gap-2">
                    <RunStatus status={r.status} />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-foreground">
                        {r.agent}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {r.outcome}
                      </span>
                    </span>
                  </span>
                ),
              },
              {
                key: "cost",
                header: "Cost",
                sortable: true,
                numeric: true,
                accessor: (r) => r.cost,
                cell: (r) => (
                  <span className="font-semibold text-foreground">
                    {r.cost === 0 ? "—" : usd(r.cost)}
                  </span>
                ),
              },
              {
                key: "agoMinutes",
                header: "When",
                sortable: true,
                numeric: true,
                accessor: (r) => r.agoMinutes,
                cell: (r) => (
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                ),
              },
            ]}
          />
        </Card>
      </div>
    </>
  );
}

/* ----------------------------- Shared bits ----------------------------- */

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h1>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function KpiGrid({ kpis }: { kpis: Kpi[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="flex flex-col gap-1 rounded-card border border-border bg-card p-5 shadow-soft"
        >
          <span className="text-sm text-muted-foreground">{kpi.label}</span>
          <span className="font-display text-2xl font-semibold text-foreground">
            {kpi.value}
          </span>
          <span
            className={cn(
              "inline-flex w-fit items-center gap-1 text-xs font-semibold",
              kpi.positive ? "text-success" : "text-danger",
            )}
          >
            {kpi.positive ? (
              <ArrowUpRight className="size-3.5" aria-hidden />
            ) : (
              <ArrowDownRight className="size-3.5" aria-hidden />
            )}
            {kpi.delta}
          </span>
        </div>
      ))}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-card border border-border bg-card p-5 shadow-soft sm:p-6">
      {children}
    </div>
  );
}

function CardHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="font-display text-lg font-semibold">{title}</h2>
      <span className="text-sm text-muted-foreground">{subtitle}</span>
    </div>
  );
}

/* --------------------------- Sortable table ---------------------------- */

type SortDir = "asc" | "desc";

interface Column<T> {
  key: string;
  header: string;
  sortable: boolean;
  /** Right-align + numeric comparison. */
  numeric?: boolean;
  accessor: (row: T) => string | number;
  cell: (row: T) => React.ReactNode;
}

function SortableTable<T>({
  rows,
  columns,
  initialSort,
  initialDir = "desc",
}: {
  rows: T[];
  columns: Column<T>[];
  initialSort: string;
  initialDir?: SortDir;
}) {
  const [sortKey, setSortKey] = useState(initialSort);
  const [dir, setDir] = useState<SortDir>(initialDir);

  const sorted = useMemo(() => {
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = col.accessor(a);
      const bv = col.accessor(b);
      let cmp: number;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av).localeCompare(String(bv));
      return dir === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [rows, columns, sortKey, dir]);

  const toggle = (key: string) => {
    if (key === sortKey) {
      setDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setDir("desc");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {columns.map((col) => {
              const isActive = col.key === sortKey;
              return (
                <th
                  key={col.key}
                  aria-sort={
                    !col.sortable
                      ? undefined
                      : isActive
                        ? dir === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                  }
                  className={cn(
                    "px-2 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                    col.numeric && "text-right",
                  )}
                >
                  {col.sortable && col.header ? (
                    <button
                      type="button"
                      onClick={() => toggle(col.key)}
                      className={cn(
                        "inline-flex items-center gap-1 transition-colors hover:text-foreground",
                        col.numeric && "flex-row-reverse",
                        isActive && "text-foreground",
                      )}
                    >
                      {col.header}
                      <SortGlyph active={isActive} dir={dir} />
                    </button>
                  ) : (
                    col.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border/60 last:border-0 hover:bg-background-alt/50"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "px-2 py-3 align-middle",
                    col.numeric && "text-right",
                  )}
                >
                  {col.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SortGlyph({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active)
    return <ChevronsUpDown className="size-3 text-muted-foreground/60" aria-hidden />;
  return dir === "asc" ? (
    <ChevronUp className="size-3" aria-hidden />
  ) : (
    <ChevronDown className="size-3" aria-hidden />
  );
}

function SuccessPill({ value }: { value: number }) {
  const tone =
    value >= 90 ? "text-success" : value >= 80 ? "text-warning" : "text-danger";
  return <span className={cn("font-semibold", tone)}>{value}%</span>;
}

function TrendIcon({ trend }: { trend: "up" | "down" | "flat" }) {
  if (trend === "up")
    return <TrendingUp className="size-4 text-success" aria-label="Trending up" />;
  if (trend === "down")
    return (
      <TrendingDown className="size-4 text-danger" aria-label="Trending down" />
    );
  return <Minus className="size-4 text-muted-foreground" aria-label="Flat" />;
}

function RunStatus({ status }: { status: "completed" | "running" | "failed" }) {
  switch (status) {
    case "completed":
      return (
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="size-4" aria-label="Completed" />
        </span>
      );
    case "running":
      return (
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Loader2 className="size-4 animate-spin" aria-label="Running" />
        </span>
      );
    case "failed":
      return (
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-danger/10 text-danger">
          <XCircle className="size-4" aria-label="Failed" />
        </span>
      );
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}
