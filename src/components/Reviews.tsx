"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CAFE_INFO } from "@/lib/constants";
import { useDictionary } from "@/lib/DictionaryContext";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className ?? "w-4 h-4"}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  const dict = useDictionary();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id={dict.reviews.sectionId}
      className="relative py-24 md:py-36 bg-bg-light"
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
            {dict.reviews.subtitle}
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4">
            {dict.reviews.heading}
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-accent">
              {dict.reviews.rating}
            </span>
            <div>
              <div className="flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <span className="text-text-muted text-sm font-light">
                {dict.reviews.reviewCount}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.reviews.items.map(
            (
              review: { name: string; text: string; rating: number },
              idx: number,
            ) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-bg-card border border-border p-8 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex gap-0.5 text-accent mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-text-muted font-light leading-relaxed mb-6 text-sm md:text-base">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="text-text text-sm font-medium">
                  {review.name}
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={CAFE_INFO.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-accent text-accent text-sm font-medium tracking-widest uppercase hover:bg-accent hover:text-bg transition-colors duration-300"
          >
            {dict.reviews.googleCta}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
