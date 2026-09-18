import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homeServices } from "@/content/marketing";

function ServiceIcon({ index }: { index: number }) {
  return (
    <svg
      aria-hidden
      className="h-8 w-8 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path
        d={
          [
            "M8 12h8",
            "M12 8v8",
            "M8 8l8 8",
            "M16 8l-8 8",
            "M8 16h8M8 12h5",
            "M9 9h6v6H9z",
          ][index % 6]
        }
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ServiceGrid() {
  return (
    <Section className="bg-surface-raised">
      <Container>
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Perkhidmatan utama
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Enam perkhidmatan inti. Halaman terperinci akan dilengkapkan dalam
          fasa seterusnya; hubungi kami jika anda perlukan sesuatu sekarang.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service, i) => (
            <li key={service.slug}>
              <Link
                href={`/perkhidmatan/${service.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-raised"
              >
                <ServiceIcon index={i} />
                <h3 className="mt-4 font-semibold group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-4 text-sm font-medium text-accent">
                  Ketahui lebih →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
