"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedVRBotProps {
  isPeeking: boolean;
  isTyping?: boolean;
  authStatus?: 'idle' | 'error' | 'success';
}

export default function AnimatedVRBot({ isPeeking, isTyping = false, authStatus = 'idle' }: AnimatedVRBotProps) {
  // Mouse position state (normalized from -1 to 1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to range [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Use springs for smooth following
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    // If typing, blend the mouse tracking with a downward bias towards the form
    if (isTyping) {
      smoothX.set(mousePos.x * 0.8);
      smoothY.set(0.5 + (mousePos.y * 0.5));
    } else {
      smoothX.set(mousePos.x);
      smoothY.set(mousePos.y);
    }
  }, [mousePos, isTyping, smoothX, smoothY]);

  // Transform normalized coordinates into translation values for different body parts (exaggerated for better effect)
  const headRotateX = useTransform(smoothY, [-1, 1], [-25, 25]);
  const headRotateY = useTransform(smoothX, [-1, 1], [-35, 35]);
  
  const eyeMoveX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const eyeMoveY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const earMoveX = useTransform(smoothX, [-1, 1], [6, -6]);

  const getEyeColor = () => {
    if (!isPeeking) return "#cbd5e1";
    if (authStatus === 'error') return "#ef4444"; // red
    if (authStatus === 'success') return "#22c55e"; // green
    return "#0ea5e9"; // blue
  };

  const getAntennaColor = () => {
    if (authStatus === 'error') return "#ef4444";
    if (authStatus === 'success') return "#22c55e";
    return isPeeking ? "#0ea5e9" : "#94a3b8";
  };

  return (
    <div className="relative w-48 h-48 flex items-center justify-center perspective-1000">
      <motion.div
        animate={authStatus === 'error' ? { x: [-5, 5, -5, 5, 0] } : {}}
        transition={authStatus === 'error' ? { duration: 0.4 } : {}}
        style={{
          rotateX: headRotateX,
          rotateY: headRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-32 h-32"
      >
        {/* Antenna */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-slate-300 rounded-t-full">
          <motion.div 
            animate={{ 
              scale: isPeeking ? [1, 1.3, 1] : 1,
              backgroundColor: getAntennaColor() 
            }}
            transition={{ duration: 0.5 }}
            className="absolute -top-2 -left-1 w-3 h-3 rounded-full"
          />
        </div>

        {/* Head Base */}
        <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl border-4 border-slate-100 overflow-hidden">
          
          {/* Eyes (Underneath the visor) */}
          <motion.div 
            style={{ x: eyeMoveX, y: eyeMoveY }}
            className="absolute top-10 left-0 w-full flex justify-center gap-6"
          >
            {/* Left Eye */}
            <motion.div 
              animate={{ 
                scaleY: isPeeking ? 1 : 0.1, 
                backgroundColor: getEyeColor() 
              }}
              className="w-4 h-6 rounded-full"
            />
            {/* Right Eye */}
            <motion.div 
              animate={{ 
                scaleY: isPeeking ? 1 : 0.1, 
                backgroundColor: getEyeColor() 
              }}
              className="w-4 h-6 rounded-full"
            />
          </motion.div>

          {/* VR Visor */}
          <motion.div
            animate={{ 
              y: isPeeking ? -24 : 0,
              opacity: isPeeking ? 0.3 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-8 -left-4 w-[120%] h-12 bg-slate-900 rounded-lg shadow-inner flex items-center justify-center overflow-hidden"
          >
            {/* Visor Reflection/Glass effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20" />
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-white/10 skew-x-12"
            />
          </motion.div>
          
          {/* Mouth / Speaker Grill */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ height: isTyping ? [4, 8, 4] : 4 }}
                transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0, delay: i * 0.1 }}
                className="w-1 bg-slate-200 rounded-full"
              />
            ))}
          </div>

        </div>

        {/* Ears / Headset joints */}
        <motion.div style={{ x: earMoveX }} className="absolute top-10 -left-2 w-3 h-8 bg-slate-300 rounded-l-md" />
        <motion.div style={{ x: earMoveX }} className="absolute top-10 -right-2 w-3 h-8 bg-slate-300 rounded-r-md" />
      </motion.div>
    </div>
  );
}
