export default function AboutHero() {
  return (
    <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] bg-transparent">

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-10 shadow-sm border border-blue-100">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
          ABOUT TRINETRUM
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-slate-900 tracking-tight">
          Built on Belief,<br />
          <span className="text-[#0ea5e9]">Driven by Purpose</span>
        </h1>

        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          We are a deep-tech company founded on the conviction that AI should serve humanity's most urgent needs — starting with independence for the visually impaired.
        </p>
      </div>
    </section>
  );
}
