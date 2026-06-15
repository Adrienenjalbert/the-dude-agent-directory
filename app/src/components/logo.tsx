import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Render light text for dark backgrounds (e.g. footer). */
  inverted?: boolean;
}

/**
 * The Dude wordmark. The mark is a rounded sunburst-ish badge in terracotta —
 * warm, retro, and friendly — paired with a Fraunces wordmark.
 */
export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="relative flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <path
            d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          inverted ? "text-dark-foreground" : "text-foreground",
        )}
      >
        The Dude
      </span>
    </span>
  );
}
