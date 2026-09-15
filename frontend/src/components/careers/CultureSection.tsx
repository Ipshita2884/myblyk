'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const bullets = [
  "Flexible working hours — outcomes over presence",
  "Continuous learning budget — conferences, courses, research",
  "Direct mentorship from founders and technical leads",
  "Transparent equity and compensation philosophy",
  "Regular user visits — you'll meet the people you're building for",
  "Comprehensive health coverage for you and family"
];

export default function CultureSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="pr-0 lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-blue-100"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
              LIFE AT TRINETRUM
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900 tracking-tight"
            >
              A Culture Built for Builders
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed mb-10"
            >
              We're not a typical startup. We don't have ping-pong tables and free snacks
              as a substitute for meaningful work. What we have is a clear mission, a small
              team of exceptional people, and the freedom to build things that matter.
            </motion.p>

            <div className="space-y-4">
              {bullets.map((bullet, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5e9] shrink-0 mt-0.5" />
                  <p className="text-slate-600 font-medium text-sm md:text-base">{bullet}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Engineers collaborating" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&w=800&q=80" 
                alt="Team discussion" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
                alt="Office space" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Hardware lab" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
