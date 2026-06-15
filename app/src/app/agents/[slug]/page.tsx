import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Gauge,
  Timer,
  Activity,
  PlayCircle,
  Boxes,
  PlugZap,
  History,
} from "lucide-react";
import { AGENTS, getAgentBySlug, getRelatedAgents } from "@/data/agents";
import { CATEGORY_MAP } from "@/data/categories";
import { PRICING_MODEL_MAP } from "@/data/pricing-models";
import { Badge, VerifiedBadge, NewBadge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { CategoryIcon } from "@/components/category-icon";
import { AgentCard } from "@/components/agent-card";
import { RunPanel } from "@/components/agent/run-panel";
import { absoluteUrl, SITE_NAME, OG_IMAGE_URL } from "@/lib/site";
import type { Agent } from "@/data/types";
import { cn, formatNumber } from "@/lib/utils";

type DetailParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return AGENTS.map((agent) => ({ slug: agent.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: DetailParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return { title: "Agent not found" };
  const path = `/agents/${agent.slug}`;
  const title = `${agent.name} — ${agent.tagline}`;
  return {
    title,
    description: agent.summary,
    keywords: [
      agent.name,
      agent.category,
      agent.framework,
      ...agent.integrations,
      "AI agent",
    ],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${SITE_NAME}`,
      description: agent.summary,
      url: path,
      type: "website",
      images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: agent.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description: agent.summary,
      images: [OG_IMAGE_URL],
    },
  };
}

/**
 * JSON-LD structured data: model the agent as a SoftwareApplication with an
 * aggregateRating and an offer, powering rich results for the PLG-SEO strategy.
 */
function buildJsonLd(agent: Agent): string {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: agent.name,
    description: agent.summary,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud",
    url: absoluteUrl(`/agents/${agent.slug}`),
    image: OG_IMAGE_URL,
    author: { "@type": "Organization", name: agent.author },
    offers: {
      "@type": "Offer",
      price: agent.pricing.amount,
      priceCurrency: "USD",
      description: `${agent.pricing.display} — ${agent.pricing.unit}`,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: agent.metrics.rating,
      reviewCount: agent.metrics.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
  return JSON.stringify(data);
}

export default async function AgentDetailPage({
  params,
}: {
  params: DetailParams;
}) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();

  const category = CATEGORY_MAP[agent.category];
  const model = PRICING_MODEL_MAP[agent.pricing.model];
  const related = getRelatedAgents(agent);

  return (
    <div className="container-page py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildJsonLd(agent) }}
      />
      <Link
        href="/agents"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to directory
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        {/* Main column */}
        <div className="flex flex-col gap-10">
          {/* Hero */}
          <header className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <span
                className={cn(
                  "flex size-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br text-white shadow-lift",
                  agent.gradient,
                )}
              >
                <CategoryIcon name={category.icon} className="size-8" />
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-3xl font-semibold sm:text-4xl">
                    {agent.name}
                  </h1>
                  {agent.verified ? <VerifiedBadge /> : null}
                  {agent.isNew ? <NewBadge /> : null}
                </div>
                <p className="text-lg text-muted-foreground">{agent.tagline}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <Link
                    href={`/agents?category=${agent.category}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {category.name}
                  </Link>
                  <span aria-hidden>·</span>
                  <span>by {agent.author}</span>
                  <span aria-hidden>·</span>
                  <Rating
                    value={agent.metrics.rating}
                    count={agent.metrics.reviewCount}
                  />
                </div>
              </div>
            </div>
            <p className="max-w-prose text-base leading-relaxed text-foreground">
              {agent.description}
            </p>
          </header>

          {/* Verified performance metrics */}
          <section aria-labelledby="metrics-heading">
            <h2
              id="metrics-heading"
              className="mb-4 font-display text-xl font-semibold"
            >
              Verified performance
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <MetricTile
                icon={<Gauge className="size-5" aria-hidden />}
                value={`${agent.metrics.successRate}%`}
                label="Success rate"
              />
              <MetricTile
                icon={<Timer className="size-5" aria-hidden />}
                value={`${agent.metrics.latencySec}s`}
                label="Median latency"
              />
              <MetricTile
                icon={<Activity className="size-5" aria-hidden />}
                value={`${agent.metrics.uptime}%`}
                label="Uptime"
              />
              <MetricTile
                icon={<PlayCircle className="size-5" aria-hidden />}
                value={formatNumber(agent.metrics.totalRuns)}
                label="Total runs"
              />
            </div>
          </section>

          {/* Overview / README */}
          <section aria-labelledby="readme-heading">
            <h2
              id="readme-heading"
              className="mb-4 font-display text-xl font-semibold"
            >
              Overview
            </h2>
            <div className="flex flex-col gap-3 rounded-card border border-border bg-card p-6 shadow-soft">
              {agent.readme.map((block, i) => (
                <ReadmeBlock key={i} block={block} />
              ))}
            </div>
          </section>

          {/* Integrations */}
          <section aria-labelledby="integrations-heading">
            <h2
              id="integrations-heading"
              className="mb-4 flex items-center gap-2 font-display text-xl font-semibold"
            >
              <PlugZap className="size-5 text-primary" aria-hidden />
              Integrations & interop
            </h2>
            <div className="flex flex-wrap gap-2">
              {agent.integrations.map((integration) => (
                <Badge
                  key={integration}
                  tone={
                    integration === "MCP" || integration === "A2A"
                      ? "primary"
                      : "neutral"
                  }
                  className="px-3 py-1 text-sm"
                >
                  {integration}
                </Badge>
              ))}
              <Badge tone="neutral" className="px-3 py-1 text-sm">
                <Boxes className="size-3.5" aria-hidden />
                {agent.framework}
              </Badge>
            </div>
          </section>

          {/* Reviews */}
          <section aria-labelledby="reviews-heading">
            <div className="mb-4 flex items-center justify-between">
              <h2
                id="reviews-heading"
                className="font-display text-xl font-semibold"
              >
                Reviews
              </h2>
              <Rating
                value={agent.metrics.rating}
                count={agent.metrics.reviewCount}
                size="md"
              />
            </div>
            <div className="flex flex-col gap-4">
              {agent.reviews.map((review) => (
                <figure
                  key={review.author}
                  className="flex flex-col gap-3 rounded-card border border-border bg-card p-5 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <figcaption>
                      <p className="font-display font-semibold">
                        {review.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {review.role}
                      </p>
                    </figcaption>
                    <Rating value={review.rating} />
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground">
                    &ldquo;{review.body}&rdquo;
                  </blockquote>
                  <p className="text-xs text-muted-foreground">
                    Verified usage · {formatReviewDate(review.date)}
                  </p>
                </figure>
              ))}
            </div>
          </section>

          {/* Changelog */}
          <section aria-labelledby="changelog-heading">
            <h2
              id="changelog-heading"
              className="mb-4 flex items-center gap-2 font-display text-xl font-semibold"
            >
              <History className="size-5 text-primary" aria-hidden />
              Changelog
            </h2>
            <ol className="flex flex-col gap-4 border-l-2 border-border pl-5">
              {agent.changelog.map((entry) => (
                <li key={entry.version} className="relative">
                  <span
                    className="absolute -left-[1.6rem] top-1.5 size-3 rounded-full border-2 border-primary bg-background"
                    aria-hidden
                  />
                  <div className="flex items-center gap-3">
                    <span className="font-display font-semibold">
                      v{entry.version}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {formatReviewDate(entry.date)}
                    </span>
                  </div>
                  <ul className="mt-1 flex flex-col gap-0.5">
                    {entry.notes.map((note) => (
                      <li
                        key={note}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Sidebar: run / rent panel */}
        <div>
          <RunPanel agent={agent} />
          <p className="mt-4 px-1 text-center text-xs text-muted-foreground">
            Pricing model:{" "}
            <span className="font-medium text-foreground">{model.label}</span> —{" "}
            {model.tagline.toLowerCase()}.
          </p>
        </div>
      </div>

      {/* Related agents */}
      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="mt-16">
          <h2
            id="related-heading"
            className="mb-6 font-display text-2xl font-semibold"
          >
            Related agents
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <AgentCard key={r.slug} agent={r} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function MetricTile({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-card border border-border bg-card p-4 shadow-soft">
      <span className="text-primary">{icon}</span>
      <span className="font-display text-2xl font-semibold text-foreground">
        {value}
      </span>
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

/** Renders a README "block": headings (## ), bullet lines, or paragraphs. */
function ReadmeBlock({ block }: { block: string }) {
  if (block.startsWith("## ")) {
    return (
      <h3 className="mt-2 font-display text-lg font-semibold">
        {block.replace("## ", "")}
      </h3>
    );
  }
  if (block.includes("\n- ")) {
    const [intro, ...rest] = block.split("\n");
    const items = rest
      .filter((l) => l.trim().startsWith("- "))
      .map((l) => l.replace(/^\s*-\s*/, ""));
    return (
      <div className="flex flex-col gap-1.5">
        {intro && !intro.startsWith("- ") ? (
          <p className="leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        <ul className="flex list-disc flex-col gap-1 pl-5 text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <p className="leading-relaxed text-muted-foreground">{block}</p>;
}

function formatReviewDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
