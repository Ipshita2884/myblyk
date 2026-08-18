'use client';

import { useState, useEffect } from 'react';
import { EyeOff, Laptop, Shield, WifiOff, DollarSign, Heart, Zap } from 'lucide-react';

const tabs = [
  {
    id: 'independence',
    title: 'Limited Independence',
    icon: <EyeOff className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    id: 'fragmented',
    title: 'Fragmented Solutions',
    icon: <Laptop className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'privacy',
    title: 'Privacy Risks',
    icon: <Shield className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'offline',
    title: 'Connectivity Dependency',
    icon: <WifiOff className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'affordability',
    title: 'Prohibitive Costs',
    icon: <DollarSign className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current + 1) % tabs.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Original Text */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100 self-start">
              THE PROBLEM
            </div>
            
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
              285 million people live without <span className="text-[#0ea5e9]">visual independence</span>
            </h2>
            
            <div className="text-lg text-slate-600 mb-10">
              <p>
                Globally, 285 million people are visually impaired. Traditional aids address mobility but not the rich complexity of everyday life: reading labels, recognizing faces, or navigating unfamiliar spaces. Current technologies are often fragmented and rely heavily on consistent internet connectivity.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0ea5e9]">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-900 text-sm">Independence is a human right, not a privilege</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0ea5e9]">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-900 text-sm">Privacy must not be compromised</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0ea5e9]">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-900 text-sm">Must work without connectivity</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Swiper */}
          <div className="lg:col-span-8">
            <div className="bg-white p-4 sm:p-5 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-5 h-auto sm:h-[600px]">
              
              {/* Swiper Tabs */}
              <div className="w-full sm:w-[35%] flex flex-col space-y-2 justify-center">
                {tabs.map((tab, index) => {
                  const isActive = index === activeTab;
                  return (
                    <div 
                      key={tab.id}
                      className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
                        isActive ? 'bg-white shadow-sm border border-slate-200/60 scale-[1.02]' : 'hover:bg-slate-200/50 opacity-70 hover:opacity-100 border border-transparent'
                      }`}
                      onClick={() => {
                        setActiveTab(index);
                        setProgress(0);
                      }}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      <div className="flex items-center gap-3 relative z-10">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isActive ? 'bg-[#0ea5e9] text-white shadow-sm' : 'bg-slate-200 text-slate-500'
                        }`}>
                          {tab.icon}
                        </div>
                        <h3 className={`font-bold text-sm transition-colors ${
                          isActive ? 'text-slate-900' : 'text-slate-600'
                        }`}>
                          {tab.title}
                        </h3>
                      </div>

                      {/* Progress Bar */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-100">
                          <div 
                            className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#818cf8] transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Swiper Image */}
              <div className="w-full sm:w-[65%] h-[300px] sm:h-full relative rounded-xl overflow-hidden shadow-md border border-slate-200/60">
                {tabs.map((tab, index) => (
                  <img
                    key={tab.id}
                    src={tab.image}
                    alt={tab.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      index === activeTab ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-transparent z-20 pointer-events-none"></div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
