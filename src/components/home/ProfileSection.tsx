"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ScrollRevealText } from "@/components/react-bits/ScrollRevealText";
import { siteConfig } from "@/data/site-config";
import { motion } from "motion/react";
import {
  containerStaggerVariants,
  fadeInUpVariants,
} from "@/components/motion/motion-variants";
import { MapPin } from "lucide-react";

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
      className="py-24 md:py-36 bg-[#161714] border-t border-[rgba(242,240,233,0.08)] relative overflow-hidden"
    >
      <Container>
        {/* Section Eyebrow & Main Title with Viewport Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerStaggerVariants}
          className="max-w-3xl space-y-4 mb-16"
        >
          <motion.div variants={fadeInUpVariants}>
            <Eyebrow dotColor="lime">02 / PROFILE</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.2]"
          >
            A little about the person behind the products<span className="text-[#D4FF69]">.</span>
          </motion.h2>
        </motion.div>

        {/* Refined Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: React Bits Scroll Reveal Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#111210] border border-[rgba(242,240,233,0.1)] space-y-6 shadow-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D4FF69] block">
                Philosophy & Background
              </span>

              {/* React Bits Scroll Reveal component */}
              <ScrollRevealText baseOpacity={0.28}>
                I am a software engineer interested in the intersection of thoughtful interfaces, useful products, and reliable systems. I enjoy turning complex ideas into working applications and refining the details that make them easier to understand and use.
              </ScrollRevealText>

              <p className="text-base sm:text-lg text-[#8E9086] leading-[1.65] font-body">
                Rather than treating engineering and aesthetics as separate workflows, I build applications where type safety, responsive layout formulas, and micro-interactions reinforce each other from day one.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button href="/about" variant="lime" size="md" icon>
                  More About My Background
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Specs & Working Approach Cards (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerStaggerVariants}
            className="lg:col-span-5 space-y-6"
          >
            {/* Core Profile Card */}
            <motion.div
              variants={fadeInUpVariants}
              className="p-6 sm:p-8 rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.1)] space-y-4 shadow-lg"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(242,240,233,0.08)]">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                    {siteConfig.name}
                  </h3>
                  <p className="font-mono text-xs text-[#D4FF69]">
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
                  <span className="text-[#72E58A]">Selected Opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* Working Approach Sequence */}
            <motion.div
              variants={fadeInUpVariants}
              className="p-6 sm:p-8 rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.1)] space-y-4 shadow-lg"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
                Working Approach
              </span>

              <div className="space-y-3">
                {approaches.map((app) => (
                  <div
                    key={app.step}
                    className="flex items-start gap-3 p-2.5 rounded-lg bg-[#111210]/60 border border-[rgba(242,240,233,0.06)]"
                  >
                    <span className="font-mono text-xs text-[#D4FF69] bg-[rgba(212,255,105,0.1)] px-1.5 py-0.5 rounded">
                      {app.step}
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-semibold tracking-[-0.01em] text-[#F2F0E9]">
                        {app.name}
                      </h4>
                      <p className="font-body text-xs text-[#8E9086] leading-relaxed">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
