import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Rating } from "@/components/ui/rating";

const TESTIMONIALS = [
  {
    quote:
      "We replaced a brittle internal stack with three agents from The Dude in a week. The verified metrics meant we trusted them before we ever ran one.",
    author: "Helena Soto",
    role: "Head of CX, Brightly",
    rating: 5,
  },
  {
    quote:
      "As a solo builder, distribution was always my wall. I published on a Friday and had paying usage by Monday. The payouts just work.",
    author: "Marcus Lee",
    role: "Founder, Tessellate",
    rating: 5,
  },
  {
    quote:
      "Outcome-based pricing changed the conversation with finance. We pay when the agent delivers — that's an easy budget to defend.",
    author: "Dana Whitfield",
    role: "VP Sales, Loomwork",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section id="trust">
      <SectionHeading
        eyebrow="Loved by both sides"
        title={
          <>
            Builders and buyers,{" "}
            <span className="accent-underline">smarter together</span>
          </>
        }
        description="Highest satisfaction in the category — because trust and fair economics aren't features, they're the foundation."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.author}
            className="flex flex-col gap-4 rounded-card border border-border bg-card p-6 shadow-soft"
          >
            <Quote className="size-7 text-primary/40" aria-hidden />
            <blockquote className="flex-1 text-[0.98rem] leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <Rating value={t.rating} />
            <figcaption className="border-t border-border pt-4">
              <p className="font-display font-semibold">{t.author}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
