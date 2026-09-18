import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Perkhidmatan",
  description:
    "WordPress, laman custom, SEO, penyelenggaraan, domain dan hosting terurus untuk bisnes Malaysia.",
  path: "/perkhidmatan",
});

export default function PerkhidmatanPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold">Perkhidmatan</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Halaman terperinci untuk setiap perkhidmatan sedang disediakan (Fasa
          2). Sementara itu, hubungi kami jika anda ingin semak keperluan
          projek.
        </p>
        <Link
          href="/hubungi"
          className="mt-6 inline-flex min-h-11 items-center text-accent hover:text-accent-hover"
        >
          Hubungi FikzDev →
        </Link>
      </Container>
    </Section>
  );
}
