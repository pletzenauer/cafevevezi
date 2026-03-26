"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CAFE_INFO } from "@/lib/constants";
import { useDictionary } from "@/lib/DictionaryContext";

export default function Contact() {
  const dict = useDictionary();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id={dict.contact.sectionId} className="relative py-24 md:py-36">
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
            {dict.contact.subtitle}
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4">
            {dict.contact.heading}
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info + hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Address */}
            <div className="mb-10">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-4 text-accent">
                {dict.contact.addressLabel}
              </h3>
              <p className="text-text-muted font-light leading-relaxed">
                {CAFE_INFO.address}
                <br />
                {CAFE_INFO.city}
              </p>
            </div>

            {/* Email */}
            <div className="mb-10">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-4 text-accent">
                {dict.contact.emailLabel}
              </h3>
              <a
                href={`mailto:${CAFE_INFO.email}`}
                className="text-text-muted font-light hover:text-accent transition-colors"
              >
                {CAFE_INFO.email}
              </a>
            </div>

            {/* Social */}
            <div className="mb-10">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-4 text-accent">
                {dict.contact.socialLabel}
              </h3>
              <div className="flex gap-6">
                <a
                  href={CAFE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors font-light"
                >
                  Instagram
                </a>
                <a
                  href={CAFE_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors font-light"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-4 text-accent">
                {dict.contact.hoursLabel}
              </h3>
              <div className="space-y-2">
                {dict.contact.openingHours.map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between max-w-xs text-text-muted font-light"
                  >
                    <span>{row.day}</span>
                    <span className={row.closed ? "text-text-dim" : ""}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map + Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            {/* Google Maps */}
            <div className="relative aspect-video bg-bg-card border border-border overflow-hidden">
              <iframe
                src={CAFE_INFO.mapEmbed}
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={dict.contact.mapTitle}
              />
            </div>

            {/* Contact form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-bg-card border border-border p-8 space-y-5"
            >
              <div>
                <label className="text-sm text-text-muted font-light tracking-wide block mb-2">
                  {dict.contact.formLabels.name}
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-2 text-text font-light focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-text-muted font-light tracking-wide block mb-2">
                  {dict.contact.formLabels.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border py-2 text-text font-light focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-text-muted font-light tracking-wide block mb-2">
                  {dict.contact.formLabels.message}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-2 text-text font-light focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-accent text-bg text-sm font-medium tracking-widest uppercase hover:bg-accent-light transition-colors duration-300"
              >
                {dict.contact.formLabels.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
