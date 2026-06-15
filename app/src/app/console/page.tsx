import type { Metadata } from "next";
import { ConsoleDashboard } from "@/components/console/console-dashboard";

export const metadata: Metadata = {
  title: "Console",
  description:
    "A preview of the builder and buyer consoles — earnings, payouts, runs, spend, active rentals, and live run history.",
};

export default function ConsolePage() {
  return (
    <div className="container-page py-10 sm:py-12">
      <ConsoleDashboard />
    </div>
  );
}
