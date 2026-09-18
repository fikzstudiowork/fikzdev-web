import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const knownSlugs = new Set([
  "pembangunan-wordpress-elementor",
  "laman-web-custom",
  "seo",
  "penyelenggaraan",
  "domain",
  "hosting-terurus",
]);

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [...knownSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!knownSlugs.has(slug)) return {};
  return {
    title: "Perkhidmatan",
    description: "Butiran perkhidmatan FikzDev (dalam penyediaan).",
  };
}

export default async function PerkhidmatanSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!knownSlugs.has(slug)) notFound();

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold capitalize">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Halaman perkhidmatan penuh akan disiarkan dalam Fasa 2. Hubungi kami
          untuk penerangan terkini.
        </p>
        <Link href="/hubungi" className="mt-6 inline-block text-accent">
          Hubungi
        </Link>
      </Container>
    </Section>
  );
}
