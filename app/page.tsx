import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Laman web & SEO untuk bisnes Malaysia",
  description:
    "FikzDev bina laman WordPress atau custom, SEO, hosting dan penyelenggaraan. Copy jujur, tanpa janji ranking garanti.",
  path: "/",
});

const services = [
  "WordPress & Elementor",
  "Laman web custom",
  "SEO",
  "Penyelenggaraan",
  "Domain",
  "Hosting terurus",
];

export default function HomePage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20">
        <Container>
          <p className="mb-3 text-sm font-medium text-accent">FikzDev</p>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Laman web yang bantu bisnes Malaysia dapat pelanggan baharu.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            FikzDev bina laman WordPress atau custom, urus SEO, hosting dan
            penyelenggaraan. Kami terangkan pilihan dan kos dengan jujur, tanpa
            janji ranking garanti.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/hubungi"
              className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover"
            >
              Hubungi untuk semak keperluan
            </Link>
            <Link
              href="/perkhidmatan"
              className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium hover:border-slate-400"
            >
              Lihat perkhidmatan
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-slate-200/80 bg-white">
        <Container>
          <h2 className="text-xl font-semibold">Perkhidmatan utama</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Butiran setiap perkhidmatan akan dilengkapkan dalam fasa seterusnya.
            Jika anda perlukan sesuatu sekarang, terus hubungi kami.
          </p>
        </Container>
      </Section>
    </>
  );
}
