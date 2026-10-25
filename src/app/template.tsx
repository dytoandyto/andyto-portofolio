"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Global Page Route Transition Template
 * Automatically animates route changes in Next.js App Router without breaking
 * direct navigation, browser history, or scroll restoration.
 */
export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full flex-1"
    >
      {children}
    </motion.div>
  );
}
