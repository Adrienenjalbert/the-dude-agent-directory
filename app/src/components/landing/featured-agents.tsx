import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AgentCard } from "@/components/agent-card";
import { getFeaturedAgents } from "@/data/agents";

export function FeaturedAgents() {
  const featured = getFeaturedAgents();

  return (
    <Section id="featured" tone="alt">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          align="left"
          eyebrow="A collection of agents"
          title={
            <>
              Agents that <span className="accent-underline">earn their keep</span>
            </>
          }
          description="Hand-picked, verified, and battle-tested across thousands of runs. Every metric is measured, not marketed."
        />
        <Button href="/agents" variant="secondary" className="shrink-0">
          View all agents
          <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((agent) => (
          <AgentCard key={agent.slug} agent={agent} />
        ))}
      </div>
    </Section>
  );
}
