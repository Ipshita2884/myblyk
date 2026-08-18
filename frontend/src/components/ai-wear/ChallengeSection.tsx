import { Globe, Target, Lock } from 'lucide-react';

export default function ChallengeSection() {
  const challenges = [
    {
      icon: <Globe className="w-6 h-6" />,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      title: "Cloud-dependent",
      description: "Existing products fail when connectivity drops — exactly when users need them most."
    },
    {
      icon: <Target className="w-6 h-6" />,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50",
      title: "Context-blind",
      description: "Simple object detection without situational awareness misses the nuance of real life."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      title: "Privacy invasive",
      description: "Streaming visual data to remote servers raises serious privacy and security concerns."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100">
            THE CHALLENGE
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Existing solutions leave too much to chance
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Today's assistive devices require internet. They're reactive, not contextual. They describe what they see without understanding what matters. AI-Wear is different.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-slate-50/50 rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-full ${challenge.bgColor} ${challenge.iconColor} flex items-center justify-center mb-6`}>
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
