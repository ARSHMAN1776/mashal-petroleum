"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const AnimatedScrollBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth physics-based spring for fluid 60fps/120fps animated scroll tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Top Screen Edge Glowing Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F3C351] via-[#FF858A] to-[#4ADE80] origin-left z-[100] shadow-[0_0_12px_rgba(243,195,81,0.8)] pointer-events-none"
      />

      {/* 2. Floating Right-Edge Luxury Minimalist Animated Track */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-50 pointer-events-none hidden sm:flex flex-col items-center gap-2"
      >
        <div className="w-[3px] h-28 sm:h-36 bg-black/20 dark:bg-white/10 backdrop-blur-md rounded-full relative overflow-hidden shadow-sm">
          <motion.div
            style={{
              scaleY: smoothProgress,
              transformOrigin: "top",
            }}
            className="w-full h-full bg-gradient-to-b from-[#F3C351] via-[#FF858A] to-[#4ADE80] rounded-full shadow-[0_0_8px_rgba(243,195,81,0.6)]"
          />
        </div>
      </motion.div>
    </>
  );
};
