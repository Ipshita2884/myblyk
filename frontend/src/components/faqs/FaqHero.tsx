"use client";
import { motion } from "framer-motion";

export default function FaqHero() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-[#0ea5e9] text-xs font-bold tracking-widest uppercase mb-6"
      >
        FAQS
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[15px] md:text-base text-slate-600 max-w-xl leading-relaxed"
      >
        Everything you need to know about Trinetrum Ventures and AI-Wear.
      </motion.p>
    </div>
  );
}
