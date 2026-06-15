import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Background treatment. */
  tone?: "default" | "alt" | "dark";
}

const TONES = {
  default: "bg-transparent text-foreground",
  alt: "bg-background-alt text-foreground",
  dark: "bg-dark text-dark-foreground",
} as const;

export function Section({
  children,
  className,
  id,
  tone = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn(TONES[tone], className)}>
      <div className="container-page py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description ? (
        <p className="text-base sm:text-lg text-muted-foreground max-w-prose">
          {description}
        </p>
      ) : null}
    </div>
  );
}
