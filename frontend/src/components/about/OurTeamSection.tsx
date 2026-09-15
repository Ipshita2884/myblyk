'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "Co-Founder & CEO",
    bio: "Former ML researcher with expertise in edge AI and embedded systems. Passionate about democratizing assistive technology.",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Priya Nair",
    role: "Co-Founder & CTO",
    bio: "Computer vision engineer with 8+ years building real-time recognition systems. Led AI teams at two deep-tech startups.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Kavya Reddy",
    role: "Head of Design & UX",
    bio: "Human-centered designer with a background in accessibility research. Ensures AI-Wear works for real people in real contexts.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
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
            The People Behind AI-Wear
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed">
            A multidisciplinary team united by a shared conviction that technology can
            make the world more accessible for everyone.
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
