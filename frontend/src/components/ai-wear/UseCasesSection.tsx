import { BookOpen, MapPin, ShoppingBag, Plane, Briefcase, Factory, Eye, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

export default function UseCasesSection() {
  const useCases = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Reading",
      description: "Get help accessing text from labels, signs, documents and other everyday materials through voice-based assistance.",
      imageSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Eye className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Understanding Objects",
      description: "Identify and understand objects in the surrounding environment.",
      imageSrc: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Navigating Spaces",
      description: "Support environmental awareness in indoor and outdoor spaces. Navigation-related capabilities are under development.",
      imageSrc: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Shopping",
      description: "Access information such as product labels and other visual details while shopping.",
      imageSrc: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Plane className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Travel",
      description: "Get support when accessing information and understanding unfamiliar surroundings while travelling.",
      imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Professional",
      description: "Explore potential support for document reading, workplace accessibility and everyday office tasks.",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Eye className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Everyday Awareness",
      description: "Provide voice-based information about relevant elements of the surrounding environment.",
      imageSrc: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-[#0ea5e9]" />,
      title: "Industrial",
      description: "Potential use cases include hazard awareness, equipment identification and guidance in complex work environments.",
      imageSrc: "https://images.unsplash.com/photo-1527267207156-3390c50d4d8a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100">
            REAL-WORLD USE CASES
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Small Moments. Meaningful Assistance.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            MyBlyk is being developed for everyday situations where access to visual information can make a difference.
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
              </div>

              <div className="relative pt-10 px-8 pb-8">
                {/* Floating Icon Badge */}
                <div className="absolute -top-5 left-6 w-10 h-10 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center z-20 group-hover:-translate-y-1 transition-transform group-hover:border-[#0ea5e9]/30 group-hover:shadow-[0_0_15px_-3px_rgba(14,165,233,0.3)]">
                  {useCase.icon}
                </div>
                
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
