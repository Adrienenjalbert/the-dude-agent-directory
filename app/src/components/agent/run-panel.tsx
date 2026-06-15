"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Play,
  Zap,
  Receipt,
  Check,
  Loader2,
  RotateCcw,
  BrainCircuit,
  Wrench,
  PenLine,
  CircleCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import type { Agent, MeterEvent, RunStep } from "@/data/types";
import { Button } from "@/components/ui/button";
import { PRICING_MODEL_MAP } from "@/data/pricing-models";
import { getRunDemo } from "@/data/demos";
import { cn } from "@/lib/utils";

type Phase = "idle" | "running" | "done";

/** Steps play at this fraction of their authored duration to feel snappy. */
const SPEED = 0.42;

interface LogLine {
  step: RunStep;
  status: "active" | "complete";
}

export function RunPanel({ agent }: { agent: Agent }) {
  const demo = useMemo(() => getRunDemo(agent), [agent]);
  const model = PRICING_MODEL_MAP[agent.pricing.model];
  const isFree = agent.pricing.model === "free";

  const [inputIndex, setInputIndex] = useState(0);
  const [input, setInput] = useState(demo.inputs[0]?.value ?? "");
  const [phase, setPhase] = useState<Phase>("idle");
  const [log, setLog] = useState<LogLine[]>([]);
  const [meterEvents, setMeterEvents] = useState<MeterEvent[]>([]);
  const [showOutput, setShowOutput] = useState(false);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const cost = useMemo(
    () => meterEvents.reduce((sum, e) => sum + e.units * e.unitCost, 0),
    [meterEvents],
  );
  const payout = cost * agent.payoutShare;
  const fee = cost - payout;

  const reset = useCallback(() => {
    clearTimers();
    setPhase("idle");
    setLog([]);
    setMeterEvents([]);
    setShowOutput(false);
  }, [clearTimers]);

  const pickInput = useCallback(
    (i: number) => {
      setInputIndex(i);
      setInput(demo.inputs[i]?.value ?? "");
      reset();
    },
    [demo.inputs, reset],
  );

  const run = useCallback(() => {
    clearTimers();
    setPhase("running");
    setLog([]);
    setMeterEvents([]);
    setShowOutput(false);

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const speed = reduceMotion ? 0.12 : SPEED;

    let elapsed = 0;
    demo.steps.forEach((step, i) => {
      // Mark the step active at the start of its window.
      timers.current.push(
        setTimeout(() => {
          setLog((prev) => [
            ...prev.map((l) => ({ ...l, status: "complete" as const })),
            { step, status: "active" },
          ]);
        }, elapsed),
      );

      elapsed += Math.max(step.durationMs * speed, 220);

      // At the end of its window, complete it and emit its metered events.
      timers.current.push(
        setTimeout(() => {
          setLog((prev) =>
            prev.map((l) =>
              l.step === step ? { ...l, status: "complete" } : l,
            ),
          );
          if (step.meter?.length) {
            setMeterEvents((prev) => [...prev, ...step.meter!]);
          }
          if (i === demo.steps.length - 1) {
            setPhase("done");
            timers.current.push(setTimeout(() => setShowOutput(true), 250));
          }
        }, elapsed),
      );
    });
  }, [clearTimers, demo.steps]);

  const billable = phase === "done" && !isFree;

  return (
    <aside className="flex flex-col gap-5 rounded-card border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24">
      {/* Price header */}
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

      {/* Try-it-live demo */}
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-alt/50 p-4">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-primary" aria-hidden />
          <h3 className="font-display text-sm font-semibold">Try it live</h3>
          <span className="ml-auto rounded-pill bg-primary-soft/60 px-2 py-0.5 text-[0.7rem] font-semibold text-[#9a4a23]">
            Simulation
          </span>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">{demo.prompt}</p>

        {/* Sample input picker */}
        {demo.inputs.length > 1 ? (
          <div className="flex flex-wrap gap-1.5">
            {demo.inputs.map((di, i) => (
              <button
                key={di.label}
                type="button"
                onClick={() => pickInput(i)}
                aria-pressed={i === inputIndex}
                className={cn(
                  "rounded-pill border px-2.5 py-1 text-xs font-medium transition-colors",
                  i === inputIndex
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {di.label}
              </button>
            ))}
          </div>
        ) : null}

        {/* Editable input */}
        <label htmlFor="run-input" className="sr-only">
          Demo input (editable JSON)
        </label>
        <textarea
          id="run-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
          rows={Math.min(input.split("\n").length, 9)}
          disabled={phase === "running"}
          className="w-full resize-y rounded-xl border border-border bg-card p-3 font-mono text-[0.72rem] leading-relaxed text-foreground shadow-inner outline-none transition-colors focus-visible:border-primary disabled:opacity-70"
        />

        {/* Run / reset controls */}
        <div className="flex gap-2">
          <Button
            onClick={run}
            size="sm"
            className="flex-1"
            disabled={phase === "running"}
            aria-live="polite"
          >
            {phase === "running" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Running…
              </>
            ) : phase === "done" ? (
              <>
                <RotateCcw className="size-4" aria-hidden />
                Run again
              </>
            ) : (
              <>
                <Play className="size-4" aria-hidden />
                Run demo
              </>
            )}
          </Button>
          {phase !== "idle" ? (
            <button
              type="button"
              onClick={reset}
              className="rounded-pill border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              Clear
            </button>
          ) : null}
        </div>

        {/* Run stream */}
        {log.length > 0 ? (
          <ol className="flex flex-col gap-2 border-t border-border pt-3" aria-live="polite">
            {log.map((line, i) => (
              <StreamLine key={i} line={line} />
            ))}
          </ol>
        ) : null}

        {/* Structured output */}
        {showOutput ? (
          <div className="flex flex-col gap-2 border-t border-border pt-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-success">
              <CircleCheck className="size-4" aria-hidden />
              {demo.outcome}
            </div>
            <pre className="max-h-56 overflow-auto rounded-xl border border-border bg-foreground/[0.03] p-3 font-mono text-[0.7rem] leading-relaxed text-foreground">
              {demo.output}
            </pre>
          </div>
        ) : null}
      </div>

      {/* Live cost meter */}
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Receipt className="size-4 text-primary" aria-hidden />
            Live cost meter
          </span>
          <span
            className={cn(
              "font-display text-lg font-semibold tabular-nums transition-colors",
              cost > 0 ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {isFree ? "Free" : formatUSD(cost)}
          </span>
        </div>

        {/* Metered events breakdown */}
        {meterEvents.length > 0 ? (
          <ul className="flex flex-col gap-1 text-xs text-muted-foreground">
            {meterEvents.map((e, i) => (
              <li key={i} className="flex items-center justify-between gap-2">
                <span className="truncate">
                  {e.label}
                  <span className="text-muted-foreground/70">
                    {" "}
                    · {formatUnits(e.units)} {e.unit}
                  </span>
                </span>
                <span className="shrink-0 tabular-nums">
                  {formatUSD(e.units * e.unitCost)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-muted-foreground">
            Run the demo to watch metered usage tally in real time.
          </p>
        )}

        {/* All-in + payout split */}
        {billable && cost > 0 ? (
          <div className="flex flex-col gap-1 border-t border-border pt-2 text-xs">
            <Row label="All-in price (you pay)" value={formatUSD(cost)} strong />
            <Row
              label={`Builder payout (${Math.round(agent.payoutShare * 100)}%)`}
              value={formatUSD(payout)}
              icon={<Wallet className="size-3.5" aria-hidden />}
            />
            <Row
              label={`Marketplace fee (${Math.round((1 - agent.payoutShare) * 100)}%)`}
              value={formatUSD(fee)}
              muted
            />
          </div>
        ) : null}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {phase === "done"
          ? "Demo run — in production this streams a real sandboxed run and live cost."
          : "No card required for the demo. See real output before you pay."}
      </p>
    </aside>
  );
}

function StreamLine({ line }: { line: LogLine }) {
  const { step, status } = line;
  const active = status === "active";
  return (
    <li className="flex items-start gap-2 text-xs">
      <span className="mt-0.5 shrink-0">
        <PhaseIcon phase={step.phase} active={active} />
      </span>
      <span
        className={cn(
          "leading-relaxed transition-colors",
          active ? "text-foreground" : "text-muted-foreground",
        )}
      >
        {step.text}
        {active && step.phase !== "done" ? (
          <span className="ml-0.5 inline-block animate-pulse text-primary">▋</span>
        ) : null}
        {step.tool && !active ? (
          <span className="ml-1.5 rounded bg-background-alt px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground">
            {step.tool}
          </span>
        ) : null}
      </span>
    </li>
  );
}

function PhaseIcon({
  phase,
  active,
}: {
  phase: RunStep["phase"];
  active: boolean;
}) {
  const cls = cn("size-4", active ? "text-primary" : "text-success");
  switch (phase) {
    case "thinking":
      return active ? (
        <BrainCircuit className={cn(cls, "animate-pulse")} aria-hidden />
      ) : (
        <Check className={cls} aria-hidden />
      );
    case "tool":
      return active ? (
        <Wrench className={cn(cls, "animate-spin-slow")} aria-hidden />
      ) : (
        <Check className={cls} aria-hidden />
      );
    case "writing":
      return active ? (
        <PenLine className={cn(cls, "animate-pulse")} aria-hidden />
      ) : (
        <Check className={cls} aria-hidden />
      );
    case "done":
      return <CircleCheck className="size-4 text-success" aria-hidden />;
    default: {
      const _exhaustive: never = phase;
      return _exhaustive;
    }
  }
}

function Row({
  label,
  value,
  strong,
  muted,
  icon,
}: {
  label: string;
  value: string;
  strong?: boolean;
  muted?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span
        className={cn(
          "flex items-center gap-1.5",
          strong ? "font-semibold text-foreground" : "text-muted-foreground",
          muted && "text-muted-foreground/80",
        )}
      >
        {icon}
        {label}
      </span>
      <span
        className={cn(
          "tabular-nums",
          strong ? "font-semibold text-foreground" : "text-muted-foreground",
        )}
      >
        {value}
      </span>
    </div>
  );
}

/** Format a USD amount with enough precision for sub-cent metered costs. */
function formatUSD(n: number): string {
  if (n === 0) return "$0.00";
  if (n < 0.01)
    return `$${n.toLocaleString("en-US", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    })}`;
  return `$${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatUnits(n: number): string {
  return n.toLocaleString("en-US");
}
