# MIGRATION — fikzdev.com (WordPress → Next.js)

Redirects are implemented in `next.config.ts`. Confirm in Search Console after cutover.

| Old path | New path | Type |
|----------|----------|------|
| `/contact/` | `/hubungi` | 301 |
| `/about-us/` | `/tentang` | 301 |
| `/services/` | `/perkhidmatan` | 301 |
| `/web-design/` | `/perkhidmatan/laman-web-custom` | 301 |
| `/seo-services/` | `/perkhidmatan/seo` | 301 |
| `/website-maintenance/` | `/perkhidmatan/penyelenggaraan` | 301 |
| `/website-cost-malaysia/` | `/panduan/kos-laman-web-malaysia` | 301 |
| `/paid-media/` | `/perkhidmatan/seo` | 301 |
| `/woocommerce-shopify-website-malaysia/` | `/perkhidmatan/laman-web-custom` | 301 |
| `/web-secure/` | `/perkhidmatan/penyelenggaraan` | 301 |
| `/shop/`, `/cart/`, `/checkout/`, `/my-account/` | `/` | 301 |
| `/ai-store/`, `/ai-checkout/` | `/` | 301 |

Phase 2+ pages (`/perkhidmatan/*`, `/tentang`, `/panduan/*`) return 404 until those phases ship; redirects still point to canonical targets.
