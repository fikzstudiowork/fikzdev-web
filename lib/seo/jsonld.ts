import { site } from "@/content/site";

export function organizationJsonLd() {
  const baseUrl = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: baseUrl,
    email: site.email,
  };
}

export function webSiteJsonLd() {
  const baseUrl = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: baseUrl,
    inLanguage: "ms-MY",
  };
}
