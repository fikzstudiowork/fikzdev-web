# Cara Gunakan Pack Ini Dalam Cursor

## Cara paling mudah

1. Extract fail ZIP ini.
2. Buka project website FikzDev anda dalam Cursor.
3. Copy semua fail dan folder daripada pack ini ke root project.
4. Pastikan struktur berikut wujud di root project:

```text
AGENTS.md
MASTER-PROMPT.md
README.md
docs/
.cursor/rules/
```

5. Buka Cursor Plan Mode.
6. Minta Cursor baca `AGENTS.md`, `MASTER-PROMPT.md` dan semua dokumen berkaitan.
7. Gunakan arahan:

```text
Read AGENTS.md, MASTER-PROMPT.md, all files in /docs, and all project rules in /.cursor/rules.
Do not code yet.
Create the implementation plan requested in MASTER-PROMPT.md and identify any conflicts or missing decisions before implementation.
```

8. Review plan dahulu.
9. Selepas plan dipersetujui, minta Cursor implement `Phase 1` sahaja berdasarkan `docs/ROADMAP.md`.
10. Jangan minta Cursor membina semua fasa sekaligus.

## Selepas setiap fasa

Minta Cursor:

```text
Run the relevant QA checks in docs/QA-CHECKLIST.md.
List what passed, what failed, and what must be fixed before the next phase.
Do not proceed to the next phase until critical issues are resolved.
```

## Jika Cursor mula tulis copy yang berbunyi seperti AI

Gunakan:

```text
Stop. Re-read docs/COPYWRITING.md and .cursor/rules/copywriting.mdc.
Rewrite the public copy in natural Malaysian Bahasa Melayu.
Remove hype, generic AI phrases, fake claims and em dashes.
Keep the meaning practical, transparent and specific.
```

## Jika Cursor mahu generate banyak location page

Gunakan:

```text
Stop. Re-read docs/LOCAL-SEO.md and .cursor/rules/seo.mdc.
Do not create mass location pages or near-duplicate pages.
Show which locations have enough unique value to publish and keep the rest as future opportunities.
```
