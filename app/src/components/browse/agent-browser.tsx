"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
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

const VALID_CATEGORIES = new Set<string>(CATEGORIES.map((c) => c.id));
const VALID_SORTS = new Set<string>(SORTS.map((s) => s.key));

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
    default: {
      const _exhaustive: never = sort;
      return _exhaustive;
    }
  }
}

interface BrowseState {
  query: string;
  category: CategoryId | null;
  verifiedOnly: boolean;
  sort: SortKey;
}

function parseParams(params: URLSearchParams): BrowseState {
  const rawCategory = params.get("category");
  const rawSort = params.get("sort");
  return {
    query: params.get("q") ?? "",
    category:
      rawCategory && VALID_CATEGORIES.has(rawCategory)
        ? (rawCategory as CategoryId)
        : null,
    verifiedOnly: params.get("verified") === "1",
    sort: rawSort && VALID_SORTS.has(rawSort) ? (rawSort as SortKey) : "relevant",
  };
}

function toQueryString(state: BrowseState): string {
  const sp = new URLSearchParams();
  if (state.query.trim()) sp.set("q", state.query.trim());
  if (state.category) sp.set("category", state.category);
  if (state.verifiedOnly) sp.set("verified", "1");
  if (state.sort !== "relevant") sp.set("sort", state.sort);
  return sp.toString();
}

/**
 * Local state drives rendering (so filters react instantly), while the URL
 * query string is kept in sync via history.replaceState for deep-linking.
 * State is seeded from the URL on mount, so deep links like
 * `/agents/?q=sdr&category=sales&sort=rating` restore the full UI and survive
 * reload. We use replaceState (not router.replace) because a query-only
 * navigation is a no-op under `output: export` + basePath; replaceState is
 * synchronous, reliable, and preserves the base path.
 */
export function AgentBrowser() {
  const params = useSearchParams();
  // Seed once from the URL (lazy initializer runs on first client render,
  // after hydration, when useSearchParams reflects the real query string).
  const [state, setState] = useState<BrowseState>(() => parseParams(params));

  // Mirror state into the URL whenever it changes (deep-linkable, no reload).
  useEffect(() => {
    const qs = toQueryString(state);
    const url = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
    window.history.replaceState(window.history.state, "", url);
  }, [state]);

  const patchState = useCallback((patch: Partial<BrowseState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  const results = useMemo(() => {
    const q = state.query.trim().toLowerCase();
    const filtered = AGENTS.filter((agent) => {
      if (state.category && agent.category !== state.category) return false;
      if (state.verifiedOnly && !agent.verified) return false;
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
    return sortAgents(filtered, state.sort);
  }, [state]);

  const hasFilters =
    Boolean(state.query) || state.category !== null || state.verifiedOnly;
  const activeCategory = state.category
    ? CATEGORIES.find((c) => c.id === state.category)
    : null;

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
            value={state.query}
            onChange={(e) => patchState({ query: e.target.value })}
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
            value={state.sort}
            onChange={(e) => patchState({ sort: e.target.value as SortKey })}
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
        <Chip
          active={state.category === null}
          onClick={() => patchState({ category: null })}
        >
          All
        </Chip>
        {CATEGORIES.map((c) => (
          <Chip
            key={c.id}
            active={state.category === c.id}
            onClick={() =>
              patchState({ category: state.category === c.id ? null : c.id })
            }
          >
            {c.name}
          </Chip>
        ))}
        <button
          type="button"
          onClick={() => patchState({ verifiedOnly: !state.verifiedOnly })}
          aria-pressed={state.verifiedOnly}
          className={cn(
            "ml-auto inline-flex items-center gap-1.5 rounded-pill border px-3.5 py-1.5 text-sm font-medium transition-colors",
            state.verifiedOnly
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
          {activeCategory ? ` in ${activeCategory.name}` : ""}
          {state.query ? (
            <>
              {" "}
              for <span className="font-medium text-foreground">“{state.query}”</span>
            </>
          ) : null}
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={() =>
              patchState({
                query: "",
                category: null,
                verifiedOnly: false,
                sort: "relevant",
              })
            }
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
          {hasFilters ? (
            <button
              type="button"
              onClick={() =>
                patchState({
                  query: "",
                  category: null,
                  verifiedOnly: false,
                  sort: "relevant",
                })
              }
              className="mt-1 inline-flex items-center gap-1 rounded-pill border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40"
            >
              <X className="size-4" aria-hidden />
              Clear filters
            </button>
          ) : null}
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
