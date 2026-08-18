import Image from "next/image";
import { Sparkles, ArrowRight, Play, Eye, Cpu, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-background-light">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      {/* Subtle Theme Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#0ea5e9]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[50%] bg-indigo-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-sky-300/15 rounded-full blur-[100px]"></div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-brand-blue font-medium text-sm mb-8 border border-blue-100">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Assistive Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-brand-navy leading-[1.1] mb-6">
              Vision, <br />
              <span className="text-brand-blue">Redefined</span> <br />
              by Intelligence
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Trinetrum Ventures is building AI-Wear — a breakthrough smart eyewear platform that uses on-device computer vision and edge AI to give the visually impaired a new way to experience the world.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link 
                href="/explore" 
                className="flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-xl font-bold transition-all text-lg shadow-lg shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5"
              >
                Explore AI-Wear <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#about" 
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-xl font-bold transition-all border border-gray-200 text-lg hover:-translate-y-0.5 shadow-sm"
              >
                About Us <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-brand-navy">Team of Deep-Tech Engineers</span>
                <span className="text-xs text-gray-500">Building the future of accessibility</span>
              </div>
            </div>
          </div>

          {/* Right Content / Image Composition */}
          <div className="relative lg:ml-10 mt-10 lg:mt-0 h-[600px] flex items-center justify-center">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                alt="Hardware engineering" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply"></div>
            </div>

            {/* Play Button */}
            <button className="relative z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-xl hover:scale-105 transition-transform">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </button>

            {/* Floating Card 1: Vision AI */}
            <div className="absolute top-12 right-[-20px] lg:right-[-40px] z-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 w-64 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">Vision AI</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">Real-time object & text recognition</p>
              <div className="flex gap-1">
                <div className="h-2 w-full bg-green-500 rounded-full"></div>
                <div className="h-2 w-full bg-green-500 rounded-full"></div>
                <div className="h-2 w-full bg-green-500 rounded-full"></div>
                <div className="h-2 w-full bg-green-500 rounded-full"></div>
                <div className="h-2 w-full bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Floating Card 2: Edge AI */}
            <div className="absolute top-1/2 left-[-20px] lg:left-[-60px] -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 w-60 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">Edge AI</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">On-device inference in &lt;50ms</p>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-brand-blue w-[85%] rounded-full"></div>
              </div>
            </div>

            {/* Floating Card 3: Works Offline */}
            <div className="absolute bottom-16 right-10 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 w-56 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">Works Offline</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">No cloud dependency. Private by design.</p>
              <div className="w-8 h-8 mx-auto rounded-full border-2 border-purple-200 flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
        <span className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-widest">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
