import { NextResponse } from "next/server";

/** Semak env di Vercel (tanpa dedah nilai rahsia). */
export async function GET() {
  return NextResponse.json({
    ok: true,
    checks: {
      supabase: Boolean(
        process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
      ),
      resend: Boolean(
        process.env.RESEND_API_KEY && process.env.LEAD_TO_EMAIL,
      ),
      turnstile: Boolean(process.env.TURNSTILE_SECRET_KEY),
      siteUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
    },
  });
}
