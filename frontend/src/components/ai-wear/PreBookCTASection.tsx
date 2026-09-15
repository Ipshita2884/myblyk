'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PreBookCTASection() {
  return (
    <section className="bg-white py-24 pb-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="relative bg-gradient-to-br from-[#0052D4]/80 via-[#4364F7]/80 to-[#6FB1FC]/80 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center shadow-[0_0_50px_rgba(67,100,247,0.3)] hover:shadow-[0_0_80px_rgba(67,100,247,0.6)] border border-blue-400/30 overflow-hidden"
        >
          {/* Animated decorative shapes */}
          <motion.div 
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 -mr-32 -mt-32 w-[30rem] h-[30rem] bg-[#0ea5e9]/40 blur-[80px] rounded-full pointer-events-none mix-blend-overlay" 
          />
          <motion.div 
            animate={{ 
              rotate: [360, 270, 180, 90, 0],
              scale: [1, 1.5, 1, 1.5, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[30rem] h-[30rem] bg-indigo-500/40 blur-[100px] rounded-full pointer-events-none mix-blend-overlay" 
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-inner"
            >
              <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
              Early Access Now Open
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-3xl mx-auto leading-[1.1] text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              Ready to Pre-Book AI-Wear?
            </h2>
            
            <p className="text-blue-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium opacity-90 drop-shadow-md">
              Join our early access list. Be among the first to experience a new standard in assistive technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Link href="#prebook" className="w-full sm:w-auto block">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative bg-[#020817] text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-3 w-full justify-center overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-slate-700 hover:border-[#0ea5e9] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0ea5e9] transition-colors">
                    Pre-Book Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              </Link>
              
              <Link href="#contact" className="w-full sm:w-auto block">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3 w-full justify-center shadow-lg hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
