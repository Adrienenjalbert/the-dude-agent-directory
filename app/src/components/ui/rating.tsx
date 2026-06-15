import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  count?: number;
  className?: string;
  size?: "sm" | "md";
}

export function Rating({ value, count, className, size = "sm" }: RatingProps) {
  const starSize = size === "sm" ? "size-3.5" : "size-4";
  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      aria-label={`Rated ${value} out of 5${count ? ` from ${count} reviews` : ""}`}
    >
      <span className="inline-flex items-center" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(value);
          return (
            <Star
              key={i}
              className={cn(
                starSize,
                filled ? "fill-warning text-warning" : "fill-border text-border",
              )}
            />
          );
        })}
      </span>
      <span className="text-sm font-semibold text-foreground">{value.toFixed(1)}</span>
      {count !== undefined ? (
        <span className="text-sm text-muted-foreground">({count})</span>
      ) : null}
    </span>
  );
}
