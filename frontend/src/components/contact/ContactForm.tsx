"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageSquare, TrendingUp, Handshake, ShoppingCart } from "lucide-react";

const INQUIRY_TYPES = [
  { id: "General", icon: MessageSquare },
  { id: "Investor", icon: TrendingUp },
  { id: "Partnership", icon: Handshake },
  { id: "Pre-Book", icon: ShoppingCart },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function ContactForm() {
  const [selectedType, setSelectedType] = useState("General");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 w-full"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
      <p className="text-gray-500 mb-8 text-sm">Choose the type of inquiry that best describes you.</p>

      {/* Inquiry Type Chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {INQUIRY_TYPES.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          return (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                isSelected 
                  ? "bg-[#0ea5e9] text-white shadow-md shadow-[#0ea5e9]/20 -translate-y-0.5" 
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {type.id}
            </button>
          );
        })}
      </div>

      <motion.form 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6" 
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="space-y-2 relative group">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-[#0ea5e9] transition-colors">First Name</label>
            <input 
              type="text" 
              placeholder="Ravi"
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all duration-300"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-2 relative group">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-[#0ea5e9] transition-colors">Last Name</label>
            <input 
              type="text" 
              placeholder="Kumar"
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all duration-300"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="space-y-2 relative group">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-[#0ea5e9] transition-colors">Email</label>
            <input 
              type="email" 
              placeholder="ravi@organization.com"
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2 relative group">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-[#0ea5e9] transition-colors">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+91 98765 43210"
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all duration-300"
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="space-y-2 relative group">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-[#0ea5e9] transition-colors">Subject</label>
          <input 
            type="text" 
            placeholder="How can we help?"
            className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all duration-300"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2 relative group">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-[#0ea5e9] transition-colors">Message</label>
          <textarea 
            placeholder="Tell us more about your inquiry..."
            rows={4}
            className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0ea5e9] focus:ring-4 focus:ring-[#0ea5e9]/10 transition-all duration-300 resize-none"
          />
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 mt-4"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
