import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Step {
  number: string;
  phase: string;
  description: string;
  deliverables: string[];
}

export function ApproachSection() {
  const steps: Step[] = [
    {
      number: "01",
      phase: "Understand",
      description:
        "Clarify the core problem, user incentives, operational constraints, and technical boundaries before touching code.",
      deliverables: ["Problem Framing", "User Constraints", "Success Metrics"],
    },
    {
      number: "02",
      phase: "Structure",
      description:
        "Define information architecture, data contracts, database entities, and user flows to establish clean system boundaries.",
      deliverables: ["Information Architecture", "Data Schema", "Route Hierarchy"],
    },
    {
      number: "03",
      phase: "Design",
      description:
        "Develop high-contrast interface hierarchy, responsive layout systems, typography scales, and deliberate interaction physics.",
      deliverables: ["Component Tokens", "Design System", "State Prototypes"],
    },
    {
      number: "04",
      phase: "Build",
      description:
        "Implement production-grade components, server-rendered views, accessible primitives, and robust backend integrations.",
      deliverables: ["Type-Safe Code", "Accessible Markup", "SSR & State Flow"],
    },
    {
      number: "05",
      phase: "Refine",
      description:
        "Execute cross-device QA, benchmark Core Web Vitals, optimize bundle sizes, audit keyboard flows, and resolve edge cases.",
      deliverables: ["Cross-Device QA", "Performance Audits", "Accessibility Checks"],
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F2F0E9] text-[#111210] relative overflow-hidden editorial-grain-light">
      <Container>
        {/* Editorial Section Heading */}
        <SectionHeading
          theme="light"
          eyebrow="Methodology & Craft"
          title="How I approach building products"
          description="A disciplined engineering workflow balancing exploratory problem definition with rigorous frontend execution and verifiable code quality."
          layout="split"
        />

        {/* 5-Phase Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 mt-12">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-7 rounded-xl bg-[#E7E4DB]/80 border border-[rgba(17,18,16,0.12)] hover:border-[rgba(17,18,16,0.3)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(17,18,16,0.1)]">
                  <span className="font-mono text-2xl font-bold text-[#111210]">
                    {step.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#6E7067]">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#111210] mb-2">
                  {step.phase}
                </h3>

                <p className="text-sm text-[#6E7067] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables pill tags */}
              <div className="pt-4 border-t border-[rgba(17,18,16,0.08)] space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E7067] block">
                  Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {step.deliverables.map((d) => (
                    <span
                      key={d}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-[rgba(17,18,16,0.06)] text-[#111210]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
