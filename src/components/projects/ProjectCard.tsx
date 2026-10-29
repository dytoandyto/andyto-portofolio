"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProjectMockup } from "./ProjectMockup";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
  index: number;
  layout?: "split" | "stacked" | "compact";
}

export function ProjectCard({
  project,
  index,
  layout = "split",
}: ProjectCardProps) {
  const isSplit = layout === "split";
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.1)] hover:border-[rgba(242,240,233,0.25)] transition-all duration-300 overflow-hidden shadow-lg"
    >
      <div
        className={`grid grid-cols-1 ${
          isSplit ? "lg:grid-cols-12 gap-8 lg:gap-12" : "gap-6"
        } items-center p-6 sm:p-8 md:p-10`}
      >
        {/* Text Content */}
        <div
          className={`space-y-6 ${
            isSplit
              ? isReversed
                ? "lg:col-span-5 lg:order-2"
                : "lg:col-span-5 lg:order-1"
              : "w-full"
          }`}
        >
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} customLabel={project.statusLabel} />
            <span className="font-mono text-xs text-[#8E9086]">
              {project.year}
            </span>
            <div className="flex items-center gap-1.5 ml-auto">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="font-mono text-[11px] text-[#8E9086] px-2 py-0.5 rounded bg-[rgba(242,240,233,0.05)]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Heading */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#F2F0E9] group-hover:text-white transition-colors tracking-[-0.02em] mb-2">
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
            <p className="text-sm sm:text-base text-[#8E9086] leading-[1.65] line-clamp-3 font-normal">
              {project.summary}
            </p>
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-[#8E9086] border border-[rgba(242,240,233,0.08)] px-2.5 py-1 rounded bg-[#111210]/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="font-mono text-xs text-[#8E9086] px-2 py-1">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium font-body text-[#F2F0E9] group-hover:text-[#D4FF69] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] rounded"
              aria-label={`Read case study: ${project.title}`}
            >
              <span>Explore case study</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4FF69]/10 border border-[#D4FF69]/25 text-xs font-mono font-medium text-[#D4FF69] hover:bg-[#D4FF69]/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
                aria-label={`Visit live deployment of ${project.title}`}
              >
                <span>Visit Live Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Visual Mockup Preview */}
        <div
          className={`${
            isSplit
              ? isReversed
                ? "lg:col-span-7 lg:order-1"
                : "lg:col-span-7 lg:order-2"
              : "w-full"
          } transition-transform duration-500 group-hover:scale-[1.01]`}
        >
          <Link
            href={`/work/${project.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="block cursor-pointer focus:outline-none"
          >
            <ProjectMockup project={project} variant="card" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
