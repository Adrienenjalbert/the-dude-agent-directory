"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/agents", label: "Browse" },
  { href: "/publish", label: "Publish" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/console", label: "Console" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/agents") return pathname.startsWith("/agents");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        className="container-page flex h-16 items-center justify-between gap-4"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-pill"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-pill px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-background-alt text-foreground"
                  : "text-muted-foreground hover:bg-background-alt hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="/agents" variant="ghost" size="sm">
            Browse agents
          </Button>
          <Button href="/publish" size="sm">
            Get started
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-pill text-foreground hover:bg-background-alt md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-sm font-medium",
                  isActive(link.href)
                    ? "bg-background-alt text-foreground"
                    : "text-muted-foreground hover:bg-background-alt",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button href="/publish" onClick={() => setOpen(false)}>
                Get started
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
