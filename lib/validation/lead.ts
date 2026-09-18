import { z } from "zod";
import { serviceOptions } from "@/content/site";

const serviceValues = serviceOptions.map((s) => s.value) as [
  string,
  ...string[],
];

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Sila masukkan nama (minimum 2 aksara).")
    .max(120),
  email: z
    .string()
    .trim()
    .email("Sila masukkan emel yang sah.")
    .max(254),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  service: z.enum(serviceValues, {
    message: "Sila pilih perkhidmatan.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Sila terangkan keperluan anda (minimum 10 aksara).")
    .max(4000),
  consent: z.literal(true, {
    message: "Sila bersetuju sebelum hantar borang.",
  }),
  website: z.string().max(0).optional(),
  turnstileToken: z
    .string()
    .min(1, "Sila lengkapkan pengesahan keselamatan.")
    .max(2048),
  sourcePath: z.string().max(500).optional(),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;

export type LeadFormFieldErrors = Partial<
  Record<keyof LeadFormInput | "form", string>
>;
