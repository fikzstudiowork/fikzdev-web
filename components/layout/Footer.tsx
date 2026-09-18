import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/content/site";
import { homeServices } from "@/content/marketing";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface py-12 text-sm">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="mt-2 max-w-xs leading-relaxed text-muted">
              Laman web, SEO, hosting dan penyelenggaraan untuk bisnes di
              Malaysia.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink">Halaman</p>
            <ul className="mt-3 space-y-2 text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Perkhidmatan</p>
            <ul className="mt-3 space-y-2 text-muted">
              {homeServices.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/perkhidmatan/${s.slug}`}
                    className="hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Hubungi</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block text-muted hover:text-accent"
            >
              {site.email}
            </a>
            <nav aria-label="Undang-undang" className="mt-6">
              <ul className="flex flex-col gap-2 text-muted">
                <li>
                  <Link href="/polisi-privasi" className="hover:text-accent">
                    Polisi privasi
                  </Link>
                </li>
                <li>
                  <Link href="/terma" className="hover:text-accent">
                    Terma
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-muted">
          © {year} {site.name}. Semua hak cipta terpelihara.
        </p>
      </Container>
    </footer>
  );
}
