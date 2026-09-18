import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTABand() {
  return (
    <section className="bg-cta py-14 text-cta-foreground sm:py-16">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ada projek dalam fikiran?
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-cta-foreground/80">
            Hantar ringkasan melalui borang. Kami balas selepas semak keperluan
            asas, bukan template automatik.
          </p>
        </div>
        <Link
          href="/hubungi"
          className="inline-flex min-h-11 shrink-0 items-center rounded-md bg-surface-raised px-6 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Hubungi FikzDev
        </Link>
      </Container>
    </section>
  );
}
