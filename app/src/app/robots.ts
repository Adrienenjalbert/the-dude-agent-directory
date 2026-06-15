import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Static robots.txt, emitted at build time (works under `output: export`).
 * Points crawlers at the absolute, base-path-aware sitemap URL.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
