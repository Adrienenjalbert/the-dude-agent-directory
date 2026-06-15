import type { ReactNode } from "react";
import { BadgeCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "primary" | "success" | "new";

const TONES: Record<BadgeTone, string> = {
  neutral: "bg-background-alt text-muted-foreground border-border",
  primary: "bg-primary-soft/60 text-[#9a4a23] border-primary/30",
  success: "bg-success/10 text-success border-success/30",
  new: "bg-warning/15 text-[#8a6418] border-warning/40",
};

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-pill border px-2.5 py-0.5 text-xs font-semibold",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <Badge tone="success" className={className}>
      <BadgeCheck className="size-3.5" aria-hidden />
      Verified
    </Badge>
  );
}

export function NewBadge({ className }: { className?: string }) {
  return (
    <Badge tone="new" className={className}>
      <Sparkles className="size-3.5" aria-hidden />
      New &amp; promising
    </Badge>
  );
}
