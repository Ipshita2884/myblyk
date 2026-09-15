'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CareersHero() {
  return (
    <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh] bg-transparent">

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-10 shadow-sm border border-blue-100"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
          CAREERS AT TRINETRUM
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-slate-900 tracking-tight"
        >
          Build Technology<br />
          <span className="text-[#0ea5e9]">That Changes Lives</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12"
        >
          Join a small, highly capable team working on one of the most meaningful problems in deep technology. We are building assistive AI that restores independence to millions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="#open-positions">
            <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-md shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5">
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
