"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { useDictionary } from "@/lib/DictionaryContext";

export default function About() {
  const dict = useDictionary();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id={dict.about.sectionId} className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={IMAGES.about}
              alt={dict.about.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
            <div className="absolute inset-4 border border-accent/20 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-light">
              {dict.about.subtitle}
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-8 leading-tight">
              {dict.about.heading}
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />

            {dict.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-text-muted font-light leading-relaxed mb-6 text-base md:text-lg"
              >
                {p}
              </p>
            ))}

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {dict.about.features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 px-5 py-3 bg-bg-card border border-border rounded-sm"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-text">
                      {feature.label}
                    </div>
                    <div className="text-xs text-text-muted">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
