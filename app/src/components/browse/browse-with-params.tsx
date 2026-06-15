"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AgentBrowser } from "@/components/browse/agent-browser";
import { CATEGORIES } from "@/data/categories";
import type { CategoryId } from "@/data/types";

const VALID_CATEGORIES = new Set<string>(CATEGORIES.map((c) => c.id));

function BrowseInner() {
  const params = useSearchParams();
  const raw = params.get("category");
  const initialCategory: CategoryId | null =
    raw && VALID_CATEGORIES.has(raw) ? (raw as CategoryId) : null;

  return <AgentBrowser key={initialCategory ?? "all"} initialCategory={initialCategory} />;
}

/**
 * useSearchParams requires a Suspense boundary during static export/prerender.
 * The fallback renders the unfiltered browser so there's no layout shift.
 */
export function BrowseWithParams() {
  return (
    <Suspense fallback={<AgentBrowser />}>
      <BrowseInner />
    </Suspense>
  );
}
