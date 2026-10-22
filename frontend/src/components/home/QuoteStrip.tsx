export default function QuoteStrip() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Quote mark icon */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-12 h-12 text-white/30"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Hindi quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-6">
          <span className="italic">
            &quot;दृष्टि की कमी कभी भी किसी की क्षमता को सीमित नहीं कर सकती।&quot;
          </span>
        </blockquote>

        {/* Attribution */}
        <cite className="text-white/60 text-sm not-italic">
          {/* TODO: Add attribution if applicable */}
        </cite>
      </div>
    </section>
  );
}
