import { Camera, Cpu, Eye, Brain, Zap, Mic } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Camera className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      title: "Camera Input",
      description: "High-resolution optical sensor captures the real world at 60fps"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      title: "Sensor Fusion",
      description: "Depth, IMU, and optical data merged into unified environment model"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      title: "Computer Vision",
      description: "Objects, text, faces, and hazards identified in real-time"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
      title: "Edge AI Engine",
      description: "On-device neural network processes scene context without any cloud"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-100",
      title: "Decision Engine",
      description: "Priority-weighted decisions determine what information matters most"
    },
    {
      icon: <Mic className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      title: "Voice Guidance",
      description: "Natural, conversational audio output delivered via bone-conduction speakers"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100">
              HOW IT WORKS
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              The AI-Wear <span className="text-[#0ea5e9]">Processing Pipeline</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Every moment, AI-Wear executes a sophisticated multi-stage pipeline — from raw optical input to precise voice guidance — entirely on-device. No cloud. No latency. No privacy compromise.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              The pipeline activates in under 50 milliseconds, delivering real-time awareness that feels natural and anticipatory rather than reactive.
            </p>
          </div>

          {/* Right Content - Water Drop UI Timeline */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              {/* Connecting Line */}
              <div className="absolute top-8 bottom-8 left-6 w-[2px] bg-gradient-to-b from-[#0ea5e9] via-[#818cf8] to-transparent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
              
              {/* Steps */}
              <div className="flex flex-col gap-8 relative z-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center border ${step.bgColor} ${step.borderColor} ${step.color} shadow-sm group-hover:scale-110 transition-transform bg-white relative`}>
                      {/* Inner dot connecting to the line */}
                      <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 ${step.borderColor} shadow-sm hidden`}></div>
                      {step.icon}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
