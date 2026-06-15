import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { CATEGORIES } from "@/data/categories";
import { CategoryIcon } from "@/components/category-icon";
import { formatNumber } from "@/lib/utils";

export function CategoriesGrid() {
  return (
    <Section id="categories">
      <SectionHeading
        eyebrow="Browse by function"
        title={
          <>
            Find an agent for{" "}
            <span className="accent-underline">every job</span>
          </>
        }
        description="From SDRs to reconciliation, the directory spans every function — organized so you can find the right agent fast."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={`/agents?category=${category.id}`}
            className="group flex flex-col gap-3 rounded-card border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-soft/50 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <CategoryIcon name={category.icon} className="size-5" />
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                {category.name}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {category.tagline}
              </p>
            </div>
            <p className="mt-auto text-xs font-medium text-muted-foreground">
              {formatNumber(category.agentCount)} agents
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
