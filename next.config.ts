import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/hubungi", permanent: true },
      { source: "/contact/", destination: "/hubungi", permanent: true },
      { source: "/about-us", destination: "/tentang", permanent: true },
      { source: "/about-us/", destination: "/tentang", permanent: true },
      { source: "/services", destination: "/perkhidmatan", permanent: true },
      { source: "/services/", destination: "/perkhidmatan", permanent: true },
      {
        source: "/web-design",
        destination: "/perkhidmatan/laman-web-custom",
        permanent: true,
      },
      {
        source: "/web-design/",
        destination: "/perkhidmatan/laman-web-custom",
        permanent: true,
      },
      {
        source: "/seo-services",
        destination: "/perkhidmatan/seo",
        permanent: true,
      },
      {
        source: "/seo-services/",
        destination: "/perkhidmatan/seo",
        permanent: true,
      },
      {
        source: "/website-maintenance",
        destination: "/perkhidmatan/penyelenggaraan",
        permanent: true,
      },
      {
        source: "/website-maintenance/",
        destination: "/perkhidmatan/penyelenggaraan",
        permanent: true,
      },
      {
        source: "/website-cost-malaysia",
        destination: "/panduan/kos-laman-web-malaysia",
        permanent: true,
      },
      {
        source: "/website-cost-malaysia/",
        destination: "/panduan/kos-laman-web-malaysia",
        permanent: true,
      },
      {
        source: "/paid-media",
        destination: "/perkhidmatan/seo",
        permanent: true,
      },
      {
        source: "/paid-media/",
        destination: "/perkhidmatan/seo",
        permanent: true,
      },
      {
        source: "/woocommerce-shopify-website-malaysia",
        destination: "/perkhidmatan/laman-web-custom",
        permanent: true,
      },
      {
        source: "/woocommerce-shopify-website-malaysia/",
        destination: "/perkhidmatan/laman-web-custom",
        permanent: true,
      },
      {
        source: "/web-secure",
        destination: "/perkhidmatan/penyelenggaraan",
        permanent: true,
      },
      {
        source: "/web-secure/",
        destination: "/perkhidmatan/penyelenggaraan",
        permanent: true,
      },
      { source: "/shop", destination: "/", permanent: true },
      { source: "/shop/", destination: "/", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
      { source: "/cart/", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },
      { source: "/checkout/", destination: "/", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      { source: "/my-account/", destination: "/", permanent: true },
      { source: "/ai-store", destination: "/", permanent: true },
      { source: "/ai-store/", destination: "/", permanent: true },
      { source: "/ai-checkout", destination: "/", permanent: true },
      { source: "/ai-checkout/", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
