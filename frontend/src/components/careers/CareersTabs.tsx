"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import CultureSection from "@/components/careers/CultureSection";
import OpenPositionsSection from "@/components/careers/OpenPositionsSection";
import GeneralApplication from "@/components/careers/GeneralApplication";

export default function CareersTabs() {
  const [activeTab, setActiveTab] = useState<"life" | "jobs">("life");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#open-positions") {
        setActiveTab("jobs");
        const el = document.getElementById("careers-tabs");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute" as const,
      width: "100%"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: "relative" as const,
      width: "100%"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute" as const,
      width: "100%"
    }),
  };

  const direction = activeTab === "jobs" ? 1 : -1;

  return (
    <div id="careers-tabs" className="w-full flex flex-col items-center overflow-hidden pt-8">
      
      {/* Segmented Control / Tabs */}
      <div className="relative flex bg-slate-100/50 p-1.5 rounded-full mb-12 shadow-inner border border-slate-200">
        <button
          onClick={() => setActiveTab("life")}
          className={`relative px-8 py-3 rounded-full text-sm font-bold z-10 transition-colors duration-300 ${activeTab === "life" ? "text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
        >
          Life at Trinetrum
        </button>
        <button
          onClick={() => setActiveTab("jobs")}
          className={`relative px-8 py-3 rounded-full text-sm font-bold z-10 transition-colors duration-300 ${activeTab === "jobs" ? "text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
        >
          Open Positions
        </button>

        {/* Sliding indicator */}
        <div 
          className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm border border-slate-200/50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(${activeTab === "life" ? "0%" : "100%"})` }}
        />
      </div>

      {/* Content Area */}
      <div className="relative w-full min-h-[800px]">
        <AnimatePresence custom={direction} mode="wait">
          
          {activeTab === "life" ? (
            <motion.div
              key="life"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="flex flex-col"
            >
              <WhyJoinUs />
              <CultureSection />
            </motion.div>
          ) : (
            <motion.div
              key="jobs"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="flex flex-col"
            >
              <OpenPositionsSection />
              <GeneralApplication />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
