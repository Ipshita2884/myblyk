"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { ReactNode, MouseEvent } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  detail: string;
  subdetail: string;
  delay: number;
}

function TiltCard({ icon, title, detail, subdetail, delay }: InfoCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
    
    // Set custom properties for the glow effect
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
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative flex-1 min-w-[280px] group"
    >
      <div 
        className="h-full relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        {/* Dynamic Glowing Orb */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(14, 165, 233, 0.08), transparent 40%)`
          }}
        />
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0ea5e9]">
            {icon}
          </div>
          <div>
            <h3 className="text-gray-500 text-xs font-medium mb-1">{title}</h3>
            <p className="text-slate-900 font-bold text-[15px] mb-0.5">{detail}</p>
            <p className="text-gray-400 text-xs">{subdetail}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactCards() {
  return (
    <div className="flex flex-col gap-6 w-full perspective-1000">
      <TiltCard 
        icon={<Mail className="w-5 h-5" />}
        title="Email"
        detail="hello@trinetrum.com"
        subdetail="We reply within 24 hours"
        delay={0.3}
      />
      <TiltCard 
        icon={<Phone className="w-5 h-5" />}
        title="Phone"
        detail="+91 98765 43210"
        subdetail="Mon-Fri, 9am-6pm IST"
        delay={0.4}
      />
      <TiltCard 
        icon={<MapPin className="w-5 h-5" />}
        title="Office"
        detail="Bengaluru, Karnataka"
        subdetail="India — Visits by appointment"
        delay={0.5}
      />
    </div>
  );
}
