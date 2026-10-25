"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      type="button"
      onClick={scrollToTop}
      className="flex items-center gap-1.5 hover:text-[#D4FF69] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] px-2 py-1 rounded cursor-pointer"
      aria-label="Return to top of page"
    >
      <span>Top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </motion.button>
  );
}
