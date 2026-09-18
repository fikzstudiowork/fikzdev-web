import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo/jsonld";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-app",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-app",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body
        className={`${fraunces.variable} ${plusJakarta.variable} flex min-h-screen flex-col`}
      >
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <SkipLink />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
