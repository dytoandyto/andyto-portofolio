"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Copy, Check, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import {
  containerStaggerVariants,
  fadeInUpVariants,
  snappySpring,
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

  return (
    <section className="py-28 md:py-40 bg-[#111210] relative overflow-hidden editorial-grain">
      {/* Decorative ambient subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4FF69]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerStaggerVariants}
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          <motion.div variants={fadeInUpVariants}>
            <Eyebrow dotColor="lime" className="justify-center">
              Initiate Collaboration
            </Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeInUpVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[#F2F0E9] leading-[1.2]"
          >
            Have a thoughtful project in mind<span className="text-[#D4FF69]">?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            className="text-base sm:text-lg text-[#8E9086] leading-[1.65] max-w-2xl mx-auto font-normal"
          >
            Let&apos;s discuss the problem, the people it serves, and what we can build together.
          </motion.p>

          {/* Email quick action row with spring hover physics */}
          {siteConfig.contact.email && (
            <motion.div
              variants={fadeInUpVariants}
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
            variants={fadeInUpVariants}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-[#8E9086]"
          >
            {siteConfig.contact.github && (
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2F0E9] transition-colors"
              >
                GitHub Profile ↗
              </a>
            )}
            {siteConfig.contact.linkedin && (
              <a
                href={siteConfig.contact.linkedin}
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
