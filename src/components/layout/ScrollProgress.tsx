"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B8E650] to-[#D4FF69] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(212,255,105,0.6)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
