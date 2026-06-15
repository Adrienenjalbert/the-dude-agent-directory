/**
 * Lightweight className joiner (no clsx/tailwind-merge dependency).
 * Accepts strings, falsy values, and conditional objects.
 */
type ClassValue = string | number | null | false | undefined | Record<string, boolean>;

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
    } else {
      for (const [key, active] of Object.entries(input)) {
        if (active) out.push(key);
      }
    }
  }
  return out.join(" ");
}

/**
 * The base path the site is served under (e.g. "/the-dude-agent-directory").
 * Injected at build time via next.config env. Empty string for root hosting.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Build a basePath-aware URL for assets that live in /public (images, og, etc.).
 *
 * IMPORTANT: Do NOT use this for Next <Link href> or next/image src — Next
 * applies basePath/assetPrefix to those automatically. Use it only for raw
 * URLs you construct yourself (e.g. inline background-image, <img> in public).
 */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/** Format a number as compact currency, e.g. 12_500 -> "$12.5k". */
export function formatCompactUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/** Format an integer with grouping, e.g. 1240000 -> "1,240,000". */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
