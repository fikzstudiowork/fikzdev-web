import type { Metadata } from "next";
import { site } from "@/content/site";

const baseUrl = site.url.replace(/\/$/, "");

export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "ms_MY",
      type: "website",
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} — Laman web & SEO Malaysia`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    locale: "ms_MY",
    siteName: site.name,
    type: "website",
  },
};
