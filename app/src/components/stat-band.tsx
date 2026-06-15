import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
}

export const MARKETPLACE_STATS: Stat[] = [
  { value: "10k+", label: "Agents published" },
  { value: "80%", label: "Verified & evaluated" },
  { value: "1M+", label: "Runs every month" },
  { value: "15%", label: "Flat platform fee" },
];

interface StatBandProps {
  stats?: Stat[];
  className?: string;
  /** Render on a dark or light surface. */
  tone?: "light" | "dark";
}

export function StatBand({
  stats = MARKETPLACE_STATS,
  className,
  tone = "light",
}: StatBandProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-card border lg:grid-cols-4",
        tone === "dark"
          ? "border-white/10 bg-white/10"
          : "border-border bg-border",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col items-center gap-1 px-6 py-8 text-center",
            tone === "dark" ? "bg-dark" : "bg-card",
          )}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="flex flex-col items-center gap-1">
            <span
              className={cn(
                "font-display text-4xl font-semibold sm:text-5xl",
                tone === "dark" ? "text-primary" : "text-primary",
              )}
            >
              {stat.value}
            </span>
            <span
              className={cn(
                "text-sm font-medium",
                tone === "dark" ? "text-dark-foreground/70" : "text-muted-foreground",
              )}
            >
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
