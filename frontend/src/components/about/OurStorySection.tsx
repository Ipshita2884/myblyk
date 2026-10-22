export default function OurStorySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Full Width */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-blue-100">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
            FOUNDERS' THOUGHTS
          </div>

          <h2 className="text-4xl md:text-[2.75rem] font-extrabold mb-8 leading-tight text-slate-900 tracking-tight">
            A Problem We Couldn't Ignore
          </h2>
        </div>

        {/* Content and Images Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left - Paragraphs */}
          <div className="space-y-6 text-slate-600 text-[1.1rem] leading-relaxed">
            <p>
              MyBlyk's story began much closer to home. As Tushar's uncle gradually experienced significant vision loss, we began to see how even everyday activities could become challenging, making independence harder and reliance on others increasingly necessary.
            </p>
            <p>
              Around the same time, Khushboo's work in assistive technology research at a reputed defence research institution, focused on solutions for people who are blind or visually impaired, gave her a deeper understanding of the challenges people face beyond vision loss itself.
            </p>
            <p>
              Together, these experiences helped us recognize something important: the need was not just for better vision assistance, but for technology that could help people navigate the world with greater confidence, freedom, and independence.
            </p>
            <p>
              As we researched the problem further, we realized that what we had experienced personally was part of a much larger global challenge. More than 7.5 crore people in India live with some form of vision impairment, with significant social and economic consequences.
            </p>
            <p>
              We began asking a practical question: can technology help people understand their environment and gain greater independence? That question became the foundation of MyBlyk.
            </p>
          </div>

          {/* Right - Images & Graphics */}
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
                <h4 className="text-slate-900 font-bold text-lg mb-1">INDIA-BASED</h4>
                <p className="text-[#64748b] text-[13px] leading-relaxed">Moradabad, Uttar Pradesh</p>
              </div>
            </div>

            {/* Right Column (Card then Image) offset downwards */}
            <div className="flex flex-col gap-6 mt-16">
              <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100/60 flex flex-col justify-center min-h-[120px]">
                <h4 className="text-slate-900 font-bold text-lg mb-1">DEEP-TECH</h4>
                <p className="text-[#64748b] text-[13px] leading-relaxed">AI, computer vision, Edge AI and embedded intelligence at the core.</p>
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
