"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { snappySpring } from "@/components/motion/motion-variants";

interface ProjectNavigationProps {
  currentSlug: string;
  projects: Project[];
}

export function ProjectNavigation({
  currentSlug,
  projects,
}: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || projects.length <= 1) return null;

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-[rgba(242,240,233,0.1)] py-12 md:py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous */}
        <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={snappySpring}>
          <Link
            href={`/work/${prevProject.slug}`}
            className="group p-6 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.1)] hover:border-[rgba(242,240,233,0.25)] transition-all flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] h-full"
          >
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 text-xs font-mono text-[#8E9086] group-hover:text-[#F2F0E9]">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1.5 text-[#D4FF69]" />
                Previous Case Study
              </span>
              <h4 className="font-display font-semibold text-lg text-[#F2F0E9] group-hover:text-[#D4FF69] transition-colors">
                {prevProject.title}
              </h4>
            </div>
            <span className="font-mono text-xs text-[#8E9086] hidden sm:inline">
              {prevProject.subtitle}
            </span>
          </Link>
        </motion.div>

        {/* Next */}
        <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={snappySpring}>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group p-6 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.1)] hover:border-[rgba(242,240,233,0.25)] transition-all flex items-center justify-between text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] h-full"
          >
            <span className="font-mono text-xs text-[#8E9086] hidden sm:inline text-left">
              {nextProject.subtitle}
            </span>
            <div className="space-y-1">
              <span className="flex items-center justify-end gap-1.5 text-xs font-mono text-[#8E9086] group-hover:text-[#F2F0E9]">
                Next Case Study
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5 text-[#D4FF69]" />
              </span>
              <h4 className="font-display font-semibold text-lg text-[#F2F0E9] group-hover:text-[#D4FF69] transition-colors">
                {nextProject.title}
              </h4>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
