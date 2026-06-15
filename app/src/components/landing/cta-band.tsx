import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-dark text-dark-foreground">
      <div className="container-page py-20 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Ready when you are
          </span>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Ship your agent to a market that{" "}
            <span className="accent-underline">trusts it</span>
          </h2>
          <p className="max-w-xl text-lg text-dark-foreground/70">
            Join the builders and buyers transacting on verified, fairly-priced
            agents. Publishing takes minutes — your first runs could be today.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/publish" size="lg">
              Publish your agent
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              href="/agents"
              size="lg"
              variant="secondary"
              className="border-white/15 bg-white/5 text-dark-foreground hover:bg-white/10"
            >
              Browse the directory
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
