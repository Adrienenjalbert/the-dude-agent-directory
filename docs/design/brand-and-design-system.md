# Brand & Design System — The Dude (Agent Directory)

> **Source of truth for all UI work.** Aligned with the retro-warm aesthetic of https://the-dude.ai/.
> Every build agent MUST follow these tokens and principles. Reference image: `../brand-reference-the-dude-ai.png`.

---

## 1. Brand essence

- **Personality:** friendly, confident, human, a little retro. "Your people, supercharged" — tools that empower, not replace.
- **Voice:** warm, direct, plain-spoken. Tool family naming uses the "Dude" motif (e.g., "The GTM Dude," "The CRM Dude," "The Outreach Dude"). For the marketplace we extend this to the **agent directory**.
- **Tagline (marketplace):** "The marketplace for AI agents that actually work. Publish any agent, get paid. Hire any agent, trust it."

## 2. Visual style — "Retro Warm"

- **Warm, paper-like cream backgrounds** (not stark white).
- **Orange / terracotta accent** as the primary brand color, used for CTAs, highlights, and **wavy section dividers**.
- **Dark charcoal** for the footer and high-contrast sections.
- **Underline accent** under key heading words (hand-drawn / marker feel).
- **Soft rounded cards** with subtle borders and warm shadows.
- **Retro touches:** slightly rounded geometric sans for body, a warm serif or chunky display for big headings; grain/paper texture optional; rounded "pill" buttons.

## 3. Color tokens (OKLCH + hex reference)

```css
:root {
  /* Warm neutrals */
  --background:        #FBF6EF;  /* cream paper */
  --background-alt:    #F5ECE0;  /* slightly deeper cream */
  --card:              #FFFFFF;
  --foreground:        #2B2520;  /* warm charcoal text */
  --muted-foreground:  #6B6258;

  /* Brand accent — terracotta/orange */
  --primary:           #E8703A;  /* terracotta */
  --primary-hover:     #D85F2B;
  --primary-soft:      #F6C9A8;  /* soft peach (wave fills, tints) */
  --primary-foreground:#FFFFFF;

  /* Supporting */
  --accent-cream:      #F3E2CE;
  --dark:              #211C18;  /* footer / dark sections */
  --dark-foreground:   #EDE6DC;
  --border:            #E7DAC9;
  --ring:              #E8703A;

  /* Status */
  --success:           #4F8A5B;
  --warning:           #D9A441;
  --danger:            #C2552F;

  --radius:            1rem;     /* generous rounding */
}
```

Dark sections (footer / hero variants) use `--dark` bg with `--dark-foreground` text and `--primary` accents.

## 4. Typography

- **Display / headings:** a warm, slightly retro serif or chunky grotesque (e.g., "Fraunces", "Clash Display", or "Bricolage Grotesque"). Tight leading, bold weight. Underline-accent on 1–2 words.
- **Body / UI:** a friendly geometric sans (e.g., "Geist", "Inter", or "General Sans").
- **Scale:** display 48–72px (hero), h1 36px, h2 28px, h3 20px, body 16px, small 14px.
- **Use Google Fonts via Next/font** (or static for GitHub Pages export).

## 5. Components & patterns

- **Buttons:** pill-shaped, primary = terracotta fill + white text + soft shadow; secondary = outline on cream. Hover darkens.
- **Cards:** white, `--radius` rounding, 1px `--border`, soft warm shadow; tool/agent cards mirror the reference "collection of tools" layout.
- **Wavy dividers:** SVG wave separators between sections, filled with `--primary-soft` or `--primary`.
- **Stat band:** big numbers (like the reference "1B+ / 80% / 150M+ / 20M+") for marketplace metrics.
- **Badges:** "Verified", "New & promising", category chips — rounded pills, soft tints.
- **Nav:** simple top nav (Browse, Publish, Pricing, Docs) + "Get started" pill CTA.

## 6. Marketplace-specific surfaces (MVP)

1. **Landing page** — hero, "how it works" (publish/hire), agent categories, featured agents grid, stat band, builder vs. buyer value props, wavy dividers, dark footer.
2. **Agent directory / browse** — search, category filters, agent cards with verified metrics (success rate, latency, price), ranking.
3. **Agent detail page** — description, demo, transparent pricing, verified performance, reviews, "Run / Rent" CTA.
4. **Publish flow (visual stub)** — manifest/pricing wizard mock.
5. **Console (visual stub)** — builder earnings + buyer spend dashboards.

## 7. Accessibility & quality bar

- WCAG AA contrast (verify terracotta-on-cream for text; use `--foreground` for body, reserve terracotta for accents/large text).
- Keyboard navigable, focus-visible rings (`--ring`), semantic HTML.
- Responsive (mobile-first), fast, no layout shift.
- Benchmarks for polish: Vercel, Linear, Stripe — but warmer/retro.

## 8. Tech constraint — GitHub Pages

- The site MUST deploy as **static** to **GitHub Pages**. Use **Next.js static export** (`output: 'export'`) with `basePath`/`assetPrefix` configured for the repo path, OR a static-first setup. No server-only features at runtime (mock data/JSON for the MVP marketplace). Include a GitHub Actions workflow to build + deploy to Pages.
