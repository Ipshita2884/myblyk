"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import AnimatedVRBot from "@/components/auth/AnimatedVRBot";

export default function AuthPage() {
  const [view, setView] = useState<"signin" | "signup">("signin");
  
  // Shared bot state
  const [showPassword, setShowPassword] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [authStatus, setAuthStatus] = useState<"idle" | "error" | "success">("idle");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  // Simple validation logic to trigger bot reactions
  useEffect(() => {
    if (!isTyping || passwordInput.length === 0) {
      setAuthStatus("idle");
      return;
    }
    
    if (view === "signup" && confirmPasswordInput.length > 0) {
      if (passwordInput === confirmPasswordInput && passwordInput.length >= 8) {
        setAuthStatus("success");
      } else {
        setAuthStatus("error");
      }
    } else if (passwordInput.length >= 8) {
      setAuthStatus("success");
    } else {
      setAuthStatus("error");
    }
  }, [passwordInput, confirmPasswordInput, isTyping, view]);

  const switchView = (newView: "signin" | "signup") => {
    setView(newView);
    setShowPassword(false);
    setPasswordInput("");
    setConfirmPasswordInput("");
    setAuthStatus("idle");
  };

  // Animation variants for the sliding effect
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  const direction = view === "signup" ? 1 : -1;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 w-full max-w-7xl mx-auto overflow-hidden">
          
          <div className="mb-4 z-20">
            <AnimatedVRBot 
              isPeeking={showPassword} 
              isTyping={isTyping} 
              authStatus={authStatus} 
            />
          </div>

          <div className="relative w-full max-w-md h-[600px] flex justify-center">
            <AnimatePresence custom={direction} mode="wait">
              
              {view === "signin" ? (
                <motion.div
                  key="signin"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back</h1>
                    <p className="text-sm text-slate-500 mt-2">Sign in to your Trinetrum account</p>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 w-full">
                    
                    <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-medium text-sm py-3 rounded-xl hover:bg-slate-50 transition-colors mb-6">
                      <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                          <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 52.749 L -8.284 52.749 C -8.574 53.879 -9.224 54.819 -10.204 55.469 L -10.204 57.679 L -6.324 57.679 C -4.054 55.599 -2.774 52.519 -3.264 51.509 Z"/>
                          <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.204 58.119 C -11.274 58.839 -12.634 59.279 -14.754 59.279 C -18.864 59.279 -22.334 56.509 -23.564 52.789 L -27.574 52.789 L -27.574 55.899 C -25.204 60.599 -20.324 63.239 -14.754 63.239 Z"/>
                          <path fill="#FBBC05" d="M -23.564 52.789 C -23.884 51.849 -24.064 50.849 -24.064 49.819 C -24.064 48.789 -23.884 47.789 -23.564 46.849 L -23.564 43.739 L -27.574 43.739 C -28.414 45.419 -28.894 47.339 -28.894 49.319 C -28.894 51.309 -28.414 53.229 -27.574 54.899 L -23.564 52.789 Z"/>
                          <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.339 -14.754 39.339 C -20.324 39.339 -25.204 41.979 -27.574 46.669 L -23.564 49.779 C -22.334 46.059 -18.864 43.989 -14.754 43.989 Z"/>
                        </g>
                      </svg>
                      Continue with Google
                    </button>

                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex-1 h-px bg-slate-100"></div>
                      <span className="text-xs text-slate-400 font-medium">or continue with email</span>
                      <div className="flex-1 h-px bg-slate-100"></div>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      
                      <div className="space-y-1.5">
                        <input 
                          type="email" 
                          placeholder="Email Address"
                          onFocus={() => setIsTyping(true)}
                          onBlur={() => setIsTyping(false)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5 relative">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Password"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          onFocus={() => setIsTyping(true)}
                          onBlur={() => setIsTyping(false)}
                          className={`w-full bg-white border rounded-xl px-4 py-3.5 pr-12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                            authStatus === 'error' ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 
                            authStatus === 'success' ? 'border-green-400 focus:border-green-500 focus:ring-green-500' : 
                            'border-slate-200 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]'
                          }`}
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0ea5e9] transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#0ea5e9] focus:ring-[#0ea5e9]" />
                          <span className="text-xs font-medium text-slate-600">Remember me</span>
                        </label>
                        <Link href="#" className="text-xs font-bold text-[#0ea5e9] hover:underline">
                          Forgot password?
                        </Link>
                      </div>

                      <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                        Sign In
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </button>
                    </form>

                  </div>
                  
                  <p className="mt-8 text-sm text-slate-500">
                    Don&apos;t have an account? <button onClick={() => switchView("signup")} className="text-[#0ea5e9] font-bold hover:underline">Create one</button>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Your Account</h1>
                    <p className="text-sm text-slate-500 mt-2">Join the AI-Wear early access community</p>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 w-full">

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      
                      <div className="space-y-1.5">
                        <input 
                          type="text" 
                          placeholder="Full Name *"
                          onFocus={() => setIsTyping(true)}
                          onBlur={() => setIsTyping(false)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <input 
                          type="email" 
                          placeholder="Email Address *"
                          onFocus={() => setIsTyping(true)}
                          onBlur={() => setIsTyping(false)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5 relative">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Password *"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          onFocus={() => setIsTyping(true)}
                          onBlur={() => setIsTyping(false)}
                          className={`w-full bg-white border rounded-xl px-4 py-3.5 pr-12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                            authStatus === 'error' ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 
                            authStatus === 'success' ? 'border-green-400 focus:border-green-500 focus:ring-green-500' : 
                            'border-slate-200 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]'
                          }`}
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0ea5e9] transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="space-y-1.5 relative">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Confirm Password *"
                          value={confirmPasswordInput}
                          onChange={(e) => setConfirmPasswordInput(e.target.value)}
                          onFocus={() => setIsTyping(true)}
                          onBlur={() => setIsTyping(false)}
                          className={`w-full bg-white border rounded-xl px-4 py-3.5 pr-12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                            authStatus === 'error' && confirmPasswordInput.length > 0 ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 
                            authStatus === 'success' && confirmPasswordInput.length > 0 ? 'border-green-400 focus:border-green-500 focus:ring-green-500' : 
                            'border-slate-200 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]'
                          }`}
                        />
                      </div>

                      <div className="pt-2 flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-[#0ea5e9] focus:ring-[#0ea5e9]" />
                        <span className="text-xs font-medium text-slate-600 leading-relaxed">
                          I agree to the <Link href="/terms-and-conditions" className="text-[#0ea5e9] hover:underline font-bold">Terms of Service</Link> and <Link href="/privacy-policy" className="text-[#0ea5e9] hover:underline font-bold">Privacy Policy</Link>
                        </span>
                      </div>

                      <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3.5 mt-2 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                        Create Account
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </button>
                    </form>

                  </div>
                  
                  <p className="mt-8 text-sm text-slate-500">
                    Already have an account? <button onClick={() => switchView("signin")} className="text-[#0ea5e9] font-bold hover:underline">Sign in</button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
