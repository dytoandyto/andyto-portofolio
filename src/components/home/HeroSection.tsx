"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/react-bits/AnimatedHeadline";
import ShapeGrid from "@/components/react-bits/ShapeGrid";
import Lanyard from "./Lanyard";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import {
  containerStaggerVariants,
  fadeInUpVariants,
  gentleSpring,
} from "@/components/motion/motion-variants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden flex flex-col justify-center bg-[#0C0D0A]"
    >
      {/* 1. Base Decorative Layer: React Bits ShapeGrid background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <ShapeGrid
          shape="square"
          direction="diagonal"
          lineColor="#252A22"
          hoverColor="#D4FF69"
          hoverFillColor="#D4FF69"
          fillOpacity={0.08}
          cellSize={52}
          speed={0.15}
          glow={0.18}
          twinkle={0}
          fade={0.8}
          clickCascade={false}
          intro={true}
          opacity={0.7}
          backgroundColor="transparent"
        />
        {/* Subtle dark gradient overlay to preserve text contrast and edge transitions */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D0A]/95 via-[#0C0D0A]/50 to-transparent pointer-events-none hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0D0A]/85 via-transparent to-[#0C0D0A] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (or Mobile Stack Top): Personal positioning & Split Text headline */}
          <motion.div
            variants={containerStaggerVariants}
            initial={false}
            animate="visible"
            className="lg:col-span-6 space-y-6 sm:space-y-7"
          >
            <motion.div variants={fadeInUpVariants}>
              <Eyebrow dotColor="lime">
                SOFTWARE ENGINEER · DIGITAL PRODUCT BUILDER
              </Eyebrow>
            </motion.div>

            {/* React Bits Split Text Animated Headline */}
            <div className="text-[clamp(2.35rem,5.5vw,4.25rem)] font-semibold tracking-[-0.035em] text-[#F2F0E9] leading-[1.1]">
              <AnimatedHeadline
                text={"I turn complex ideas\ninto thoughtful digital products."}
                highlightWord="thoughtful"
                delay={0.12}
                duration={0.65}
                stagger={0.045}
              />
            </div>

            {/* Supporting Paragraph with subtle fade entrance */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-base sm:text-lg text-[#9A9C92] leading-[1.65] max-w-xl font-normal"
            >
              I build digital experiences that bring together useful interfaces, product thinking, and reliable engineering.
            </motion.p>

            {/* Coordinated CTA Buttons */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <Button href="#projects" variant="lime" size="md" icon>
                Explore My Work
              </Button>
              <Button href="#profile" variant="secondary" size="md">
                About Me
              </Button>
            </motion.div>

            {/* Quick disciplines badges */}
            <motion.div
              variants={fadeInUpVariants}
              className="pt-5 border-t border-[rgba(242,240,233,0.08)] flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono text-[#8E9086]"
            >
              {siteConfig.disciplines.map((d) => (
                <span key={d} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF69]" />
                  {d}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (or Mobile Stack Below): React Bits 3D Interactive Lanyard suspended against background */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...gentleSpring, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center w-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px]"
          >
            <div className="w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] relative z-10 flex items-center justify-center">
              <Lanyard
                frontImage="/card-front.png"
                backImage="/card-back.png"
                portraitImage={siteConfig.identity?.portrait || siteConfig.portrait}
                strapImage="/band.png"
                imageFit="cover"
                cardColor="#ffffff"
                orientation="portrait"
                finish="glossy"
                cornerRadius={0.3}
                size={0.65}
                anchor="center"
                strapLength={0.5}
                strapColor="#111111"
                strapWidth={0.65}
                metal="silver"
                gravity={1}
                damping={0.5}
                elasticity={0.5}
                breeze={0.5}
                interactive
                intro
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll down trigger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 sm:mt-14 flex items-center justify-between text-xs font-mono text-[#8E9086] pt-5 border-t border-[rgba(242,240,233,0.06)]"
        >
        </motion.div>
      </Container>
    </section>
  );
}

export default HeroSection;
