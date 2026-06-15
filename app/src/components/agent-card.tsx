import Link from "next/link";
import { Gauge, Timer, Wallet } from "lucide-react";
import type { Agent } from "@/data/types";
import { CATEGORY_MAP } from "@/data/categories";
import { Badge, VerifiedBadge, NewBadge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { CategoryIcon } from "@/components/category-icon";
import { cn, formatNumber } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
  className?: string;
}

export function AgentCard({ agent, className }: AgentCardProps) {
  const category = CATEGORY_MAP[agent.category];

  return (
    <Link
      href={`/agents/${agent.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-card border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift focus-visible:-translate-y-0.5",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-soft",
              agent.gradient,
            )}
          >
            <CategoryIcon name={category.icon} className="size-5" />
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-semibold leading-tight text-foreground">
              {agent.name}
            </h3>
            <p className="truncate text-sm text-muted-foreground">
              by {agent.author}
            </p>
          </div>
        </div>
        {agent.verified ? (
          <VerifiedBadge />
        ) : agent.isNew ? (
          <NewBadge />
        ) : null}
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {agent.summary}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone="primary">{category.name}</Badge>
        <Rating value={agent.metrics.rating} count={agent.metrics.reviewCount} />
      </div>

      <div className="mt-auto pt-5">
        <div className="grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
          <Metric
            icon={<Gauge className="size-4" aria-hidden />}
            value={`${agent.metrics.successRate}%`}
            label="Success"
          />
          <Metric
            icon={<Timer className="size-4" aria-hidden />}
            value={`${agent.metrics.latencySec}s`}
            label="Latency"
          />
          <Metric
            icon={<Wallet className="size-4" aria-hidden />}
            value={agent.pricing.display.split(" ")[0]}
            label={agent.pricing.model === "free" ? "Free" : "Price"}
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {formatNumber(agent.metrics.totalRuns)} runs · {agent.pricing.display}
        </p>
      </div>
    </Link>
  );
}

function Metric({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="flex items-center gap-1 text-primary">{icon}</span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
      <span className="text-[0.7rem] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
