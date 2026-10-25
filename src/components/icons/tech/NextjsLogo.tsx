"use client";

import React from "react";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Authentic brand asset for Next.js.
 * Sourced from: Devicon (nextjs-original.svg)
 * Color profile: Official Dark Badge with White Gradient N
 */
export function NextjsLogo({ className = "h-7 sm:h-8 md:h-[32px] w-auto shrink-0", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-label="Next.js logo"
      {...props}
    >
      <title>Next.js</title>
      <circle cx="64" cy="64" r="62" fill="#0C0D0A" stroke="rgba(242,240,233,0.25)" strokeWidth="4"/><path fill="url(#tech-nextjs-a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"/><path fill="url(#tech-nextjs-b)" d="M81.778 38.4h8.533v51.2h-8.533z"/><defs><linearGradient id="tech-nextjs-a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient><linearGradient id="tech-nextjs-b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs>
    </svg>
  );
}

export default NextjsLogo;
