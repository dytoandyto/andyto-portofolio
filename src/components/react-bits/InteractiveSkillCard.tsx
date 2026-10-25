"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

/**
 * React Bits - SpotlightCard
 * Card container with a dynamic cursor-tracking radial spotlight and border reflection.
 */
export function InteractiveSkillCard({
  children,
  className = "",
  spotlightColor = "rgba(212, 255, 105, 0.12)",
  borderColor = "rgba(212, 255, 105, 0.25)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`relative rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.1)] hover:border-[rgba(242,240,233,0.22)] overflow-hidden transition-colors focus-within:ring-2 focus-within:ring-[#B6DB61] ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Border Reflection */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 70%)`,
          maskImage: "linear-gradient(#fff, #fff)",
          WebkitMaskImage: "linear-gradient(#fff, #fff)",
          maskComposite: "exclude",
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
