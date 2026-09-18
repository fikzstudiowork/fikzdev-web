type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
  action?: string;
  hostname?: string;
};

export async function verifyTurnstileToken(
  token: string,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: false, reason: "Turnstile tidak dikonfigurasi." };
  }

  if (token.length === 0 || token.length > 2048) {
    return { ok: false, reason: "Token tidak sah." };
  }

  let result: TurnstileVerifyResponse;
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: AbortSignal.timeout(10_000),
        body: new URLSearchParams({
          secret,
          response: token,
        }),
      },
    );
    result = (await response.json()) as TurnstileVerifyResponse;
  } catch {
    return { ok: false, reason: "Pengesahan gagal. Cuba lagi." };
  }

  if (!result.success) {
    return { ok: false, reason: "Pengesahan keselamatan gagal." };
  }

  return { ok: true };
}
