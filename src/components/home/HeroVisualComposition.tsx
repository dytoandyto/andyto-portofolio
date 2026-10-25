"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectMockup } from "@/components/projects/ProjectMockup";
import { motion } from "motion/react";
import { Code2, Terminal } from "lucide-react";

export function HeroVisualComposition() {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string>("classhub");
  const currentProject =
    projects.find((p) => p.slug === activeProjectSlug) || projects[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-2xl bg-[#161714] border border-[rgba(242,240,233,0.12)] p-4 sm:p-6 shadow-2xl overflow-hidden"
    >
      {/* Decorative ambient subtle glow behind mockup */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: currentProject.coverGradient.accent }}
        aria-hidden="true"
      />

      {/* Switcher Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[rgba(242,240,233,0.08)]">
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0F100D] border border-[rgba(242,240,233,0.08)]">
          {projects.map((proj) => {
            const isSelected = proj.slug === activeProjectSlug;
            return (
              <button
                key={proj.slug}
                type="button"
                onClick={() => setActiveProjectSlug(proj.slug)}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#F2F0E9] text-[#111210] font-semibold shadow-sm"
                    : "text-[#8E9086] hover:text-[#F2F0E9] hover:bg-[rgba(242,240,233,0.05)]"
                }`}
                aria-pressed={isSelected}
              >
                {proj.title}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#8E9086]">
          <span className="w-2 h-2 rounded-full bg-[#D4FF69] animate-pulse" />
          <span className="hidden sm:inline">Interactive Interface Preview</span>
        </div>
      </div>

      {/* Dynamic Project Mockup */}
      <div className="transition-all duration-300">
        <ProjectMockup project={currentProject} variant="hero" />
      </div>

      {/* Technical Spec Footer */}
      <div className="mt-4 pt-4 border-t border-[rgba(242,240,233,0.08)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E9086]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#D4FF69]" />
          <span>Role: {currentProject.role[0]}</span>
        </div>
        <div className="flex items-center gap-2">
          <Code2 className="w-3.5 h-3.5 text-[#8E9086]" />
          <span className="text-[#D4FF69]">
            {currentProject.technologies.slice(0, 3).join(" · ")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
