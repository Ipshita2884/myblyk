'use client';

import { motion } from 'framer-motion';
import { Upload, FileText, Sparkles } from 'lucide-react';

export default function GeneralApplication() {
  return (
    <section className="bg-gradient-to-b from-slate-50/50 to-white py-20 relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-bl from-[#0ea5e9]/10 to-purple-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-[2rem] p-8 md:p-12 w-full relative overflow-hidden"
        >
          {/* Glassmorphism shine effect */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
          />

          <div className="flex flex-col items-center text-center mb-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f0f7ff] to-[#e0e7ff] text-[#0ea5e9] px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 shadow-lg shadow-[#0ea5e9]/10 border border-blue-100/50"
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
              GENERAL APPLICATION
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight"
            >
              Don't see your role?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 text-base md:text-lg"
            >
              Send us your portfolio and a note about why you want to work on AI-Wear.
            </motion.p>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">First Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text" 
                  placeholder="Arjun"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all text-sm shadow-sm hover:shadow-md"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-2"
              >
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Last Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text" 
                  placeholder="Sharma"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all text-sm shadow-sm hover:shadow-md"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-2"
            >
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email" 
                placeholder="arjun@example.com"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all text-sm shadow-sm hover:shadow-md"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-2"
              >
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Phone Number</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all text-sm shadow-sm hover:shadow-md"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="space-y-2"
              >
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">City / State</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text" 
                  placeholder="Bangalore, Karnataka"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all text-sm shadow-sm hover:shadow-md"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="space-y-2"
            >
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Resume</label>
              <motion.div
                whileHover={{ scale: 1.01, borderColor: '#0ea5e9' }}
                className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-white/50 to-blue-50/30 backdrop-blur-sm cursor-pointer group relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0ea5e9]/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:from-[#0ea5e9]/20 group-hover:to-purple-500/20 transition-all shadow-lg"
                >
                  <Upload className="w-6 h-6 text-[#0ea5e9]" />
                </motion.div>
                <p className="text-sm text-slate-600 font-medium mb-2">
                  Drop your resume here or <span className="text-[#0ea5e9] font-semibold">browse</span>
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  PDF, DOC — max 5MB
                </p>
                
                {/* Animated border glow */}
                <motion.div
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-2xl border-2 border-[#0ea5e9]/20 pointer-events-none"
                />
              </motion.div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(14, 165, 233, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0284c7] hover:to-[#0369a1] text-white font-semibold py-4 rounded-xl transition-all shadow-xl shadow-[#0ea5e9]/30 mt-6 relative overflow-hidden group"
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
              <span className="relative z-10 flex items-center justify-center gap-2">
                Submit Application
                <Sparkles className="w-4 h-4" />
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
