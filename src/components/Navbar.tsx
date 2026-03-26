"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDictionary } from "@/lib/DictionaryContext";
import { CAFE_INFO } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const dict = useDictionary();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          <a
            href="#"
            className="flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light tracking-wide text-text hover:text-accent transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Tower logo SVG */}
            <svg
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
              className="text-accent"
              aria-hidden="true"
            >
              <rect x="7" y="0" width="6" height="4" fill="currentColor" />
              <rect x="9" y="4" width="2" height="3" fill="currentColor" />
              <rect x="4" y="7" width="12" height="2" fill="currentColor" />
              <rect x="5" y="9" width="10" height="15" fill="currentColor" />
              <rect x="7" y="12" width="2" height="3" fill="currentColor" opacity="0.4" />
              <rect x="11" y="12" width="2" height="3" fill="currentColor" opacity="0.4" />
              <rect x="8" y="19" width="4" height="5" fill="currentColor" opacity="0.4" />
              <rect x="3" y="24" width="14" height="2" fill="currentColor" />
              <rect x="1" y="26" width="18" height="2" fill="currentColor" />
            </svg>
            {CAFE_INFO.name}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {dict.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-widest uppercase text-text-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-px bg-text transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`w-6 h-px bg-text transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {dict.nav.links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-wider text-text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: dict.nav.links.length * 0.08 }}
              >
                <LanguageSwitcher />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
