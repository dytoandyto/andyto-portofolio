"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";

interface ScrollRevealTextProps {
  children: string;
  className?: string;
  baseOpacity?: number;
  highlightColor?: string;
}

/**
 * React Bits - ScrollReveal
 * Words smoothly illuminate as the user scrolls through the narrative.
 * Fully accessible with automatic prefers-reduced-motion detection.
 */
export function ScrollRevealText({
  children,
  className = "",
  baseOpacity = 0.25,
  highlightColor = "#F2F0E9",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const words = children.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap leading-[1.65] text-base sm:text-lg md:text-xl font-normal ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            baseOpacity={baseOpacity}
            highlightColor={highlightColor}
            shouldReduceMotion={!!shouldReduceMotion}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  baseOpacity: number;
  highlightColor: string;
  shouldReduceMotion: boolean;
}

function Word({
  children,
  progress,
  range,
  baseOpacity,
  highlightColor,
  shouldReduceMotion,
}: WordProps) {
  const opacity = useTransform(progress, range, [baseOpacity, 1]);
  const y = useTransform(progress, range, [4, 0]);

  if (shouldReduceMotion) {
    return (
      <span className="relative mr-[0.3em] inline-block mb-1">
        <span style={{ color: highlightColor }} className="inline-block">
          {children}
        </span>
      </span>
    );
  }

  return (
    <span className="relative mr-[0.3em] inline-block mb-1">
      <motion.span
        style={{ opacity, y, color: highlightColor }}
        className="inline-block transition-colors duration-150"
      >
        {children}
      </motion.span>
    </span>
  );
}
