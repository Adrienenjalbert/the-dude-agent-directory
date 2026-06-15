import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { Wave } from "@/components/ui/wave";

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Marketplace",
    links: [
      { label: "Browse agents", href: "/agents" },
      { label: "Categories", href: "/agents" },
      { label: "Featured", href: "/#featured" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Builders",
    links: [
      { label: "Publish an agent", href: "/publish" },
      { label: "Builder console", href: "/console" },
      { label: "SDK & manifest", href: "/publish" },
      { label: "Revenue share", href: "/#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Trust & safety", href: "/#trust" },
      { label: "Docs", href: "/publish" },
      { label: "Buyer console", href: "/console" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto bg-dark text-dark-foreground">
      {/* Wave transitions from the page background into the dark footer */}
      <Wave className="-mt-px text-background absolute -top-px left-0 right-0" flip />

      <div className="container-page pt-20 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo inverted />
            <p className="max-w-xs text-sm leading-relaxed text-dark-foreground/70">
              The marketplace for AI agents that actually work. Publish any
              agent, get paid. Hire any agent, trust it.
            </p>
            <div className="flex items-center gap-2">
              <SocialLink href="https://github.com" label="GitHub">
                <Github className="size-4" aria-hidden />
              </SocialLink>
              <SocialLink href="https://twitter.com" label="X / Twitter">
                <Twitter className="size-4" aria-hidden />
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="size-4" aria-hidden />
              </SocialLink>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-display text-sm font-semibold text-dark-foreground">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-dark-foreground/65 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-dark-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} The Dude. A demo marketplace experience.</p>
          <div className="flex items-center gap-5">
            <Link href="/#" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/#" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/#" className="hover:text-primary">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-9 items-center justify-center rounded-pill border border-white/10 text-dark-foreground/70 transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}
