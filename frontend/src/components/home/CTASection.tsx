'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-[#0052D4] via-[#4364F7] to-[#6FB1FC] rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center shadow-[0_20px_50px_-12px_rgba(67,100,247,0.5)] overflow-hidden"
        >
          {/* Animated decorative shapes */}
          <motion.div
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 -mr-32 -mt-32 w-[30rem] h-[30rem] bg-white/10 blur-[80px] rounded-full pointer-events-none mix-blend-overlay"
          />
          <motion.div
            animate={{
              rotate: [360, 270, 180, 90, 0],
              scale: [1, 1.5, 1, 1.5, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[30rem] h-[30rem] bg-[#00f2fe]/20 blur-[100px] rounded-full pointer-events-none mix-blend-overlay"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-inner"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              Early Access Now Open
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-3xl mx-auto leading-[1.1] text-white tracking-tight drop-shadow-md">
              Ready to Pre-Book AI-Wear?
            </h2>

            <p className="text-blue-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium opacity-90">
              Join our early access list. Be among the first to experience a new standard in assistive technology.
            </p>Carefully matched all the typography, colors, padding, and text provided in the Figma design.
            Exported and integrated the component directly into your src/app/ai-wear/page.tsx file.
            You can check it out live on your development server! Let me know if you want to tweak any of the spacing or colors.

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  Pre-Book Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.97 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl transition-all flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg hover:border-white/50"
              >
                <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
