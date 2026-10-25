'use client';

import React, { useEffect, useRef, type CSSProperties } from 'react';

export type ParticlesShape = 'circle' | 'square' | 'ring' | 'sparkle';
export type ParticlesHoverEffect = 'parallax' | 'repel' | 'attract';
export type ParticlesDrift = 'none' | 'up' | 'down' | 'forward';

export interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  pixelRatio?: number;
  shape?: ParticlesShape;
  glow?: number;
  twinkle?: number;
  depthOfField?: number;
  connections?: boolean;
  connectionDistance?: number;
  hoverEffect?: ParticlesHoverEffect;
  hoverRadius?: number;
  clickBurst?: boolean;
  drift?: ParticlesDrift;
  driftSpeed?: number;
  variation?: number;
  intro?: boolean;
  opacity?: number;
  lightMode?: boolean;
  paused?: boolean;
  className?: string;
  style?: CSSProperties;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface BurstParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

export const Particles = ({
  particleCount = 60,
  speed = 0.08,
  particleColors = ['#D4FF69', '#F2F0E9', '#8E9086'],
  moveParticlesOnHover = true,
  particleHoverFactor = 1,
  particleBaseSize = 24,
  sizeRandomness = 1,
  glow = 0.35,
  twinkle = 0.4,
  connections = false,
  connectionDistance = 85,
  hoverRadius = 140,
  clickBurst = true,
  drift = 'up',
  driftSpeed = 0.4,
  opacity = 0.5,
  paused = false,
  className = '',
  style
}: ParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let rafId = 0;
    let width = 0;
    let height = 0;
    let isVisible = true;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    const colors = (Array.isArray(particleColors) ? particleColors : [particleColors]).filter(Boolean);
    const palette = colors.length ? colors : ['#D4FF69', '#F2F0E9', '#8E9086'];

    // Mouse coordinates relative to canvas
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    // Initialize particles
    const particles: Particle[] = [];
    const count = Math.min(Math.max(10, particleCount), 150);

    const initParticles = (w: number, h: number) => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const baseSize = Math.max(1.5, (particleBaseSize / 14) * (1 + (Math.random() - 0.5) * sizeRandomness * 0.8));
        const col = palette[Math.floor(Math.random() * palette.length)];
        const vy = drift === 'up' ? -(0.3 + Math.random() * 0.5) * driftSpeed : (Math.random() - 0.5) * 0.4;
        const vx = (Math.random() - 0.5) * 0.3;

        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx,
          vy,
          size: baseSize,
          color: col,
          alpha: 0.3 + Math.random() * 0.5,
          baseAlpha: 0.3 + Math.random() * 0.5,
          twinkleSpeed: 0.02 + Math.random() * 0.04,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const bursts: BurstParticle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = container.clientWidth || 300;
      height = container.clientHeight || 150;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        initParticles(width, height);
      }
    };

    const spawnBurst = (x: number, y: number) => {
      if (!clickBurst || reduceMotion) return;
      for (let i = 0; i < 16; i++) {
        const angle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.3;
        const spd = 1.2 + Math.random() * 2.5;
        bursts.push({
          x,
          y,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          size: 2 + Math.random() * 2.5,
          color: palette[Math.floor(Math.random() * palette.length)],
          alpha: 0.9,
          life: 0,
          maxLife: 45 + Math.random() * 20,
        });
      }
    };

    let tick = 0;

    const render = () => {
      if (!isVisible || document.hidden || paused) return;

      ctx.clearRect(0, 0, width, height);

      tick++;
      const motionScale = reduceMotion ? 0 : 1;

      // Mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      }

      // Update and draw connections if enabled
      if (connections && !reduceMotion) {
        const maxDistSq = connectionDistance * connectionDistance;
        ctx.lineWidth = 0.75;

        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxDistSq) {
              const proximity = 1 - Math.sqrt(distSq) / connectionDistance;
              const lineAlpha = proximity * proximity * 0.28 * opacity;
              ctx.strokeStyle = `rgba(212, 255, 105, ${lineAlpha.toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (motionScale > 0) {
          p.x += p.vx * speed * 12;
          p.y += p.vy * speed * 12;

          // Wrap around canvas
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          // Mouse influence
          if (moveParticlesOnHover && mouse.active) {
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const mdist = Math.hypot(mdx, mdy);
            if (mdist < hoverRadius && mdist > 1) {
              const force = (1 - mdist / hoverRadius) * particleHoverFactor * 0.8;
              p.x += (mdx / mdist) * force;
              p.y += (mdy / mdist) * force;
            }
          }

          // Twinkle
          p.twinklePhase += p.twinkleSpeed;
          p.alpha = p.baseAlpha * (1 - twinkle * 0.5 * (0.5 + 0.5 * Math.sin(p.twinklePhase)));
        }

        const currentAlpha = p.alpha * opacity;

        // Draw particle dot
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, currentAlpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow aura
        if (glow > 0) {
          const glowRadius = p.size * (2.2 + glow * 2);
          const radGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
          radGrad.addColorStop(0, p.color);
          radGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = radGrad;
          ctx.globalAlpha = currentAlpha * 0.3 * glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw burst particles
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.x += b.vx;
        b.y += b.vy;
        b.life++;
        const progress = b.life / b.maxLife;
        const burstAlpha = (1 - progress) * b.alpha * opacity;

        ctx.fillStyle = b.color;
        ctx.globalAlpha = Math.max(0, burstAlpha);
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size * (1 - progress * 0.4), 0, Math.PI * 2);
        ctx.fill();

        if (b.life >= b.maxLife) {
          bursts.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1.0;

      if (!reduceMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handlePointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnBurst(x, y);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver((entries) => {
      isVisible = entries.some(e => e.isIntersecting);
      if (isVisible && !rafId && !reduceMotion) {
        rafId = requestAnimationFrame(render);
      }
    });
    intersectionObserver.observe(container);

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave);
    container.addEventListener('pointerdown', handlePointerDown);

    resize();
    render();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [
    particleCount,
    speed,
    particleColors,
    moveParticlesOnHover,
    particleHoverFactor,
    particleBaseSize,
    sizeRandomness,
    glow,
    twinkle,
    connections,
    connectionDistance,
    hoverRadius,
    clickBurst,
    drift,
    driftSpeed,
    opacity,
    paused,
  ]);

  return (
    <div
      ref={containerRef}
      className={['relative h-full w-full overflow-hidden', className].filter(Boolean).join(' ')}
      style={style}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" aria-hidden="true" />
    </div>
  );
};

export default Particles;
