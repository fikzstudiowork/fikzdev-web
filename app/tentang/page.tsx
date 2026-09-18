import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Tentang",
  description: "Tentang FikzDev dan cara kami bekerja dengan pelanggan di Malaysia.",
  path: "/tentang",
});

export default function TentangPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold">Tentang FikzDev</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Kandungan tentang kami akan dilengkapkan dalam Fasa 3. Jika anda mahu
          berbincang tentang projek, gunakan borang hubungi.
        </p>
        <Link href="/hubungi" className="mt-6 inline-block text-accent">
          Hubungi kami
        </Link>
      </Container>
    </Section>
  );
}
