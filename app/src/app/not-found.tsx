import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <span className="flex size-16 items-center justify-center rounded-3xl bg-primary-soft/50 text-primary">
        <Compass className="size-8" aria-hidden />
      </span>
      <div className="flex flex-col gap-2">
        <p className="font-display text-6xl font-semibold text-primary">404</p>
        <h1 className="font-display text-2xl font-semibold">
          This page wandered off
        </h1>
        <p className="max-w-sm text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get
          you back to the marketplace.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back home</Button>
        <Button href="/agents" variant="secondary">
          Browse agents
        </Button>
      </div>
    </div>
  );
}
