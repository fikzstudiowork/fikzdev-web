import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return null;
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export type LeadInsert = {
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string;
  source_path: string | null;
  user_agent: string | null;
  turnstile_ok: boolean;
};
