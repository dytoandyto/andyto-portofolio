"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // Base delay in seconds before animation begins
  stagger?: number; // Stagger delay in seconds between consecutive words
  duration?: number; // Duration of each word's transition in seconds
  highlightWord?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  trigger?: "load" | "view";
  threshold?: number;
  rootMargin?: string;
  variant?: "rise" | "clip" | "fade";
  accentPunctuation?: boolean;
  onAnimationComplete?: () => void;
}

/**
 * React Bits - SplitText
 * Splits text into individual editorial words with coordinated spring or ease reveal physics.
 * Accessible, zero-layout-shift, and respects prefers-reduced-motion.
 */
export function SplitText({
  text,
  className = "",
  delay = 0.05,
  stagger = 0.045,
  duration = 0.6,
  highlightWord,
  highlightWords,
  highlightClassName = "text-[#D4FF69] font-editorial-accent italic font-normal",
  as: Component = "p",
  trigger = "view",
  rootMargin = "-40px",
  variant = "rise",
  accentPunctuation = false,
  onAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const renderWordContent = (w: string) => {
    if (accentPunctuation) {
      const match = w.match(/^(.*?)([.,?!]+)$/);
      if (match) {
        return (
          <>
            {match[1]}
            <span className="text-[#D4FF69]">{match[2]}</span>
          </>
        );
      }
    }
    return w;
  };

  // Trigger viewport check if trigger === "view"
  const inView = useInView(containerRef, {
    once: true,
    margin: rootMargin as NonNullable<Parameters<typeof useInView>[1]>["margin"],
  });

  const isTriggered = trigger === "load" ? true : inView;

  // Reduced motion: return accessible static text immediately
  if (shouldReduceMotion) {
    const lines = text.split("\n");
    return (
      <Component className={className}>
        {lines.map((line, lineIdx) => {
          const words = line.trim().split(" ");
          return (
            <span key={lineIdx} className="block last:mb-0">
              {words.map((word, wordIdx) => {
                const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
                const isHighlight =
                  (highlightWord && cleanWord === highlightWord.replace(/[^a-zA-Z]/g, "").toLowerCase()) ||
                  (highlightWords && highlightWords.some((hw) => cleanWord === hw.replace(/[^a-zA-Z]/g, "").toLowerCase()));

                return (
                  <span
                    key={wordIdx}
                    className={`inline-block mr-[0.24em] last:mr-0 ${isHighlight ? highlightClassName : ""}`}
                  >
                    {renderWordContent(word)}
                  </span>
                );
              })}
            </span>
          );
        })}
      </Component>
    );
  }

  const lines = text.split("\n");

  // Pre-calculate global word indices to maintain continuous stagger across line breaks
  let globalWordCounter = 0;
  const structuredLines = lines.map((line) => {
    const words = line.trim().split(" ");
    return words.map((word) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
      const isHighlight =
        (highlightWord && cleanWord === highlightWord.replace(/[^a-zA-Z]/g, "").toLowerCase()) ||
        (highlightWords && highlightWords.some((hw) => cleanWord === hw.replace(/[^a-zA-Z]/g, "").toLowerCase()));
      const wordIndex = globalWordCounter++;
      return { word, isHighlight, wordIndex };
    });
  });

  const totalWords = globalWordCounter;

  return (
    <Component
      ref={containerRef as unknown as React.Ref<HTMLParagraphElement>}
      className={`relative ${className}`}
    >
      {/* Screen-reader accessible single string */}
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>

      {/* Visual animated tokens */}
      <span aria-hidden="true" className="block">
        {structuredLines.map((line, lineIdx) => (
          <span key={lineIdx} className="block last:mb-0">
            {line.map(({ word, isHighlight, wordIndex }) => {
              const wordDelay = delay + wordIndex * stagger;
              const isLastWord = wordIndex === totalWords - 1;

              // Animation styles based on variant
              const initialStyle =
                variant === "clip"
                  ? { opacity: 0, y: "115%" }
                  : variant === "fade"
                  ? { opacity: 0 }
                  : { opacity: 0, y: 28, filter: "blur(4px)" };

              const animateStyle = isTriggered
                ? variant === "clip"
                  ? { opacity: 1, y: "0%" }
                  : variant === "fade"
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
                : initialStyle;

              const transitionConfig = {
                delay: wordDelay,
                duration: duration,
                type: "spring" as const,
                stiffness: 175,
                damping: 22,
                mass: 0.75,
              };

              return (
                <span
                  key={wordIndex}
                  className={`inline-block ${
                    variant === "clip" ? "overflow-hidden pb-1 pt-0.5" : "overflow-visible"
                  } mr-[0.24em] last:mr-0 align-top`}
                >
                  <motion.span
                    initial={initialStyle}
                    animate={animateStyle}
                    transition={transitionConfig}
                    onAnimationComplete={isLastWord ? onAnimationComplete : undefined}
                    className={`inline-block will-change-[transform,opacity] ${
                      isHighlight ? highlightClassName : ""
                    }`}
                  >
                    {renderWordContent(word)}
                  </motion.span>
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </Component>
  );
}

export default SplitText;
