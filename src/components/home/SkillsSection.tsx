"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InteractiveSkillCard } from "@/components/react-bits/InteractiveSkillCard";
import MicroSlats from "@/components/react-bits/MicroSlats";
import { BlurText } from "@/components/react-bits/BlurText";
import { DeferredMount } from "@/components/ui/DeferredMount";
import { motion } from "motion/react";
import {
  snappySpring,
  editorialTransition,
  viewportOnce,
} from "@/components/motion/motion-variants";
import {
  Code2,
  Database,
  LayoutTemplate,
  Wrench,
  Check,
} from "lucide-react";

interface SkillCategory {
  title: string;
  tag: string;
  description: string;
  icon: React.ElementType;
  technologies: { name: string; note: string }[];
}

export function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Engineering",
      tag: "UI Architecture",
      description:
        "Building accessible, high-performance web applications using modern component ecosystems and type-safe state flows.",
      icon: Code2,
      technologies: [
        { name: "React 19", note: "Hooks, Server Components, Actions" },
        { name: "Next.js", note: "App Router, SSR, Turbopack" },
        { name: "TypeScript", note: "Strict types, generic constraints" },
        { name: "Tailwind CSS", note: "v4 engine, custom design tokens" },
        { name: "JavaScript (ESNext)", note: "Async/await, modern DOM APIs" },
      ],
    },
    {
      title: "Backend & Systems",
      tag: "Data Flow & APIs",
      description:
        "Developing scalable backend APIs, database models, and resilient server-side workflows.",
      icon: Database,
      technologies: [
        { name: "Node.js", note: "REST endpoints, async runtimes" },
        { name: "PostgreSQL", note: "Relational modeling, indexing" },
        { name: "Prisma ORM", note: "Schema migrations, query client" },
        { name: "Laravel / PHP", note: "MVC architecture, artisan tooling" },
        { name: "Docker", note: "Reproducible container environments" },
      ],
    },
    {
      title: "Design Systems & UI/UX",
      tag: "Tactile Experience",
      description:
        "Crafting coherent design tokens, fluid typography, and accessible interactive behaviors that feel natural.",
      icon: LayoutTemplate,
      technologies: [
        { name: "Figma", note: "Component libraries, autolayout, tokens" },
        { name: "Design Tokens", note: "Semantic color, fluid typography scale" },
        { name: "Motion Design", note: "Micro-interactions, spring transitions" },
        { name: "Accessibility (WCAG)", note: "Semantic HTML, keyboard focus, contrast" },
      ],
    },
    {
      title: "Quality & Infrastructure",
      tag: "Reliable Shipping",
      description:
        "Ensuring software stability through strict static analysis, cross-browser verification, and clean build automation.",
      icon: Wrench,
      technologies: [
        { name: "Git & GitHub", note: "Branching strategies, code review workflows" },
        { name: "ESLint & Prettier", note: "Automated lint rules, code formatting" },
        { name: "Vite & Turbopack", note: "Instant HMR, production bundle optimization" },
        { name: "Performance Auditing", note: "Core Web Vitals, LCP/CLS optimization" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 bg-[#111210] border-t border-[rgba(242,240,233,0.08)] relative"
    >
      <span id="capabilities" className="sr-only" aria-hidden="true" />
      {/* 1. Dedicated Decorative Layer: React Bits MicroSlats for subtle flowing geometric waves */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <DeferredMount className="contents">
          <MicroSlats
            preset="tide"
            color="#252A22"
            glintColor="#D4FF69"
            backgroundColor="rgba(17,18,16,0)"
            slatWidth={8}
            slatHeight={22}
            gap={4}
            roundness={0.5}
            scale={1.3}
            speed={0.22}
            direction={262}
            chop={0.2}
            stretch={0.1}
            glint={0.45}
            contrast={1.15}
            perspective={0.35}
            fog={0.65}
            interactive
            cursorStrength={0.35}
            cursorSize={36}
            swirl={0}
            trail={0.9}
            lean={0.1}
            intro
            introDuration={1.2}
          />
        </DeferredMount>
        {/* Soft edge seams so section borders blend seamlessly while preserving slat visibility */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#111210] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111210] to-transparent pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* Section Heading with Viewport Reveal */}
        <div className="max-w-3xl space-y-4 mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow dotColor="lime">02 / CAPABILITIES</Eyebrow>
          </motion.div>

          <BlurText
            as="h2"
            text="The tools behind the work."
            trigger="view"
            direction="bottom"
            initialBlur={10}
            delay={0.055}
            initialDelay={0.08}
            duration={0.55}
            accentPunctuation={true}
            className="text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.15]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#9A9C92] leading-[1.65] max-w-2xl font-normal"
          >
            A structured breakdown of core engineering capabilities, frameworks, and verified technologies across software disciplines.
          </motion.p>
        </div>

        {/* Grid of React Bits Spotlight Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...editorialTransition, delay: idx * 0.08 }}
              >
                <InteractiveSkillCard
                  spotlightColor="rgba(212, 255, 105, 0.12)"
                  borderColor="rgba(212, 255, 105, 0.30)"
                  className="p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Icon Micro-Interaction */}
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-[rgba(242,240,233,0.08)]">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          transition={snappySpring}
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.12)] flex items-center justify-center text-[#D4FF69]"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        <div>
                          <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
                            {cat.tag}
                          </span>
                          <h3 className="font-display text-lg sm:text-xl font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                            {cat.title}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-[#D4FF69] bg-[rgba(212,255,105,0.10)] px-2.5 py-0.5 rounded-full border border-[rgba(212,255,105,0.20)]">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-sm text-[#9A9C92] leading-[1.65] font-body mb-6">
                      {cat.description}
                    </p>
                  </div>

                  {/* Verified Technology List */}
                  <div className="space-y-2 pt-4 border-t border-[rgba(242,240,233,0.08)]">
                    {cat.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/item flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 px-2 rounded-lg hover:bg-[rgba(242,240,233,0.04)] transition-colors gap-0.5 sm:gap-2"
                      >
                        <div className="flex items-center gap-2 shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#D4FF69] shrink-0" />
                          <span className="font-mono text-xs sm:text-sm font-medium text-[#F2F0E9] group-hover/item:text-[#D4FF69] transition-colors">
                            {tech.name}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] sm:text-xs text-[#8E9086] sm:text-right pl-5.5 sm:pl-0">
                          {tech.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </InteractiveSkillCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
