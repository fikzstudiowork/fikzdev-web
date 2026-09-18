import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface-raised/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight"
        >
          {site.name}
        </Link>
        <nav aria-label="Utama">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="underline-offset-4 transition-colors hover:text-ink hover:underline"
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
