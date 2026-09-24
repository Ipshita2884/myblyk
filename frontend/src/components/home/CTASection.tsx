'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

export default function CTASection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotate based on mouse position for a 3D tilt effect
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
    <section className="relative py-32 md:py-40 overflow-hidden bg-slate-900 flex items-center justify-center min-h-[80vh] perspective-[2000px]">
      
      {/* Vibrant Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 rounded-full blur-[120px] opacity-50 mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-l from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-[120px] opacity-60 mix-blend-screen"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full" style={{ perspective: 1500 }}>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-12 md:p-24 text-center shadow-[0_8px_32px_0_rgba(31,38,135,0.4)] flex flex-col items-center"
        >
          {/* Glass reflection highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[3rem] pointer-events-none" />

          {/* 3D Inner Content Container */}
          <motion.div style={{ transform: "translateZ(60px)" }} className="relative z-10 w-full">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-10 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Early Access Now Open
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 max-w-4xl mx-auto leading-[1.1] text-white tracking-tight drop-shadow-xl">
              Ready to Pre-Book <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 drop-shadow-sm">AI-Wear?</span>
            </h2>

            <p className="text-blue-50/90 text-lg md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
              Join our early access list. Be among the first to experience a new standard in assistive technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white text-slate-900 font-extrabold px-10 py-5 rounded-2xl flex items-center gap-3 w-full sm:w-auto justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Pre-Book Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg hover:border-white/40"
              >
                <Mail className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
