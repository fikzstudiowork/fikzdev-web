import { Resend } from "resend";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendLeadNotification(payload: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  sourcePath?: string;
}) {
  const resend = getResend();
  const to = process.env.LEAD_TO_EMAIL;
  const from =
    process.env.RESEND_FROM ?? "FikzDev <onboarding@resend.dev>";

  if (!resend || !to) {
    return { ok: true as const, skipped: true as const };
  }

  const lines = [
    `Nama: ${payload.name}`,
    `Emel: ${payload.email}`,
    payload.phone ? `Telefon: ${payload.phone}` : null,
    `Perkhidmatan: ${payload.service}`,
    `Halaman: ${payload.sourcePath ?? "-"}`,
    "",
    payload.message,
  ].filter(Boolean);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `[FikzDev] Lead baharu — ${payload.name}`,
    text: lines.join("\n"),
  });

  if (error) {
    return { ok: false as const, reason: error.message };
  }
  return { ok: true as const };
}
