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
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-[40px] font-bold text-center text-[#0b1b36] mb-20 tracking-tight">
          Development Timeline
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {timelineData.map((item, index) => {
            const isLast = index === timelineData.length - 1;
            
            return (
              <div key={index} className="flex gap-8 md:gap-12 relative group">
                {/* Year */}
                <div className="w-16 md:w-20 flex-shrink-0 text-right pt-0.5">
                  <span className={`text-sm md:text-[15px] font-bold tracking-wider uppercase ${item.status === 'upcoming' ? 'text-slate-300' : 'text-[#0284c7]'}`}>
                    {item.year}
                  </span>
                </div>
                
                {/* Timeline Line & Icon */}
                <div className="relative flex flex-col items-center">
                  {/* The Line */}
                  {!isLast && (
                    <div className={`absolute top-7 bottom-[-24px] w-[2px] ${item.status === 'completed' ? 'bg-[#0284c7]' : 'bg-slate-100'}`} />
                  )}
                  {/* The Icon */}
                  <div className="relative z-10 w-6 h-6 flex items-center justify-center bg-white">
                    {item.status === 'completed' && (
                      <div className="w-6 h-6 rounded-full bg-[#0284c7] flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                      </div>
                    )}
                    {item.status === 'active' && (
                      <div className="w-6 h-6 rounded-full border-[2.5px] border-[#0284c7] flex items-center justify-center bg-white shadow-[0_0_0_4px_rgba(2,132,199,0.1)]">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0284c7]" />
                      </div>
                    )}
                    {item.status === 'upcoming' && (
                      <div className="w-5 h-5 rounded-full border-[2.5px] border-slate-200 bg-white" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-16 pt-0">
                  <h3 className={`text-lg md:text-xl font-bold mb-2.5 ${item.status === 'upcoming' ? 'text-slate-800' : 'text-[#0f172a]'}`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-xl">
                    {item.description}
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
