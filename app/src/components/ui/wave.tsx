import { cn } from "@/lib/utils";

interface WaveProps {
  /** Tailwind text-color class controlling the wave fill (uses currentColor). */
  className?: string;
  /** Flip vertically so the wave crests downward. */
  flip?: boolean;
  /** Aria-hidden decorative separator by default. */
  height?: number;
}

/**
 * Wavy SVG section divider — a core brand element from the reference site.
 * The fill follows `currentColor`, so set a text color on `className`
 * (e.g. "text-primary-soft", "text-background-alt", "text-dark") to match the
 * section it transitions into.
 */
export function Wave({ className, flip = false, height = 64 }: WaveProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none w-full leading-[0]", className)}
      style={{ height }}
    >
      <svg
        className={cn("block h-full w-full", flip && "rotate-180")}
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,32 C180,64 360,0 540,16 C720,32 900,64 1080,48 C1260,32 1380,8 1440,16 L1440,64 L0,64 Z" />
      </svg>
    </div>
  );
}
