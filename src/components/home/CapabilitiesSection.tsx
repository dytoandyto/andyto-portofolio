import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MonitorSmartphone,
  Palette,
  Server,
  Compass,
  Sparkles,
} from "lucide-react";

interface CapabilityGroup {
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  principles: string[];
}

export function CapabilitiesSection() {
  const groups: CapabilityGroup[] = [
    {
      title: "Interface Engineering",
      description:
        "Architecting robust, modular frontend applications with strict TypeScript contracts, semantic HTML, and fluid layouts.",
      icon: MonitorSmartphone,
      technologies: ["React 19", "Next.js App Router", "TypeScript", "Tailwind CSS"],
      principles: ["SSR & Streaming", "Zero Layout Shift", "Clean State Separation"],
    },
    {
      title: "UI/UX Implementation",
      description:
        "Translating complex user journeys into high-contrast editorial systems with obsessive attention to typographic scales and hierarchy.",
      icon: Palette,
      technologies: ["Design Tokens", "Space Grotesk / DM Sans", "Figma-to-Code", "Responsive Grids"],
      principles: ["WCAG 2.2 AA Contrast", "Fluid Typography", "Visual Pacing"],
    },
    {
      title: "Full-Stack Development",
      description:
        "Building end-to-end data flows with modern relational databases, type-safe ORMs, and secure upload/session pipelines.",
      icon: Server,
      technologies: ["Prisma ORM", "PostgreSQL", "Laravel / Inertia", "Supabase"],
      principles: ["Relational Integrity", "Safe Binary File Gates", "Optimistic Mutations"],
    },
    {
      title: "Interaction & Motion",
      description:
        "Crafting purposeful interface feedback and transitions that inform users without delaying navigation or creating visual fatigue.",
      icon: Sparkles,
      technologies: ["Motion for React", "CSS Transitions", "Reduced-Motion Media"],
      principles: ["Hardware Acceleration", "Spring Physics", "Keyboard Accessibility"],
    },
    {
      title: "Product Thinking",
      description:
        "Balancing user needs, operational constraints, and engineering velocity to build tools that solve genuine day-to-day problems.",
      icon: Compass,
      technologies: ["User Flow Mapping", "Information Architecture", "Feature Prioritization"],
      principles: ["Clarity over Bloat", "Honest Metrics", "Rapid Feedback Loops"],
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#111210] relative">
      <Container>
        <SectionHeading
          eyebrow="Capabilities & Disciplines"
          title="Engineering & design capabilities"
          description="A balanced toolset formed through actual product delivery across frontend architecture, interface craft, and full-stack integration."
          layout="split"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className={`p-6 sm:p-8 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.1)] hover:border-[rgba(242,240,233,0.22)] transition-all flex flex-col justify-between ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(242,240,233,0.06)] border border-[rgba(242,240,233,0.1)] flex items-center justify-center text-[#D4FF69]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#8E9086]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#F2F0E9] mb-3">
                    {group.title}
                  </h3>

                  <p className="text-sm text-[#8E9086] leading-relaxed mb-6">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[rgba(242,240,233,0.08)]">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#111210] border border-[rgba(242,240,233,0.08)] text-[#F2F0E9]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Principles bullet tags */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#D4FF69]/80">
                    {group.principles.map((pr) => (
                      <span key={pr} className="flex items-center gap-1">
                        <span>•</span> {pr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
