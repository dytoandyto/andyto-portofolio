"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "motion/react";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  disabled?: boolean;
}

/**
 * React Bits - TiltedCard
 * Interactive 3D tilt component responding with realistic cursor perspective physics.
 */
export function InteractiveProjectCard({
  children,
  className = "",
  maxTilt = 7, // Subtle editorial tilt
  scale = 1.015,
  perspective = 1200,
  disabled = false,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Springs for smooth physics
  const springConfig = { stiffness: 260, damping: 20 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const currentScale = useSpring(1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rX = -(mouseY / (rect.height / 2)) * maxTilt;
    const rY = (mouseX / (rect.width / 2)) * maxTilt;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
    currentScale.set(scale);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    currentScale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: currentScale,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full transition-shadow duration-300"
      >
        {children}

        {/* Subtle dynamic sheen reflection */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-60 transition-opacity"
            aria-hidden="true"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
