"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FaqCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-20 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-3">
        Didn&apos;t find your answer?
      </h2>
      <p className="text-[15px] text-slate-600 mb-8">
        Our team is happy to answer any additional questions.
      </p>
      <Link 
        href="/contact"
        className="inline-block bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-sm"
      >
        Contact Us
      </Link>
    </motion.div>
  );
}
