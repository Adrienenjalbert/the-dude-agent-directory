import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedAgents } from "@/data/agents";
import { CATEGORY_MAP } from "@/data/categories";
import { CategoryIcon } from "@/components/category-icon";
import { Rating } from "@/components/ui/rating";
import { cn } from "@/lib/utils";

export function Hero() {
  const featured = getFeaturedAgents().slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      {/* warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(246,201,168,0.5), transparent 70%)",
        }}
      />
      <div className="container-page pt-16 pb-20 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-pill border border-primary/30 bg-primary-soft/50 px-3 py-1 text-sm font-semibold text-[#9a4a23]">
              <Sparkles className="size-4" aria-hidden />
              The marketplace for AI agents that actually work
            </span>

            <h1 className="text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Publish any agent.{" "}
              <span className="accent-underline">Get paid.</span>
              <br className="hidden sm:block" /> Hire any agent.{" "}
              <span className="accent-underline">Trust it.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              The Dude is the vendor-neutral marketplace where builders monetize
              agents of any kind and buyers rent ones with{" "}
              <span className="accent-highlight font-medium text-foreground">
                verified performance
              </span>{" "}
              and transparent, all-in pricing.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/publish" size="lg">
                Publish your agent
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button href="/agents" size="lg" variant="secondary">
                Browse agents
              </Button>
            </div>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-success" aria-hidden />
                Verified metrics
              </li>
              <li className="flex items-center gap-1.5">
                <Zap className="size-4 text-primary" aria-hidden />
                60-second demo runs
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles className="size-4 text-warning" aria-hidden />
                0% fees to your first traction
              </li>
            </ul>
          </div>

          {/* Right: floating featured agent cards */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-6 -top-6 size-40 rounded-full bg-primary/10 blur-2xl"
            />
            <div className="relative flex flex-col gap-3">
              {featured.map((agent, i) => {
                const cat = CATEGORY_MAP[agent.category];
                return (
                  <Link
                    key={agent.slug}
                    href={`/agents/${agent.slug}`}
                    className={cn(
                      "group flex items-center gap-4 rounded-card border border-border bg-card p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift",
                      i === 1 && "lg:ml-8",
                      i === 2 && "lg:ml-4",
                    )}
                    style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 90}ms` }}
                  >
                    <span
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-soft",
                        agent.gradient,
                      )}
                    >
                      <CategoryIcon name={cat.icon} className="size-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-display text-base font-semibold">
                          {agent.name}
                        </p>
                        {agent.verified ? (
                          <BadgeCheck className="size-4 shrink-0 text-success" aria-hidden />
                        ) : null}
                      </div>
                      <p className="truncate text-sm text-muted-foreground">
                        {agent.tagline}
                      </p>
                      <div className="mt-1 flex items-center gap-3">
                        <Rating value={agent.metrics.rating} />
                        <span className="text-xs font-medium text-primary">
                          {agent.pricing.display}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
