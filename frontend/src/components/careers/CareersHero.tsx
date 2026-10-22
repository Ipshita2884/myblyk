'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CareersHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate consistent particle positions
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    left: ((i * 137.5) % 100), // Deterministic pseudo-random positions
    top: ((i * 73.3) % 100),
    duration: 3 + ((i * 0.2) % 2),
    delay: ((i * 0.15) % 3),
  }));
  return (
    <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh] bg-transparent">

      {/* Premium Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-[#0ea5e9]/20 to-purple-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-indigo-500/20 to-[#0ea5e9]/20 rounded-full blur-[120px]"
        />
        
        {/* Animated glowing lines */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              x: [0, 100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[30%] left-0 w-[2px] h-[200px] bg-gradient-to-b from-transparent via-[#0ea5e9]/60 to-transparent"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-[40%] right-[20%] w-[2px] h-[150px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
          />
          <motion.div
            animate={{
              x: [0, 80, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-[30%] left-[30%] w-[2px] h-[180px] bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent"
          />
        </div>

        {/* Floating particles */}
        {isMounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-[#0ea5e9]/40 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f0f7ff] to-[#e0e7ff] text-[#0ea5e9] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-10 shadow-lg shadow-[#0ea5e9]/10 border border-blue-100/50"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-2 h-2 rounded-full bg-[#0ea5e9]"
          />
          CAREERS AT MYBLYK
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-slate-900 tracking-tight"
        >
          Build Technology<br />
          That Solves Real Problems
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12"
        >
          Join an early-stage DeepTech team building AI-powered assistive technology for more accessible and independent everyday experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={() => {
              window.location.hash = "open-positions";
              window.dispatchEvent(new Event('hashchange'));
            }}
            className="group relative bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-xl shadow-[#0ea5e9]/30 hover:shadow-[#0ea5e9]/50 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative z-10">View Open Positions</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </button>
        </motion.div>

        {/* Decorative sparkles */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[20%] right-[10%] hidden md:block"
        >
          <Sparkles className="w-8 h-8 text-[#0ea5e9]/30" />
        </motion.div>
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          className="absolute bottom-[25%] left-[8%] hidden md:block"
        >
          <Sparkles className="w-6 h-6 text-purple-500/30" />
        </motion.div>
      </div>
    </section>
  );
}
