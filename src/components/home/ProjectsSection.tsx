"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProjectMockup } from "@/components/projects/ProjectMockup";
import { InteractiveProjectCard } from "@/components/react-bits/InteractiveProjectCard";
import { DarkVeil } from "@/components/react-bits/DarkVeil";
import { SplitText } from "@/components/react-bits/SplitText";
import { DeferredMount } from "@/components/ui/DeferredMount";
import { motion } from "motion/react";
import {
  snappySpring,
  editorialTransition,
  viewportOnce,
} from "@/components/motion/motion-variants";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 bg-[#141512] border-t border-[rgba(242,240,233,0.08)] relative overflow-hidden"
    >
      {/* 1. Base Decorative Layer: React Bits DarkVeil for atmospheric flowing silk depth */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <DeferredMount className="contents">
          <DarkVeil
          color="#1A2818"
          speed={0.22}
          scale={1.2}
          rotation={-15}
          flow={0.5}
          warp={0.1}
          brightness={0.55}
          glow={0.18}
          grain={0.03}
          opacity={0.28}
          fade={0.8}
          mouseInteraction={true}
          mouseStrength={0.5}
        />
        </DeferredMount>
        {/* Subtle dark gradient overlay to frame project cards cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141512] via-[#141512]/65 to-[#141512] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* Section Heading with Viewport Word Reveal */}
        <div className="max-w-3xl space-y-4 mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow dotColor="lime">03 / SELECTED WORK</Eyebrow>
          </motion.div>

          <SplitText
            as="h2"
            text="A selection of things I've built."
            trigger="view"
            variant="rise"
            delay={0.06}
            stagger={0.05}
            duration={0.6}
            accentPunctuation={true}
            className="text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.15]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#9A9C92] leading-[1.65] font-normal"
          >
            Digital products and applications shaped through thoughtful interfaces, implementation, and problem-solving.
          </motion.p>
        </div>

        {/* Featured Projects with React Bits Tilted Card Previews */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...editorialTransition, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-[#111210] border border-[rgba(242,240,233,0.10)] hover:border-[rgba(242,240,233,0.22)] p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Text Narrative (5 cols desktop, full width mobile) */}
                  <div
                    className={`space-y-5 ${
                      isReversed
                        ? "lg:col-span-5 lg:order-2"
                        : "lg:col-span-5 lg:order-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <StatusBadge
                        status={project.status}
                        customLabel={project.statusLabel}
                      />
                      <span className="font-mono text-xs text-[#8E9086]">
                        {project.year}
                      </span>
                      <div className="flex items-center gap-1.5 ml-auto">
                        {project.category.map((cat) => (
                          <span
                            key={cat}
                            className="font-mono text-[11px] text-[#8E9086] px-2 py-0.5 rounded bg-[rgba(242,240,233,0.06)]"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F2F0E9] group-hover:text-white transition-colors tracking-[-0.02em] leading-snug mb-1.5">
                        <Link
                          href={`/work/${project.slug}`}
                          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69] rounded inline-block"
                        >
                          <SplitText
                            as="span"
                            text={project.title}
                            trigger="view"
                            variant="rise"
                            delay={0.08}
                            stagger={0.045}
                            duration={0.5}
                            className="inline-block"
                          />
                        </Link>
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm font-medium text-[#D4FF69] tracking-normal mb-2.5"
                      >
                        {project.subtitle}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm sm:text-base text-[#9A9C92] leading-[1.65] font-normal"
                      >
                        {project.summary}
                      </motion.p>
                    </div>

                    {/* Role & Tech Badges */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-2 pt-1"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#8E9086] block">
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((tech, techIdx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.94 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.32, delay: 0.38 + techIdx * 0.04 }}
                            className="font-mono text-xs text-[#8E9086] border border-[rgba(242,240,233,0.08)] px-2.5 py-1 rounded bg-[#181916]"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA Links */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium font-body text-[#F2F0E9] group-hover:text-[#D4FF69] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69] rounded"
                      >
                        <span>Explore full case study</span>
                        <motion.div
                          whileHover={{ x: 3, y: -3 }}
                          transition={snappySpring}
                        >
                          <ArrowUpRight className="w-4 h-4 text-[#D4FF69]" />
                        </motion.div>
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4FF69]/10 border border-[#D4FF69]/25 text-xs font-mono font-medium text-[#D4FF69] hover:bg-[#D4FF69]/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69]"
                          aria-label={`Visit live project for ${project.title}`}
                        >
                          <span>Visit Live Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Preview Wrapped in React Bits Tilted Card (7 cols desktop, full width mobile) */}
                  <div
                    className={`${
                      isReversed
                        ? "lg:col-span-7 lg:order-1"
                        : "lg:col-span-7 lg:order-2"
                    }`}
                  >
                    <InteractiveProjectCard maxTilt={5}>
                      <Link
                        href={`/work/${project.slug}`}
                        tabIndex={-1}
                        aria-hidden="true"
                        className="block cursor-pointer focus:outline-none"
                      >
                        <ProjectMockup project={project} variant="card" />
                      </Link>
                    </InteractiveProjectCard>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View All Projects Action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...editorialTransition, delay: 0.15 }}
          className="mt-14 sm:mt-20 text-center"
        >
          <Button href="/work" variant="secondary" size="lg" icon>
            View all projects & prototypes ({projects.length})
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
