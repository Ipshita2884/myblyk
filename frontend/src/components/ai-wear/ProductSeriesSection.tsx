import { Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductSeriesSection() {
  const products = [
    {
      mostPopular: true,
      imagePlaceholder: "bg-blue-100",
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
      imagePlaceholder: "bg-amber-100",
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
      buttonStyle: "bg-transparent hover:bg-slate-50 text-slate-700 border-slate-200"
    },
    {
      mostPopular: false,
      imagePlaceholder: "bg-slate-200",
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
      buttonStyle: "bg-transparent hover:bg-slate-50 text-slate-700 border-slate-200"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-sky-50 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-6 border border-sky-100">
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
            <div key={index} className={`flex flex-col bg-white rounded-3xl overflow-hidden border ${product.mostPopular ? 'border-[#0ea5e9] shadow-xl shadow-[#0ea5e9]/10 relative transform md:-translate-y-4' : 'border-slate-100 shadow-sm hover:shadow-md transition-shadow'}`}>
              
              {product.mostPopular && (
                <div className="bg-[#0ea5e9] text-white text-xs font-bold uppercase tracking-wider py-2 text-center flex justify-center items-center gap-1 w-full absolute top-0 z-10">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              {/* Image Placeholder */}
              <div className={`w-full h-48 ${product.imagePlaceholder} ${product.mostPopular ? 'mt-8' : ''}`}>
                {/* Normally an <img /> would go here */}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{product.title}</h3>
                <p className="text-[#0ea5e9] font-semibold text-sm mb-4">{product.subtitle}</p>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 min-h-[80px]">
                  {product.description}
                </p>
                
                <p className="text-xs text-slate-500 font-medium mb-6 pb-6 border-b border-slate-100">
                  <span className="text-slate-400">For:</span> {product.targetAudience}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-[#0ea5e9] shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#" 
                  className={`w-full py-3.5 rounded-xl font-bold text-center transition-all border ${product.buttonStyle}`}
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
