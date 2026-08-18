"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Eye, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path 
      ? "text-[#0ea5e9] font-bold border-b-2 border-[#0ea5e9]" 
      : "text-slate-600 hover:text-slate-900 font-medium";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-none tracking-tight text-slate-900">Trinetrum</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">VENTURES</span>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`py-7 transition-colors ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/ai-wear" className={`py-7 transition-colors ${isActive("/ai-wear")}`}>
              AI-Wear
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-slate-900 font-medium py-7 transition-colors">
              About
            </Link>
            <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium py-7 transition-colors">
              Company <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 font-medium py-7 transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/signin" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
              Sign In
            </Link>
            <Link 
              href="/ai-wear" 
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5"
            >
              Explore AI-Wear
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
