"use server";

import { headers } from "next/headers";
import {
  leadFormSchema,
  type LeadFormFieldErrors,
} from "@/lib/validation/lead";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { sendLeadNotification } from "@/lib/resend";

export type SubmitLeadState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: LeadFormFieldErrors };

export async function submitLead(
  _prev: SubmitLeadState,
  formData: FormData,
): Promise<SubmitLeadState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? undefined,
    service: formData.get("service"),
    message: formData.get("message"),
    consent: formData.get("consent") === "true",
    website: formData.get("website") ?? undefined,
    turnstileToken: formData.get("turnstileToken"),
    sourcePath: formData.get("sourcePath") ?? undefined,
  };

  if (raw.website) {
    return { status: "success" };
  }

  const parsed = leadFormSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: LeadFormFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key as keyof LeadFormFieldErrors]) {
        fieldErrors[key as keyof LeadFormFieldErrors] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Sila semak borang dan cuba lagi.",
      fieldErrors,
    };
  }

  const data = parsed.data;

  const turnstile = await verifyTurnstileToken(data.turnstileToken);
  if (!turnstile.ok) {
    return {
      status: "error",
      message: turnstile.reason,
      fieldErrors: { turnstileToken: turnstile.reason },
    };
  }

  const headerStore = await headers();
  const userAgent = headerStore.get("user-agent");

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return {
      status: "error",
      message:
        "Borang belum boleh dihantar (pangkalan data belum dikonfigurasi). Hubungi kami melalui emel.",
    };
  }

  const { error: dbError } = await supabase.from("leads").insert({
    name: data.name,
    email: data.email,
    phone: data.phone ?? null,
    service: data.service,
    message: data.message,
    source_path: data.sourcePath ?? null,
    user_agent: userAgent,
    turnstile_ok: true,
  });

  if (dbError) {
    return {
      status: "error",
      message: "Ralat menyimpan permintaan. Sila cuba lagi atau emel kami.",
    };
  }

  const emailResult = await sendLeadNotification({
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    message: data.message,
    sourcePath: data.sourcePath,
  });

  if (!emailResult.ok) {
    return {
      status: "error",
      message:
        "Permintaan direkodkan tetapi notifikasi emel gagal. Semak Resend di Vercel env.",
    };
  }

  return { status: "success" };
}
