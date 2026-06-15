import type { Metadata } from "next";
import { BrowseWithParams } from "@/components/browse/browse-with-params";

export const metadata: Metadata = {
  title: "Browse agents",
  description:
    "Search the directory of verified AI agents across sales, support, research, coding, data, marketing, ops, and finance — with transparent pricing and measured performance.",
};

export default function AgentsPage() {
  return (
    <div className="container-page py-12 sm:py-16">
      <header className="mb-8 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          The directory
        </span>
        <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Browse <span className="accent-underline">verified</span> agents
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Every listing carries measured success rate, latency, and all-in
          pricing. Filter, sort, and find an agent you can trust.
        </p>
      </header>

      <BrowseWithParams />
    </div>
  );
}
