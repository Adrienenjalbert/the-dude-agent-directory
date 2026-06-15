"use client";

import { useState } from "react";
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
  CheckCircle2,
  Loader2,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { TrendChart } from "@/components/console/trend-chart";
import {
  BUILDER_KPIS,
  BUILDER_EARNINGS,
  BUILDER_AGENTS,
  BUYER_KPIS,
  BUYER_SPEND,
  BUYER_RENTALS,
  BUYER_RUNS,
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
        {view === "builder" ? <BuilderView /> : <BuyerView />}
      </div>
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

function BuilderView() {
  return (
    <>
      <Header
        title="Builder console"
        subtitle="Your earnings, runs, and agent performance at a glance."
      />

      <KpiGrid kpis={BUILDER_KPIS} />

      <Card>
        <CardHeader title="Earnings & runs" subtitle="Last 6 months" />
        <TrendChart data={BUILDER_EARNINGS} formatValue={usd} label="Earnings" />
      </Card>

      <Card>
        <CardHeader title="Top agents" subtitle="By revenue (30 days)" />
        <Table
          head={["Agent", "Runs", "Success", "Revenue", ""]}
          rows={BUILDER_AGENTS.map((a) => [
            <span key="n" className="font-medium text-foreground">
              {a.name}
            </span>,
            formatNumber(a.runs),
            <SuccessPill key="s" value={a.successRate} />,
            <span key="r" className="font-semibold text-foreground">
              {usd(a.revenue)}
            </span>,
            <TrendIcon key="t" trend={a.trend} />,
          ])}
        />
      </Card>
    </>
  );
}

/* ------------------------------ Buyer view ----------------------------- */

function BuyerView() {
  return (
    <>
      <Header
        title="Buyer console"
        subtitle="Your spend, active rentals, and recent runs."
      />

      <KpiGrid kpis={BUYER_KPIS} />

      <Card>
        <CardHeader title="Spend & runs" subtitle="Last 6 months" />
        <TrendChart data={BUYER_SPEND} formatValue={usd} label="Spend" />
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader title="Active rentals" subtitle="7 agents in use" />
          <Table
            head={["Agent", "Model", "Spend", "Next bill"]}
            rows={BUYER_RENTALS.map((r) => [
              <span key="a" className="font-medium text-foreground">
                {r.agent}
              </span>,
              <span key="m" className="text-muted-foreground">
                {r.model}
              </span>,
              <span key="s" className="font-semibold text-foreground">
                {usd(r.spendThisMonth)}
              </span>,
              <span key="n" className="text-muted-foreground">
                {r.nextBill}
              </span>,
            ])}
          />
        </Card>

        <Card>
          <CardHeader title="Recent runs" subtitle="Live activity" />
          <ul className="flex flex-col divide-y divide-border">
            {BUYER_RUNS.map((run, i) => (
              <li key={i} className="flex items-center gap-3 py-3">
                <RunStatus status={run.status} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {run.agent}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {run.outcome}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">
                    {run.cost === 0 ? "—" : usd(run.cost)}
                  </p>
                  <p className="text-xs text-muted-foreground">{run.date}</p>
                </div>
              </li>
            ))}
          </ul>
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

function KpiGrid({
  kpis,
}: {
  kpis: { label: string; value: string; delta: string; positive: boolean }[];
}) {
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
            <ArrowUpRight className="size-3.5" aria-hidden />
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

function Table({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h, i) => (
              <th
                key={i}
                className="px-2 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border/60 last:border-0 hover:bg-background-alt/50"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-2 py-3 align-middle">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
