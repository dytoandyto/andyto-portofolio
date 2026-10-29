"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { ensureAbsoluteUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import Galaxy from "@/components/react-bits/Galaxy";
import { SplitText } from "@/components/react-bits/SplitText";
import { DeferredMount } from "@/components/ui/DeferredMount";
import { Copy, Check, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import {
  snappySpring,
  editorialTransition,
  viewportOnce,
} from "@/components/motion/motion-variants";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (siteConfig.contact.email) {
      navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const githubUrl = ensureAbsoluteUrl(siteConfig.contact.github);
  const linkedinUrl = ensureAbsoluteUrl(siteConfig.contact.linkedin);

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#111210] relative overflow-hidden editorial-grain">
      {/* 1. Base Decorative Layer: React Bits Galaxy for cosmic collaboration beacon */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#111210]"
        aria-hidden="true"
      >
        <DeferredMount className="contents">
          <Galaxy
          density={1}
          glowIntensity={0.3}
          flareIntensity={0.4}
          starSpeed={0.35}
          mouseRepulsion={false}
          clickWarp={false}
          intro={false}
          transparent={false}
          backgroundColor="#111210"
          starColors={["#D4FF69", "#F2F0E9", "#B6DB61", "#8E9086"]}
          />
        </DeferredMount>
        {/* Subtle top and bottom seam fades to integrate smoothly with neighbor sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111210] via-transparent to-[#0D0E0C] pointer-events-none" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={editorialTransition}
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow dotColor="lime" className="justify-center">
              Initiate Collaboration
            </Eyebrow>
          </motion.div>

          <SplitText
            as="h2"
            text="Have a thoughtful project in mind?"
            trigger="view"
            variant="rise"
            delay={0.08}
            stagger={0.065}
            duration={0.65}
            highlightWord="thoughtful"
            highlightClassName="font-editorial-accent italic text-[#D4FF69]"
            accentPunctuation={true}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.2]"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#8E9086] leading-[1.65] max-w-2xl mx-auto font-normal"
          >
            Let&apos;s discuss the problem, the people it serves, and what we can build together.
          </motion.p>

          {/* Email quick action row with spring hover physics */}
          {siteConfig.contact.email && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={snappySpring}
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.15)] hover:border-[#D4FF69] text-sm sm:text-base font-medium text-[#F2F0E9] hover:text-[#D4FF69] transition-colors group shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
              >
                <Mail className="w-5 h-5 text-[#D4FF69]" />
                <span>{siteConfig.contact.email}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#8E9086]" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={snappySpring}
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.12)] hover:bg-[rgba(242,240,233,0.06)] text-sm font-mono text-[#8E9086] hover:text-[#F2F0E9] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#72E58A]" />
                    <span className="text-[#72E58A]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy email</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          )}

          {/* Secondary links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-[#8E9086]"
          >
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2F0E9] transition-colors"
              >
                GitHub Profile ↗
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2F0E9] transition-colors"
              >
                LinkedIn Profile ↗
              </a>
            )}
            <Button href="/contact" variant="ghost" size="sm">
              More contact options →
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
