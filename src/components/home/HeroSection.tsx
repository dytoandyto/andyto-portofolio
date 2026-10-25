"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/react-bits/AnimatedHeadline";
import Lanyard from './Lanyard';
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import {
  containerStaggerVariants,
  fadeInUpVariants,
  gentleSpring,
} from "@/components/motion/motion-variants";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden editorial-grain min-h-[90vh] flex flex-col justify-center">
      {/* Ambient subtle animated glow background */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.03, 0.07, 0.03],
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-[#D4FF69] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.02, 0.05, 0.02],
          x: [0, -12, 0],
          y: [0, 12, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-[#F2F0E9] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Personal positioning & Split Text headline (6 cols) */}
          <motion.div
            variants={containerStaggerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={fadeInUpVariants}>
              <Eyebrow dotColor="lime">
                SOFTWARE ENGINEER · DIGITAL PRODUCT BUILDER
              </Eyebrow>
            </motion.div>

            {/* React Bits Split Text Animated Headline */}
            <div className="text-[clamp(2.15rem,4.6vw,3.6rem)] font-semibold tracking-[-0.03em] text-[#F2F0E9] leading-[1.12]">
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
              className="text-base sm:text-lg text-[#8E9086] leading-[1.65] max-w-xl font-normal"
            >
              I work across interface design and software engineering to build digital experiences that are clear, useful, and carefully crafted.
            </motion.p>

            {/* Coordinated CTA Buttons Entrance */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
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
              className="pt-6 border-t border-[rgba(242,240,233,0.1)] flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono text-[#8E9086]"
            >
              {siteConfig.disciplines.map((d) => (
                <span key={d} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D4FF69]" />
                  {d}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: React Bits 3D Interactive Lanyard (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...gentleSpring, delay: 0.25 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="w-full max-w-lg mx-auto relative rounded-3xl bg-gradient-to-b from-[#181916]/80 to-[#111210]/90 border border-[rgba(242,240,233,0.1)] p-1 sm:p-2 shadow-2xl backdrop-blur-sm overflow-hidden">
              <div style={{ width: '100%', height: '600px' }}>
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
          className="mt-12 sm:mt-16 flex items-center justify-between text-xs font-mono text-[#8E9086] pt-6 border-t border-[rgba(242,240,233,0.06)]"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF69] animate-pulse" />
            <span>Interactive 3D Badge Experience</span>
          </div>
          <a
            href="#capabilities"
            className="flex items-center gap-1.5 hover:text-[#F2F0E9] transition-colors cursor-pointer group"
          >
            <span>01 / Capabilities</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
