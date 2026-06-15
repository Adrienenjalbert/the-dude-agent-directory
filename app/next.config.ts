import type { NextConfig } from "next";

/**
 * GitHub Pages project-page hosting lives under https://<user>.github.io/<repo>/.
 * Set the repo slug in ONE place here. Override at build time with PAGES_BASE_PATH
 * (e.g. PAGES_BASE_PATH="" for a user/org root site or a custom domain).
 */
const REPO_SLUG = "the-dude-agent-directory";

// Default to the project-page subpath; allow an explicit override (including "").
const basePath =
  process.env.PAGES_BASE_PATH !== undefined
    ? process.env.PAGES_BASE_PATH
    : `/${REPO_SLUG}`;

const nextConfig: NextConfig = {
  // Static HTML export -> ./out, deployable to GitHub Pages.
  output: "export",

  // GitHub Pages has no image optimizer.
  images: { unoptimized: true },

  // Serve under the repo subpath. assetPrefix keeps _next/* assets resolvable.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,

  // Expose the base path to client components for building correct asset URLs.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },

  // Pages serves /route as /route/index.html; trailing slashes avoid 404s.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
