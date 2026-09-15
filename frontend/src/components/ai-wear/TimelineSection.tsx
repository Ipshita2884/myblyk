import { Check } from 'lucide-react';

const timelineData = [
  {
    year: "2023",
    title: "Idea & Inception",
    description: "Problem discovery, accessibility research, and initial feasibility study for AI-powered assistive eyewear.",
    status: "completed"
  },
  {
    year: "2024",
    title: "Research & Architecture",
    description: "Deep-tech research phase: edge AI architecture design, computer vision model selection, and hardware specification.",
    status: "completed"
  },
  {
    year: "2024",
    title: "First Prototype",
    description: "Working proof-of-concept with basic vision capabilities and voice output validated with initial user group.",
    status: "completed"
  },
  {
    year: "2025",
    title: "MVP & Pilot Testing",
    description: "Full-featured minimum viable product undergoing structured pilot testing with visually impaired users and accessibility experts.",
    status: "active"
  },
  {
    year: "2025-26",
    title: "Consumer Launch",
    description: "Commercial launch of Assist Series with manufacturing partner, SaaS platform, and support infrastructure.",
    status: "upcoming"
  },
  {
    year: "2026",
    title: "Global Expansion",
    description: "International market entry, Explorer Series, Industrial Series, and enterprise partnerships.",
    status: "upcoming"
  }
];

export default function TimelineSection() {
  return (
    <section className="bg-transparent py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-[40px] font-extrabold text-center text-white mb-20 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Development Timeline
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {timelineData.map((item, index) => {
            const isLast = index === timelineData.length - 1;
            
            return (
              <div key={index} className="flex gap-8 md:gap-12 relative group cursor-default">
                {/* Year */}
                <div className="w-16 md:w-20 flex-shrink-0 text-right pt-0.5">
                  <span className={`text-sm md:text-[15px] font-bold tracking-wider uppercase transition-colors duration-300 ${item.status === 'upcoming' ? 'text-slate-500 group-hover:text-slate-400' : 'text-[#0ea5e9] group-hover:text-sky-300 group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]'}`}>
                    {item.year}
                  </span>
                </div>
                
                {/* Timeline Line & Icon */}
                <div className="relative flex flex-col items-center">
                  {/* The Line */}
                  {!isLast && (
                    <div className={`absolute top-7 bottom-[-24px] w-[2px] transition-colors duration-300 ${item.status === 'completed' ? 'bg-[#0ea5e9] group-hover:shadow-[0_0_10px_rgba(14,165,233,0.5)]' : 'bg-slate-800 group-hover:bg-slate-700'}`} />
                  )}
                  {/* The Icon */}
                  <div className="relative z-10 w-6 h-6 flex items-center justify-center bg-[#020817] group-hover:scale-110 transition-transform duration-300">
                    {item.status === 'completed' && (
                      <div className="w-6 h-6 rounded-full bg-[#0ea5e9] flex items-center justify-center shadow-[0_0_10px_rgba(14,165,233,0.4)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.8)] transition-shadow">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                      </div>
                    )}
                    {item.status === 'active' && (
                      <div className="w-6 h-6 rounded-full border-[2.5px] border-[#0ea5e9] flex items-center justify-center bg-[#020817] shadow-[0_0_10px_rgba(14,165,233,0.4)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.8)] transition-shadow">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9] group-hover:animate-pulse" />
                      </div>
                    )}
                    {item.status === 'upcoming' && (
                      <div className="w-5 h-5 rounded-full border-[2.5px] border-slate-700 bg-[#020817] group-hover:border-slate-500 transition-colors" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-16 pt-0 transition-transform duration-300 group-hover:translate-x-2">
                  <h3 className={`text-lg md:text-xl font-bold mb-2.5 transition-colors duration-300 ${item.status === 'upcoming' ? 'text-slate-400 group-hover:text-slate-300' : 'text-white group-hover:text-[#0ea5e9]'}`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed max-w-xl group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Visual Divider to separate from FAQ */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
    </section>
  );
}
