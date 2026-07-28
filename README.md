# Memecoin landing page

SvelteKit 5 (runes) + TypeScript + Tailwind CSS 4.

## Setup

```
npm install
npm run dev
```

## Customize

Everything lives in **`src/lib/config.ts`**:

- `colors` — the whole palette (bg, surface, primary, secondary, text, muted, border).
  Change a hex value there and it updates the entire site — no CSS/component edits needed.
- `site` — name, ticker, tagline, copy, nav links, socials, stats, lore paragraphs, disclaimer.

Replace `static/logo.png` and `static/hero.png` with your own art (same filenames, or update
`site.logo` / `site.heroImage` in the config).

## Structure

```
src/lib/config.ts          <- edit this
src/lib/components/        <- Nav, Hero, Lore, Footer (read config, no hardcoded copy/color)
src/routes/+layout.svelte  <- applies colors as CSS variables
src/routes/+page.svelte    <- composes the sections
```
