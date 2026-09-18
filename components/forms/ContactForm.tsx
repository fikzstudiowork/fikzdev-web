"use client";

import { useActionState, useEffect, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { serviceOptions } from "@/content/site";
import {
  submitLead,
  type SubmitLeadState,
} from "@/app/hubungi/actions";

const initialState: SubmitLeadState = { status: "idle" };

const turnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
  "1x00000000000000000000AA";

export function ContactForm({ sourcePath }: { sourcePath?: string }) {
  const [state, formAction, pending] = useActionState(
    submitLead,
    initialState,
  );
  const turnstileRef = useRef<TurnstileInstance>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status !== "idle" && statusRef.current) {
      statusRef.current.focus();
    }
    if (state.status === "success") {
      turnstileRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <input type="hidden" name="sourcePath" value={sourcePath ?? ""} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Nama
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-ink"
          aria-describedby={fieldError(state, "name") ? "name-error" : undefined}
        />
        <FieldError id="name-error" message={fieldError(state, "name")} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Emel
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5"
          aria-describedby={
            fieldError(state, "email") ? "email-error" : undefined
          }
        />
        <FieldError id="email-error" message={fieldError(state, "email")} />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">
          Telefon <span className="font-normal text-muted">(pilihan)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium">
          Perkhidmatan
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5"
          aria-describedby={
            fieldError(state, "service") ? "service-error" : undefined
          }
        >
          <option value="" disabled>
            Pilih perkhidmatan
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <FieldError id="service-error" message={fieldError(state, "service")} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Mesej
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5"
          aria-describedby={
            fieldError(state, "message") ? "message-error" : undefined
          }
        />
        <FieldError id="message-error" message={fieldError(state, "message")} />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          value="true"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300"
          aria-describedby={
            fieldError(state, "consent") ? "consent-error" : undefined
          }
        />
        <label htmlFor="consent" className="text-sm text-muted">
          Saya bersetuju FikzDev menghubungi saya berkaitan permintaan ini.
          Data digunakan mengikut polisi privasi.
        </label>
      </div>
      <FieldError id="consent-error" message={fieldError(state, "consent")} />

      <div>
        <Turnstile
          ref={turnstileRef}
          siteKey={turnstileSiteKey}
          options={{ action: "contact" }}
          onSuccess={(token) => {
            const input = document.getElementById(
              "turnstileToken",
            ) as HTMLInputElement | null;
            if (input) input.value = token;
          }}
          onExpire={() => {
            const input = document.getElementById(
              "turnstileToken",
            ) as HTMLInputElement | null;
            if (input) input.value = "";
          }}
        />
        <input type="hidden" id="turnstileToken" name="turnstileToken" />
        <FieldError
          id="turnstile-error"
          message={fieldError(state, "turnstileToken")}
        />
      </div>

      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="min-h-[1.25rem] text-sm"
      >
        {state.status === "success" && (
          <p className="text-accent">
            Terima kasih. Mesej anda telah dihantar. Kami akan hubungi anda
            tidak lama lagi.
          </p>
        )}
        {state.status === "error" && (
          <p className="text-red-700">{state.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
      >
        {pending ? "Menghantar…" : "Hantar mesej"}
      </button>
    </form>
  );
}

function fieldError(
  state: SubmitLeadState,
  field: keyof NonNullable<Extract<SubmitLeadState, { status: "error" }>["fieldErrors"]>,
): string | undefined {
  if (state.status !== "error" || !state.fieldErrors) return undefined;
  return state.fieldErrors[field];
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-red-700" role="alert">
      {message}
    </p>
  );
}
