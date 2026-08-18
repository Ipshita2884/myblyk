import { BookOpen, MapPin, ShoppingBag, Plane, Briefcase, Factory } from 'lucide-react';

export default function UseCasesSection() {
  const useCases = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Reading",
      description: "Books, labels, menus, screens, and signage — read aloud instantly in any language.",
      imageColor: "bg-indigo-100"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Navigation",
      description: "Turn-by-turn guidance, obstacle warnings, and landmark identification in any environment.",
      imageColor: "bg-sky-100"
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Shopping",
      description: "Product identification, price reading, comparison, and self-checkout support.",
      imageColor: "bg-emerald-100"
    },
    {
      icon: <Plane className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Travel",
      description: "Airport navigation, ticket reading, schedule announcements, and multi-language support.",
      imageColor: "bg-amber-100"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Professional",
      description: "Office navigation, document reading, meeting support, and workplace accessibility.",
      imageColor: "bg-slate-200"
    },
    {
      icon: <Factory className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Industrial",
      description: "Hazard detection, equipment identification, and safety guidance in complex environments.",
      imageColor: "bg-rose-100"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100">
            USE CASES
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Real World. Real Impact.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            AI-Wear transforms everyday moments that others take for granted into experiences of genuine independence and confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              {/* Image Placeholder */}
              <div className={`w-full h-48 ${useCase.imageColor} relative`}>
                {/* Normally an <img /> would go here */}
                
                {/* Floating Icon Badge */}
                <div className="absolute -bottom-5 left-6 w-10 h-10 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center z-10 group-hover:-translate-y-1 transition-transform">
                  {useCase.icon}
                </div>
              </div>

              <div className="pt-10 px-8 pb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
