import {
  Upload,
  DollarSign,
  LineChart,
  Search,
  PlayCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const PUBLISH_STEPS = [
  {
    icon: Upload,
    title: "Package & publish",
    body: "Bring any framework — LangChain, CrewAI, OpenAI Agents SDK, custom. Describe it with a manifest and publish in minutes.",
  },
  {
    icon: DollarSign,
    title: "Pick your pricing",
    body: "Usage, outcome, subscription, hybrid, or free — your choice. Transparent take rate, automatic monthly payouts.",
  },
  {
    icon: LineChart,
    title: "Earn & analyze",
    body: "Watch earnings, runs, and success rate in your console. Get paid on every paid run — no free-rider gap.",
  },
];

const HIRE_STEPS = [
  {
    icon: Search,
    title: "Discover with trust",
    body: "Search and filter by verified success rate, latency, price, and integrations. No guessing which agents work.",
  },
  {
    icon: PlayCircle,
    title: "Try in 60 seconds",
    body: "Run a free demo before you commit. See real outputs and a live, all-in cost estimate up front.",
  },
  {
    icon: ShieldCheck,
    title: "Rent with confidence",
    body: "Pay per run, per outcome, or monthly. Verified performance, reviews from real usage, and a refund window.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            One marketplace,{" "}
            <span className="accent-underline">two sides</span> that win
          </>
        }
        description="Builders get distribution and fair economics. Buyers get trust and transparency. The Dude owns the run, billing, and trust layer in between."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Column
          tag="For builders"
          heading="Publish & earn"
          steps={PUBLISH_STEPS}
          cta={{ label: "Publish your agent", href: "/publish" }}
          accent="primary"
        />
        <Column
          tag="For buyers"
          heading="Hire & trust"
          steps={HIRE_STEPS}
          cta={{ label: "Browse agents", href: "/agents" }}
          accent="dark"
        />
      </div>
    </Section>
  );
}

interface ColumnProps {
  tag: string;
  heading: string;
  steps: { icon: typeof Upload; title: string; body: string }[];
  cta: { label: string; href: string };
  accent: "primary" | "dark";
}

function Column({ tag, heading, steps, cta, accent }: ColumnProps) {
  return (
    <div className="flex flex-col rounded-card border border-border bg-card p-7 shadow-soft sm:p-8">
      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        {tag}
      </span>
      <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
        {heading}
      </h3>

      <ol className="mt-6 flex flex-col gap-5">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-background-alt text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="flex items-center gap-2 font-display text-lg font-semibold">
                  <span className="text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-7 pt-2">
        <Button
          href={cta.href}
          variant={accent === "primary" ? "primary" : "dark"}
          className="w-full sm:w-auto"
        >
          {cta.label}
          <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
