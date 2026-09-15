"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

interface FaqAccordionListProps {
  faqs: Faq[];
}

export default function FaqAccordionList({ faqs }: FaqAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-4xl mx-auto w-full">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            key={idx} 
            className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
            >
              <span className="text-[14px] font-bold text-slate-800">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-5 pt-0 text-slate-600 text-[14px] leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
