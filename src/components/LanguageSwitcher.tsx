"use client";

import { useLocale } from "@/lib/LocaleContext";

const languages = [
  { code: "cs", label: "CZ" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();

  function getLocalePath(targetLocale: string) {
    if (targetLocale === "cs") return "/";
    return `/${targetLocale}`;
  }

  return (
    <div className="flex items-center gap-2 ml-4 pl-4 border-l border-accent/30">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-2">
          <a
            href={getLocalePath(lang.code)}
            className={`text-lg font-bold tracking-widest uppercase transition-all duration-300 px-1.5 py-0.5 rounded ${
              locale === lang.code
                ? "text-accent lang-glow"
                : "text-text hover:text-accent hover:scale-110"
            }`}
          >
            {lang.label}
          </a>
          {i < languages.length - 1 && (
            <span className="text-accent/30 text-lg font-light">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
