"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-[#0ea5e9] text-xs font-bold tracking-widest uppercase mb-6"
      >
        CONTACT US
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6"
      >
        Let&apos;s Start a Conversation
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed"
      >
        Whether you&apos;re an investor, accessibility organization, potential partner, or future user — we want to hear from you.
      </motion.p>
    </div>
  );
}
