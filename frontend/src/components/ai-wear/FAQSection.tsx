'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "Does AI-Wear require an internet connection?",
      answer: "No. AI-Wear is built on edge intelligence, meaning all processing happens directly on the device. You do not need Wi-Fi or cellular data for core features like navigation, reading, and object detection."
    },
    {
      question: "How accurate is the object and text recognition?",
      answer: "Our models achieve over 99% accuracy in standard lighting conditions. For text, it can read everything from street signs to fine print on medication bottles instantly."
    },
    {
      question: "How long does the battery last?",
      answer: "The Assist Series provides up to 16 hours of continuous use on a single charge, while the Explorer Series extends this to 24 hours with its expanded battery module."
    },
    {
      question: "Is my visual data stored anywhere?",
      answer: "No. Privacy is our foundational principle. No visual data ever leaves the device. There is no cloud storage, no data mining, and no risk of a privacy breach."
    },
    {
      question: "When will AI-Wear be commercially available?",
      answer: "We are currently in the final stages of clinical and field testing. Pre-orders will begin shipping in Q4 2026."
    },
    {
      question: "Can AI-Wear be used by people with partial vision?",
      answer: "Absolutely. The system can be customized to provide only the specific information you need, augmenting your existing vision rather than overwhelming you with unnecessary audio."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100">
            FAQ
          </div>
          
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Questions about AI-Wear
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#0ea5e9] bg-sky-50/30 shadow-md shadow-sky-100/50' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-semibold text-base ${isOpen ? 'text-[#0ea5e9]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0ea5e9]' : 'text-slate-400'}`} />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
