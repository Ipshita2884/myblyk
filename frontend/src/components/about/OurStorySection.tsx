export default function OurStorySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="pr-4 lg:pr-8">
            <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-blue-100">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
              OUR STORY
            </div>

            <h2 className="text-4xl md:text-[2.75rem] font-extrabold mb-8 leading-tight text-slate-900 tracking-tight">
              A problem too important to ignore
            </h2>

            <div className="space-y-6 text-slate-600 text-[1.1rem] leading-relaxed">
              <p>
                Trinetrum was born from a personal encounter. Our founders witnessed
                firsthand the daily challenges faced by visually impaired individuals in
                navigating a world that wasn't designed for them — and realized that the
                technology to change this already existed. It just hadn't been assembled the
                right way.
              </p>
              <p>
                We asked a simple question: what if smart glasses could truly see the world
                on your behalf? Not just detect objects, but understand context. Not just
                work online, but work everywhere. Not just inform, but guide — with the
                naturalness of a trusted friend.
              </p>
              <p>
                That question became AI-Wear. And AI-Wear became Trinetrum Ventures —
                a company committed to building assistive technology that is worthy of the
                people who need it.
              </p>
            </div>
          </div>

          {/* Right Images & Graphics Content */}
          <div className="grid grid-cols-2 gap-6 h-full items-start">
            
            {/* Left Column (Image then Card) */}
            <div className="flex flex-col gap-6">
              <div className="rounded-[1.5rem] overflow-hidden aspect-[4/5] relative shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Engineering team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100/60 flex flex-col justify-center min-h-[120px]">
                <h4 className="text-slate-900 font-bold text-lg mb-1">India-Based</h4>
                <p className="text-[#64748b] text-[13px] leading-relaxed">Bengaluru, Karnataka</p>
              </div>
            </div>

            {/* Right Column (Card then Image) offset downwards */}
            <div className="flex flex-col gap-6 mt-16">
              <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100/60 flex flex-col justify-center min-h-[120px]">
                <h4 className="text-slate-900 font-bold text-lg mb-1">Deep-Tech</h4>
                <p className="text-[#64748b] text-[13px] leading-relaxed">AI, CV, Edge computing at core</p>
              </div>

              <div className="rounded-[1.5rem] overflow-hidden aspect-[4/5] relative shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                  alt="Founder portrait" 
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
