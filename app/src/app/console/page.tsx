import type { Metadata } from "next";
import { ConsoleDashboard } from "@/components/console/console-dashboard";

const DESCRIPTION =
  "A preview of the builder and buyer consoles — earnings, payouts, runs, spend, active rentals, and live run history.";

export const metadata: Metadata = {
  title: "Console",
  description: DESCRIPTION,
  alternates: { canonical: "/console" },
  openGraph: {
    title: "Builder & buyer console · The Dude",
    description: DESCRIPTION,
    url: "/console",
    type: "website",
  },
};

export default function ConsolePage() {
  return (
    <div className="container-page py-10 sm:py-12">
      <ConsoleDashboard />
    </div>
  );
}
