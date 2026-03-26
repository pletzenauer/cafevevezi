"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CAFE_INFO } from "@/lib/constants";
import { useDictionary } from "@/lib/DictionaryContext";

export default function WhatsAppButton() {
  const dict = useDictionary();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      href={`mailto:${CAFE_INFO.email}?subject=${encodeURIComponent(dict.emailButton.subject)}`}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20 hover:bg-accent-light hover:scale-110 transition-all duration-300"
      aria-label={dict.emailButton.ariaLabel}
    >
      <svg
        className="w-6 h-6 text-bg"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    </motion.a>
  );
}
