'use client';

import { motion } from 'framer-motion';
import { Target, Globe } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[60%] rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-200/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-[2rem] p-10 md:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-blue-100 transition-all overflow-hidden"
          >
            {/* Card inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center mb-8 border border-blue-100/50 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              
              <h3 className="text-3xl font-extrabold mb-6 text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                Our Mission
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                To build AI-powered assistive technology that empowers visually
                impaired individuals with genuine independence — regardless of
                geography, connectivity, or economic circumstance. We believe that
                technology that serves the margins of society serves everyone better.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-[2rem] p-10 md:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-cyan-100 transition-all overflow-hidden"
          >
            {/* Card inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100/50 flex items-center justify-center mb-8 border border-cyan-100/50 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              
              <h3 className="text-3xl font-extrabold mb-6 text-slate-900 tracking-tight group-hover:text-cyan-600 transition-colors duration-300">
                Our Vision
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                A world where assistive AI is as ubiquitous as the smartphone —
                where 285 million visually impaired individuals have access to
                intelligent, private, and human-centered tools that make
                independence the default, not the exception.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
