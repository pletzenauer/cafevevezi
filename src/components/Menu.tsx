"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useDictionary } from "@/lib/DictionaryContext";

export default function Menu() {
  const dict = useDictionary();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id={dict.menu.sectionId} className="relative py-24 md:py-36 bg-bg-light">
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
            {dict.menu.subtitle}
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-6">
            {dict.menu.heading}
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-4" />
          <p className="text-text-muted font-light">{dict.menu.description}</p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.menu.categories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: catIdx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-bg-card border border-border p-8 hover:border-accent/30 transition-all duration-500"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light mb-6 text-text group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <div className="w-8 h-px bg-border group-hover:bg-accent group-hover:w-12 transition-all duration-500 mb-6" />
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="text-text font-light text-sm">
                      {item.name}
                    </div>
                    <div className="text-text-dim text-xs mt-0.5">
                      {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
