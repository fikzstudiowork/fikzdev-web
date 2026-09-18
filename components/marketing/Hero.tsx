import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { heroTags, principles } from "@/content/marketing";

export function Hero() {
  return (
    <section className="hero-grain border-b border-border pt-16 pb-14 sm:pt-24 sm:pb-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="animate-fade-up text-sm font-medium tracking-wide text-accent uppercase">
              FikzDev · Malaysia
            </p>
            <h1 className="animate-fade-up animate-delay-1 font-display mt-4 max-w-xl text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">
              Laman web yang bantu bisnes Malaysia dapat pelanggan baharu.
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-muted">
              FikzDev bina laman WordPress atau custom, urus SEO, hosting dan
              penyelenggaraan. Kami terangkan pilihan dan kos dengan jujur, tanpa
              janji ranking garanti.
            </p>
            <div className="animate-fade-up animate-delay-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="/hubungi"
                className="inline-flex min-h-11 items-center rounded-md bg-cta px-5 py-2.5 text-sm font-medium text-cta-foreground transition-colors hover:bg-cta-hover"
              >
                Hubungi untuk semak keperluan
              </Link>
              <Link
                href="/perkhidmatan"
                className="inline-flex min-h-11 items-center rounded-md border border-border bg-surface-raised px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink/20"
              >
                Lihat perkhidmatan
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-surface-raised/80 px-3 py-1 text-xs font-medium text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-xl border border-border bg-surface-raised p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-highlight uppercase">
              Prinsip kerja
            </p>
            <ul className="mt-4 space-y-4">
              {principles.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
