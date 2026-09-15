'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutCTASection() {
  return (
    <section className="bg-white py-32 md:py-40 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Animated Blue Line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[2px] bg-[#0ea5e9] mx-auto mb-12"
        />

        {/* Main Quote */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-8"
        >
          &quot;We are not building a product.<br />
          We are building a right.&quot;
        </motion.h2>

        {/* Description Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14"
        >
          The right to see. The right to navigate. The right to participate. AI-Wear is how we deliver that right — one person at a time.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/careers" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5">
              Join Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          
          <Link href="/partner" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow hover:-translate-y-0.5">
              Partner With Us
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
