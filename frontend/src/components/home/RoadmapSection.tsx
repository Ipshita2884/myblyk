export default function RoadmapSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-sky-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Our Roadmap to Universal Accessibility
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            From prototype to global deployment — every milestone is designed<br />with one north star: meaningful human impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pt-12 pb-8">
          {/* Continuous Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-slate-200 hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Phase 1 */}
            <div className="relative text-center z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center mb-6 shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">Phase 01</div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Research</h3>
              <div className="text-slate-400 text-[11px] mb-4">2023-24</div>
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-[200px] mx-auto">
                Deep research into assistive technology, edge AI architectures, and user needs with accessibility experts.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="relative text-center z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center mb-6 shadow-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">Phase 02</div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Prototype</h3>
              <div className="text-slate-400 text-[11px] mb-4">2024</div>
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-[200px] mx-auto">
                First working prototype of AI-Wear with basic computer vision and voice guidance capabilities validated.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative text-center z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[#0ea5e9] flex items-center justify-center mb-6 shadow-sm mx-auto">
                <div className="w-3 h-3 rounded-full bg-[#0ea5e9]"></div>
              </div>
              <div className="text-[#0ea5e9] text-xs font-bold uppercase tracking-widest mb-1">Phase 03</div>
              <h3 className="text-base font-bold text-slate-800 mb-1">MVP</h3>
              <div className="text-slate-400 text-[11px] mb-4">2025</div>
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-[200px] mx-auto">
                Minimum viable product with full edge AI pipeline, offline operation, and pilot user testing in progress.
              </p>
            </div>

            {/* Phase 4 */}
            <div className="relative text-center z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center mb-6 mx-auto">
              </div>
              <div className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">Phase 04</div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Consumer Launch</h3>
              <div className="text-slate-400 text-[11px] mb-4">2025-26</div>
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-[200px] mx-auto">
                Commercial launch of the Assist Series targeting the visually impaired market with SaaS platform.
              </p>
            </div>

            {/* Phase 5 */}
            <div className="relative text-center z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center mb-6 mx-auto">
              </div>
              <div className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">Phase 05</div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Global Scale</h3>
              <div className="text-slate-400 text-[11px] mb-4">2026+</div>
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-[200px] mx-auto">
                Enterprise and Industrial expansion, global market entry, and Explorer Series for tech enthusiasts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
