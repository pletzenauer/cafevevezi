import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";
import { DictionaryProvider } from "@/lib/DictionaryContext";
import { LocaleProvider } from "@/lib/LocaleContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Reconstruction from "@/components/Reconstruction";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(lang as Locale);

  return (
    <LocaleProvider locale={lang as Locale}>
      <DictionaryProvider dictionary={dictionary}>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Events />
        <Reconstruction />
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </DictionaryProvider>
    </LocaleProvider>
  );
}
