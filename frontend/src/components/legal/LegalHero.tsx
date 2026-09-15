interface LegalHeroProps {
  title: string;
  subtitle: string;
  date?: string;
}

export default function LegalHero({ title, subtitle, date = "July 1, 2025" }: LegalHeroProps) {
  return (
    <div className="pt-8 pb-12 text-left">
      <div className="inline-block px-3 py-1 rounded border border-gray-200 bg-gray-50 text-slate-500 text-[11px] font-medium tracking-wide uppercase mb-6">
        Legal Document
      </div>
      <h1 className="text-4xl md:text-[42px] font-bold tracking-tight text-slate-900 mb-4">
        {title}
      </h1>
      <p className="text-[15px] text-slate-600 mb-6">
        {subtitle}
      </p>
      <p className="text-[12px] text-gray-400 font-mono">
        Last updated: {date}
      </p>
    </div>
  );
}
