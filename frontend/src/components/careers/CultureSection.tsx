'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const bullets = [
  "Flexible & Remote — Work remotely with flexibility while staying accountable for your responsibilities and deadlines.",
  "Learn by Doing — Gain practical exposure by working on real assignments, projects and startup workflows.",
  "Founder Access — Work closely with the founding team and learn directly from the people building the company.",
  "Ownership Matters — We value people who take responsibility, communicate clearly and follow their work through.",
  "Multidisciplinary Work — Explore how design, software, AI and product development come together to solve practical problems.",
  "Early-Stage Experience — Understand the challenges of building a Deep-Tech startup and contribute as the company grows."
];

export default function CultureSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24 relative overflow-hidden">
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
          className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-bl from-[#0ea5e9]/10 to-purple-500/10 rounded-full blur-[100px]"
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
          className="absolute bottom-[30%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-tl from-indigo-500/10 to-[#0ea5e9]/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="pr-0 lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
              LIFE AT MYBLYK
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900 tracking-tight"
            >
              A Culture Built for People Who Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-purple-500">Build</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed mb-10"
            >
              We are an early-stage team where curiosity, ownership and willingness to learn matter as much as existing skills. You will have the opportunity to contribute, ask questions and see your work become part of something real.
            </motion.p>

            <div className="space-y-4">
              {bullets.map((bullet, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 + (index * 0.08), duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 mt-0.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5e9] group-hover:text-[#0284c7] transition-colors" />
                  </motion.div>
                  <p className="text-slate-600 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">{bullet}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative shadow-lg hover:shadow-2xl hover:shadow-[#0ea5e9]/20 transition-all duration-500 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Engineers collaborating" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative shadow-lg hover:shadow-2xl hover:shadow-[#0ea5e9]/20 transition-all duration-500 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&w=800&q=80" 
                alt="Team discussion" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative shadow-lg hover:shadow-2xl hover:shadow-[#0ea5e9]/20 transition-all duration-500 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
                alt="Office space" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative shadow-lg hover:shadow-2xl hover:shadow-[#0ea5e9]/20 transition-all duration-500 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Hardware lab" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Decorative sparkle */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-4 -right-4 hidden lg:block"
            >
              <Sparkles className="w-8 h-8 text-[#0ea5e9]/30" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
