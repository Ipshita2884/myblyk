import { Globe, Activity, Target, Shield, ExternalLink } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Globe className="w-5 h-5" />,
      value: "7.5 Cr +",
      label: "People affected by visual impairment and blindness in India"
    },
    {
      icon: <Activity className="w-5 h-5" />,
      value: "8+",
      label: "Major causes and diseases responsible for vision impairment"
    },
    {
      icon: <Target className="w-5 h-5" />,
      value: "50%",
      label: "Estimated growth in the affected population by 2040"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      value: "₹646B+",
      label: "Economic productivity loss linked to vision impairment in India"
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
              <p className="text-slate-500 font-medium text-sm mb-4">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Source Links */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            Note: Data sourced and verified from{' '}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9359234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-brand-blue-dark underline transition-colors"
            >
              The Lancet Global Health
            </a>
            {' '}&{' '}
            <a
              href="https://www.hcplive.com/view/vision-loss-increase-brazil-russia-india-china-south-africa-2040"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-brand-blue-dark underline transition-colors"
            >
              PMC/NCBI
            </a>
            {' '}research.
          </p>
        </div>
      </div>
    </section>
  );
}
