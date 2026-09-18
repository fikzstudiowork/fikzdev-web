import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const knownSlugs = new Set(["kos-laman-web-malaysia"]);

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [...knownSlugs].map((slug) => ({ slug }));
}

export default async function PanduanPage({ params }: Props) {
  const { slug } = await params;
  if (!knownSlugs.has(slug)) notFound();

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold">Kos laman web Malaysia</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Panduan penuh (migrate dari artikel WordPress) akan disiarkan dalam
          Fasa 4. Untuk anggaran cepat, hubungi kami dengan ringkasan projek.
        </p>
        <Link href="/hubungi" className="mt-6 inline-block text-accent">
          Hubungi
        </Link>
      </Container>
    </Section>
  );
}
