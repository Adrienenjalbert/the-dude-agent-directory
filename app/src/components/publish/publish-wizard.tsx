"use client";

import { useMemo, useState } from "react";
import {
  FileText,
  DollarSign,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Check,
  Zap,
  Target,
  CalendarClock,
  Layers,
  Gift,
  Play,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import { PRICING_MODELS } from "@/data/pricing-models";
import { CATEGORIES } from "@/data/categories";
import type { PricingModel } from "@/data/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PRICING_ICONS: Record<string, LucideIcon> = {
  Zap,
  Target,
  CalendarClock,
  Layers,
  Gift,
};

const STEPS = [
  { id: 1, label: "Manifest", icon: FileText },
  { id: 2, label: "Pricing", icon: DollarSign },
  { id: 3, label: "Sandbox", icon: FlaskConical },
  { id: 4, label: "Review", icon: CheckCircle2 },
] as const;

type SandboxState = "idle" | "running" | "passed";

export function PublishWizard() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0].id);
  const [framework, setFramework] = useState("LangGraph");
  const [description, setDescription] = useState("");
  const [pricingModel, setPricingModel] = useState<PricingModel>("usage");
  const [sandbox, setSandbox] = useState<SandboxState>("idle");

  const canContinue = useMemo(() => {
    if (step === 1) return name.trim().length > 1 && description.trim().length > 4;
    if (step === 3) return sandbox === "passed";
    return true;
  }, [step, name, description, sandbox]);

  const goNext = () => setStep((s) => Math.min(s + 1, STEPS.length));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const runSandbox = () => {
    setSandbox("running");
    window.setTimeout(() => setSandbox("passed"), 1800);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Stepper */}
      <ol className="flex items-center gap-2">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const done = step > s.id;
          const active = step === s.id;
          return (
            <li key={s.id} className="flex flex-1 items-center gap-2">
              <button
                type="button"
                onClick={() => s.id < step && setStep(s.id)}
                disabled={s.id > step}
                className={cn(
                  "flex items-center gap-2 rounded-pill border px-3 py-1.5 text-sm font-semibold transition-colors",
                  active && "border-primary bg-primary text-primary-foreground",
                  done &&
                    "border-success/40 bg-success/10 text-success hover:bg-success/15",
                  !active &&
                    !done &&
                    "border-border bg-card text-muted-foreground",
                )}
              >
                {done ? (
                  <Check className="size-4" aria-hidden />
                ) : (
                  <Icon className="size-4" aria-hidden />
                )}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < STEPS.length - 1 ? (
                <span
                  className={cn(
                    "h-px flex-1",
                    step > s.id ? "bg-success/50" : "bg-border",
                  )}
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="rounded-card border border-border bg-card p-6 shadow-soft sm:p-8">
        {step === 1 ? (
          <ManifestStep
            name={name}
            setName={setName}
            category={category}
            setCategory={setCategory}
            framework={framework}
            setFramework={setFramework}
            description={description}
            setDescription={setDescription}
          />
        ) : null}

        {step === 2 ? (
          <PricingStep selected={pricingModel} onSelect={setPricingModel} />
        ) : null}

        {step === 3 ? (
          <SandboxStep state={sandbox} onRun={runSandbox} />
        ) : null}

        {step === 4 ? (
          <ReviewStep
            name={name}
            category={category}
            framework={framework}
            description={description}
            pricingModel={pricingModel}
          />
        ) : null}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={goBack}
          disabled={step === 1}
          className={cn(step === 1 && "invisible")}
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back
        </Button>

        {step < STEPS.length ? (
          <Button onClick={goNext} disabled={!canContinue}>
            Continue
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        ) : (
          <Button variant="primary">
            <Check className="size-4" aria-hidden />
            Publish agent
          </Button>
        )}
      </div>
    </div>
  );
}

function StepHeader({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <p className="mt-1 text-muted-foreground">{body}</p>
    </div>
  );
}

const FIELD =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary";

function ManifestStep({
  name,
  setName,
  category,
  setCategory,
  framework,
  setFramework,
  description,
  setDescription,
}: {
  name: string;
  setName: (v: string) => void;
  category: string;
  setCategory: (v: (typeof CATEGORIES)[number]["id"]) => void;
  framework: string;
  setFramework: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
}) {
  const FRAMEWORKS = [
    "LangGraph",
    "LangChain",
    "CrewAI",
    "AutoGen",
    "OpenAI Agents SDK",
    "Custom",
  ];
  return (
    <div>
      <StepHeader
        title="Manifest basics"
        body="Describe your agent. Bring any framework — this becomes its declarative manifest and SEO listing."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Agent name" htmlFor="agent-name">
          <input
            id="agent-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Closer SDR"
            className={FIELD}
          />
        </Field>
        <Field label="Category" htmlFor="agent-category">
          <select
            id="agent-category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as (typeof CATEGORIES)[number]["id"])
            }
            className={cn(FIELD, "pr-9")}
          >
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Framework" htmlFor="agent-framework">
          <select
            id="agent-framework"
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            className={cn(FIELD, "pr-9")}
          >
            {FRAMEWORKS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Runtime" htmlFor="agent-runtime">
          <select id="agent-runtime" className={cn(FIELD, "pr-9")} defaultValue="sync">
            <option value="sync">Synchronous</option>
            <option value="async">Async job</option>
            <option value="scheduled">Scheduled</option>
            <option value="standby">Standby / always-on</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Description" htmlFor="agent-description">
            <textarea
              id="agent-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="What does your agent do, and for whom?"
              className={cn(FIELD, "h-auto py-2.5")}
            />
          </Field>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  );
}

function PricingStep({
  selected,
  onSelect,
}: {
  selected: PricingModel;
  onSelect: (m: PricingModel) => void;
}) {
  return (
    <div>
      <StepHeader
        title="Choose your pricing model"
        body="Pick one (or combine later). Transparent take rate, automatic monthly payouts, and you get paid on every paid run."
      />
      <div
        role="radiogroup"
        aria-label="Pricing model"
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PRICING_MODELS.map((model) => {
          const Icon = PRICING_ICONS[model.icon] ?? Zap;
          const active = selected === model.id;
          return (
            <button
              key={model.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onSelect(model.id)}
              className={cn(
                "flex flex-col gap-2 rounded-card border p-5 text-left transition-all",
                active
                  ? "border-primary bg-primary-soft/30 shadow-soft ring-1 ring-primary/40"
                  : "border-border bg-background hover:border-primary/40",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-2xl",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-background-alt text-primary",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </span>
                {active ? (
                  <Check className="size-5 text-primary" aria-hidden />
                ) : null}
              </div>
              <div>
                <p className="font-display text-base font-semibold">
                  {model.label}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {model.tagline}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {model.description}
              </p>
              <p className="mt-auto pt-1 text-sm font-semibold text-foreground">
                e.g. {model.example}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SandboxStep({
  state,
  onRun,
}: {
  state: SandboxState;
  onRun: () => void;
}) {
  return (
    <div>
      <StepHeader
        title="Mandatory sandbox test"
        body="Every agent runs in an isolated sandbox before going live. We run your eval suite and publish the verified metrics."
      />
      <div className="flex flex-col items-center gap-5 rounded-card border border-dashed border-border bg-background py-10 text-center">
        {state === "idle" ? (
          <>
            <span className="flex size-14 items-center justify-center rounded-3xl bg-primary-soft/50 text-primary">
              <FlaskConical className="size-7" aria-hidden />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">
                Ready to test
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                We&rsquo;ll spin up a Firecracker microVM, run your agent
                against the category eval suite, and measure success rate and
                latency.
              </p>
            </div>
            <Button onClick={onRun}>
              <Play className="size-4" aria-hidden />
              Run sandbox test
            </Button>
          </>
        ) : null}

        {state === "running" ? (
          <>
            <span className="flex size-14 items-center justify-center rounded-3xl bg-primary-soft/50 text-primary">
              <Loader2 className="size-7 animate-spin" aria-hidden />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">
                Running evals…
              </p>
              <p className="text-sm text-muted-foreground">
                Provisioning sandbox · executing test cases · metering usage
              </p>
            </div>
          </>
        ) : null}

        {state === "passed" ? (
          <>
            <span className="flex size-14 items-center justify-center rounded-3xl bg-success/15 text-success">
              <CheckCircle2 className="size-7" aria-hidden />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-success">
                All checks passed
              </p>
              <p className="text-sm text-muted-foreground">
                Success rate 92% · median latency 38s · 0 safety violations
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {["Correctness", "Safety", "Latency", "Cost"].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 rounded-pill bg-success/10 px-3 py-1 text-sm font-medium text-success"
                >
                  <Check className="size-3.5" aria-hidden />
                  {c}
                </span>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

function ReviewStep({
  name,
  category,
  framework,
  description,
  pricingModel,
}: {
  name: string;
  category: string;
  framework: string;
  description: string;
  pricingModel: PricingModel;
}) {
  const categoryName =
    CATEGORIES.find((c) => c.id === category)?.name ?? category;
  const modelLabel =
    PRICING_MODELS.find((m) => m.id === pricingModel)?.label ?? pricingModel;

  return (
    <div>
      <StepHeader
        title="Review & publish"
        body="Here's your listing summary. Publishing generates an indexable SEO page and opens you up to the marketplace."
      />
      <dl className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2">
        <ReviewRow label="Agent name" value={name || "Untitled agent"} />
        <ReviewRow label="Category" value={categoryName} />
        <ReviewRow label="Framework" value={framework} />
        <ReviewRow label="Pricing model" value={modelLabel} />
        <div className="bg-card px-5 py-4 sm:col-span-2">
          <dt className="text-sm font-semibold text-muted-foreground">
            Description
          </dt>
          <dd className="mt-1 text-foreground">
            {description || "No description provided yet."}
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center gap-3 rounded-card border border-success/30 bg-success/10 p-4 text-sm text-success">
        <CheckCircle2 className="size-5 shrink-0" aria-hidden />
        <p>
          Sandbox passed and metrics verified. Your agent is ready to go live —
          this is a visual demo, so nothing is actually submitted.
        </p>
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-5 py-4">
      <dt className="text-sm font-semibold text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-medium text-foreground">{value}</dd>
    </div>
  );
}
