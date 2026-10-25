"use client";

import React, { useState, useMemo } from "react";
import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Filter } from "lucide-react";

interface WorkGalleryProps {
  initialProjects: Project[];
}

export function WorkGallery({ initialProjects }: WorkGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Derive categories dynamically from dataset
  const categories = useMemo(() => {
    const set = new Set<string>();
    initialProjects.forEach((p) => {
      p.category.forEach((c) => set.add(c));
    });
    return ["All", ...Array.from(set)];
  }, [initialProjects]);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return initialProjects;
    return initialProjects.filter((p) =>
      p.category.includes(selectedCategory as Project["category"][number])
    );
  }, [initialProjects, selectedCategory]);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills & Counter */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[rgba(242,240,233,0.1)]">
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.1)]"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] ${
                  isSelected
                    ? "bg-[#D4FF69] text-[#111210] font-semibold shadow-[0_0_15px_rgba(212,255,105,0.2)]"
                    : "text-[#8E9086] hover:text-[#F2F0E9] hover:bg-[rgba(242,240,233,0.06)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Count */}
        <div className="font-mono text-xs text-[#8E9086] flex items-center gap-2">
          <span>Showing</span>
          <span className="text-[#F2F0E9] font-bold">
            {filteredProjects.length}
          </span>
          <span>of {initialProjects.length} products</span>
        </div>
      </div>

      {/* Projects List or Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.08)] p-8">
          <Filter className="w-8 h-8 text-[#8E9086] mx-auto mb-3" />
          <h3 className="font-display text-xl font-semibold text-[#F2F0E9] mb-1">
            No projects found in this category
          </h3>
          <p className="text-sm text-[#8E9086] max-w-sm mx-auto mb-4">
            Try selecting a different filter category to explore other case studies.
          </p>
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className="font-mono text-xs text-[#D4FF69] hover:underline"
          >
            Reset filter to All
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              layout="split"
            />
          ))}
        </div>
      )}
    </div>
  );
}
