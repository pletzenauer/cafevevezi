"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useDictionary } from "@/lib/DictionaryContext";

function CompareSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
  alt,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
}) {
  const [position, setPosition] = useState(50);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clientX =
        "touches" in e ? e.touches[0].clientX : e.clientX;
      const x = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.max(0, Math.min(100, x)));
    },
    []
  );

  return (
    <div
      className="relative w-full aspect-[3/4] overflow-hidden cursor-col-resize select-none group"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMove(e);
      }}
      onMouseDown={handleMove}
      onTouchMove={handleMove}
      onTouchStart={handleMove}
    >
      {/* After image (full, background) */}
      <Image
        src={after}
        alt={`${alt} - ${afterLabel}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${alt} - ${beforeLabel}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-bg"
          >
            <path
              d="M6 10L2 10M2 10L5 7M2 10L5 13M14 10L18 10M18 10L15 7M18 10L15 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 px-2.5 py-1 text-xs tracking-widest uppercase bg-black/60 backdrop-blur-sm text-white/90 z-10">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 px-2.5 py-1 text-xs tracking-widest uppercase bg-black/60 backdrop-blur-sm text-white/90 z-10">
        {afterLabel}
      </span>
    </div>
  );
}

export default function Reconstruction() {
  const dict = useDictionary();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id={dict.reconstruction.sectionId}
      className="relative py-24 md:py-36 bg-bg"
    >
      <div className="absolute inset-0 noise-overlay" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-light">
            {dict.reconstruction.subtitle}
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4">
            {dict.reconstruction.heading}
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
          <p className="text-text-muted font-light mt-6 max-w-2xl mx-auto">
            {dict.reconstruction.description}
          </p>
        </motion.div>

        {/* Compare grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {IMAGES.reconstruction.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="overflow-hidden"
            >
              <CompareSlider
                before={pair.before}
                after={pair.after}
                beforeLabel={dict.reconstruction.beforeLabel}
                afterLabel={dict.reconstruction.afterLabel}
                alt={`${dict.reconstruction.heading} ${i + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
