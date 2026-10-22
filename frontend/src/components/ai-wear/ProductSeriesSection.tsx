'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductSeriesSection() {
  const products = [
    {
      imageSrc: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=800&auto=format&fit=crop",
      title: "ASSIST SERIES",
      subtitle: "For Visually Impaired and Blind Users",
      description: "Designed around environmental awareness, accessibility and everyday assistance. Assist aims to help users access visual information, understand their surroundings and approach daily activities with greater confidence.",
      targetAudience: "Visually Impaired and Blind Users",
      features: [
        "Object and environment understanding",
        "Text reading",
        "Voice-based information",
        "Everyday accessibility assistance",
        "Navigation assistance",
        "Daily utility functions",
        "Find My Glasses"
      ],
      buttonText: "Pre-Book Now",
      buttonStyle: "bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-transparent shadow-lg shadow-[#0ea5e9]/30"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1527267207156-3390c50d4d8a?q=80&w=800&auto=format&fit=crop",
      title: "ECHO SERIES",
      subtitle: "For People with Partial Hearing Loss",
      description: "A future MyBlyk experience being planned for people with partial hearing loss. The Echo series explores cross-modal sensory technology, translating selected ambient and environmental sound cues into alternative sensory outputs.",
      targetAudience: "People with Partial Hearing Loss",
      features: [
        "Bone conduction audio",
        "Sound-to-vibration concepts",
        "Conductive hearing loss support concepts",
        "Inner-ear sound transmission concept",
        "Daily utility functions",
        "Find My Glasses"
      ],
      buttonText: "Available Soon",
      buttonStyle: "bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-transparent shadow-lg shadow-[#0ea5e9]/30"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      title: "EXPLORER SERIES",
      subtitle: "For Independent Travellers, Explorers, Students and Researchers",
      description: "Designed for people seeking proactive AI-driven environmental context while travelling or navigating unfamiliar languages. The Explorer series is envisioned as an intelligent wearable companion for discovery, combining specialised utility with broader consumer functionality.",
      targetAudience: "Independent Travellers, Explorers, Students and Researchers",
      features: [
        "Environmental understanding",
        "Travel assistance",
        "Information access",
        "Navigation-related assistance under development",
        "Voice interaction",
        "Daily utility functions",
        "Find My Glasses"
      ],
      buttonText: "Pre-Book Now",
      buttonStyle: "bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-transparent shadow-lg shadow-[#0ea5e9]/30"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100 shadow-sm">
            PRODUCT SERIES
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Three Experiences. One Purpose.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            MyBlyk is developing a product family for different everyday needs, from accessibility-focused assistance to independent exploration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group flex flex-col bg-slate-900/90 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-slate-700/50 hover:shadow-[0_20px_60px_-15px_rgba(14,165,233,0.4)] hover:border-[#0ea5e9]/50 shadow-2xl transition-all duration-500 relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={false}
              />

              {/* Image Graphic */}
              <div className="relative w-full h-56 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply z-10 group-hover:bg-brand-navy/10 transition-colors duration-500"
                  initial={{ opacity: 0.4 }}
                  whileHover={{ opacity: 0.1 }}
                />
                <motion.img
                  src={product.imageSrc}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear"
                  }}
                />
              </div>

              <motion.div
                className="p-8 flex flex-col flex-grow relative z-20 -mt-8"
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-white mb-1"
                  whileHover={{ color: '#0ea5e9' }}
                  transition={{ duration: 0.2 }}
                >
                  {product.title}
                </motion.h3>
                <motion.p
                  className="text-[#0ea5e9] font-semibold text-sm mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {product.subtitle}
                </motion.p>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 min-h-[80px]">
                  {product.description}
                </p>

                <p className="text-xs text-slate-500 font-medium mb-6 pb-6 border-b border-slate-700/50">
                  <span className="text-slate-600">For:</span> {product.targetAudience}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      className="flex items-start gap-3 text-sm text-slate-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (fIndex * 0.05), duration: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#0ea5e9]/10 group-hover:bg-[#0ea5e9]/20"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="w-3 h-3 text-[#0ea5e9]" />
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    className={`w-full py-3.5 rounded-xl font-bold text-center transition-all border block relative overflow-hidden ${product.buttonStyle}`}
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
                    <span className="relative z-10">{product.buttonText}</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
