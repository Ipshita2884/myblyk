import { Eye, Brain, Cpu, ShieldCheck, Mic, WifiOff } from 'lucide-react';

export default function TechnologySection() {
  const technologies = [
    {
      icon: <Eye className="w-5 h-5" />,
      badge: "CORE",
      title: "Computer Vision (Core)",
      description: "AI models are being developed and refined to perceive and interpret visual information, including objects and text, with broader scene understanding as the system evolves."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      badge: "CORE",
      title: "Edge AI (Core)",
      description: "Selected core functions are intended to run on-device, reducing unnecessary dependence on mobile and cloud processing."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      badge: "CORE",
      title: "Embedded Intelligence (Core)",
      description: "Hardware and AI software are being developed together to support an increasingly integrated wearable architecture."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      badge: "SECURITY",
      title: "Privacy-Conscious Processing (Security)",
      description: "Designed around privacy-conscious data handling, the system aims to manage where information is processed and limit unnecessary external data transfer."
    },
    {
      icon: <Mic className="w-5 h-5" />,
      badge: "INTERFACE",
      title: "Voice Interaction (Interface)",
      description: "An intuitive, hands-free audio interface is designed to communicate useful information without requiring users to rely on a screen."
    },
    {
      icon: <WifiOff className="w-5 h-5" />,
      badge: "RELIABILITY",
      title: "Dual-Layer Processing (Reliability)",
      description: "A hybrid processing approach is being developed to handle suitable tasks on-device while using mobile or cloud resources for more computationally intensive workflows when required."
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800 text-slate-300 text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
            TECHNOLOGY BUILDING
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Intelligence Built Around the User.
          </h2>

          <p className="text-lg text-slate-400">
            MyBlyk brings together AI, computer vision, embedded intelligence and voice interaction in a wearable system being developed towards a unified experience for everyday assistance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="group bg-slate-800/40 backdrop-blur-sm rounded-[2rem] p-8 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)] hover:border-[#0ea5e9]/50 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 flex items-center justify-center text-slate-300 border border-slate-700/50 shadow-inner group-hover:text-[#0ea5e9] group-hover:border-[#0ea5e9]/50 transition-colors">
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
