'use client';

import { motion } from 'framer-motion';
import { Heart, Cpu, Zap, Globe, Sparkles } from 'lucide-react';

const reasons = [
  {
    title: "Meaningful Work",
    description: "Contribute to products designed to address real-world accessibility challenges through technology.",
    icon: <Heart className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Hands-On Learning",
    description: "Work on practical tasks, projects and workflows instead of learning only through theory.",
    icon: <Cpu className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Direct Exposure",
    description: "Work closely with the founding team and learn how an early-stage Deep-Tech company operates.",
    icon: <Zap className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Build & Grow",
    description: "Take ownership, experiment, learn from feedback and grow with the company as we build.",
    icon: <Globe className="w-5 h-5 text-[#0ea5e9]" />
  }
];

export default function WhyJoinUs() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-[#0ea5e9]/10 to-purple-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tl from-indigo-500/10 to-[#0ea5e9]/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f0f7ff] to-[#e0e7ff] text-[#0ea5e9] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-lg shadow-[#0ea5e9]/10 border border-blue-100/50"
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
            WHY JOIN US
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight"
          >
            More Than Just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-purple-500">Job</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Work closely with a small founding team, contribute to real projects and gain practical experience while helping build technology with a meaningful purpose.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.15)] border border-slate-100/60 hover:border-[#0ea5e9]/30 transition-all flex flex-col items-center text-center group relative overflow-hidden"
            >
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              
              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0f7ff] to-[#e0e7ff] flex items-center justify-center border border-blue-100/50 shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#0ea5e9]/20 transition-all duration-300 relative z-10"
              >
                {reason.icon}
              </motion.div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug relative z-10 group-hover:text-[#0ea5e9] transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed relative z-10">
                {reason.description}
              </p>

              {/* Decorative sparkle */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Sparkles className="w-4 h-4 text-[#0ea5e9]/40" />
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
