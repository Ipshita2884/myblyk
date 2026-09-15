import Link from 'next/link';
import { ArrowRight, Play, Cpu, Eye, Shield } from 'lucide-react';
import Image from 'next/image';

export default function AIWearHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[90vh] flex items-center bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-bold text-[10px] uppercase tracking-widest mb-8 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse"></span>
              AI-Wear Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              AI-Wear <br />
              <span className="text-slate-300">See the World.</span> <br />
              <span className="text-slate-400">Understand It.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              The world's first truly offline AI-powered smart eyewear platform. Built for the visually impaired. Powered by edge intelligence. Guided by voice.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="#prebook" 
                className="flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-xl font-bold transition-all text-lg shadow-lg shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5"
              >
                Pre-Book Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#demo" 
                className="flex items-center gap-2 bg-transparent hover:bg-slate-800/50 text-white px-8 py-3.5 rounded-xl font-bold transition-all border border-slate-700 text-lg hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5" /> Watch Demo
              </Link>
            </div>
          </div>

          {/* Right Content - 3D Render & Telemetry (Figma Match) */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Main Rounded Image Container */}
            <div className="relative w-full max-w-[600px] aspect-square lg:aspect-[4/3] rounded-[2rem] border border-slate-700/50 flex items-end justify-center bg-slate-800/20 backdrop-blur-sm shadow-2xl overflow-hidden p-6 group">
              
              {/* The 3D abstract hardware render */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop" 
                  alt="AI Wear Concept" 
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Overlay gradient to match dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply"></div>
              </div>

              {/* Telemetry Badge overlay inside the image */}
              <div className="relative z-20 w-full bg-[#020817]/80 border border-slate-700/80 rounded-xl p-4 backdrop-blur-md shadow-xl text-xs font-mono">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
                  <span className="text-white font-bold">AI-Wear Active</span>
                  <span className="text-slate-500">— Processing visual field</span>
                </div>
                <div className="text-slate-400 flex flex-wrap gap-x-3 gap-y-1">
                  <span>Objects: <span className="text-[#0ea5e9]">7</span></span> | 
                  <span>Text: <span className="text-[#0ea5e9]">2 blocks</span></span> | 
                  <span>Faces: <span className="text-[#0ea5e9]">1</span></span> | 
                  <span>Hazards: <span className="text-emerald-500">0</span></span>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
