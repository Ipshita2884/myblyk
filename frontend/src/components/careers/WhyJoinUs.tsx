'use client';

import { motion } from 'framer-motion';
import { Heart, Cpu, Zap, Globe } from 'lucide-react';

const reasons = [
  {
    title: "Meaningful Impact",
    description: "Every line of code you write directly contributes to giving visually impaired individuals their independence back.",
    icon: <Heart className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Deep-Tech Challenges",
    description: "Solve unsolved problems in real-time edge AI, sensor fusion, and low-power computer vision.",
    icon: <Cpu className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Fast-Paced Innovation",
    description: "We are a small, agile team. We ship fast, iterate relentlessly, and learn from real users in the field.",
    icon: <Zap className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Global Reach",
    description: "Build a product that is designed to scale globally and be accessible to anyone, anywhere in the world.",
    icon: <Globe className="w-5 h-5 text-[#0ea5e9]" />
  }
];

export default function WhyJoinUs() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-blue-100">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
            WHY JOIN US
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
            More than a job
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100/60 transition-all flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-slate-100 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
