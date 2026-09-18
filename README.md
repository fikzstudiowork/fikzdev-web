# FikzDev Website

Marketing site for [fikzdev.com](https://fikzdev.com): Next.js 16, Bahasa Melayu, lead capture via Supabase + Resend + Cloudflare Turnstile.

## Setup

```bash
npm install
cp .env.example .env.local
```

Configure Supabase (run `supabase/migrations/001_leads.sql`) and Resend. See [docs/DEPLOY.md](docs/DEPLOY.md).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run test` — Vitest unit tests

## Docs

- [AGENTS.md](AGENTS.md)
- [docs/ROADMAP.md](docs/ROADMAP.md)
- [docs/MIGRATION.md](docs/MIGRATION.md)
