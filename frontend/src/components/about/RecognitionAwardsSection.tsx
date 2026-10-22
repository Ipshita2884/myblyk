'use client';

import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const partners = [
  { name: "Reliance", color: "#ED1C24" },
  { name: "Pixis", color: "#6366F1" },
  { name: "Globality", color: "#0891B2" },
  { name: "Leadsquared", color: "#F97316" },
  { name: "Accenture", color: "#A100FF" },
  { name: "Edureka!", color: "#DC2626" }
];

export default function RecognitionAwardsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#0ea5e9] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-lg border border-blue-100/50"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#0ea5e9]"
            />
            TRUSTED BY INDUSTRY LEADERS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight"
          >
            Building With the Best
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We're proud to collaborate with world-class organizations that share our vision for accessible technology.
          </motion.p>
        </div>

        {/* Flowing Icons Section */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          {/* Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none"
          />

          {/* First Row - Left to Right */}
          <div className="mb-8 relative py-8">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 w-max"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`row1-${index}`}
                  onMouseEnter={() => setHoveredIndex(index % partners.length)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 15,
                    rotateX: -10,
                    z: 50,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}
                  className="flex-shrink-0 relative group"
                >
                  {/* Card */}
                  <motion.div
                    animate={{
                      boxShadow: hoveredIndex === index % partners.length
                        ? `0 25px 50px -12px ${partner.color}40`
                        : "0 10px 30px -10px rgba(0,0,0,0.1)",
                    }}
                    className="w-48 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100/50 backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    />

                    {/* Logo Placeholder */}
                    <motion.div
                      animate={{
                        color: hoveredIndex === index % partners.length ? partner.color : '#64748b',
                      }}
                      className="text-2xl font-bold tracking-tight"
                    >
                      {partner.name}
                    </motion.div>

                    {/* 3D Depth Effect */}
                    <motion.div
                      animate={{
                        opacity: hoveredIndex === index % partners.length ? 1 : 0,
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 pointer-events-none"
                    />
                  </motion.div>

                  {/* Floating Particles */}
                  {hoveredIndex === index % partners.length && (
                    <AnimatePresence>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0.8, 0],
                            scale: [0, 1.5],
                            x: Math.cos((i / 6) * Math.PI * 2) * 60,
                            y: Math.sin((i / 6) * Math.PI * 2) * 60,
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                          style={{ backgroundColor: partner.color }}
                        />
                      ))}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left (Slower) */}
          <div className="relative py-8">
            <motion.div
              initial={{ x: '-50%' }}
              animate={{ x: 0 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 w-max"
            >
              {[...partners, ...partners, ...partners].reverse().map((partner, index) => (
                <motion.div
                  key={`row2-${index}`}
                  onMouseEnter={() => setHoveredIndex((partners.length - 1 - index) % partners.length)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{
                    scale: 1.15,
                    rotateY: -15,
                    rotateX: 10,
                    z: 50,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}
                  className="flex-shrink-0 relative group"
                >
                  {/* Card */}
                  <motion.div
                    animate={{
                      boxShadow: hoveredIndex === (partners.length - 1 - index) % partners.length
                        ? `0 25px 50px -12px ${partner.color}40`
                        : "0 10px 30px -10px rgba(0,0,0,0.1)",
                    }}
                    className="w-48 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100/50 backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 3.5,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    />

                    {/* Logo Placeholder */}
                    <motion.div
                      animate={{
                        color: hoveredIndex === (partners.length - 1 - index) % partners.length ? partner.color : '#64748b',
                      }}
                      className="text-2xl font-bold tracking-tight"
                    >
                      {partner.name}
                    </motion.div>

                    {/* 3D Depth Effect */}
                    <motion.div
                      animate={{
                        opacity: hoveredIndex === (partners.length - 1 - index) % partners.length ? 1 : 0,
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 pointer-events-none"
                    />
                  </motion.div>

                  {/* Floating Particles */}
                  {hoveredIndex === (partners.length - 1 - index) % partners.length && (
                    <AnimatePresence>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0.8, 0],
                            scale: [0, 1.5],
                            x: Math.cos((i / 6) * Math.PI * 2) * 60,
                            y: Math.sin((i / 6) * Math.PI * 2) * 60,
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                          style={{ backgroundColor: partner.color }}
                        />
                      ))}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
