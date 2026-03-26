import "server-only";
import type { Locale } from "@/lib/i18n";

const dictionaries = {
  cs: () => import("./dictionaries/cs.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  de: () => import("./dictionaries/de.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
