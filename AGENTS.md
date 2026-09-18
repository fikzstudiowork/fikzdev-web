# AGENTS.md — FikzDev Website

## Project

- **Brand:** FikzDev
- **Domain:** https://fikzdev.com
- **Market:** Malaysia
- **Language:** Bahasa Melayu (public). English is a future phase only.

## Goals

Generate qualified enquiries and sustainable organic search visibility in Malaysia.

## Services (in scope)

1. WordPress and Elementor website development
2. Custom coded website development
3. SEO services
4. Website maintenance
5. Domain registration and management
6. Managed website hosting

Legacy WordPress offerings (paid media, WooCommerce shop, AI store) are **out of scope** for new pages; old URLs are redirected (see `docs/MIGRATION.md`).

## How to work

1. Read `MASTER-PROMPT.md`, relevant `docs/*`, and `.cursor/rules/*` before coding.
2. Implement **one ROADMAP phase at a time**.
3. After each phase, run checks in `docs/QA-CHECKLIST.md`.
4. Do not proceed to the next phase while critical QA items fail.

## Tech stack

Next.js 16.x (App Router), TypeScript, Tailwind CSS, Zod, Supabase (leads), Resend (email), Cloudflare Turnstile.

## Copy and SEO

Follow `docs/COPYWRITING.md`, `docs/LOCAL-SEO.md`, and `.cursor/rules/copywriting.mdc` / `seo.mdc`.
