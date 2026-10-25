"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/react-bits/LogoLoop";
import { Container } from "@/components/ui/Container";
import { Code2 } from "lucide-react";

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
      ariaLabel: "Next.js - The React Framework for the Web",
      node: <NextjsLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
      ariaLabel: "TypeScript - Strongly typed programming language that builds on JavaScript",
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
      href: "https://vite.dev",
      ariaLabel: "Vite - Next Generation Frontend Tooling",
      node: <ViteLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
      ariaLabel: "PostgreSQL - Open Source Relational Database",
      node: <PostgresqlLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Prisma ORM",
      href: "https://www.prisma.io",
      ariaLabel: "Prisma ORM - Next-generation Node.js and TypeScript ORM",
      node: <PrismaLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Laravel",
      href: "https://laravel.com",
      ariaLabel: "Laravel - The PHP Framework for Web Artisans",
      node: <LaravelLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "PHP",
      href: "https://www.php.net",
      ariaLabel: "PHP - Hypertext Preprocessor",
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
      ariaLabel: "Node.js - JavaScript runtime environment",
      node: <NodejsLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Figma",
      href: "https://figma.com",
      ariaLabel: "Figma - The collaborative interface design tool",
      node: <FigmaLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "Git",
      href: "https://git-scm.com",
      ariaLabel: "Git - Fast distributed revision control system",
      node: <GitLogo className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110" />,
    },
    {
      title: "GitHub",
      href: "https://github.com",
      ariaLabel: "GitHub - Development and version control platform",
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
    <section className="relative py-7 md:py-9 border-y border-[rgba(242,240,233,0.08)] bg-[#0C0D0A]/80 backdrop-blur-md overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 sm:mb-5 px-1">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#8E9086]">
            <Code2 className="w-3.5 h-3.5 text-[#D4FF69]" />
            <span>Verified Production Stack & Engineering Ecosystem</span>
          </div>
          <span className="text-[11px] font-mono text-[#8E9086] hidden sm:inline">
            Original Brand Identities · Continuous Loop
          </span>
        </div>

        {/* High-Impact Logo Strip with genuine brand colors and smooth edge fades */}
        <div className="relative rounded-2xl bg-[#111210]/60 border border-[rgba(242,240,233,0.07)] py-3.5 sm:py-4.5 shadow-xl overflow-hidden">
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
        </div>
      </Container>
    </section>
  );
}

export default TechMarquee;
