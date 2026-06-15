import type { Metadata } from "next";
import { Rocket, ShieldCheck, Wallet } from "lucide-react";
import { PublishWizard } from "@/components/publish/publish-wizard";

export const metadata: Metadata = {
  title: "Publish your agent",
  description:
    "Package any agent with a declarative manifest, choose your pricing model, pass a sandbox test, and publish to the marketplace in minutes.",
};

const HIGHLIGHTS = [
  { icon: Rocket, label: "Publish in minutes", body: "Any framework, one manifest" },
  { icon: Wallet, label: "0% to traction", body: "Then a flat, fair split" },
  { icon: ShieldCheck, label: "Trust built in", body: "Sandbox + verified evals" },
];

export default function PublishPage() {
  return (
    <div className="container-page py-12 sm:py-16">
      <header className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          For builders
        </span>
        <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Publish your <span className="accent-underline">agent</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Go from code to a monetized, discoverable listing in four steps. This
          is a guided, visual preview of the publishing flow.
        </p>
      </header>

      <div className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-3">
        {HIGHLIGHTS.map((h) => {
          const Icon = h.icon;
          return (
            <div
              key={h.label}
              className="flex items-center gap-3 rounded-card border border-border bg-card p-4 shadow-soft"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft/50 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {h.label}
                </p>
                <p className="text-xs text-muted-foreground">{h.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto max-w-3xl">
        <PublishWizard />
      </div>
    </div>
  );
}
