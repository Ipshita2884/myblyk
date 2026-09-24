'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const awards = [
  {
    title: "Best Assistive Tech Startup",
    organization: "Global AI Summit",
    description: "Recognized for groundbreaking innovations in edge-AI processing for visually impaired individuals.",
    icon: <Trophy className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Accessibility Design Award",
    organization: "UX India",
    description: "Awarded for creating an inclusive, hardware-first user experience that prioritizes privacy.",
    icon: <Medal className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Top 10 AI Wearables",
    organization: "Tech Innovators",
    description: "Featured as a leading hardware solution pushing the boundaries of embedded vision models.",
    icon: <Star className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Social Impact Grant",
    organization: "Tech For Good",
    description: "Received prestigious funding to scale our manufacturing and reach more users globally.",
    icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function RecognitionAwardsSection() {
  const [hoverIndex, setHoverIndex] = useState<number>(0);

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Dynamic Background Blur based on hovered item */}
      <AnimatePresence mode="wait">
        <motion.div
          key={hoverIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat filter blur-[100px] scale-110"
          style={{ backgroundImage: `url(${awards[hoverIndex].image})` }}
        />
      </AnimatePresence>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 text-sky-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md border border-white/10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
            ACHIEVEMENTS
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight"
          >
            Recognition & Awards
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            We build for the people, not the praise. Yet, we are deeply honored when our engineering dedication is recognized.
          </motion.p>
        </div>

        {/* Expanding Cards (Accordion) */}
        <div className="flex flex-col md:flex-row w-full h-[600px] gap-4 md:gap-4 mt-12">
          {awards.map((award, index) => {
            const isActive = hoverIndex === index;
            
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onClick={() => setHoverIndex(index)}
                className={`relative overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group shadow-2xl ${
                  isActive ? "flex-[4] md:flex-[5]" : "flex-1 hover:flex-[1.2]"
                }`}
              >
                {/* Background Image */}
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-700"></div>
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-40"}`}></div>
                
                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 flex items-center justify-center rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-500 ${isActive ? 'w-14 h-14 md:w-16 md:h-16 bg-white/20' : 'w-12 h-12 bg-black/30'}`}>
                      {award.icon}
                    </div>
                    
                    {/* Title (Only visible when active) */}
                    <div className={`overflow-hidden transition-all duration-700 whitespace-nowrap ${isActive ? "opacity-100 translate-x-0 max-w-full" : "opacity-0 -translate-x-10 max-w-0"}`}>
                      <div className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">
                        {award.organization}
                      </div>
                      <h3 className="text-white text-xl md:text-3xl font-bold leading-tight">
                        {award.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description (Only visible when active) */}
                  <div className={`overflow-hidden transition-all duration-700 delay-100 ${isActive ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}`}>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed md:max-w-lg border-l-2 border-sky-400 pl-4">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
