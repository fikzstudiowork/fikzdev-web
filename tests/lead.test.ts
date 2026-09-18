import { describe, expect, it } from "vitest";
import { leadFormSchema } from "@/lib/validation/lead";

const valid = {
  name: "Ali Ahmad",
  email: "ali@example.com",
  service: "seo" as const,
  message: "Saya perlukan semakan SEO untuk laman syarikat.",
  consent: true as const,
  turnstileToken: "test-token",
};

describe("leadFormSchema", () => {
  it("accepts valid payload", () => {
    const result = leadFormSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejects short message", () => {
    const result = leadFormSchema.safeParse({ ...valid, message: "pendek" });
    expect(result.success).toBe(false);
  });

  it("rejects missing consent", () => {
    const result = leadFormSchema.safeParse({ ...valid, consent: false });
    expect(result.success).toBe(false);
  });
});
