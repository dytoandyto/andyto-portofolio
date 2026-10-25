"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/react-bits/AnimatedHeadline";
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
    <section id="hero" className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden flex flex-col justify-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (or Mobile Stack Top): Personal positioning & Split Text headline */}
          <motion.div
            variants={containerStaggerVariants}
            initial="hidden"
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

          {/* Right Column (or Mobile Stack Below): React Bits 3D Interactive Lanyard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...gentleSpring, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center w-full"
          >
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto relative rounded-3xl bg-gradient-to-b from-[#181916]/80 to-[#111210]/95 border border-[rgba(242,240,233,0.10)] p-1 sm:p-2 shadow-2xl backdrop-blur-sm overflow-hidden group">
              {/* Sensible Fallback Card Layer positioned underneath 3D canvas */}
              <div
                className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-[200px] h-[300px] sm:w-[230px] sm:h-[340px] rounded-2xl bg-[#141512] border border-[rgba(242,240,233,0.14)] shadow-2xl p-6 flex flex-col justify-between items-center text-center opacity-70 group-hover:opacity-90 transition-opacity">
                  <div className="w-10 h-2.5 rounded-full bg-[rgba(242,240,233,0.15)] border border-[rgba(242,240,233,0.2)] mb-1" />
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-[#D4FF69]/10 border border-[#D4FF69]/30 flex items-center justify-center text-[#D4FF69] font-mono text-xl font-bold">
                      A
                    </div>
                    <p className="font-display font-semibold text-[#F2F0E9] text-base">
                      {siteConfig.name}
                    </p>
                    <p className="font-mono text-[11px] text-[#D4FF69]">
                      {siteConfig.role}
                    </p>
                  </div>
                  <div className="w-full pt-3 border-t border-[rgba(242,240,233,0.08)] font-mono text-[10px] text-[#8E9086] flex justify-between">
                    <span>ID: 2026-ENG</span>
                    <span className="text-[#D4FF69]">VERIFIED</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[560px] relative z-10">
                <Lanyard
                  frontImage="/card-front.png"
                  backImage="/card-back.png"
                  strapImage="/band.png"
                  imageFit="cover"
                  cardColor="#ffffff"
                  orientation="portrait"
                  finish="glossy"
                  cornerRadius={0.3}
                  size={0.6}
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
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF69] animate-pulse" />
            <span>Interactive 3D Badge Experience</span>
          </div>
          <a
            href="#profile"
            className="flex items-center gap-1.5 hover:text-[#F2F0E9] transition-colors cursor-pointer group"
          >
            <span>01 / Profile</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

export default HeroSection;
