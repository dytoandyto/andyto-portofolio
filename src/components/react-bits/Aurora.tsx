"use client";

import React, { useEffect, useRef } from "react";

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  speed?: number;
  blend?: number;
  className?: string;
  opacity?: number;
}

/**
 * React Bits - Aurora Background
 * Atmospheric, restrained organic ambient waves aligned to the Crafted Digital palette.
 * Palette: Ink Base (#111210), Deep Olive (#1B2719), Soft Sage (#2B3D28), Signal Lime (#D4FF69).
 * Lightweight, GPU-rendered, non-blocking (pointer-events-none).
 */
export function Aurora({
  colorStops = ["#111210", "#182216", "#263623", "#D4FF69"],
  amplitude = 1.0,
  speed = 0.5,
  blend = 0.6,
  className = "",
  opacity = 0.28,
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleResize = () => {
      // Scale down canvas internal resolution slightly for extreme performance
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      if (!ctx || width === 0 || height === 0) return;

      // Slow organic movement
      if (!prefersReducedMotion) {
        time += 0.0025 * speed;
      }

      ctx.clearRect(0, 0, width, height);

      // Multi-layer organic wave gradients
      const w = width;
      const h = height;

      // Layer 1: Base Dark Ink Soft Gradient
      const grad1 = ctx.createRadialGradient(
        w * 0.5,
        h * 0.2,
        w * 0.1,
        w * 0.5,
        h * 0.5,
        w * 0.8
      );
      grad1.addColorStop(0, "rgba(24, 34, 22, 0.45)");
      grad1.addColorStop(0.5, "rgba(17, 18, 16, 0.2)");
      grad1.addColorStop(1, "rgba(17, 18, 16, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      // Layer 2: Moving Deep Olive & Soft Sage Wave
      const waveX1 = w * (0.35 + Math.sin(time * 0.8) * 0.15 * amplitude);
      const waveY1 = h * (0.3 + Math.cos(time * 0.6) * 0.12 * amplitude);
      const radius1 = Math.max(w, h) * 0.45;

      const grad2 = ctx.createRadialGradient(waveX1, waveY1, 20, waveX1, waveY1, radius1);
      grad2.addColorStop(0, "rgba(38, 54, 35, 0.5)");
      grad2.addColorStop(0.4, "rgba(24, 34, 22, 0.25)");
      grad2.addColorStop(1, "rgba(17, 18, 16, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      // Layer 3: Surgical Signal Lime Ribbon (Restrained & Muted Glow)
      const waveX2 = w * (0.65 + Math.cos(time * 0.7) * 0.18 * amplitude);
      const waveY2 = h * (0.45 + Math.sin(time * 0.9) * 0.14 * amplitude);
      const radius2 = Math.max(w, h) * 0.38;

      const grad3 = ctx.createRadialGradient(waveX2, waveY2, 10, waveX2, waveY2, radius2);
      grad3.addColorStop(0, "rgba(212, 255, 105, 0.18)"); // Signal lime focal glow
      grad3.addColorStop(0.3, "rgba(184, 230, 80, 0.08)");
      grad3.addColorStop(0.7, "rgba(27, 39, 25, 0.03)");
      grad3.addColorStop(1, "rgba(17, 18, 16, 0)");
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, w, h);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [amplitude, speed, blend]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Subtle fine film-grain overlay texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(242,240,233,0.03)_1px,transparent_0)] bg-[size:28px_28px] opacity-70 pointer-events-none" />
    </div>
  );
}

export default Aurora;
