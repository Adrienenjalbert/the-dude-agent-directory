"use client";

import {
  Area,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  type TooltipProps,
} from "recharts";
import type { TrendPoint } from "@/data/console";
import { formatNumber } from "@/lib/utils";

interface TrendChartProps {
  data: TrendPoint[];
  /** Formats the primary value (e.g. currency). */
  formatValue: (n: number) => string;
  /** Label for the primary (USD) series, e.g. "Earnings" or "Spend". */
  label: string;
}

export function TrendChart({ data, formatValue, label }: TrendChartProps) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
          <defs>
            <linearGradient id="fillPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8703A" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#E8703A" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E7DAC9" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="label"
            stroke="#6B6258"
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            yAxisId="usd"
            stroke="#6B6258"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            width={48}
            tickFormatter={(v: number) => formatValue(v)}
          />
          <YAxis yAxisId="runs" hide />
          <Tooltip
            cursor={{ stroke: "#E8703A", strokeWidth: 1, strokeDasharray: "4 4" }}
            content={<DudeTooltip formatValue={formatValue} label={label} />}
          />
          <Area
            yAxisId="usd"
            type="monotone"
            dataKey="value"
            name={label}
            stroke="#E8703A"
            strokeWidth={2.5}
            fill="url(#fillPrimary)"
            dot={{ r: 3, fill: "#E8703A", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
          <Line
            yAxisId="runs"
            type="monotone"
            dataKey="runs"
            name="Runs"
            stroke="#3B6FB0"
            strokeWidth={2}
            strokeDasharray="5 4"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

/** On-brand custom tooltip showing both the USD series and run volume. */
function DudeTooltip({
  active,
  payload,
  label: axisLabel,
  formatValue,
  label,
}: TooltipProps<number, string> & {
  formatValue: (n: number) => string;
  label: string;
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0]?.payload as TrendPoint | undefined;
  if (!point) return null;
  return (
    <div className="rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-lift">
      <p className="mb-1.5 font-display text-sm font-semibold text-foreground">
        {axisLabel}
      </p>
      <dl className="flex flex-col gap-1 text-[0.8rem]">
        <div className="flex items-center justify-between gap-6">
          <dt className="flex items-center gap-1.5 text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden />
            {label}
          </dt>
          <dd className="font-semibold tabular-nums text-foreground">
            {formatValue(point.value)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-6">
          <dt className="flex items-center gap-1.5 text-muted-foreground">
            <span className="size-2 rounded-full bg-[#3B6FB0]" aria-hidden />
            Runs
          </dt>
          <dd className="font-semibold tabular-nums text-foreground">
            {formatNumber(point.runs)}
          </dd>
        </div>
      </dl>
    </div>
  );
}
