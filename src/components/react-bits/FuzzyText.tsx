"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion } from "motion/react";

export interface FuzzyTextProps {
  children: string | number;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  color?: string;
  trigger?: "hover" | "always" | "auto";
  baseIntensity?: number;
  hoverIntensity?: number;
  fuzzRange?: number;
  sliceSize?: number;
  fps?: number;
  direction?: "horizontal" | "vertical";
  intro?: boolean;
  introDuration?: number;
  enableHover?: boolean;
  clickEffect?: boolean;
  glitchMode?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * React Bits - FuzzyText
 * Deliberate digital fuzz and technical displacement text effect.
 * Renders via Canvas 2D with zero external dependencies, responsive font scaling,
 * high-DPI scaling, and screen-reader accessibility.
 */
export function FuzzyText({
  children,
  fontSize = "clamp(5rem, 18vw, 12rem)",
  fontWeight = 900,
  fontFamily = "var(--font-sans), Manrope, sans-serif",
  color = "#F2F0E9",
  trigger = "hover",
  baseIntensity = 0.12,
  hoverIntensity = 0.38,
  fuzzRange = 18,
  sliceSize = 2,
  fps = 40,
  direction = "horizontal",
  intro = true,
  introDuration = 1100,
  enableHover = true,
  clickEffect = false,
  glitchMode = false,
  className = "",
  style = {},
}: FuzzyTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const textString = String(children);

  const [isHovered, setIsHovered] = useState(false);
  const [clickActive, setClickActive] = useState(false);

  const shouldReduceMotion = useReducedMotion() ?? false;

  // Click burst effect
  const handleClick = useCallback(() => {
    if (!clickEffect || shouldReduceMotion) return;
    setClickActive(true);
    setTimeout(() => setClickActive(false), 240);
  }, [clickEffect, shouldReduceMotion]);

  // Canvas drawing & animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let animationFrameId: number;
    let lastDrawTime = 0;
    const frameInterval = 1000 / fps;

    // Create offscreen canvas for rendering crisp base text
    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d");

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisible) return;
      if (currentTime - lastDrawTime < frameInterval) return;
      lastDrawTime = currentTime;

      // Track intro timing without triggering React component re-renders
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }
      const elapsed = currentTime - startTimeRef.current;
      const introProgress = Math.min(1, elapsed / introDuration);

      // Resolve computed font size from container styles
      const computedStyles = window.getComputedStyle(container);
      const computedFontSize = parseFloat(computedStyles.fontSize) || 96;
      const font = `${fontWeight} ${computedFontSize}px ${fontFamily}`;

      if (!offCtx) return;

      offCtx.font = font;
      const metrics = offCtx.measureText(textString);
      const textWidth = Math.ceil(metrics.width);
      const actualHeight = Math.ceil(
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent || computedFontSize
      );

      const paddingX = Math.ceil(fuzzRange * 2);
      const paddingY = Math.ceil(fuzzRange * 1.5);
      const targetWidth = textWidth + paddingX * 2;
      const targetHeight = actualHeight + paddingY * 2;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Resize offscreen canvas if needed
      if (offscreen.width !== targetWidth * dpr || offscreen.height !== targetHeight * dpr) {
        offscreen.width = targetWidth * dpr;
        offscreen.height = targetHeight * dpr;
        offCtx.scale(dpr, dpr);
      }

      // Draw static text to offscreen canvas
      offCtx.clearRect(0, 0, targetWidth, targetHeight);
      offCtx.font = font;
      offCtx.fillStyle = color;
      offCtx.textBaseline = "top";
      offCtx.fillText(textString, paddingX, paddingY);

      // Resize main canvas
      if (canvas.width !== targetWidth * dpr || canvas.height !== targetHeight * dpr) {
        canvas.width = targetWidth * dpr;
        canvas.height = targetHeight * dpr;
        canvas.style.width = `${targetWidth}px`;
        canvas.style.height = `${targetHeight}px`;
        ctx.scale(dpr, dpr);
      }

      ctx.clearRect(0, 0, targetWidth, targetHeight);

      // Calculate effective intensity
      let intensity = baseIntensity;

      if (trigger === "always") {
        intensity = hoverIntensity;
      } else if (isHovered && enableHover) {
        intensity = hoverIntensity;
      }

      // Apply intro burst decay
      if (intro && introProgress < 1) {
        const introFactor = (1 - introProgress) * 0.6;
        intensity = Math.max(intensity, introFactor);
      }

      // Apply click glitch burst
      if (clickActive) {
        intensity = Math.max(intensity, 0.85);
      }

      // Occasional glitch twitch
      if (glitchMode && Math.random() < 0.08) {
        intensity = Math.min(1, intensity * 2.2);
      }

      // If user prefers reduced motion, render without displacement
      if (shouldReduceMotion) {
        ctx.drawImage(offscreen, 0, 0, targetWidth * dpr, targetHeight * dpr, 0, 0, targetWidth, targetHeight);
        return;
      }

      // Slice and displace
      if (direction === "horizontal") {
        const step = Math.max(1, sliceSize);
        for (let y = 0; y < targetHeight; y += step) {
          const sliceH = Math.min(step, targetHeight - y);
          const maxDisplacement = fuzzRange * intensity;
          const dx = (Math.random() * 2 - 1) * maxDisplacement;

          ctx.drawImage(
            offscreen,
            0,
            y * dpr,
            targetWidth * dpr,
            sliceH * dpr,
            dx,
            y,
            targetWidth,
            sliceH
          );
        }
      } else {
        const step = Math.max(1, sliceSize);
        for (let x = 0; x < targetWidth; x += step) {
          const sliceW = Math.min(step, targetWidth - x);
          const maxDisplacement = fuzzRange * intensity;
          const dy = (Math.random() * 2 - 1) * maxDisplacement;

          ctx.drawImage(
            offscreen,
            x * dpr,
            0,
            sliceW * dpr,
            targetHeight * dpr,
            x,
            dy,
            sliceW,
            targetHeight
          );
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [
    textString,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    trigger,
    baseIntensity,
    hoverIntensity,
    fuzzRange,
    sliceSize,
    fps,
    direction,
    intro,
    introDuration,
    isHovered,
    enableHover,
    clickActive,
    glitchMode,
    shouldReduceMotion,
  ]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{
        fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
        fontWeight,
        fontFamily,
        lineHeight: 1,
        ...style,
      }}
    >
      {/* Screen-reader accessible label */}
      <span className="sr-only">{textString}</span>

      {/* Visual Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="block pointer-events-auto"
      />
    </div>
  );
}

export default FuzzyText;
