"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "AI-Wear", path: "/ai-wear" },
  { name: "About", path: "/about" },
  { name: "Career", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  // Smart Navbar State
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If at the very top, always show
      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else {
        // If scrolling UP, show navbar. If scrolling DOWN, hide it.
        if (currentScrollY < lastScrollY) {
          setShowNavbar(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false);
          // Also close mobile menu if it's open
          setHoveredPath(null);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white shadow-sm transition-transform hover:rotate-12">
              <Eye className="w-6 h-6" />
            </div>
            <Link href="/" className="flex flex-col">
              <span className="font-extrabold text-lg leading-none tracking-tight text-slate-900">Trinetrum</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">VENTURES</span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-2" onMouseLeave={() => setHoveredPath(null)}>
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              const isHovered = hoveredPath === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className={`relative px-4 py-2 rounded-full transition-colors ${
                    active ? "text-[#0ea5e9] font-bold" : "text-slate-600 font-medium"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-sky-50 rounded-full -z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                  )}
                  {active && !isHovered && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#0ea5e9] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/auth" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
              Sign In
            </Link>
            <Link 
              href="/ai-wear" 
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5"
            >
              Explore AI-Wear
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              onClick={() => setHoveredPath(hoveredPath === 'mobile' ? null : 'mobile')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={hoveredPath === 'mobile' ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {hoveredPath === 'mobile' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setHoveredPath(null)}
                  className={`block px-4 py-3 rounded-xl ${
                    isActive(link.path) ? "bg-sky-50 text-[#0ea5e9] font-bold" : "text-slate-600 font-medium hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <Link 
                href="/auth" 
                onClick={() => setHoveredPath(null)}
                className="block px-4 py-3 text-slate-600 font-medium hover:bg-gray-50 rounded-xl"
              >
                Sign In
              </Link>
              <Link 
                href="/ai-wear" 
                onClick={() => setHoveredPath(null)}
                className="block mt-2 bg-[#0ea5e9] text-white px-4 py-3 rounded-xl font-bold text-center"
              >
                Explore AI-Wear
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
