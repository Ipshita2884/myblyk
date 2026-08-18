import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function AIWearHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 min-h-[90vh] flex items-center">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0ea5e9]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

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
                className="flex items-center gap-2 bg-transparent hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all border border-slate-600 text-lg hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5" /> Watch Demo
              </Link>
            </div>
          </div>

          {/* Right Content - Abstract Wireframe Globe & Telemetry */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square rounded-full border border-slate-700/50 flex items-center justify-center bg-slate-800/20 backdrop-blur-3xl shadow-2xl overflow-hidden">
              {/* CSS approximation of the wireframe globe */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700/40 via-transparent to-transparent"></div>
              
              {/* Grid lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}></div>
              
              <div className="w-[70%] h-[70%] rounded-full border border-[#0ea5e9]/30 relative animate-[spin_60s_linear_infinite]">
                <div className="absolute inset-0 rounded-full border border-[#0ea5e9]/20 rotate-45 scale-[1.1]"></div>
                <div className="absolute inset-0 rounded-full border border-[#0ea5e9]/20 -rotate-45 scale-[1.1]"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#0ea5e9]/30"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#0ea5e9]/30"></div>
              </div>

              {/* Data Orbs */}
              <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-[#0ea5e9] rounded-full shadow-[0_0_15px_#0ea5e9] animate-pulse"></div>
              <div className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399] animate-pulse delay-75"></div>
              <div className="absolute top-[60%] left-[70%] w-4 h-4 bg-indigo-400 rounded-full shadow-[0_0_20px_#818cf8] animate-pulse delay-150"></div>

              {/* Telemetry Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 backdrop-blur-md shadow-xl text-xs font-mono">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
