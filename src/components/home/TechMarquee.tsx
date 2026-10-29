"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/react-bits/LogoLoop";
import DotGrid from "@/components/react-bits/DotGrid";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";
import { editorialTransition } from "@/components/motion/motion-variants";

import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  JavascriptLogo,
  TailwindcssLogo,
  ViteLogo,
  PostgresqlLogo,
  PrismaLogo,
  LaravelLogo,
  PhpLogo,
  DockerLogo,
  NodejsLogo,
  FigmaLogo,
  GitLogo,
  GithubLogo,
  AstroLogo,
} from "@/components/icons/tech";

export function TechMarquee() {
  const verifiedTechLogos: LogoItem[] = [
    {
      title: "React",
      href: "https://react.dev",
      ariaLabel: "React - A JavaScript library for building user interfaces",
      node: <ReactLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Next.js",
      href: "https://nextjs.org",
      ariaLabel: "Next.js - The React framework for the web",
      node: <NextjsLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
      ariaLabel: "TypeScript - JavaScript with syntax for types",
      node: <TypescriptLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      ariaLabel: "JavaScript - The programming language of the Web",
      node: <JavascriptLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
      ariaLabel: "Tailwind CSS - A utility-first CSS framework",
      node: <TailwindcssLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Vite",
      href: "https://vitejs.dev",
      ariaLabel: "Vite - Next generation frontend tooling",
      node: <ViteLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
      ariaLabel: "PostgreSQL - The world's most advanced open source relational database",
      node: <PostgresqlLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Prisma",
      href: "https://www.prisma.io",
      ariaLabel: "Prisma - Next-generation ORM for Node.js & TypeScript",
      node: <PrismaLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Laravel",
      href: "https://laravel.com",
      ariaLabel: "Laravel - The PHP framework for web artisans",
      node: <LaravelLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "PHP",
      href: "https://www.php.net",
      ariaLabel: "PHP - General-purpose scripting language suited for web development",
      node: <PhpLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Docker",
      href: "https://www.docker.com",
      ariaLabel: "Docker - Accelerated container application development",
      node: <DockerLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Node.js",
      href: "https://nodejs.org",
      ariaLabel: "Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine",
      node: <NodejsLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Figma",
      href: "https://www.figma.com",
      ariaLabel: "Figma - The collaborative interface design tool",
      node: <FigmaLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Git",
      href: "https://git-scm.com",
      ariaLabel: "Git - Fast, scalable, distributed revision control system",
      node: <GitLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "GitHub",
      href: "https://github.com",
      ariaLabel: "GitHub - Development platform for collaborative software engineering",
      node: <GithubLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Astro",
      href: "https://astro.build",
      ariaLabel: "Astro - The web framework for content-driven websites",
      node: <AstroLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
  ];

  return (
    <section
      id="tech-stack"
      className="py-6 sm:py-7 md:py-8 bg-[#0C0D0A] border-y border-[rgba(242,240,233,0.06)] relative overflow-hidden"
      aria-label="Core Engineering Technologies"
    >
      {/* 1. Base Decorative Layer: Tactile DotGrid background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <DotGrid
          dotSize={1.5}
          gap={22}
          baseColor="#1F241C"
          activeColor="#D4FF69"
          opacity={0.35}
          fade={0.6}
          mouseInteraction={false}
          clickShock={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D0A] via-transparent to-[#0C0D0A] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* High-Impact Logo Strip with genuine brand colors and smooth edge fades */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={editorialTransition}
          className="relative rounded-2xl bg-[#111210]/70 border border-[rgba(242,240,233,0.07)] py-3 sm:py-3.5 shadow-xl overflow-hidden"
        >
          <LogoLoop
            logos={verifiedTechLogos}
            speed={28}
            direction="left"
            logoHeight={32}
            gap={48}
            labels="none"
            intro={false}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutWidth={0.08}
            ariaLabel="Verified production technology stack brand logos"
          />
        </motion.div>
      </Container>
    </section>
  );
}

export default TechMarquee;
