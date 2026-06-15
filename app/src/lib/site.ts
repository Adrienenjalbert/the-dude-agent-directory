/**
 * Canonical site origin + base path, used to build absolute URLs for
 * metadata, canonical links, Open Graph, JSON-LD, sitemap, and robots.
 *
 * GitHub Pages serves the project under https://<user>.github.io/<repo>/, so
 * the full base includes the repo subpath. Next's `metadataBase` and the
 * sitemap/robots routes do NOT prepend `basePath` for us — we must include it
 * here so every emitted URL resolves correctly on Pages.
 *
 * Override at build time with NEXT_PUBLIC_SITE_URL (e.g. for a custom domain).
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Full canonical site URL, no trailing slash, including any base path. */
export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://adrienenjalbert.github.io${BASE_PATH}`;

export const SITE_NAME = "The Dude";

export const SITE_TAGLINE =
  "The marketplace for AI agents that actually work";

export const SITE_DESCRIPTION =
  "The marketplace for AI agents that actually work. Publish any agent, get paid. Hire any agent, trust it — with verified performance, transparent pricing, and a flat 15% fee.";

/** Build an absolute URL from a site-relative path (with trailing slash). */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  // trailingSlash: true — keep a trailing slash on directory-style routes.
  const withSlash =
    clean === "/" || clean.endsWith("/") || clean.includes(".")
      ? clean
      : `${clean}/`;
  return `${SITE_URL}${withSlash === "/" ? "/" : withSlash}`;
}

/** Absolute URL of the shared Open Graph image (lives in /public). */
export const OG_IMAGE_URL = `${SITE_URL}/og.png`;
