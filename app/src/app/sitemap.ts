import type { MetadataRoute } from "next";
import { AGENTS } from "@/data/agents";
import { absoluteUrl } from "@/lib/site";

/**
 * Static sitemap, emitted to /sitemap.xml at build time. Works under
 * `output: export`. URLs include the GitHub Pages base path via absoluteUrl().
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: absoluteUrl("/agents"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/publish"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/console"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const agentRoutes: MetadataRoute.Sitemap = AGENTS.map((agent) => ({
    url: absoluteUrl(`/agents/${agent.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...agentRoutes];
}
