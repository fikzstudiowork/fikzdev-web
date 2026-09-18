import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/80 py-10 text-sm text-muted">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. Semua hak cipta terpelihara.
        </p>
        <p>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-ink transition-colors"
          >
            {site.email}
          </a>
        </p>
        <nav aria-label="Undang-undang">
          <ul className="flex gap-4">
            <li>
              <Link href="/polisi-privasi" className="hover:text-ink">
                Polisi privasi
              </Link>
            </li>
            <li>
              <Link href="/terma" className="hover:text-ink">
                Terma
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
