"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InteractiveSkillCard } from "@/components/react-bits/InteractiveSkillCard";
import { motion } from "motion/react";
import { snappySpring } from "@/components/motion/motion-variants";
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
        { name: "Laravel", note: "Inertia.js, Eloquent ORM, Auth" },
        { name: "PHP", note: "Modern 8.x typed architecture" },
        { name: "PostgreSQL / MySQL", note: "Relational schema design" },
        { name: "Prisma ORM", note: "Type-safe database queries" },
        { name: "RESTful APIs", note: "Clean contracts & validation" },
      ],
    },
    {
      title: "UI/UX & Interaction",
      tag: "Product Craft",
      description:
        "Translating complex product requirements into intuitive typographic hierarchy, fluid grids, and tactile feedback.",
      icon: LayoutTemplate,
      technologies: [
        { name: "Motion for React", note: "Spring physics, viewport reveals" },
        { name: "Design Systems", note: "Editorial typography, color tokens" },
        { name: "Responsive Layouts", note: "Fluid clamp formulas, grid/flex" },
        { name: "Accessibility (a11y)", note: "WCAG 2.2 AA contrast, ARIA" },
        { name: "Component Systems", note: "Atomic, reusable primitives" },
      ],
    },
    {
      title: "Tools & Engineering Workflow",
      tag: "DevOps & Quality",
      description:
        "Maintaining disciplined version control, testing pipelines, and developer tooling for dependable delivery.",
      icon: Wrench,
      technologies: [
        { name: "Git & GitHub", note: "Branching, PRs, version control" },
        { name: "Figma", note: "Wireframing, tokens inspection" },
        { name: "Browser DevTools", note: "Performance, DOM, Network profiling" },
        { name: "Testing & Quality", note: "Component unit tests, ESLint" },
        { name: "Node.js & npm", note: "Modern package management" },
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-20 md:py-32 bg-[#111210] border-t border-[rgba(242,240,233,0.08)] relative overflow-hidden"
    >
      <Container>
        {/* Section Heading with Viewport Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4 mb-14 sm:mb-16"
        >
          <div>
            <Eyebrow dotColor="lime">02 / CAPABILITIES</Eyebrow>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.15]">
            The tools behind the work<span className="text-[#D4FF69]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9A9C92] leading-[1.65] max-w-2xl font-normal">
            A structured breakdown of core engineering capabilities, frameworks, and verified technologies across software disciplines.
          </p>
        </motion.div>

        {/* Grid of React Bits Spotlight Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
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
