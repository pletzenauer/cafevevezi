"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { EVENTS, IMAGES } from "@/lib/constants";

export default function Events() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="akce" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-light">
            Zážitky
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4">
            {EVENTS.heading}
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        {/* KineDok */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎬</span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light">
                {EVENTS.kinedok.title}
              </h3>
            </div>
            <p className="text-text-muted font-light leading-relaxed mb-6 text-base md:text-lg">
              {EVENTS.kinedok.description}
            </p>
            <p className="text-accent text-sm tracking-wide">
              {EVENTS.kinedok.cta}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-video overflow-hidden"
          >
            <Image
              src={IMAGES.events}
              alt="Promítání v kavárně"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg/30 to-transparent" />
            <div className="absolute inset-3 border border-accent/15 pointer-events-none" />
          </motion.div>
        </div>

        {/* Private events */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-bg-card border border-border p-10 md:p-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🎉</span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light">
                  {EVENTS.privateEvents.title}
                </h3>
              </div>
              <p className="text-text-muted font-light leading-relaxed text-base md:text-lg">
                {EVENTS.privateEvents.description}
              </p>
            </div>

            <div>
              <ul className="space-y-4 mb-8">
                {EVENTS.privateEvents.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-text font-light"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="inline-block px-8 py-3.5 bg-accent text-bg text-sm font-medium tracking-widest uppercase hover:bg-accent-light transition-colors duration-300"
              >
                {EVENTS.privateEvents.cta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
