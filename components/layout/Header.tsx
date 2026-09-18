import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-surface/95 backdrop-blur-sm">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Utama">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted sm:gap-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
