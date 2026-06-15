"use client";

import { Suspense } from "react";
import { AgentBrowser } from "@/components/browse/agent-browser";

/**
 * useSearchParams requires a Suspense boundary during static export/prerender.
 * The fallback is a lightweight skeleton so there's no layout shift before the
 * URL-driven browser hydrates.
 */
export function BrowseWithParams() {
  return (
    <Suspense fallback={<BrowseSkeleton />}>
      <AgentBrowser />
    </Suspense>
  );
}

function BrowseSkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-hidden>
      <div className="h-12 rounded-pill border border-border bg-card shadow-soft" />
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-24 rounded-pill border border-border bg-card"
          />
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 rounded-card border border-border bg-card shadow-soft"
          />
        ))}
      </div>
    </div>
  );
}
