"use client";

import { useState } from "react";
import { Play, Zap, Receipt, Check } from "lucide-react";
import type { Agent } from "@/data/types";
import { Button } from "@/components/ui/button";
import { PRICING_MODEL_MAP } from "@/data/pricing-models";
import { cn } from "@/lib/utils";

type RunMode = "demo" | "run";

export function RunPanel({ agent }: { agent: Agent }) {
  const [mode, setMode] = useState<RunMode>("demo");
  const [launched, setLaunched] = useState(false);

  const model = PRICING_MODEL_MAP[agent.pricing.model];
  const isFree = agent.pricing.model === "free";

  return (
    <aside className="flex flex-col gap-5 rounded-card border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24">
      <div>
        <p className="text-sm text-muted-foreground">Transparent, all-in price</p>
        <p className="mt-1 font-display text-3xl font-semibold text-foreground">
          {agent.pricing.display}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {model.label} · {agent.pricing.unit}
        </p>
      </div>

      {agent.pricing.note ? (
        <div className="flex items-center gap-2 rounded-xl bg-success/10 px-3 py-2 text-sm font-medium text-success">
          <Zap className="size-4" aria-hidden />
          {agent.pricing.note}
        </div>
      ) : null}

      {/* Run mode toggle */}
      <div
        role="radiogroup"
        aria-label="Run mode"
        className="grid grid-cols-2 gap-1 rounded-pill bg-background-alt p-1"
      >
        <ModeButton
          active={mode === "demo"}
          onClick={() => setMode("demo")}
          label="60-sec demo"
        />
        <ModeButton
          active={mode === "run"}
          onClick={() => setMode("run")}
          label={isFree ? "Run free" : "Full run"}
        />
      </div>

      {/* Cost estimate */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-background-alt/60 px-4 py-3">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Receipt className="size-4" aria-hidden />
          Estimated cost
        </span>
        <span className="font-display text-lg font-semibold text-foreground">
          {mode === "demo" || isFree ? "Free" : agent.pricing.display}
        </span>
      </div>

      <Button
        onClick={() => setLaunched(true)}
        size="lg"
        className="w-full"
        aria-live="polite"
      >
        {launched ? (
          <>
            <Check className="size-4" aria-hidden />
            Sandbox launched
          </>
        ) : (
          <>
            <Play className="size-4" aria-hidden />
            {mode === "demo" ? "Run 60-second demo" : "Run agent"}
          </>
        )}
      </Button>

      {launched ? (
        <p className="text-center text-xs text-muted-foreground">
          Demo experience — in production this spins up a sandboxed run and
          streams live output and cost.
        </p>
      ) : (
        <p className="text-center text-xs text-muted-foreground">
          No card required for the demo. See real output before you pay.
        </p>
      )}
    </aside>
  );
}

function ModeButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className={cn(
        "rounded-pill px-3 py-2 text-sm font-semibold transition-colors",
        active
          ? "bg-card text-foreground shadow-soft"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
