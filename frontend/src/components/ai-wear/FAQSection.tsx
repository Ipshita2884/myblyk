'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "What are MyBlyk AI Glasses?",
      answer: "MyBlyk AI Glasses are AI-powered smart glasses being developed primarily for visually impaired and blind users. They are designed to help users access visual information and better understand their surroundings through voice-based interaction."
    },
    {
      question: "Do MyBlyk AI Glasses work without the internet?",
      answer: "Selected core safety-oriented capabilities are being designed around on-device Edge AI, reducing the need for constant internet connectivity for those functions. More complex or computationally intensive capabilities may require mobile or cloud processing."
    },
    {
      question: "What can MyBlyk AI Glasses currently do?",
      answer: "MyBlyk is at the prototype and development stage. Object detection has been confirmed, while capabilities such as text reading, scene understanding and other functions have reached different prototype or development stages. The final commercial capability set is still being developed."
    },
    {
      question: "How does MyBlyk provide information to the user?",
      answer: "MyBlyk is designed around voice/audio output. The current product concept uses an open-ear speaker positioned on the right-hand-side temple to communicate information to the user."
    },
    {
      question: "When will MyBlyk AI Glasses be available?",
      answer: "MyBlyk is progressing from proof-of-concept development towards product-design prototyping and testing. The planned roadmap targets consumer launch in April 2027, subject to development progress."
    },
    {
      question: "Can people with partial vision use MyBlyk?",
      answer: "MyBlyk is being developed primarily for visually impaired and blind users. Suitability for different levels of vision loss will depend on the final product capabilities and individual needs."
    },
    {
      question: "Do the glasses guarantee safety or replace human assistance?",
      answer: "No. MyBlyk is being developed to support environmental awareness and access to information. It should not be treated as a guarantee of safety or a complete replacement for mobility aids, human assistance or personal judgement."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100 shadow-sm">
            FAQ
          </div>

          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden group ${
                  isOpen ? 'border-[#0ea5e9]/70 bg-sky-50/30 shadow-[0_0_20px_rgba(14,165,233,0.15)]' : 'border-slate-200 bg-white hover:border-[#0ea5e9]/50 hover:shadow-[0_0_15px_-5px_rgba(14,165,233,0.2)]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-semibold text-base transition-colors duration-300 ${isOpen ? 'text-[#0ea5e9]' : 'text-slate-800 group-hover:text-[#0ea5e9]'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#0ea5e9] drop-shadow-[0_0_5px_rgba(14,165,233,0.3)]' : 'text-slate-400 group-hover:text-[#0ea5e9]'}`} />
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
