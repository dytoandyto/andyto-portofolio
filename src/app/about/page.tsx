import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ContactSection } from "@/components/home/ContactSection";
import {
  Sparkles,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Background & Principles",
  description:
    "Engineering philosophy, problem-solving approach, and current technical interests of Andyto, Product-minded Software Engineer.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Clarity over cleverness",
      description:
        "Code is read ten times more often than it is written. I prefer explicit data structures, clear variable naming, and predictable control flow over dense, brittle abstractions.",
      icon: Terminal,
    },
    {
      title: "Interfaces are product promises",
      description:
        "Every button state, loading transition, and error alert is an emotional touchpoint with the user. If an interface feels sluggish or unresponsive, trust erodes immediately.",
      icon: Sparkles,
    },
    {
      title: "Rigor at the boundaries",
      description:
        "Whether it is parsing input payloads with Zod, guarding file uploads via binary magic bytes, or checking Server Component props, enforcing safety at system boundaries prevents production headaches.",
      icon: ShieldCheck,
    },
    {
      title: "Performance is an accessibility baseline",
      description:
        "A website that requires 20MB of JavaScript or stutters on a mid-range phone excludes real people. High performance is not an optimization pass; it is a fundamental design constraint.",
      icon: Zap,
    },
  ];

  const currentInterests = [
    {
      topic: "React 19 & Server Architecture",
      detail:
        "Exploring streaming SSR, Server Actions, and optimal serialization boundaries to minimize client bundle weight.",
    },
    {
      topic: "Design Systems & Fluid Typography",
      detail:
        "Crafting token architectures with Tailwind CSS and CSS clamp formulas that maintain proportional harmony across all display widths.",
    },
    {
      topic: "Inertia.js & Modern Monoliths",
      detail:
        "Evaluating rapid developer velocity through server-driven routing while retaining full client-side React responsiveness.",
    },
    {
      topic: "Accessible Interaction Physics",
      detail:
        "Implementing spring animations with Motion that respect prefers-reduced-motion and full screen-reader DOM semantics.",
    },
  ];

  return (
    <div className="pt-32 md:pt-40">
      <Container>
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <Eyebrow dotColor="lime">Biography & Philosophy</Eyebrow>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F2F0E9] tracking-[-0.03em] leading-[1.14]">
            Designing with empathy, engineering with precision<span className="text-[#D4FF69]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#8E9086] leading-[1.65] font-normal">
            {siteConfig.supportingMessage}
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-[rgba(242,240,233,0.1)]">
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-8 font-body text-base sm:text-lg text-[#8E9086] leading-[1.7]">
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                Background
              </h2>
              <p>
                Hello, I am Andyto. I am a software engineer based in Indonesia with a deep commitment to frontend craftsmanship, interface architecture, and full-stack product development.
              </p>
              <p>
                My work centers on building software that treats both users and fellow developers with respect. In a web increasingly cluttered with heavy libraries, generic boilerplate, and flashy animations that obstruct content, I champion a return to thoughtful simplicity: deliberate typography, generous whitespace, fast load times, and rock-solid state management.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                How I approach problem solving
              </h2>
              <p>
                Before writing code, I seek to deeply understand the context. Who is using this product? What constraints exist in their daily environment? What is the real bottleneck they are trying to overcome?
              </p>
              <p>
                When building <strong>ClassHub</strong>, for example, the core realization was that students walking between university lectures needed to verify room locations in less than two seconds on a mobile browser under spotty cellular connectivity. That insight dictated an SSR-first architecture with instantaneous HTML delivery, rather than an over-engineered client-heavy SPA.
              </p>
            </div>
          </div>

          {/* Sidebar Highlight Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.1)] space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D4FF69] block">
                Technical Focus Profile
              </span>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs font-mono text-[#8E9086] block">
                    Core Languages
                  </span>
                  <p className="text-[#F2F0E9] font-medium">
                    TypeScript, JavaScript (ESNext), SQL, PHP, HTML5/CSS3
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#8E9086] block">
                    Frameworks & Runtime
                  </span>
                  <p className="text-[#F2F0E9] font-medium">
                    React 19, Next.js (App Router), Laravel, Node.js
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#8E9086] block">
                    Data & Tooling
                  </span>
                  <p className="text-[#F2F0E9] font-medium">
                    PostgreSQL, MySQL, Prisma ORM, Supabase, Tailwind CSS, Motion
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#8E9086] block">
                    Positioning
                  </span>
                  <p className="text-[#D4FF69] font-mono text-xs">
                    {siteConfig.role}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(242,240,233,0.08)]">
                <Button href="/work" variant="lime" size="sm" className="w-full">
                  Explore selected projects
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Principles Section */}
        <section className="py-20 md:py-28 border-b border-[rgba(242,240,233,0.1)]">
          <div className="max-w-2xl mb-12">
            <Eyebrow dotColor="lime">Values</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#F2F0E9] mt-3">
              Core engineering principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((pr) => {
              const Icon = pr.icon;
              return (
                <div
                  key={pr.title}
                  className="p-6 sm:p-8 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.08)] space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(212,255,105,0.1)] text-[#D4FF69] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                      {pr.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#8E9086] leading-[1.6]">
                    {pr.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Technical Interests */}
        <section className="py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <Eyebrow dotColor="lime">Active Exploration</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#F2F0E9] mt-3">
              What I am currently exploring
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentInterests.map((item, idx) => (
              <div
                key={item.topic}
                className="p-6 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.08)] space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#D4FF69]">
                  <span>0{idx + 1}</span>
                  <span>Active Investigation</span>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                  {item.topic}
                </h3>
                <p className="font-body text-sm text-[#8E9086] leading-[1.6]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* Closing CTA */}
      <ContactSection />
    </div>
  );
}
