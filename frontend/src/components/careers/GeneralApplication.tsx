'use client';

import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

export default function GeneralApplication() {
  return (
    <section className="bg-slate-50/50 py-12 relative flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-12 w-full"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-100">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
              GENERAL APPLICATION
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Don't see your role?
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Send us your portfolio and a note about why you want to work on AI-Wear.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">First Name</label>
                <input 
                  type="text" 
                  placeholder="Arjun"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">Email</label>
              <input 
                type="email" 
                placeholder="arjun@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">LinkedIn Profile</label>
              <input 
                type="url" 
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">Portfolio / GitHub</label>
              <input 
                type="url" 
                placeholder="https://github.com/yourhandle"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">Resume</label>
              <div className="w-full border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50/50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                  <Upload className="w-5 h-5 text-[#0ea5e9]" />
                </div>
                <p className="text-sm text-slate-600 font-medium mb-1">
                  Drop your resume here or <span className="text-[#0ea5e9]">browse</span>
                </p>
                <p className="text-xs text-slate-400">PDF, DOC — max 5MB</p>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-4 rounded-xl transition-all shadow-md shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 mt-4"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
