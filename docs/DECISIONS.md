# DECISIONS — FikzDev

Recorded defaults for implementation (plan conflicts resolved).

| Topic | Decision |
|-------|----------|
| Brand | **FikzDev** (not "Fikzdev Studio" on new site) |
| Services | **Six** MASTER-PROMPT services only on new site |
| Legacy ads / e-commerce / AI shop | Sunset: **410** or redirect to `/perkhidmatan` (see `docs/MIGRATION.md`) |
| Deploy | **Vercel** (Next.js native); DNS may stay on Cloudflare |
| Lead email | `LEAD_TO_EMAIL` env (default `fikzstudiowork@gmail.com` for dev) |
| Resend from | `RESEND_FROM` e.g. `FikzDev <hello@fikzdev.com>` after domain verify |
| i18n English | Not implemented |
