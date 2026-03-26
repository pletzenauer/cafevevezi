"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CAFE_INFO, IMAGES } from "@/lib/constants";
import { useDictionary } from "@/lib/DictionaryContext";

export default function Hero() {
  const dict = useDictionary();
  const ref = useRef<HTMLDivElement>(null);
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bg" />

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

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-cormorant)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide text-text"
        >
          {CAFE_INFO.name}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-24 h-px bg-accent my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl font-light tracking-[0.3em] uppercase text-text-muted"
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
