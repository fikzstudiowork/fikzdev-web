# Panduan Supabase + Vercel (test tanpa localhost)

Ikut turutan ini. Anggaran masa: 20–30 minit.

## Bahagian A — Supabase (jadual `leads`)

1. Buka [https://supabase.com/dashboard](https://supabase.com/dashboard) → **New project**.
2. Nama contoh: `fikzdev-web`, region **Singapore** (dekat Malaysia), simpan **database password**.
3. Selepas projek siap: **Project Settings** → **API**.
   - Salin **Project URL** → ini `SUPABASE_URL`
   - Salin **service_role** (secret, bukan anon) → ini `SUPABASE_SERVICE_ROLE_KEY`
4. **SQL Editor** → **New query** → tampal kandungan fail  
   `supabase/migrations/001_leads.sql` → **Run**.
5. Semak: **Table Editor** → patut nampak jadual `leads`.

> Inserts dari laman web guna **service role** di server (Server Action). Jangan letak service role key dalam kod client atau GitHub.

---

## Bahagian B — Cloudflare Turnstile (borang `/hubungi`)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Turnstile** → **Add widget**.
2. Mode: **Managed**.
3. **Domains** — masukkan **semua** hostname yang akan test:
   - `*.vercel.app` (preview Vercel), **atau** URL penuh contoh `fikzdev-web.vercel.app`
   - `fikzdev.com` bila production nanti
   - `localhost` jika masih nak test local
4. Salin **Site Key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
5. Salin **Secret Key** → `TURNSTILE_SECRET_KEY`

**Ujian cepat tanpa widget production:** set di Vercel (Development + Preview + Production):

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = `1x00000000000000000000AA`
- `TURNSTILE_SECRET_KEY` = `1x0000000000000000000000000000000AA`

(Test keys Cloudflare; sesuai untuk preview Vercel.)

---

## Bahagian C — Vercel (deploy)

### C1. Push kod (disyorkan)

```powershell
cd "C:\Users\fikzm\OneDrive\Desktop\Vibes Code\Fikzstudio"
git init
git add .
git commit -m "Phase 1: FikzDev site foundation"
```

Hubungkan repo GitHub/GitLab, kemudian import di [vercel.com/new](https://vercel.com/new).

### C2. Atau deploy terus CLI

```powershell
cd "C:\Users\fikzm\OneDrive\Desktop\Vibes Code\Fikzstudio"
npx vercel link
npx vercel --prod
```

(Akaun CLI anda: sudah login sebagai `fikzstudiowork-1357`.)

### C3. Environment variables (Vercel → Project → Settings → Environment Variables)

Tetapkan untuk **Production**, **Preview**, dan **Development**:

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | URL Vercel anda, contoh `https://fikzdev-web.vercel.app` (kemas kini bila guna domain sendiri) |
| `SUPABASE_URL` | dari Supabase API settings |
| `SUPABASE_SERVICE_ROLE_KEY` | service_role secret |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | site key atau test key di atas |
| `TURNSTILE_SECRET_KEY` | secret key atau test key di atas |
| `LEAD_TO_EMAIL` | `fikzstudiowork@gmail.com` |
| `RESEND_API_KEY` | (optional fasa test) kosongkan dulu — lead masih masuk Supabase |
| `RESEND_FROM` | (optional) `FikzDev <onboarding@resend.dev>` selepas Resend disetup |

Selepas tambah env → **Redeploy** (Deployments → … → Redeploy).

### C4. Semak deploy

1. Buka `https://<projek-anda>.vercel.app`
2. Buka `https://<projek-anda>.vercel.app/api/health` — pastikan `"supabase": true`
3. Hantar borang di `/hubungi` → semak baris baharu dalam Supabase **Table Editor** → `leads`

---

## Bahagian D — Resend (optional, selepas Supabase OK)

1. [resend.com](https://resend.com) → API key → `RESEND_API_KEY`
2. Verify domain `fikzdev.com` atau guna `onboarding@resend.dev` untuk test
3. Tambah env di Vercel → redeploy

---

## Masalah biasa

| Simptom | Penyelesaian |
|---------|----------------|
| Turnstile tak load | Domain hostname belum dalam widget Cloudflare; atau guna test keys |
| "Pangkalan data belum dikonfigurasi" | `SUPABASE_*` tiada di Vercel atau redeploy belum dibuat |
| Insert gagal | Pastikan SQL migration sudah Run; semak **Logs** di Supabase |
| Lembat di PC | Normal — preview Vercel memang lebih pantas untuk test |
