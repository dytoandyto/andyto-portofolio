"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/react-bits/LogoLoop";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";
import { Code2 } from "lucide-react";

export function TechMarquee() {
  const verifiedTechLogos: LogoItem[] = [
    {
      title: "React",
      href: "https://react.dev",
      hoverColor: "#61dafb",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#61dafb] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Next.js",
      href: "https://nextjs.org",
      hoverColor: "#F2F0E9",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-white transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <path d="M15.8 8.2v7.6h-1.4L9.1 8.3H7.5v7.5H9v-5.1l4.8 6.7h1.4V8.2h-1.4z" fill="#0C0D0A" />
          <path d="M15.8 12.5l-6.2 8.4c.8.2 1.6.3 2.4.3 5 0 9.2-3.7 9.8-8.6l-6-0.1z" fill="#0C0D0A" />
        </svg>
      ),
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
      hoverColor: "#3178c6",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#3178c6] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="3.5" fill="currentColor" />
          <path d="M11.2 8.5H6.8v1.8h1.3v5.2h1.8v-5.2h1.3V8.5zm5.8 3.1c-.3-.4-.8-.7-1.5-.7-.5 0-.9.2-1.2.4-.2.2-.3.6-.3.9 0 .3.1.6.3.8.2.2.4.3.8.5l.8.3c.7.2 1.2.5 1.5.8.3.3.5.8.5 1.4 0 .7-.3 1.3-.8 1.7-.6.4-1.3.6-2.2.6-.8 0-1.5-.2-2.1-.6-.6-.5-.8-1.1-.9-1.9h1.6c.1.4.2.7.5.9.3.2.6.3 1.1.3.5 0 .9-.1 1.2-.3.3-.2.4-.5.4-.9 0-.3-.1-.6-.3-.7-.2-.2-.5-.3-.9-.5l-.7-.2c-.7-.2-1.2-.5-1.5-.8-.3-.3-.5-.8-.5-1.4 0-.7.2-1.2.7-1.6.5-.4 1.2-.6 2.1-.6.7 0 1.4.2 1.9.5.5.4.8.9.9 1.6h-1.6c-.1-.3-.2-.6-.4-.7z" fill="#0C0D0A" />
        </svg>
      ),
    },
    {
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
      hoverColor: "#38bdf8",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#38bdf8] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
      hoverColor: "#336791",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#336791] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.003 2.002c-5.523 0-10 4.477-10 10 0 3.238 1.543 6.117 3.936 7.935-.046-.576-.073-1.186-.073-1.815 0-3.924 1.544-7.147 4.544-9.054a10.51 10.51 0 014.282-1.332 5.088 5.088 0 011.666-.302c1.789 0 3.197.872 3.87 2.378.583 1.306.49 2.924-.26 4.557-.704 1.535-1.92 2.955-3.42 3.998-1.58 1.1-3.418 1.83-5.23 2.083.74.52 1.625.832 2.585.832 1.488 0 2.82-.72 3.67-1.838.31.294.654.552 1.03.766a5.577 5.577 0 002.766.726c.49 0 .963-.07 1.405-.2.748-.22 1.385-.634 1.87-1.19a9.96 9.96 0 001.37-5.547c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      title: "Prisma ORM",
      href: "https://www.prisma.io",
      hoverColor: "#5A67D8",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#5A67D8] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21.053 17.472L13.303 1.654a1.71 1.71 0 00-1.53-.965c-.63 0-1.21.353-1.53.965L.947 17.472c-.347.708-.29 1.545.15 2.2a2.02 2.02 0 001.764.939h18.278c.7 0 1.345-.348 1.764-.94.44-.654.497-1.491.15-2.199zm-9.053-12.75l6.47 13.208H5.53L12 4.722z" />
        </svg>
      ),
    },
    {
      title: "Laravel",
      href: "https://laravel.com",
      hoverColor: "#FF2D20",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#FF2D20] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.25 15.5l-6-3.5v7l6 3.5v-7zm-7.5-4.375l6-3.5-6-3.5-6 3.5 6 3.5zm-1.5 4.375l-6-3.5v7l6 3.5v-7z" />
        </svg>
      ),
    },
    {
      title: "Docker",
      href: "https://www.docker.com",
      hoverColor: "#0db7ed",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#0db7ed] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186" />
        </svg>
      ),
    },
    {
      title: "Node.js",
      href: "https://nodejs.org",
      hoverColor: "#5FA04E",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#5FA04E] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M11.998 2.45c-.32 0-.64.08-.91.24L3.638 7.02c-.56.32-.91.92-.91 1.56v8.68c0 .64.35 1.24.91 1.56l7.45 4.33c.27.16.59.24.91.24s.64-.08.91-.24l7.45-4.33c.56-.32.91-.92.91-1.56v-8.68c0-.64-.35-1.24-.91-1.56l-7.45-4.33c-.27-.16-.59-.24-.91-.24zm0 2.2l6.23 3.62-2.73 1.59-6.23-3.62 2.73-1.59zm-7.37 5.08l6.23 3.62v7.24l-6.23-3.62V9.73zm14.74 7.24l-6.23 3.62v-7.24l6.23-3.62v7.24z" />
        </svg>
      ),
    },
    {
      title: "Figma",
      href: "https://figma.com",
      hoverColor: "#F24E1E",
      node: (
        <svg
          className="h-9 sm:h-11 w-auto text-[#F2F0E9] hover:text-[#F24E1E] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 2h4v4H8a2 2 0 110-4zm4 4h4a2 2 0 010 4h-4V6zm-4 4h4v4H8a2 2 0 110-4zm4 4h4a2 2 0 11-2 2v-2zm-4 0v2a2 2 0 11-2-2h2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-10 md:py-14 border-y border-[rgba(242,240,233,0.08)] bg-[#0C0D0A]/70 backdrop-blur-md overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-6 px-1">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#8E9086]">
            <Code2 className="w-3.5 h-3.5 text-[#D4FF69]" />
            <span>Verified Production Stack & Engineering Ecosystem</span>
          </div>
          <span className="text-[11px] font-mono text-[#8E9086] hidden sm:inline">
            Continuous loop · Hover to inspect
          </span>
        </div>

        {/* High-Impact Logo Strip with smooth edge fades */}
        <div className="relative rounded-2xl bg-[#111210]/60 border border-[rgba(242,240,233,0.07)] py-5 sm:py-7 shadow-xl overflow-hidden">
          <LogoLoop
            logos={verifiedTechLogos}
            speed={32}
            direction="left"
            logoHeight={48}
            gap={64}
            labels="none"
            intro={false}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutWidth={0.16}
            ariaLabel="Production technology stack logos"
          />
        </div>
      </Container>
    </section>
  );
}

export default TechMarquee;
