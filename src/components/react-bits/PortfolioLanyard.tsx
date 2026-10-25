"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { siteConfig } from "@/data/site-config";
import { Hand } from "lucide-react";

interface PortfolioLanyardProps {
  className?: string;
}

/**
 * React Bits - Lanyard 3D Component
 * Interactive physical 3D badge suspended on a dynamic swinging strap.
 * Fully customized for Andyto with Three.js rendering, spring physics, pointer drag,
 * flip-to-reverse inspection, and graceful WebGL / reduced-motion fallback.
 */
export function PortfolioLanyard({ className = "" }: PortfolioLanyardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLError, setWebGLError] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const canvas = document.createElement("canvas");
      return !Boolean(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (webGLError || !containerRef.current) return;
    const container = containerRef.current;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 460;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      setTimeout(() => setWebGLError(true), 0);
      return;
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd4ff69, 1.2);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf2f0e9, 1.0);
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    // Dynamic Badge Textures via Canvas 2D
    const createBadgeTexture = (isBack = false) => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 760;
      const ctx = canvas.getContext("2d")!;

      // Background
      ctx.fillStyle = isBack ? "#141512" : "#181916";
      ctx.fillRect(0, 0, 512, 760);

      // Border frame
      ctx.strokeStyle = isBack ? "rgba(212,255,105,0.4)" : "rgba(242,240,233,0.18)";
      ctx.lineWidth = 10;
      ctx.strokeRect(16, 16, 480, 728);

      // Lanyard punch hole
      ctx.fillStyle = "#111210";
      ctx.beginPath();
      ctx.roundRect(206, 36, 100, 24, 12);
      ctx.fill();
      ctx.strokeStyle = "rgba(242,240,233,0.2)";
      ctx.lineWidth = 3;
      ctx.stroke();

      if (!isBack) {
        // FRONT FACE
        // Header Eyebrow
        ctx.fillStyle = "#8E9086";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("ENGINEER ACCESS PASS", 256, 100);

        // Signal Lime accent bar
        ctx.fillStyle = "#D4FF69";
        ctx.fillRect(196, 115, 120, 4);

        // Monogram Shield Box
        ctx.fillStyle = "#111210";
        ctx.beginPath();
        ctx.roundRect(166, 140, 180, 180, 24);
        ctx.fill();
        ctx.strokeStyle = "rgba(212,255,105,0.5)";
        ctx.lineWidth = 4;
        ctx.stroke();

        // Monogram Initial
        ctx.fillStyle = "#F2F0E9";
        ctx.font = 'bold 96px Manrope, sans-serif';
        ctx.fillText("A.", 256, 265);

        // Name
        ctx.fillStyle = "#F2F0E9";
        ctx.font = 'bold 34px Manrope, sans-serif';
        ctx.fillText("ANDYTO", 256, 375);

        // Role
        ctx.fillStyle = "#D4FF69";
        ctx.font = '500 18px "IBM Plex Mono", monospace';
        ctx.fillText("SOFTWARE ENGINEER", 256, 410);

        ctx.fillStyle = "#8E9086";
        ctx.font = '16px Manrope, sans-serif';
        ctx.fillText("Product-minded Builder", 256, 440);

        // Divider
        ctx.strokeStyle = "rgba(242,240,233,0.1)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(48, 470);
        ctx.lineTo(464, 470);
        ctx.stroke();

        // Tech specs
        ctx.fillStyle = "#8E9086";
        ctx.font = '14px "IBM Plex Mono", monospace';
        ctx.textAlign = "left";
        ctx.fillText("STACK : Next.js · React 19 · TS", 60, 510);
        ctx.fillText("FOCUS : Frontend · UI/UX · FullStack", 60, 540);
        ctx.fillText("ORIGIN: Indonesia", 60, 570);

        // Mock barcode at bottom
        ctx.fillStyle = "#F2F0E9";
        for (let i = 0; i < 40; i++) {
          const x = 60 + i * 10;
          const w = (i % 3 === 0 ? 5 : 2);
          ctx.fillRect(x, 610, w, 45);
        }
        ctx.fillStyle = "#8E9086";
        ctx.font = '12px "IBM Plex Mono", monospace';
        ctx.textAlign = "center";
        ctx.fillText("ID-2026-CRAFTED-DIGITAL", 256, 680);
      } else {
        // BACK FACE
        ctx.fillStyle = "#D4FF69";
        ctx.font = 'bold 18px "IBM Plex Mono", monospace';
        ctx.textAlign = "center";
        ctx.fillText("CRAFTED DIGITAL", 256, 120);

        ctx.fillStyle = "#F2F0E9";
        ctx.font = 'bold 26px Manrope, sans-serif';
        ctx.fillText("The Thoughtful Builder", 256, 180);

        ctx.fillStyle = "#8E9086";
        ctx.font = '16px Manrope, sans-serif';
        ctx.fillText('"I turn complex ideas into', 256, 240);
        ctx.fillText('thoughtful digital products."', 256, 270);

        // Core values
        ctx.fillStyle = "#D4FF69";
        ctx.font = 'bold 15px "IBM Plex Mono", monospace';
        ctx.fillText("01 / UNDERSTAND", 256, 360);
        ctx.fillText("02 / STRUCTURE", 256, 400);
        ctx.fillText("03 / DESIGN", 256, 440);
        ctx.fillText("04 / BUILD", 256, 480);
        ctx.fillText("05 / REFINE", 256, 520);

        ctx.strokeStyle = "rgba(212,255,105,0.2)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(256, 620, 36, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "#F2F0E9";
        ctx.font = 'bold 18px "IBM Plex Mono", monospace';
        ctx.fillText("VERIFIED", 256, 626);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 4;
      return texture;
    };

    const frontTexture = createBadgeTexture(false);
    const backTexture = createBadgeTexture(true);

    // Badge Mesh
    const badgeGeo = new THREE.BoxGeometry(2.3, 3.4, 0.08);
    const badgeMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x111210 }), // Right edge
      new THREE.MeshStandardMaterial({ color: 0x111210 }), // Left edge
      new THREE.MeshStandardMaterial({ color: 0x111210 }), // Top edge
      new THREE.MeshStandardMaterial({ color: 0x111210 }), // Bottom edge
      new THREE.MeshStandardMaterial({
        map: frontTexture,
        roughness: 0.35,
        metalness: 0.1,
      }), // Front
      new THREE.MeshStandardMaterial({
        map: backTexture,
        roughness: 0.35,
        metalness: 0.1,
      }), // Back
    ];

    const badgeGroup = new THREE.Group();
    const badgeMesh = new THREE.Mesh(badgeGeo, badgeMaterials);
    badgeMesh.position.y = -1.6;
    badgeGroup.add(badgeMesh);

    // Lanyard Strap (Segmented Curve)
    const curvePoints = [
      new THREE.Vector3(0, 3.2, 0), // Top Anchor
      new THREE.Vector3(0, 1.5, 0),
      new THREE.Vector3(0, 0, 0),   // Badge top connection
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const strapGeo = new THREE.TubeGeometry(curve, 20, 0.04, 8, false);
    const strapMat = new THREE.MeshStandardMaterial({
      color: 0xd4ff69,
      roughness: 0.6,
      metalness: 0.2,
    });
    const strapMesh = new THREE.Mesh(strapGeo, strapMat);
    badgeGroup.add(strapMesh);

    // Top Metal Ring
    const ringGeo = new THREE.TorusGeometry(0.18, 0.04, 12, 24);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf2f0e9,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(0, 0, 0);
    badgeGroup.add(ringMesh);

    scene.add(badgeGroup);

    // Physics & Interaction State
    let targetRotationX = 0;
    let targetRotationY = 0;
    let targetPosX = 0;
    let dragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      dragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      lastPointerX = clientX;
      lastPointerY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (dragging) {
        const deltaX = clientX - lastPointerX;
        const deltaY = clientY - lastPointerY;

        targetPosX += deltaX * 0.005;
        targetRotationY += deltaX * 0.015;
        targetRotationX += deltaY * 0.01;

        lastPointerX = clientX;
        lastPointerY = clientY;
      } else {
        // Hover pointer tilt
        const rect = container.getBoundingClientRect();
        const normX = (clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const normY = (clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

        targetPosX = normX * 0.35;
        targetRotationY = normX * 0.45;
        targetRotationX = normY * 0.25;
      }
    };

    const handlePointerUp = () => {
      dragging = false;
      targetPosX = 0;
      targetRotationX = 0;
    };

    const handleClick = () => {
      // Toggle 180 flip
      targetRotationY += Math.PI;
    };

    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    container.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    container.addEventListener("click", handleClick);

    // Animation Loop with Spring Physics
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const time = clock.getElapsedTime();

      // Check user motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Gentle ambient idle swing if not dragging and motion is permitted
      if (!dragging) {
        const idleSwing = prefersReducedMotion ? 0 : Math.sin(time * 1.5) * 0.06;
        badgeGroup.position.x += (targetPosX + idleSwing - badgeGroup.position.x) * (delta * 6);
        badgeGroup.rotation.z = -badgeGroup.position.x * 0.18;
      } else {
        badgeGroup.position.x += (targetPosX - badgeGroup.position.x) * (delta * 12);
        badgeGroup.rotation.z = -badgeGroup.position.x * 0.22;
      }

      // Smooth rotations
      badgeGroup.rotation.y += (targetRotationY - badgeGroup.rotation.y) * (delta * 8);
      badgeMesh.rotation.x += (targetRotationX - badgeMesh.rotation.x) * (delta * 8);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 360;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      container.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
      container.removeEventListener("click", handleClick);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      badgeGeo.dispose();
      strapGeo.dispose();
      frontTexture.dispose();
      backTexture.dispose();
    };
  }, [webGLError]);

  if (webGLError) {
    // Accessible High-Contrast CSS 3D Fallback
    return (
      <div
        className={`relative w-full h-[460px] flex items-center justify-center p-6 ${className}`}
      >
        <div className="w-[280px] rounded-2xl bg-[#181916] border border-[#D4FF69]/30 p-6 text-center space-y-4 shadow-2xl">
          <div className="w-16 h-3 bg-[#111210] rounded-full mx-auto border border-white/10" />
          <div className="w-16 h-16 rounded-xl bg-[#111210] border border-[#D4FF69] flex items-center justify-center mx-auto text-2xl font-bold font-display text-[#F2F0E9]">
            A<span className="text-[#D4FF69]">.</span>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl text-[#F2F0E9]">
              {siteConfig.name}
            </h4>
            <p className="font-mono text-xs text-[#D4FF69]">
              {siteConfig.role}
            </p>
          </div>
          <p className="text-xs text-[#8E9086]">
            Interactive badge (static mode active)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-[440px] sm:h-[480px] lg:h-[520px] select-none ${className}`}>
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing focus:outline-none"
        tabIndex={0}
        role="region"
        aria-label="Interactive 3D Andyto Engineer Access Badge. Drag to swing, click to flip."
      />

      {/* Floating Interaction Hint Pills */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111210]/80 backdrop-blur-md border border-[rgba(242,240,233,0.12)] text-[11px] font-mono text-[#8E9086] pointer-events-none shadow-md">
        <Hand className="w-3.5 h-3.5 text-[#D4FF69]" />
        <span>Drag to swing · Click to flip</span>
      </div>
    </div>
  );
}
