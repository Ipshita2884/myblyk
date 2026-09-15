"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export default function BusinessInfo() {
  const infoItems = [
    { label: "Legal Name", value: "Trinetrum Ventures Private Limited" },
    { label: "Registered", value: "India (Companies Act 2013)" },
    { label: "Headquarters", value: "Bengaluru, Karnataka 560001" },
    { label: "Founded", value: "2024" },
    { label: "Focus", value: "Assistive AI, Deep-Tech, Computer Vision" },
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    
    e.currentTarget.style.setProperty("--mouse-x", `${mouseX}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    x.set(0);
    y.set(0);
    e.currentTarget.style.setProperty("--mouse-x", `-1000px`);
    e.currentTarget.style.setProperty("--mouse-y", `-1000px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group perspective-1000 w-full"
    >
      <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 relative overflow-hidden transition-shadow hover:shadow-lg">
        {/* Dynamic Glowing Orb */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(500px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(14, 165, 233, 0.05), transparent 40%)`
          }}
        />

        <div className="relative z-10">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Business Information
          </h3>
          <div className="space-y-0">
            {infoItems.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-4 border-b border-gray-100 last:border-0 last:pb-0">
                <span className="text-slate-500 text-[13px] font-medium mb-1 sm:mb-0">{item.label}</span>
                <span className="text-slate-900 font-bold text-[13px] sm:text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
