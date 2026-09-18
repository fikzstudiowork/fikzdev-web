import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Projek terpilih FikzDev: masalah pelanggan, pendekatan dan hasil yang boleh dikongsi.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Projek terpilih akan dipaparkan di sini dengan fokus masalah, apa yang
          kami buat, dan hasil (jika pelanggan benarkan). Fasa 3.
        </p>
        <Link href="/hubungi" className="mt-6 inline-block text-accent">
          Semak keperluan projek anda
        </Link>
      </Container>
    </Section>
  );
}
