# DEPLOY — FikzDev

## Platform

**Vercel** for Next.js 16 App Router. Cloudflare remains suitable for DNS and Turnstile.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://fikzdev.com` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Yes | Turnstile site key |
| `TURNSTILE_SECRET_KEY` | Yes | Server siteverify |
| `SUPABASE_URL` | Yes* | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes* | Server-only inserts |
| `RESEND_API_KEY` | Yes* | Transactional email |
| `RESEND_FROM` | Yes* | Verified sender |
| `LEAD_TO_EMAIL` | Yes* | Inbox for new leads |

\*Required for full lead flow; dev can use test Turnstile keys without Supabase/Resend.

## Turnstile test keys (local)

- Site: `1x00000000000000000000AA`
- Secret: `1x0000000000000000000000000000000AA`

## Supabase

Run migration in `supabase/migrations/001_leads.sql` via SQL editor.

## Post-deploy

Submit sitemap in Google Search Console; verify redirects in `docs/MIGRATION.md`.
