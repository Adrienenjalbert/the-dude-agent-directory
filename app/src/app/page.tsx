import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FeaturedAgents } from "@/components/landing/featured-agents";
import { CategoriesGrid } from "@/components/landing/categories-grid";
import { ValueProps } from "@/components/landing/value-props";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { CtaBand } from "@/components/landing/cta-band";
import { StatBand } from "@/components/stat-band";
import { Wave } from "@/components/ui/wave";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stat band on a peach wave shelf */}
      <div className="bg-primary-soft/40">
        <Wave className="-mt-px text-background" />
        <div className="container-page pb-16 pt-2">
          <StatBand />
        </div>
        <Wave className="text-background-alt" flip />
      </div>

      <FeaturedAgents />

      <Wave className="text-background-alt" />
      <HowItWorks />

      <CategoriesGrid />

      <Wave className="text-background-alt" />
      <ValueProps />

      <Wave className="text-background-alt" flip />
      <Testimonials />

      <Wave className="text-background-alt" />
      <Pricing />

      <CtaBand />
    </>
  );
}
