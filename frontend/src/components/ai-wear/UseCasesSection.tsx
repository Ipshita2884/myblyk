import { BookOpen, MapPin, ShoppingBag, Plane, Briefcase, Factory } from 'lucide-react';
import Image from 'next/image';

export default function UseCasesSection() {
  const useCases = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Reading",
      description: "Books, labels, menus, screens, and signage — read aloud instantly in any language.",
      imageSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Navigation",
      description: "Turn-by-turn guidance, obstacle warnings, and landmark identification in any environment.",
      imageSrc: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Shopping",
      description: "Product identification, price reading, comparison, and self-checkout support.",
      imageSrc: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Plane className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Travel",
      description: "Airport navigation, ticket reading, schedule announcements, and multi-language support.",
      imageSrc: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Professional",
      description: "Office navigation, document reading, meeting support, and workplace accessibility.",
      imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Factory className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Industrial",
      description: "Hazard detection, equipment identification, and safety guidance in complex environments.",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
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
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)] hover:border-[#0ea5e9]/50 group">
              {/* Image */}
              <div className="w-full h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={useCase.imageSrc} 
                  alt={useCase.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Icon Badge */}
                <div className="absolute -bottom-5 left-6 w-10 h-10 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center z-20 group-hover:-translate-y-1 transition-transform group-hover:border-[#0ea5e9]/30 group-hover:shadow-[0_0_15px_-3px_rgba(14,165,233,0.3)]">
                  {useCase.icon}
                </div>
              </div>

              <div className="pt-10 px-8 pb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0ea5e9] transition-colors">{useCase.title}</h3>
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
