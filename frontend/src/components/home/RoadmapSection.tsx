export default function RoadmapSection() {
  const phases = [
    {
      number: "01",
      title: "Ideation & Research",
      date: "October 2025",
      description: "Identifying the problem, understanding user needs and exploring the right technology and product approach.",
      status: "pending"
    },
    {
      number: "02",
      title: "Technical PoC",
      date: "March 2026",
      description: "Building and validating the core technical concepts through proof-of-concept development and testing.",
      status: "pending"
    },
    {
      number: "03",
      title: "Prototype & MVP",
      date: "July 2026",
      description: "Developing product-design prototypes and building the MVP around validated technology and real-world requirements.",
      status: "pending"
    },
    {
      number: "04",
      title: "Beta Trial",
      date: "January 2027",
      description: "Testing the MVP with selected users, gathering feedback and improving the product through real-world use.",
      status: "pending"
    },
    {
      number: "05",
      title: "Consumer Launch & Scale",
      date: "April 2027 & Continue",
      description: "Preparing MyBlyk for commercial availability and scaling the product based on user needs, market response and continuous development.",
      status: "pending"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-sky-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            OUR ROADMAP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            From an Idea to a Product People Can Rely On
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            MyBlyk is being developed through a step-by-step journey, with each stage focused on validating technology, improving the product and learning from real-world use.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pt-12 pb-8">
          {/* Continuous Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-slate-200 hidden md:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative text-center z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-slate-400 text-xs font-bold">{phase.number}</span>
                </div>
                <div className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">Phase {phase.number}</div>
                <h3 className="text-base font-bold text-slate-800 mb-1">{phase.title}</h3>
                <div className="text-slate-400 text-[11px] mb-4">{phase.date}</div>
                <p className="text-slate-500 text-[13px] leading-relaxed max-w-[200px] mx-auto">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
