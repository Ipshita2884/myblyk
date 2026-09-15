"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center max-w-4xl mx-auto mt-32 mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a202c] mb-6">
        Ready to Partner<br />on the Future?
      </h2>
      <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">
        Investors, NGOs, technology partners, and accessibility organizations — let&apos;s have a real conversation about what we can build together.
      </p>
      <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm flex items-center gap-2 group">
        Email Us Directly
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
