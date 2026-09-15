"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "How do I pre-book AI-Wear?",
    answer: "You can pre-book AI-Wear by filling out the contact form on this page and selecting 'Pre-Book' as the inquiry type. Our team will get back to you with the reservation details.",
  },
  {
    question: "Are you open to investor inquiries?",
    answer: "Yes, we are actively looking for strategic partners and investors who share our vision in deep-tech and assistive AI. Please reach out via the 'Investor' inquiry type.",
  },
  {
    question: "Do you partner with NGOs and accessibility organizations?",
    answer: "Absolutely. Collaboration with accessibility organizations is at the core of our mission. Let's have a conversation about what we can build together.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 w-full"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        Common Questions
      </h3>
      <p className="text-gray-500 mb-8 text-sm">Everything you need to know about the process.</p>

      <div className="space-y-4">
        {FAQ_DATA.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div 
              key={idx} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? "bg-slate-50/50 border-[#0ea5e9]/20 shadow-sm ring-1 ring-[#0ea5e9]/10" 
                  : "bg-white border-slate-200/60 hover:border-[#0ea5e9]/30 hover:shadow-md hover:shadow-[#0ea5e9]/5"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group"
              >
                <span className={`text-[13px] font-bold transition-colors ${isOpen ? "text-[#0ea5e9]" : "text-slate-700 group-hover:text-[#0ea5e9]"}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors ${isOpen ? "bg-[#0ea5e9]/10 text-[#0ea5e9]" : "bg-slate-100 text-slate-400 group-hover:bg-[#0ea5e9]/10 group-hover:text-[#0ea5e9]"}`}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-0 text-slate-600 text-[13px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
