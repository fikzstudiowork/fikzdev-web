import { Hero } from "@/components/marketing/Hero";
import { ServiceGrid } from "@/components/marketing/ServiceGrid";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { CTABand } from "@/components/marketing/CTABand";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Laman web & SEO untuk bisnes Malaysia",
  description:
    "FikzDev bina laman WordPress atau custom, SEO, hosting dan penyelenggaraan. Copy jujur, tanpa janji ranking garanti.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <ProcessSteps />
      <CTABand />
    </>
  );
}
