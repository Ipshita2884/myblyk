'use client';

import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Lightbulb, Globe, Zap, Users } from 'lucide-react';

const values = [
  {
    title: "Human First",
    description: "Technology should solve real problems and make everyday life more manageable.",
    icon: <Heart className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Accessibility First",
    description: "Assistive technology should be practical, useful and designed around the people who need it.",
    icon: <ShieldCheck className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Independence",
    description: "Aim to help people access information, understand their surroundings and manage everyday activities with greater confidence.",
    icon: <Lightbulb className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Responsible AI",
    description: "Build with awareness of privacy, limitations and the real-world impact of AI.",
    icon: <Globe className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Safety Matters",
    description: "Design around useful assistance while respecting the limits of technology and human judgement.",
    icon: <Zap className="w-5 h-5 text-[#0ea5e9]" />
  },
  {
    title: "Innovation & Affordability",
    description: "Aim to develop practical technology that continues to improve while keeping accessibility and affordability in mind.",
    icon: <Users className="w-5 h-5 text-[#0ea5e9]" />
  }
];

export default function OurValuesSection() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-blue-100">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
            OUR VALUES
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
            What We Stand For
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100/60 transition-all flex items-start gap-5"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f0f7ff] flex items-center justify-center border border-blue-100/50">
                {value.icon}
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-snug">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
