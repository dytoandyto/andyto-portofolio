"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import Carousel, { CarouselItem } from "@/components/react-bits/Carousel";
import LogoLoop, { LogoItem } from "@/components/react-bits/LogoLoop";
import { motion } from "motion/react";
import {
  containerStaggerVariants,
  fadeInUpVariants
} from "@/components/motion/motion-variants";
import {
  Code2,
  Database,
  Layout,
  Sparkles,
  GitBranch,
  Layers
} from "lucide-react";

export function SkillsCarouselSection() {
  // 5 Capability Cards strictly adhering to user specifications
  const capabilityItems: CarouselItem[] = [
    {
      id: "frontend-engineering",
      categoryNumber: "01",
      icon: <Code2 className="w-5 h-5" />,
      title: "Frontend Engineering",
      description: (
        <span className="block space-y-1 text-sm text-[#8E9086] leading-relaxed">
          <span className="block text-[#F2F0E9] font-medium">• Responsive interfaces</span>
          <span className="block">• Component architecture</span>
          <span className="block">• Interactive web experiences</span>
        </span>
      ),
      technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "fullstack-dev",
      categoryNumber: "02",
      icon: <Database className="w-5 h-5" />,
      title: "Full-Stack Development",
      description: (
        <span className="block space-y-1 text-sm text-[#8E9086] leading-relaxed">
          <span className="block text-[#F2F0E9] font-medium">• Application workflows</span>
          <span className="block">• API integration</span>
          <span className="block">• Backend and database fundamentals</span>
        </span>
      ),
      technologies: ["Node.js", "Server Actions", "PostgreSQL", "REST APIs"]
    },
    {
      id: "uiux-implementation",
      categoryNumber: "03",
      icon: <Layout className="w-5 h-5" />,
      title: "UI/UX Implementation",
      description: (
        <span className="block space-y-1 text-sm text-[#8E9086] leading-relaxed">
          <span className="block text-[#F2F0E9] font-medium">• Figma-to-code implementation</span>
          <span className="block">• Design systems</span>
          <span className="block">• Accessibility and responsive layouts</span>
        </span>
      ),
      technologies: ["Figma", "Design Tokens", "Base UI", "WCAG AA"]
    },
    {
      id: "motion-interaction",
      categoryNumber: "04",
      icon: <Sparkles className="w-5 h-5" />,
      title: "Motion & Interaction",
      description: (
        <span className="block space-y-1 text-sm text-[#8E9086] leading-relaxed">
          <span className="block text-[#F2F0E9] font-medium">• Motion for React</span>
          <span className="block">• React Bits components</span>
          <span className="block">• Purposeful interface animation</span>
        </span>
      ),
      technologies: ["Motion for React", "Three.js", "Spring Physics", "Micro-interactions"]
    },
    {
      id: "engineering-workflow",
      categoryNumber: "05",
      icon: <GitBranch className="w-5 h-5" />,
      title: "Engineering Workflow",
      description: (
        <span className="block space-y-1 text-sm text-[#8E9086] leading-relaxed">
          <span className="block text-[#F2F0E9] font-medium">• Version control</span>
          <span className="block">• Debugging and testing</span>
          <span className="block">• Performance and maintainability</span>
        </span>
      ),
      technologies: ["Git / GitHub", "ESLint", "Turbopack", "Chrome DevTools"]
    }
  ];

  // High-Impact SVG Brand Marks matching the Crafted Digital marquee
  const grandStackLogos: LogoItem[] = [
    {
      title: "Docker",
      href: "https://www.docker.com",
      hoverColor: "#0db7ed",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#0db7ed] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m21.724-.053c-.347-.234-.993-.332-1.777-.28a4.743 4.743 0 00-2.31.81 7.158 7.158 0 00-.987-.905c-.347-.246-.993-.348-1.78-.295-.084 0-.17.006-.254.017a4.93 4.93 0 00-.414.074.187.187 0 00-.154.18v2.793a.186.186 0 00.186.185h6.398c.102 0 .185-.083.185-.185v-.748a3.14 3.14 0 00-.54-.067 1.838 1.838 0 00-.916.236 1.848 1.848 0 011.03-.892 2.775 2.775 0 011.333.067c.074.02.148.016.2-.016a.187.187 0 00.103-.162c.002-.328-.103-.54-.303-.675M.05 13.023c-.027.14-.04.283-.04.427 0 1.95 1.057 3.738 2.825 4.778 1.82 1.07 4.195 1.488 6.516 1.144 2.115-.313 4.07-1.398 5.485-3.048.91-.03 1.833-.217 2.684-.575 1.343-.564 2.52-1.464 3.42-2.616a.187.187 0 00-.062-.279c-.43-.243-1.077-.42-1.845-.487-1.042-.09-2.122.086-3.04.5a.186.186 0 01-.225-.043 6.96 6.96 0 00-4.043-1.928H.242a.185.185 0 00-.184.185c0 .014.002.028.005.042-.005.13-.01.26-.013.392z" />
        </svg>
      )
    },
    {
      title: "Prisma",
      href: "https://www.prisma.io",
      hoverColor: "#5A67D8",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#5A67D8] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21.053 17.472L13.303 1.654a1.71 1.71 0 00-1.53-.965c-.63 0-1.21.353-1.53.965L.947 17.472c-.347.708-.29 1.545.15 2.2a2.02 2.02 0 001.764.939h18.278c.7 0 1.345-.348 1.764-.94.44-.654.497-1.491.15-2.199zm-9.053-12.75l6.47 13.208H5.53L12 4.722z" />
        </svg>
      )
    },
    {
      title: "Supabase",
      href: "https://supabase.com",
      hoverColor: "#3ECF8E",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#3ECF8E] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21.362 9.354H12V.396a.396.396 0 00-.716-.233L2.203 12.424l-.454.595a.396.396 0 00.316.637H11.5v8.958a.396.396 0 00.716.233l9.081-12.261.454-.595a.396.396 0 00-.389-.637z" />
        </svg>
      )
    },
    {
      title: "Sanity",
      href: "https://www.sanity.io",
      hoverColor: "#F03E2F",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#F03E2F] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.8 6.8c-.3-1.4-1.2-2.7-2.6-3.5C14.7 2.4 13 2 11.2 2H6.5L4 6.8h7.2c1.2 0 2.2.8 2.5 1.9.3 1.2-.3 2.4-1.5 2.8-.4.1-.9.2-1.3.2H8.2c-2.4 0-4.6 1.4-5.6 3.5-.9 2.1-.7 4.5.6 6.3 1.3 1.8 3.4 2.8 5.6 2.8h4.7l2.5-4.8H8.8c-1.2 0-2.2-.8-2.5-1.9-.3-1.2.3-2.4 1.5-2.8.4-.1.9-.2 1.3-.2h2.7c2.4 0 4.6-1.4 5.6-3.5.7-1.4.9-2.9.4-4.3z" />
        </svg>
      )
    },
    {
      title: "React",
      href: "https://react.dev",
      hoverColor: "#61dafb",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#61dafb] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
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
      )
    },
    {
      title: "Next.js",
      href: "https://nextjs.org",
      hoverColor: "#F2F0E9",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-white transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <path d="M15.8 8.2v7.6h-1.4L9.1 8.3H7.5v7.5H9v-5.1l4.8 6.7h1.4V8.2h-1.4z" fill="#0C0D0A" />
          <path d="M15.8 12.5l-6.2 8.4c.8.2 1.6.3 2.4.3 5 0 9.2-3.7 9.8-8.6l-6-0.1z" fill="#0C0D0A" />
        </svg>
      )
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
      hoverColor: "#3178c6",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#3178c6] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="3.5" fill="currentColor" />
          <path d="M11.2 8.5H6.8v1.8h1.3v5.2h1.8v-5.2h1.3V8.5zm5.8 3.1c-.3-.4-.8-.7-1.5-.7-.5 0-.9.2-1.2.4-.2.2-.3.6-.3.9 0 .3.1.6.3.8.2.2.4.3.8.5l.8.3c.7.2 1.2.5 1.5.8.3.3.5.8.5 1.4 0 .7-.3 1.3-.8 1.7-.6.4-1.3.6-2.2.6-.8 0-1.5-.2-2.1-.6-.6-.5-.8-1.1-.9-1.9h1.6c.1.4.2.7.5.9.3.2.6.3 1.1.3.5 0 .9-.1 1.2-.3.3-.2.4-.5.4-.9 0-.3-.1-.6-.3-.7-.2-.2-.5-.3-.9-.5l-.7-.2c-.7-.2-1.2-.5-1.5-.8-.3-.3-.5-.8-.5-1.4 0-.7.2-1.2.7-1.6.5-.4 1.2-.6 2.1-.6.7 0 1.4.2 1.9.5.5.4.8.9.9 1.6h-1.6c-.1-.3-.2-.6-.4-.7z" fill="#0C0D0A" />
        </svg>
      )
    },
    {
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
      hoverColor: "#38bdf8",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#38bdf8] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      )
    },
    {
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
      hoverColor: "#336791",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#336791] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.003 2.002c-5.523 0-10 4.477-10 10 0 3.238 1.543 6.117 3.936 7.935-.046-.576-.073-1.186-.073-1.815 0-3.924 1.544-7.147 4.544-9.054a10.51 10.51 0 014.282-1.332 5.088 5.088 0 011.666-.302c1.789 0 3.197.872 3.87 2.378.583 1.306.49 2.924-.26 4.557-.704 1.535-1.92 2.955-3.42 3.998-1.58 1.1-3.418 1.83-5.23 2.083.74.52 1.625.832 2.585.832 1.488 0 2.82-.72 3.67-1.838.31.294.654.552 1.03.766a5.577 5.577 0 002.766.726c.49 0 .963-.07 1.405-.2.748-.22 1.385-.634 1.87-1.19a9.96 9.96 0 001.37-5.547c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      title: "Node.js",
      href: "https://nodejs.org",
      hoverColor: "#5FA04E",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#5FA04E] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M11.998 2.45c-.32 0-.64.08-.91.24L3.638 7.02c-.56.32-.91.92-.91 1.56v8.68c0 .64.35 1.24.91 1.56l7.45 4.33c.27.16.59.24.91.24s.64-.08.91-.24l7.45-4.33c.56-.32.91-.92.91-1.56v-8.68c0-.64-.35-1.24-.91-1.56l-7.45-4.33c-.27-.16-.59-.24-.91-.24zm0 2.2l6.23 3.62-2.73 1.59-6.23-3.62 2.73-1.59zm-7.37 5.08l6.23 3.62v7.24l-6.23-3.62V9.73zm14.74 7.24l-6.23 3.62v-7.24l6.23-3.62v7.24z" />
        </svg>
      )
    },
    {
      title: "Figma",
      href: "https://figma.com",
      hoverColor: "#F24E1E",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#F24E1E] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M15.333 7.667a3.833 3.833 0 100-7.667 3.833 3.833 0 000 7.667zM8.667 0a3.833 3.833 0 000 7.667h3.833V0H8.667zm0 8.167a3.833 3.833 0 000 7.666h3.833V8.167H8.667zm0 8.166a3.833 3.833 0 103.833 3.834V16.333H8.667zm3.833-8.166h3.833a3.833 3.833 0 100-7.667h-3.833v7.667z" />
        </svg>
      )
    },
    {
      title: "Motion for React",
      href: "https://motion.dev",
      hoverColor: "#D4FF69",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-[#D4FF69] transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      )
    },
    {
      title: "GitHub",
      href: "https://github.com",
      hoverColor: "#FFFFFF",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-white transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      title: "Three.js",
      href: "https://threejs.org",
      hoverColor: "#FFFFFF",
      node: (
        <svg
          className="h-10 sm:h-12 md:h-13 w-auto text-[#F2F0E9] hover:text-white transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M12 2L2 20h20L12 2z" />
          <path d="M12 9l5 9H7l5-9z" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="capabilities"
      className="py-20 md:py-28 bg-[#131411] border-t border-[rgba(242,240,233,0.08)] relative overflow-hidden"
    >
      <Container>
        {/* Section Heading with Coordinated Motion Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerStaggerVariants}
          className="max-w-3xl space-y-4 mb-12 sm:mb-16"
        >
          <motion.div variants={fadeInUpVariants}>
            <Eyebrow dotColor="lime">CAPABILITIES / 01</Eyebrow>
          </motion.div>
          
          <motion.h2
            variants={fadeInUpVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.12]"
          >
            What I can build<span className="text-[#D4FF69]">.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            className="text-base sm:text-lg text-[#8E9086] leading-[1.6] font-body max-w-2xl"
          >
            A combination of interface engineering, product thinking, and full-stack development.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <Carousel
            items={capabilityItems}
            baseWidth={380}
            aspectRatio={1.08}
            gap={20}
            radius={18}
            frame={true}
            effect="slide"
            indicator="dots"
            arrows={true}
            draggable={true}
            loop={false}
            autoplay={false}
            className="w-full"
          />

          {/* Restrained user hint */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-mono text-[#8E9086]">
            <span>Drag or use arrows to view all 5 core capability pillars</span>
          </div>
        </motion.div>

        {/* Technology Marquee / LogoLoop Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-12 md:pt-16 border-t border-[rgba(242,240,233,0.06)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#8E9086]">
              <Layers className="w-3.5 h-3.5 text-[#D4FF69]" />
              <span>Technology Ecosystem & Verified Marks</span>
            </div>
            <span className="text-xs font-mono text-[#8E9086]">
              Continuous marquee · Hover to inspect
            </span>
          </div>

          {/* High-Impact Dark Logo Showcase Banner matching Crafted Digital standard */}
          <div className="relative rounded-2xl bg-[#0B0C0A] border border-[rgba(242,240,233,0.1)] py-8 sm:py-10 shadow-2xl overflow-hidden">
            <LogoLoop
              logos={grandStackLogos}
              speed={36}
              direction="left"
              logoHeight={56}
              gap={72}
              labels="none"
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutWidth={0.16}
              ariaLabel="Production technology stack logos"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
