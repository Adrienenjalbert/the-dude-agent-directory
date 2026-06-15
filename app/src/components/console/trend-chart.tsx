"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import type { TrendPoint } from "@/data/console";

interface TrendChartProps {
  data: TrendPoint[];
  /** Formats the primary value (e.g. currency). */
  formatValue: (n: number) => string;
  label: string;
}

export function TrendChart({ data, formatValue, label }: TrendChartProps) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
          <defs>
            <linearGradient id="fillPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8703A" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#E8703A" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E7DAC9" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="#6B6258"
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            stroke="#6B6258"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            width={48}
            tickFormatter={(v: number) => formatValue(v)}
          />
          <Tooltip
            cursor={{ stroke: "#E8703A", strokeWidth: 1, strokeDasharray: "4 4" }}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #E7DAC9",
              boxShadow: "0 8px 24px -12px rgba(43,37,32,0.24)",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
            }}
            labelStyle={{ color: "#2B2520", fontWeight: 600 }}
            formatter={(value: number) => [formatValue(value), label]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#E8703A"
            strokeWidth={2.5}
            fill="url(#fillPrimary)"
            dot={{ r: 3, fill: "#E8703A", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
