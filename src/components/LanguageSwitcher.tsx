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
            className={`text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
              locale === lang.code
                ? "text-accent"
                : "text-text-muted hover:text-accent"
            }`}
          >
            {lang.label}
          </a>
          {i < languages.length - 1 && (
            <span className="text-text-dim text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
