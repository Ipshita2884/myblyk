import { Eye, Cpu, Wifi, Mic, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SolutionSection() {
  const cards = [
    {
      icon: <Eye className="w-6 h-6" />,
      badge: "Core Engine",
      title: "Computer Vision",
      description: "Real-time object recognition, face detection, text reading, and scene understanding — powered by custom neural models."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      badge: "On-Device",
      title: "Edge AI Processing",
      description: "All AI inference runs directly on the device. Zero cloud latency, complete privacy, instant responses even in dead zones."
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      badge: "Always On",
      title: "Offline Intelligence",
      description: "Full operational capability without internet connectivity. AI-Wear works in basements, remote areas, and signal-dead environments."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      badge: "Human Interface",
      title: "Voice Guidance",
      description: "Natural language audio descriptions delivered in real time. Conversational, contextual, and customizable to user preference."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-lg bg-slate-800/80 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-slate-700 backdrop-blur-sm">
            OUR SOLUTION
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-sm">
            Introducing AI-Wear
          </h2>
          
          <p className="text-xl text-slate-300 leading-relaxed">
            Smart eyewear powered by on-device intelligence — giving users real-time environmental awareness, voice-guided navigation, and complete privacy.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <div key={index} className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-lg hover:bg-slate-800/60 transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-xl bg-slate-900/60 flex items-center justify-center text-[#0ea5e9] border border-slate-700/50 shadow-inner">
                  {card.icon}
                </div>
                <div className="px-3 py-1 rounded-md border border-slate-700/50 bg-slate-800/80 text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider">
                  {card.badge}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link 
            href="/explore" 
            className="flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-xl font-bold transition-all text-lg shadow-lg shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5"
          >
            Explore AI-Wear <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
