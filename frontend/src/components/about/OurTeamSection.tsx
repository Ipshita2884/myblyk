'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Tushar Vishnoi",
    role: "CO-FOUNDER & CEO",
    bio: "Tushar leads MyBlyk's business vision, strategic direction, and overall growth, focusing on venture development, business operations, strategic partnerships, and commercialization. With an entrepreneurial mindset and a focus on turning innovative ideas into sustainable opportunities, he works to strengthen MyBlyk's market presence, build meaningful partnerships, and transform its vision of more accessible and independent living into a lasting real-world impact.",
    focusAreas: ["Product & Business", "Strategy & Operations"],
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Khushboo Khanna",
    role: "CO-FOUNDER & CTO",
    bio: "Khushboo leads MyBlyk's technological vision and product development, bringing together AI, computer vision, embedded systems, and assistive technology to build meaningful, real-world solutions. Alongside driving engineering and innovation, she actively contributes to business development and strategic decision-making, helping transform MyBlyk's ideas into impactful products with the potential to make everyday life more accessible and independent.",
    focusAreas: ["Technology & AI", "Product Development"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
  },
  {
  name: "Ipshita Jain",
  role: "FOUNDING MEMBER & FULL STACK AND AI ENGINEER",
  bio: "Ipshita leads software development at MyBlyk, contributing to the design and development of its application while driving AI integration and full-stack engineering. As a founding member, she works across application architecture, intelligent systems, and product development, helping transform MyBlyk’s vision into practical, user-focused technology that promotes greater accessibility and independence in everyday life.",
  focusAreas: ["Software Development", "AI Engineering"],
    image: "https://res.cloudinary.com/b0mw7bwl/image/upload/v1792682633/ipshita_profile.jpg"
  }
];

export default function OurTeamSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      
      {/* Decorative background for the premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-white to-white pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-blue-100">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
            OUR TEAM
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
            The People Behind MyBlyk
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            A multidisciplinary team bringing together technology, product thinking and a shared commitment to making assistive technology more useful in everyday life.
          </p>
        </div>

        {/* Alternating Staggered Team List */}
        <div className="flex flex-col gap-20">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0; // True for Left Image, False for Right Image
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center group`}
              >
                
                {/* Image (Half in, Half out effect) */}
                <div className={`w-full max-w-[280px] md:w-1/3 relative z-20 ${isEven ? 'md:-mr-16 lg:-mr-24' : 'md:-ml-16 lg:-ml-24'} mb-6 md:mb-0 shrink-0`}>
                  <motion.div 
                    whileHover={{ scale: 1.04, rotate: isEven ? -3 : 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(2,132,199,0.2)] border-[6px] border-white relative bg-slate-100"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Inner glowing overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>
                
                {/* Text Card */}
                <div className="w-full md:w-2/3 relative z-10 flex-grow">
                  <motion.div 
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.3 }}
                    className={`relative bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[2rem] py-8 px-8 md:py-12 ${isEven ? 'md:pl-24 lg:pl-32 md:pr-10' : 'md:pr-24 lg:pr-32 md:pl-10'} shadow-xl hover:shadow-2xl hover:shadow-blue-900/5 transition-all overflow-hidden`}
                  >
                    {/* Premium Card Pattern (Dots) */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                        {member.name}
                      </h3>
                      
                      <p className="text-[#0ea5e9] text-sm font-bold tracking-widest mb-5 uppercase">
                        {member.role}
                      </p>

                      {member.focusAreas && member.focusAreas.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {member.focusAreas.map((area, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="w-10 h-1 bg-blue-100 rounded-full mb-5 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500" />

                      <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
