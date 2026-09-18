import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { pageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Hubungi",
  description:
    "Hantar ringkasan projek anda. FikzDev akan balas selepas semak keperluan asas.",
  path: "/hubungi",
});

export default function HubungiPage() {
  const baseUrl = site.url.replace(/\/$/, "");
  return (
    <Section className="bg-surface">
      <Container className="max-w-xl">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Hubungi FikzDev",
            url: `${baseUrl}/hubungi`,
            inLanguage: "ms-MY",
          }}
        />
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Hubungi
        </h1>
        <p className="mt-3 leading-relaxed text-muted">
          Ceritakan ringkas tentang bisnes dan apa yang anda perlukan. Kami akan
          hubungi anda selepas semak mesej.
        </p>
        <div className="mt-8 rounded-xl border border-border bg-surface-raised p-6 shadow-sm sm:p-8">
          <ContactForm sourcePath="/hubungi" />
        </div>
      </Container>
    </Section>
  );
}
