import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const SITE_DESCRIPTION =
  "The marketplace for AI agents that actually work. Publish any agent, get paid. Hire any agent, trust it — with verified performance, transparent pricing, and a flat 15% fee.";

export const metadata: Metadata = {
  title: {
    default: "The Dude — The marketplace for AI agents that actually work",
    template: "%s · The Dude",
  },
  description: SITE_DESCRIPTION,
  applicationName: "The Dude",
  keywords: [
    "AI agents",
    "agent marketplace",
    "rent AI agents",
    "publish AI agents",
    "MCP",
    "A2A",
    "Apify for AI agents",
  ],
  authors: [{ name: "The Dude" }],
  openGraph: {
    title: "The Dude — The marketplace for AI agents that actually work",
    description: SITE_DESCRIPTION,
    siteName: "The Dude",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dude — The marketplace for AI agents that actually work",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
