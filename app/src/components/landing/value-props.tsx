import {
  Coins,
  Boxes,
  BarChart3,
  Globe2,
  ShieldCheck,
  Receipt,
  PlugZap,
  Eye,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const BUILDER_PROPS = [
  {
    icon: Coins,
    title: "Best-in-class economics",
    body: "0% to your first traction, then a competitive flat split. Get paid on every paid run — no free-rider gap like legacy marketplaces.",
  },
  {
    icon: Boxes,
    title: "Bring any framework",
    body: "Package LangChain, CrewAI, AutoGen, OpenAI Agents SDK, or custom code with one declarative manifest. MCP and A2A native.",
  },
  {
    icon: BarChart3,
    title: "Transparent analytics",
    body: "Revenue, cost, profit, success rate, and acquisition funnel — the transparency builders have been asking for.",
  },
  {
    icon: Globe2,
    title: "Distribution that works",
    body: "Every listing is an indexable, SEO-optimized page. New agents get a discovery boost to beat the cold-start problem.",
  },
];

const BUYER_PROPS = [
  {
    icon: ShieldCheck,
    title: "Trust is a product",
    body: "Verified badges, automated evals, and reviews tied to real usage. Performance is measured continuously, not claimed.",
  },
  {
    icon: Receipt,
    title: "Transparent, all-in pricing",
    body: "See predictable cost before you run, and real-time spend during. No confusing layered fees or surprise credit burn.",
  },
  {
    icon: PlugZap,
    title: "Integrates with your stack",
    body: "MCP and A2A connectors plus first-class hooks into the tools you already run — CRM, support, data warehouse, and more.",
  },
  {
    icon: Eye,
    title: "Full observability",
    body: "Per-run logs, traces, and tool-call inspection. Share a debug run with the builder when something needs a fix.",
  },
];

export function ValueProps() {
  return (
    <Section id="why" tone="alt">
      <SectionHeading
        eyebrow="Why The Dude"
        title={
          <>
            Built for both sides of the{" "}
            <span className="accent-underline">agent economy</span>
          </>
        }
        description="We solve the distribution problem for builders and the trust problem for buyers — and own the run, billing, and trust layer that connects them."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <PropColumn tag="For builders" props={BUILDER_PROPS} />
        <PropColumn tag="For buyers" props={BUYER_PROPS} />
      </div>
    </Section>
  );
}

function PropColumn({
  tag,
  props,
}: {
  tag: string;
  props: { icon: typeof Coins; title: string; body: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        {tag}
      </span>
      <div className="grid gap-4 sm:grid-cols-2">
        {props.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="flex flex-col gap-2 rounded-card border border-border bg-card p-5 shadow-soft"
            >
              <span className="flex size-10 items-center justify-center rounded-2xl bg-primary-soft/50 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
