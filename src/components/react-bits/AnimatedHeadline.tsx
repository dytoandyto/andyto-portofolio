"use client";

import React from "react";
import { motion } from "motion/react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  highlightWord?: string;
  highlightClassName?: string;
}

/**
 * React Bits - SplitText
 * Splits text into deliberate editorial lines and words with spring physics reveal.
 * Eliminates character clipping and awkward wrapping across screen sizes.
 */
export function AnimatedHeadline({
  text,
  className = "",
  delay = 0.1,
  duration = 0.65,
  stagger = 0.045,
  highlightWord,
  highlightClassName = "text-[#D4FF69] font-editorial-accent italic font-normal pr-0.5",
}: SplitTextProps) {
  // Support deliberate line breaks via '\n'
  const lines = text.split("\n");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: "120%",
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 26,
        stiffness: 170,
        duration: duration,
      },
    },
  };

  return (
    <motion.h1
      className={`font-sans tracking-[-0.03em] leading-[1.12] ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, lineIndex) => {
        const words = line.trim().split(" ");
        return (
          <span key={lineIndex} className="block last:mb-0">
            {words.map((word, wordIndex) => {
              const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
              const isHighlight =
                highlightWord &&
                cleanWord === highlightWord.replace(/[^a-zA-Z]/g, "").toLowerCase();

              return (
                <span
                  key={wordIndex}
                  className="inline-block overflow-hidden pb-1 pt-0.5 mr-[0.24em] last:mr-0 align-top"
                >
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block ${
                      isHighlight ? highlightClassName : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </motion.h1>
  );
}
