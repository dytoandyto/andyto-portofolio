"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ScrollRevealText } from "@/components/react-bits/ScrollRevealText";
import Threads from "@/components/react-bits/Threads";
import { siteConfig } from "@/data/site-config";
import { motion } from "motion/react";
import {
  containerStaggerVariants,
  fadeInUpVariants,
  editorialTransition,
} from "@/components/motion/motion-variants";
import { MapPin, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export function ProfileSection() {
  const approaches = [
    { step: "01", name: "Understand", desc: "Clarify user incentives & system boundaries." },
    { step: "02", name: "Design", desc: "Establish high-contrast typographic hierarchy." },
    { step: "03", name: "Build", desc: "Ship type-safe, resilient components & endpoints." },
    { step: "04", name: "Refine", desc: "Audit cross-device speed, a11y, and tactile polish." },
  ];

  return (
    <section
      id="profile"
      className="pt-12 sm:pt-14 md:pt-16 lg:pt-18 pb-16 sm:pb-20 md:pb-24 bg-[#141512] border-t border-[rgba(242,240,233,0.08)] relative overflow-hidden"
    >
      {/* 1. Base Decorative Layer: React Bits Threads for flowing craft and human engineering depth */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <Threads
          color="#303A27"
          accentColor="#D4FF69"
          amplitude={1.2}
          distance={0.35}
          enableMouseInteraction={true}
          lineCount={65}
          thickness={0.6}
          softness={1.2}
          speed={0.35}
          waves={1.2}
          brightness={1.1}
          fade={0.4}
          opacity={0.45}
        />
        {/* Subtle dark gradient overlay to preserve reading focus on editorial copy */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141512] via-[#141512]/60 to-[#141512] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* Section Eyebrow & Main Title with Viewport Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={editorialTransition}
          className="max-w-3xl space-y-4 mb-8 sm:mb-10 lg:mb-12"
        >
          <div>
            <Eyebrow dotColor="lime">01 / PROFILE</Eyebrow>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.15]">
            The person behind the products<span className="text-[#D4FF69]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9A9C92] leading-[1.65] max-w-2xl font-normal">
            A background rooted in product thinking, systems engineering, and crafting digital experiences with purpose.
          </p>
        </motion.div>

        {/* Responsive Two-Column on Desktop, Single-Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Main Biography Narrative (7 cols desktop, full width mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={editorialTransition}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-10 rounded-2xl bg-[#111210] border border-[rgba(242,240,233,0.10)] space-y-6 shadow-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D4FF69] block">
                Philosophy & Engineering Focus
              </span>

              {/* React Bits Scroll Reveal component */}
              <ScrollRevealText baseOpacity={0.28}>
                I am a software engineer interested in the intersection of thoughtful interfaces, useful products, and reliable systems. I enjoy turning complex ideas into working applications and refining the details that make them easier to understand and use.
              </ScrollRevealText>

              <p className="text-base sm:text-lg text-[#9A9C92] leading-[1.65] font-body">
                Rather than treating engineering and aesthetics as separate workflows, I build applications where type safety, responsive layout formulas, and micro-interactions reinforce each other from day one.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/about" variant="lime" size="md" icon>
                  More About My Background
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Supporting Specs & Working Approach Cards (5 cols desktop, full width mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...editorialTransition, delay: 0.12 }}
            className="lg:col-span-5 space-y-6 w-full"
          >
            {/* Core Profile Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.10)] space-y-4 shadow-lg hover:border-[rgba(242,240,233,0.22)] transition-colors">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(242,240,233,0.08)]">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                    {siteConfig.name}
                  </h3>
                  <p className="font-mono text-xs text-[#D4FF69] mt-0.5">
                    {siteConfig.role}
                  </p>
                </div>
                <span className="flex items-center gap-1 font-mono text-xs text-[#8E9086]">
                  <MapPin className="w-3.5 h-3.5 text-[#D4FF69]" /> {siteConfig.location}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm font-mono text-[#8E9086]">
                <div className="flex items-center justify-between">
                  <span>Focus:</span>
                  <span className="text-[#F2F0E9]">Software & Products</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Disciplines:</span>
                  <span className="text-[#F2F0E9]">Frontend · UI/UX · Full-Stack</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Availability:</span>
                  <span className="text-[#D4FF69] flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#D4FF69] animate-pulse" />
                    Open to Collaborations
                  </span>
                </div>
              </div>
            </div>

            {/* Working Approach Sequence */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.10)] space-y-4 shadow-lg hover:border-[rgba(242,240,233,0.22)] transition-colors">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
                Disciplined Working Approach
              </span>

              <div className="space-y-2.5">
                {approaches.map((app) => (
                  <div
                    key={app.step}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#111210]/60 border border-[rgba(242,240,233,0.06)] hover:border-[rgba(212,255,105,0.25)] transition-colors"
                  >
                    <span className="font-mono text-xs text-[#D4FF69] bg-[rgba(212,255,105,0.10)] px-2 py-0.5 rounded font-semibold shrink-0">
                      {app.step}
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-semibold tracking-[-0.01em] text-[#F2F0E9]">
                        {app.name}
                      </h4>
                      <p className="font-body text-xs text-[#8E9086] leading-relaxed mt-0.5">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default ProfileSection;
