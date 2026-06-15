"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, BadgeCheck, X } from "lucide-react";
import { AGENTS } from "@/data/agents";
import { CATEGORIES } from "@/data/categories";
import type { Agent, CategoryId } from "@/data/types";
import { AgentCard } from "@/components/agent-card";
import { cn } from "@/lib/utils";

type SortKey = "relevant" | "rating" | "runs" | "success" | "price-asc";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "relevant", label: "Most relevant" },
  { key: "rating", label: "Highest rated" },
  { key: "runs", label: "Most runs" },
  { key: "success", label: "Best success rate" },
  { key: "price-asc", label: "Lowest price" },
];

function sortAgents(agents: Agent[], sort: SortKey): Agent[] {
  const copy = [...agents];
  switch (sort) {
    case "rating":
      return copy.sort((a, b) => b.metrics.rating - a.metrics.rating);
    case "runs":
      return copy.sort((a, b) => b.metrics.totalRuns - a.metrics.totalRuns);
    case "success":
      return copy.sort((a, b) => b.metrics.successRate - a.metrics.successRate);
    case "price-asc":
      return copy.sort((a, b) => a.pricing.amount - b.pricing.amount);
    case "relevant":
      // Featured + verified first, then by runs.
      return copy.sort((a, b) => {
        const score = (x: Agent) =>
          (x.featured ? 2 : 0) + (x.verified ? 1 : 0);
        return score(b) - score(a) || b.metrics.totalRuns - a.metrics.totalRuns;
      });
    default:
      return copy;
  }
}

interface AgentBrowserProps {
  /** Optional initial category from the URL (e.g. landing category links). */
  initialCategory?: CategoryId | null;
}

export function AgentBrowser({ initialCategory = null }: AgentBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | null>(initialCategory);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("relevant");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = AGENTS.filter((agent) => {
      if (category && agent.category !== category) return false;
      if (verifiedOnly && !agent.verified) return false;
      if (!q) return true;
      const haystack = [
        agent.name,
        agent.tagline,
        agent.summary,
        agent.author,
        agent.framework,
        ...agent.integrations,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
    return sortAgents(filtered, sort);
  }, [query, category, verifiedOnly, sort]);

  const hasFilters = Boolean(query) || category !== null || verifiedOnly;

  return (
    <div className="flex flex-col gap-6">
      {/* Search + sort row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, integration, framework…"
            aria-label="Search agents"
            className="h-12 w-full rounded-pill border border-border bg-card pl-12 pr-4 text-base text-foreground shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary"
          />
        </div>
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="size-4 text-muted-foreground" aria-hidden />
          <label htmlFor="sort" className="sr-only">
            Sort agents
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="h-12 rounded-pill border border-border bg-card px-4 pr-9 text-sm font-medium text-foreground shadow-soft outline-none transition-colors focus-visible:border-primary"
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category chips + verified toggle */}
      <div className="flex flex-wrap items-center gap-2">
        <Chip active={category === null} onClick={() => setCategory(null)}>
          All
        </Chip>
        {CATEGORIES.map((c) => (
          <Chip
            key={c.id}
            active={category === c.id}
            onClick={() => setCategory(category === c.id ? null : c.id)}
          >
            {c.name}
          </Chip>
        ))}
        <button
          type="button"
          onClick={() => setVerifiedOnly((v) => !v)}
          aria-pressed={verifiedOnly}
          className={cn(
            "ml-auto inline-flex items-center gap-1.5 rounded-pill border px-3.5 py-1.5 text-sm font-medium transition-colors",
            verifiedOnly
              ? "border-success bg-success/10 text-success"
              : "border-border bg-card text-muted-foreground hover:border-success/40 hover:text-foreground",
          )}
        >
          <BadgeCheck className="size-4" aria-hidden />
          Verified only
        </button>
      </div>

      {/* Result count + clear */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{results.length}</span>{" "}
          {results.length === 1 ? "agent" : "agents"}
          {category
            ? ` in ${CATEGORIES.find((c) => c.id === category)?.name}`
            : ""}
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory(null);
              setVerifiedOnly(false);
            }}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover"
          >
            <X className="size-4" aria-hidden />
            Clear filters
          </button>
        ) : null}
      </div>

      {/* Results grid / empty state */}
      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-card border border-dashed border-border bg-card/60 py-16 text-center">
          <Search className="size-8 text-muted-foreground" aria-hidden />
          <p className="font-display text-lg font-semibold">No agents match</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Try a different search term or clear your filters to see the full
            directory.
          </p>
        </div>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-pill border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-soft"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
