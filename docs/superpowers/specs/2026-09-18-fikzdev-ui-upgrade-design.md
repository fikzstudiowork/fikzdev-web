# FikzDev UI Upgrade — Editorial Premium (Design Spec)

**Date:** 2026-09-18  
**Status:** Draft for review  
**Scope:** Homepage, Header, Footer, global tokens, `/hubungi` visual alignment  
**Out of scope:** Phase 2 service copy, portfolio cases, dark mode, Framer Motion

## Goals

- Raise perceived quality vs current Phase 1 “plain list” homepage without violating MASTER-PROMPT: fast, accessible, conversion-focused, honest BM copy.
- Avoid generic AI aesthetics (purple gradients, Inter-only, fake social proof).

## Approach

**Component composition (recommended):** `components/marketing/*` + tokens in `globals.css`; Server Components for sections; client only on `ContactForm`.

## Color palettes (choose one)

All palettes target WCAG AA for body text on paper background and primary CTA contrast ≥ 4.5:1.

### Palette A — Warm Ink & Verdigris *(recommended default)*

Editorial, trustworthy, still “tech agency” without cold startup blue.

| Role | Token | Hex | Usage |
|------|--------|-----|--------|
| Paper | `--color-surface` | `#F4F0E8` | Page background |
| Paper elevated | `--color-surface-raised` | `#FFFCF7` | Cards, form panel |
| Ink | `--color-ink` | `#12141A` | Headings, primary text |
| Muted | `--color-muted` | `#5C6478` | Body secondary |
| Border | `--color-border` | `#D8D2C8` | Dividers, inputs |
| Accent | `--color-accent` | `#1B6B62` | Links, eyebrows, focus ring |
| Accent hover | `--color-accent-hover` | `#14554E` | Button hover |
| CTA | `--color-cta` | `#12141A` | Primary button fill |
| CTA hover | `--color-cta-hover` | `#2A2E38` | Primary button hover |
| CTA text | `--color-cta-foreground` | `#FFFCF7` | On primary button |
| Highlight | `--color-highlight` | `#C4A574` | Sparingly: stat labels, small rules |

Why: warm paper reads “local studio”; verdigris keeps FikzDev teal DNA but deeper and more editorial; dark ink CTA feels premium vs flat teal buttons.

### Palette B — Cool Slate & Signal

Slightly more “product studio”, cooler tone.

| Role | Hex |
|------|-----|
| Surface | `#F3F5F7` |
| Ink | `#0E1320` |
| Muted | `#5A6578` |
| Border | `#D1D8E0` |
| Accent | `#2563EB` *(signal blue — use only if willing to leave teal)* |
| Accent alt (teal-leaning) | `#0F766E` |
| CTA | `#0E1320` |

Trade-off: blue accent is common in SaaS; prefer **Accent alt** if brand must stay green-teal.

### Palette C — Forest & Amber

Warmer SME-friendly; strong Malaysia “trust” without red/gold cliché.

| Role | Hex |
|------|-----|
| Surface | `#FAF6F1` |
| Ink | `#1A1814` |
| Muted | `#6B6560` |
| Border | `#E5DDD3` |
| Accent | `#2F5E4E` |
| CTA | `#2F5E4E` |
| CTA hover | `#244A3D` |
| Highlight | `#D49A5A` |

Trade-off: less “developer monospace”; better for general business audience.

**Implementation default unless user picks B/C:** **Palette A**.

## Typography

- **Display (H1, hero):** `Fraunces` or `Instrument Serif` — `next/font/google`, `display: swap`.
- **UI / body:** `Plus Jakarta Sans` or `DM Sans`.
- Scale: hero `text-4xl sm:text-5xl`, section titles `text-2xl`, body `text-base` max-width prose ~65ch.

## Homepage sections

1. **Hero** — asymmetric grid; eyebrow; approved H1/sub/CTAs from COPYWRITING; right column: compact “6 perkhidmatan” or three honesty principles (no fake metrics).
2. **Services** — 6 linked cards to existing slugs with line icons (inline SVG, no icon library).
3. **Process** — 3 steps (semak → cadang → bina).
4. **Principles** — transparency bullets (no guaranteed rankings).
5. **CTA band** — dark ink background (`#12141A`), light text, single primary action `/hubungi`.

## Shell

- **Header:** sticky, `surface-raised`, subtle border; wordmark weight 600; nav underline on hover.
- **Footer:** columns for nav + email; unchanged legal links.
- **Hubungi:** form on `surface-raised` card, shared input/border tokens.

## Motion & performance

- CSS-only entrance: hero opacity + translate, stagger via `animation-delay` (max 3 elements).
- No new JS dependencies.
- No full-bleed video or large hero images in this sprint.

## Component map

```
components/marketing/
  Hero.tsx
  ServiceGrid.tsx
  ProcessSteps.tsx
  Principles.tsx
  CTABand.tsx
components/layout/     (Header, Footer updates)
app/page.tsx           (compose sections only)
app/globals.css        (tokens + grain utility)
```

## Content rules

- BM Malaysia; English terms OK (SEO, WordPress).
- No em dashes; no ranking guarantees; no invented testimonials.

## Testing / acceptance

- `npm run build` passes.
- Lighthouse mobile: no regression vs Phase 1 (avoid heavy assets).
- Keyboard: skip link, focus visible on new buttons.
- Visual check on `fikzdev-web.vercel.app` after deploy.

## Decision log

| Decision | Choice |
|----------|--------|
| Aesthetic | Editorial premium |
| Scope | Home + shell + hubungi styling |
| Color | **Palette A** (pending user confirm B/C) |
| Motion | CSS only |
