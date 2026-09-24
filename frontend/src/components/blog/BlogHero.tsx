'use client';

import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogHero() {
  return (
    <section className="bg-white pt-32 pb-16 relative overflow-hidden flex flex-col items-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-blue-100"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
          BLOG
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight"
        >
          Ideas, Insights & Engineering
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Thoughts from the Trinetrum team on AI, accessibility, embedded systems, and the future of assistive technology.
        </motion.p>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full perspective-1000">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          whileHover={{ y: -10, rotateX: 2, rotateY: -2, scale: 1.01 }}
          className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row group cursor-pointer transition-all duration-500 hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] relative transform-gpu"
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>

          <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Circuit Board" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
          </div>
          
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-50/30 transition-colors duration-500">
            <div className="flex items-center gap-2 text-[#0ea5e9] text-xs font-bold tracking-wider uppercase mb-4 transform transition-transform duration-500 group-hover:translate-x-1">
              <Tag className="w-3.5 h-3.5" />
              <span>TECHNOLOGY</span>
              <span className="text-gray-300 mx-1">•</span>
              <span className="text-gray-500 font-medium">Featured</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#0ea5e9] transition-colors duration-300">
              Why Edge AI is the Future of Assistive Technology
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
              Cloud-based AI has powered the first generation of assistive devices. But the next generation — the one that actually works — must run entirely on-device.
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto border-t border-gray-50 pt-6 group-hover:border-blue-100 transition-colors duration-500">
              <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors duration-500">
                  PN
                </div>
                <span className="group-hover:text-slate-700 transition-colors">Priya Nair</span>
                <span className="text-gray-300">•</span>
                <span>7 min read</span>
                <span className="text-gray-300">•</span>
                <span>June 12, 2025</span>
              </div>
              
              <Link href="/blog/edge-ai-future" className="inline-flex items-center gap-2 text-[#0ea5e9] font-semibold hover:text-[#0284c7] transition-all duration-300 group-hover:translate-x-2 bg-blue-50 group-hover:bg-blue-100 px-4 py-2 rounded-full">
                Read Article <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
