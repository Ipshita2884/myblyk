import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductSeriesSection() {
  const products = [
    {
      mostPopular: true,
      imageSrc: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=800&auto=format&fit=crop",
      title: "Assist Series",
      subtitle: "For Independent Living",
      description: "Designed for the visually impaired and their families. Provides real-time navigation, reading, object identification, and social guidance in everyday environments.",
      targetAudience: "Individuals, Families, NGOs",
      features: [
        "Navigation assistance",
        "Text & label reading",
        "Face recognition",
        "Obstacle detection",
        "Emergency alerts"
      ],
      buttonText: "Pre-Book Now",
      buttonStyle: "bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-transparent shadow-md shadow-[#0ea5e9]/20"
    },
    {
      mostPopular: false,
      imageSrc: "https://images.unsplash.com/photo-1527267207156-3390c50d4d8a?q=80&w=800&auto=format&fit=crop",
      title: "Explorer Series",
      subtitle: "For Independent Travel",
      description: "Extended battery, advanced mapping, and multi-language support for the traveler, student, or professional navigating unfamiliar environments.",
      targetAudience: "Students, Travelers, Researchers",
      features: [
        "Multi-language OCR",
        "GPS integration",
        "Extended battery",
        "Cloud sync (optional)",
        "Smart notifications"
      ],
      buttonText: "Register Interest",
      buttonStyle: "bg-transparent hover:bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500"
    },
    {
      mostPopular: false,
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      title: "Industrial Series",
      subtitle: "For Enterprise & Industry",
      description: "Built for hazardous and complex environments. Industrial-grade durability, custom AI models, enterprise integration, and compliance-grade privacy.",
      targetAudience: "Enterprises, Healthcare, Government",
      features: [
        "Industrial-grade housing",
        "Custom AI models",
        "Enterprise dashboard",
        "Compliance ready",
        "Priority support"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-transparent hover:bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100 shadow-sm">
            PRODUCT SERIES
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Three Series. One Mission.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            AI-Wear comes in three purpose-built variants — each designed for a distinct context, audience, and set of needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className={`group flex flex-col bg-slate-900 backdrop-blur-md rounded-[2rem] overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${product.mostPopular ? 'border-amber-500/50 shadow-[0_0_20px_-10px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.5)] hover:border-amber-400/80 relative' : 'border-slate-700/50 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] hover:border-[#0ea5e9]/50 shadow-lg'}`}>
              
              {product.mostPopular && (
                <div className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white text-xs font-bold uppercase tracking-wider py-2 text-center flex justify-center items-center gap-1 w-full absolute top-0 z-20 shadow-md">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              {/* Image Graphic */}
              <div className="relative w-full h-56 overflow-hidden">
                <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply z-10 group-hover:bg-brand-navy/10 transition-colors duration-500"></div>
                <img 
                  src={product.imageSrc} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20 -mt-8">
                <h3 className={`text-2xl font-bold text-white mb-1 transition-colors ${product.mostPopular ? 'group-hover:text-amber-400' : 'group-hover:text-[#0ea5e9]'}`}>{product.title}</h3>
                <p className={`${product.mostPopular ? 'text-amber-400' : 'text-[#0ea5e9]'} font-semibold text-sm mb-4`}>{product.subtitle}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4 min-h-[80px]">
                  {product.description}
                </p>
                
                <p className="text-xs text-slate-500 font-medium mb-6 pb-6 border-b border-slate-700/50">
                  <span className="text-slate-600">For:</span> {product.targetAudience}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${product.mostPopular ? 'bg-amber-500/10 group-hover:bg-amber-500/20' : 'bg-[#0ea5e9]/10 group-hover:bg-[#0ea5e9]/20'}`}>
                        <Check className={`w-3 h-3 ${product.mostPopular ? 'text-amber-400' : 'text-[#0ea5e9]'}`} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#" 
                  className={`w-full py-3.5 rounded-xl font-bold text-center transition-all border ${product.mostPopular ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white border-transparent shadow-md shadow-amber-500/20' : product.buttonStyle}`}
                >
                  {product.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
