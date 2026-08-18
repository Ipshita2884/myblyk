import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4b5563] text-slate-400 pt-20 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#0ea5e9] p-1.5 rounded-lg text-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-white text-base leading-tight">Trinetrum Ventures</h1>
                <p className="text-[10px] text-slate-400 font-medium tracking-wide">Private Limited</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-sm mb-8 text-slate-400">
              Building the future of assistive technology through AI-powered wearables. Empowering the visually impaired to experience the world with independence and dignity.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center hover:bg-slate-600 hover:text-white hover:border-slate-400 transition-colors text-slate-400 text-xs font-medium">L</a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center hover:bg-slate-600 hover:text-white hover:border-slate-400 transition-colors text-slate-400 text-xs font-medium">T</a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center hover:bg-slate-600 hover:text-white hover:border-slate-400 transition-colors text-slate-400 text-xs font-medium">G</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-6">Company</h3>
            <ul className="space-y-4 text-xs font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-6">Product</h3>
            <ul className="space-y-4 text-xs font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">AI-Wear</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-6">Legal & Policies</h3>
            <ul className="space-y-4 text-xs font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Security Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Responsible Disclosure</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Accessibility Statement</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600/60 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full">
            <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
              <div className="w-8 h-8 rounded border border-slate-500/50 flex items-center justify-center">
                <span className="text-[14px]">✉</span>
              </div>
              hello@trinetrum.com
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-medium justify-center md:justify-start">
              <div className="w-8 h-8 rounded border border-slate-500/50 flex items-center justify-center">
                <span className="text-[14px]">📞</span>
              </div>
              +91 98765 43210
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-medium justify-end md:justify-start">
              <div className="w-8 h-8 rounded border border-slate-500/50 flex items-center justify-center">
                <span className="text-[14px]">📍</span>
              </div>
              Bengaluru, Karnataka, India
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 border-t border-slate-600/30 pt-8">
          <p>© 2026 Trinetrum Ventures Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
