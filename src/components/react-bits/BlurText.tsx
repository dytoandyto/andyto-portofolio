"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number; // Delay between words in seconds (e.g. 0.045 for 45ms)
  initialDelay?: number; // Base delay in seconds before animation begins
  duration?: number; // Duration of each word's transition in seconds
  initialBlur?: number; // Starting blur amount in px
  direction?: "top" | "bottom";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  trigger?: "load" | "view";
  rootMargin?: string;
  accentPunctuation?: boolean;
  onAnimationComplete?: () => void;
}

/**
 * React Bits - BlurText
 * Progressive soft-focus word reveal where text starts blurred and crisply focuses into place.
 * Powered by Motion for React, fully accessible, and honors prefers-reduced-motion.
 */
export function BlurText({
  text,
  className = "",
  delay = 0.045,
  initialDelay = 0.05,
  duration = 0.55,
  initialBlur = 10,
  direction = "bottom",
  as: Component = "p",
  trigger = "view",
  rootMargin = "-40px",
  accentPunctuation = false,
  onAnimationComplete,
}: BlurTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const inView = useInView(containerRef, {
    once: true,
    margin: rootMargin as NonNullable<Parameters<typeof useInView>[1]>["margin"],
  });

  const isTriggered = trigger === "load" ? true : inView;

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

  // Reduced motion: return accessible static text immediately
  if (shouldReduceMotion) {
    if (accentPunctuation) {
      const words = text.split(" ");
      return (
        <Component className={className}>
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-[0.26em] last:mr-0">
              {renderWordContent(word)}
            </span>
          ))}
        </Component>
      );
    }
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(" ");
  const totalWords = words.length;
  const yOffset = direction === "top" ? -18 : 18;

  return (
    <Component
      ref={containerRef as unknown as React.Ref<HTMLParagraphElement>}
      className={`relative ${className}`}
    >
      {/* Screen-reader accessible full text string */}
      <span className="sr-only">{text}</span>

      {/* Visual animated tokens */}
      <span aria-hidden="true" className="block">
        {words.map((word, index) => {
          const wordDelay = initialDelay + index * delay;
          const isLastWord = index === totalWords - 1;

          const initialStyle = {
            opacity: 0,
            y: yOffset,
            filter: `blur(${initialBlur}px)`,
          };

          const animateStyle = isTriggered
            ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
            : initialStyle;

          return (
            <motion.span
              key={index}
              initial={initialStyle}
              animate={animateStyle}
              transition={{
                delay: wordDelay,
                duration: duration,
                ease: [0.25, 1, 0.5, 1], // Soft natural focus curve
              }}
              onAnimationComplete={isLastWord ? onAnimationComplete : undefined}
              className="inline-block mr-[0.26em] last:mr-0 will-change-[transform,opacity,filter]"
            >
              {renderWordContent(word)}
            </motion.span>
          );
        })}
      </span>
    </Component>
  );
}

export default BlurText;
