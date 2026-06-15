import { Check, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Builder",
    price: "0%",
    cadence: "to your first traction",
    description:
      "Publish, get discovered, and keep everything until you find your footing.",
    features: [
      "Unlimited public listings",
      "Usage, outcome, subscription, hybrid & free pricing",
      "Automatic monthly payouts via Stripe Connect",
      "Full builder analytics & run logs",
      "MCP + A2A export included",
    ],
    cta: { label: "Publish your agent", href: "/publish" },
    highlight: false,
  },
  {
    name: "Marketplace fee",
    price: "15%",
    cadence: "flat, all-in after traction",
    description:
      "One transparent rate. No distribution tax, no layered fees, no surprises.",
    features: [
      "Pay only on transacted usage",
      "Merchant-of-record handles global tax",
      "Verified badge & continuous evals",
      "Refund window + dispute resolution",
      "Real-time, all-in cost shown to buyers",
    ],
    cta: { label: "See how pricing works", href: "/publish" },
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "for teams & private catalogs",
    description:
      "Governance, security, and private marketplaces for organizations at scale.",
    features: [
      "SSO / SAML & RBAC",
      "Private & org-only listings",
      "Audit logs & data-boundary controls",
      "Volume-tiered infrastructure pricing",
      "Dedicated trust & safety review",
    ],
    cta: { label: "Talk to us", href: "/console" },
    highlight: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" tone="alt">
      <SectionHeading
        eyebrow="Transparent pricing"
        title={
          <>
            Fair economics,{" "}
            <span className="accent-underline">published openly</span>
          </>
        }
        description="A flat, honest take rate — modeled on GitHub, Shopify, and Atlassian, not the 25% distribution taxes of legacy API marketplaces."
      />

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "flex h-full flex-col gap-5 rounded-card border p-7 shadow-soft",
              tier.highlight
                ? "border-primary bg-card ring-2 ring-primary/30 lg:-translate-y-3"
                : "border-border bg-card",
            )}
          >
            {tier.highlight ? (
              <span className="w-fit rounded-pill bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most relevant
              </span>
            ) : (
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {tier.name}
              </span>
            )}

            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold text-foreground">
                  {tier.price}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{tier.cadence}</p>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {tier.description}
            </p>

            <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-2">
              <Button
                href={tier.cta.href}
                variant={tier.highlight ? "primary" : "secondary"}
                className="w-full"
              >
                {tier.cta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
