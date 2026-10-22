import { Eye, Cpu, Cloud, Mic, ArrowRight, Glasses, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SolutionSection() {
  const cards = [
    {
      icon: <Eye className="w-6 h-6" />,
      badge: "CORE INTELLIGENCE",
      title: "Computer Vision",
      description: "Designed to identify and interpret visual information such as objects, text and surrounding scenes — powered by custom neural models."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      badge: "ON-DEVICE",
      title: "Edge AI Processing",
      description: "Selected core safety-oriented capabilities are being developed around on-device AI to reduce dependence on mobile and cloud processing."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      badge: "CONNECTED INTELLIGENCE",
      title: "Mobile & Cloud Processing",
      description: "More complex or computationally intensive tasks can use mobile and cloud processing when required."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      badge: "HUMAN INTERFACE",
      title: "Voice-Based Interaction",
      description: "MyBlyk is designed to communicate useful information through simple, natural voice interaction."
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
            MEET MYBLYK
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-sm">
            A Smarter Way to Understand
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed">
            MyBlyk is redefining assistive eyewear through AI-powered perception, combining advanced computer vision, on-device intelligence, and voice-driven interaction to help people with visual impairments experience their surroundings with greater awareness and independence.
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

        {/* Visual Flow Diagram */}
        <div className="mb-16 flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-[#0ea5e9] flex items-center justify-center mb-3 shadow-lg">
                <Glasses className="w-10 h-10 text-[#0ea5e9]" />
              </div>
              <p className="text-white font-medium text-sm">Visual Input</p>
            </div>

            <ArrowRight className="w-8 h-8 text-[#0ea5e9] rotate-90 md:rotate-0" />

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-[#0ea5e9] flex items-center justify-center mb-3 shadow-lg">
                <Sparkles className="w-10 h-10 text-[#0ea5e9]" />
              </div>
              <p className="text-white font-medium text-sm">AI Processing</p>
            </div>

            <ArrowRight className="w-8 h-8 text-[#0ea5e9] rotate-90 md:rotate-0" />

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-[#0ea5e9] flex items-center justify-center mb-3 shadow-lg">
                <Mic className="w-10 h-10 text-[#0ea5e9]" />
              </div>
              <p className="text-white font-medium text-sm">Voice Output</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link
            href="/ai-wear"
            className="flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-xl font-bold transition-all text-lg shadow-lg shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5"
          >
            Explore MyBlyk AI-Glasses <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
