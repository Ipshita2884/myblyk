import { Eye, Cpu, Layers, User, Brain } from "lucide-react";

export default function TechnologySection() {
  return (
    <section className="py-24 bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex px-3 py-1.5 rounded-full bg-blue-50 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100 self-start">
              TECHNOLOGY
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
              Deep-Tech at the <br className="hidden lg:block" />
              <span className="text-brand-blue">Edge of Possibility</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              AI-Wear is built on a stack of converging frontier technologies — each individually powerful, together transformative. We operate at the intersection of computer vision, embedded AI, and human-centered design to create something that has never existed before.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Computer Vision</h4>
                  <p className="text-xs text-gray-500">Real-time visual understanding</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Edge AI</h4>
                  <p className="text-xs text-gray-500">On-device neural inference</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Embedded Intelligence</h4>
                  <p className="text-xs text-gray-500">Hardware-software co-design</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Human-Centered AI</h4>
                  <p className="text-xs text-gray-500">Designed around human needs</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-[2rem] overflow-hidden h-[600px] shadow-xl border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
              alt="Circuit board technology" 
              className="w-full h-full object-cover"
            />
            {/* Overlay to darken image slightly */}
            <div className="absolute inset-0 bg-[#0F172A]/40 mix-blend-multiply"></div>
            
            {/* Center glowing brain icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-blue/30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-20 h-20 bg-brand-blue/90 backdrop-blur-md rounded-full border border-blue-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(10,133,230,0.5)]">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                {/* Connecting nodes */}
                <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-8 h-[1px] bg-brand-blue/50"></div>
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-8 h-[1px] bg-brand-blue/50"></div>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-brand-blue/50"></div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-brand-blue/50"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
