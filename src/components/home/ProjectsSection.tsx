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
import { motion } from "motion/react";
import {
  containerStaggerVariants,
  fadeInUpVariants,
  snappySpring,
} from "@/components/motion/motion-variants";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="py-24 md:py-36 bg-[#161714] border-t border-[rgba(242,240,233,0.08)] relative overflow-hidden"
    >
      <Container>
        {/* Section Heading with Viewport Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerStaggerVariants}
          className="max-w-3xl space-y-4 mb-16"
        >
          <motion.div variants={fadeInUpVariants}>
            <Eyebrow dotColor="lime">04 / SELECTED WORK</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.2]"
          >
            A selection of things I&apos;ve built<span className="text-[#D4FF69]">.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-base sm:text-lg text-[#8E9086] leading-[1.65] font-normal"
          >
            Digital products and applications shaped through thoughtful interfaces, implementation, and problem-solving.
          </motion.p>
        </motion.div>

        {/* Featured Projects with React Bits Tilted Card Previews */}
        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl bg-[#111210] border border-[rgba(242,240,233,0.1)] hover:border-[rgba(242,240,233,0.22)] p-6 sm:p-8 md:p-12 shadow-2xl transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left or Right Text Narrative (5 cols) */}
                  <div
                    className={`space-y-6 ${
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
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F2F0E9] group-hover:text-white transition-colors tracking-[-0.02em] leading-snug mb-2">
                        <Link
                          href={`/work/${project.slug}`}
                          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] rounded"
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-sm font-medium text-[#D4FF69] tracking-normal mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-[#8E9086] leading-[1.65] font-normal">
                        {project.summary}
                      </p>
                    </div>

                    {/* Role & Tech Badges */}
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs text-[#8E9086] border border-[rgba(242,240,233,0.08)] px-2.5 py-1 rounded bg-[#181916]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Link */}
                    <div className="pt-2">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium font-body text-[#F2F0E9] group-hover:text-[#D4FF69] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] rounded"
                      >
                        <span>Explore full case study</span>
                        <motion.div
                          whileHover={{ x: 3, y: -3 }}
                          transition={snappySpring}
                        >
                          <ArrowUpRight className="w-4 h-4 text-[#D4FF69]" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>

                  {/* Visual Preview Wrapped in React Bits Tilted Card (7 cols) */}
                  <div
                    className={`${
                      isReversed
                        ? "lg:col-span-7 lg:order-1"
                        : "lg:col-span-7 lg:order-2"
                    }`}
                  >
                    <InteractiveProjectCard maxTilt={6}>
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
        <div className="mt-16 sm:mt-24 text-center">
          <Button href="/work" variant="secondary" size="lg" icon>
            View all projects & prototypes ({projects.length})
          </Button>
        </div>
      </Container>
    </section>
  );
}
