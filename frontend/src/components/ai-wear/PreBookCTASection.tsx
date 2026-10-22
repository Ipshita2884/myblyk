'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PreBookCTASection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative py-48 md:py-56 overflow-hidden bg-slate-900 flex items-center justify-center min-h-[95vh] perspective-[2000px]">
      
      {/* Top Blurry Fade to blend seamlessly with the white section above */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-30 pointer-events-none" />

      {/* Bottom transition fade into footer */}
      <div className="absolute bottom-0 left-0 w-full h-40 md:h-48 bg-gradient-to-t from-[#565F70] via-[#565F70]/90 to-transparent z-30 pointer-events-none" />

      {/* Cool Image Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10" />
        <img 
          src="/imgbg.png" 
          alt="Abstract 3D Background" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Subtle grid pattern overlay over image */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px] z-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full" style={{ perspective: 1500 }}>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white/20 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] p-10 md:p-16 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] flex flex-col items-center"
        >
          {/* Glass reflection highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />

          {/* 3D Inner Content Container */}
          <motion.div style={{ transform: "translateZ(60px)" }} className="relative z-10 w-full flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              EARLY ACCESS OPEN
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 max-w-3xl mx-auto leading-[1.15] text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              Ready to Experience MyBlyk?
            </h2>

            <p className="text-blue-50/90 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-medium">
              MyBlyk AI Glasses are being built to bring practical AI assistance into everyday environments. Pre-book for ₹999 and join the early access journey as we work towards product launch.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#prebook">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-[#020817] text-white font-extrabold px-10 py-5 rounded-2xl flex items-center gap-3 w-full sm:w-auto justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-700 hover:border-[#0ea5e9] transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0ea5e9] transition-colors">
                    Pre-Book for ₹999
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg hover:border-white/40"
                >
                  <Mail className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
