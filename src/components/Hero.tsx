"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { CAFE_INFO, IMAGES } from "@/lib/constants";
import { useDictionary } from "@/lib/DictionaryContext";

export default function Hero() {
  const dict = useDictionary();
  const ref = useRef<HTMLDivElement>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={IMAGES.hero}
          alt={dict.hero.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark top-left fade to hide watermark and improve nav readability */}
      <div className="absolute inset-x-0 top-0 h-[40%]" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)' }} />
      <div className="absolute top-0 left-0 w-[40%] h-[60%] md:hidden" style={{ background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)' }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-bg" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="vertical-line h-16 mb-8 origin-top"
        />

        {/* Logo with text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/logo-main.png"
            alt="Café Ve Věži Logo"
            width={861}
            height={654}
            className="w-72 sm:w-80 md:w-96 lg:w-[480px] h-auto"
          />
        </motion.div>

        {/* Translation Whisper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setShowTranslation((v) => !v); }}
            className="relative z-50 whisper-pulse flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors cursor-pointer group"
            aria-label={dict.hero.translationHint}
          >
            {/* Tower icon SVG */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-accent"
            >
              <path
                d="M12 2L9 5V8H7V5L4 2H2V22H10V17C10 15.9 10.9 15 12 15C13.1 15 14 15.9 14 17V22H22V2H20L17 5V8H15V5L12 2Z"
                fill="currentColor"
                opacity="0.8"
              />
            </svg>
            <span className="text-xs tracking-wider text-accent/70 group-hover:text-accent transition-colors">
              ?
            </span>
          </button>

          <AnimatePresence>
            {showTranslation && (
              <>
                {/* Backdrop to close on click outside */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                  style={{ zIndex: 9998 }}
                  onClick={() => setShowTranslation(false)}
                />
                {/* Tooltip bubble — fixed center to avoid overflow-hidden clipping */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg backdrop-blur-xl border border-accent/20 px-10 py-8 shadow-2xl shadow-black/60 min-w-[280px]"
                  style={{ zIndex: 9999 }}
                >
                  {/* Decorative top line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

                  <p className="text-xs text-accent/70 mb-6 text-center font-medium tracking-[0.25em] uppercase">
                    {dict.hero.translationHint}
                  </p>
                  <div className="space-y-4">
                    {dict.hero.translations.map(
                      (t: { flag: string; text: string }, i: number) => (
                        <div
                          key={i}
                          className="flex items-center justify-center"
                        >
                          <span className="italic font-serif text-xl tracking-wide text-text/90">
                            {t.text}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* Decorative bottom line */}
                  <div className="mt-6 w-8 h-px bg-accent/30 mx-auto" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-24 h-px bg-accent my-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-[0.3em] uppercase text-text"
        >
          {dict.hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <a
            href={dict.hero.ctaMenuHref}
            className="px-8 py-3.5 bg-accent text-bg text-sm font-medium tracking-widest uppercase hover:bg-accent-light transition-colors duration-300"
          >
            {dict.hero.ctaMenu}
          </a>
          <a
            href={dict.hero.ctaReserveHref}
            className="px-8 py-3.5 border border-text/30 text-text text-sm font-medium tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300"
          >
            {dict.hero.ctaReserve}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border border-text/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
