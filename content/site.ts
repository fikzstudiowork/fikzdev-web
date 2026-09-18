export const site = {
  name: "FikzDev",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fikzdev.com",
  locale: "ms-MY",
  email: "fikzstudiowork@gmail.com",
  description:
    "Pembangunan laman web, SEO, hosting dan penyelenggaraan untuk bisnes di Malaysia.",
} as const;

export const navLinks = [
  { href: "/perkhidmatan", label: "Perkhidmatan" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/tentang", label: "Tentang" },
  { href: "/hubungi", label: "Hubungi" },
] as const;

export const serviceOptions = [
  { value: "wordpress-elementor", label: "WordPress & Elementor" },
  { value: "laman-custom", label: "Laman web custom" },
  { value: "seo", label: "SEO" },
  { value: "penyelenggaraan", label: "Penyelenggaraan laman web" },
  { value: "domain", label: "Domain" },
  { value: "hosting", label: "Hosting terurus" },
  { value: "lain", label: "Lain-lain / belum pasti" },
] as const;
