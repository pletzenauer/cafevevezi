import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Josefin_Sans } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const localeMap: Record<Locale, string> = {
  cs: "cs_CZ",
  en: "en_US",
  de: "de_DE",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) {
    return {};
  }
  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    openGraph: {
      title: "Café Ve Věži",
      description: dict.meta.ogDescription,
      url: "https://cafevevezi.cz",
      siteName: "Café Ve Věži",
      locale: localeMap[lang as Locale],
      type: "website",
    },
  };
}

// JSON-LD structured data (static, trusted content only)
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Café Ve Věži",
  description:
    "Útulná kavárna v historickém centru Tachova. Výběrová káva, domácí zákusky, kulturní akce.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "K. H. Borovského 128",
    addressLocality: "Tachov",
    postalCode: "347 01",
    addressCountry: "CZ",
  },
  email: "info@cafevevezi.cz",
  url: "https://cafevevezi.cz",
  servesCuisine: ["Káva", "Zákusky", "Nápoje"],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/cafevevezi",
    "https://www.facebook.com/vevezicafe",
  ],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${outfit.variable} ${josefin.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
