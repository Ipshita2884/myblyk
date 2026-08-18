import { Globe, Activity, Target, Shield } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Globe className="w-5 h-5" />,
      value: "285M+",
      label: "Visually Impaired Worldwide"
    },
    {
      icon: <Activity className="w-5 h-5" />,
      value: "50ms",
      label: "Inference Latency"
    },
    {
      icon: <Target className="w-5 h-5" />,
      value: "12+",
      label: "Real-World Use Cases"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      value: "99%",
      label: "Offline Reliability"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-[#0ea5e9] flex items-center justify-center mb-5">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
