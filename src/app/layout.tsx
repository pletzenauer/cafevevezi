import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
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

export const metadata: Metadata = {
  title: "Café Ve Věži | Kavárna v Tachově",
  description:
    "Útulná kavárna v historickém centru Tachova. Výběrová káva, domácí zákusky, kulturní akce a soukromé oslavy. Navštivte nás na K. H. Borovského 128.",
  keywords: [
    "kavárna",
    "Tachov",
    "káva",
    "zákusky",
    "café",
    "KineDok",
    "soukromé akce",
  ],
  openGraph: {
    title: "Café Ve Věži",
    description:
      "Útulná kavárna v historickém centru Tachova. Výběrová káva, domácí zákusky, kulturní akce.",
    url: "https://cafevevezi.cz",
    siteName: "Café Ve Věži",
    locale: "cs_CZ",
    type: "website",
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${cormorant.variable} ${outfit.variable} antialiased`}
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
