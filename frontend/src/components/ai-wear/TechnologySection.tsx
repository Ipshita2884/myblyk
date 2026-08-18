import { Eye, Brain, Cpu, ShieldCheck, Mic, WifiOff } from 'lucide-react';

export default function TechnologySection() {
  const technologies = [
    {
      icon: <Eye className="w-5 h-5" />,
      badge: "CORE",
      title: "Computer Vision",
      description: "Multi-class object detection, text recognition (OCR), face identification, obstacle mapping, and scene understanding."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      badge: "CORE",
      title: "Edge AI",
      description: "Optimized neural networks run entirely on embedded hardware — no cloud dependency, no data transmission required."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      badge: "CORE",
      title: "Embedded Intelligence",
      description: "Custom hardware-software co-design ensures minimal power draw, thermal efficiency, and long battery life."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      badge: "SECURITY",
      title: "Privacy Architecture",
      description: "All processing is local. No visual data leaves the device. Audit-ready privacy by design — not by policy."
    },
    {
      icon: <Mic className="w-5 h-5" />,
      badge: "INTERFACE",
      title: "Spatial Audio",
      description: "Bone-conduction audio delivers voice guidance without blocking ambient sound — safety without isolation."
    },
    {
      icon: <WifiOff className="w-5 h-5" />,
      badge: "RELIABILITY",
      title: "Offline Intelligence",
      description: "Works in metros, hospitals, rural areas, and anywhere connectivity is absent or unreliable. Always on."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full border border-slate-700 text-slate-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm shadow-sm">
            TECHNOLOGY
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Built on Frontier Intelligence
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            AI-Wear integrates five converging technologies into a single wearable platform that works silently, reliably, and privately.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-slate-800/50 rounded-[2rem] p-8 border border-slate-700/50 hover:bg-slate-800 transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 flex items-center justify-center text-slate-300 border border-slate-700/50 shadow-inner">
                  {tech.icon}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {tech.badge}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
