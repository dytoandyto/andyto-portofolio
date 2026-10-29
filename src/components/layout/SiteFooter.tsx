"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ensureAbsoluteUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { motion } from "motion/react";
import {
  containerStaggerVariants,
  fadeInUpVariants,
  snappySpring,
} from "@/components/motion/motion-variants";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  const currentYear = 2026;
  const linkedinUrl = ensureAbsoluteUrl(siteConfig.contact.linkedin);
  const githubUrl = ensureAbsoluteUrl(siteConfig.contact.github);

  return (
    <footer className="w-full bg-[#0E0F0D] text-[#F2F0E9] border-t border-[rgba(242,240,233,0.08)] py-16 md:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerStaggerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[rgba(242,240,233,0.08)]"
        >
          {/* Identity, Role & Live Availability Status */}
          <motion.div variants={fadeInUpVariants} className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-block font-sans text-2xl font-semibold tracking-[-0.025em] text-[#F2F0E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69] rounded"
            >
              {siteConfig.name.toLowerCase()}
              <span className="text-[#D4FF69]">.</span>
            </Link>
            <p className="font-sans text-sm text-[#9A9C92] max-w-sm leading-[1.65]">
              {siteConfig.statement}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#181916] border border-[rgba(242,240,233,0.08)] text-xs font-mono text-[#9A9C92]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF69] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF69]" />
                </span>
                <span>{siteConfig.availability.label}</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={fadeInUpVariants} className="md:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9A9C92] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-sans">
              {siteConfig.navItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 3 }}
                  transition={snappySpring}
                >
                  <Link
                    href={item.href}
                    className="text-[#9A9C92] hover:text-[#F2F0E9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69] rounded py-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Channels & Connect */}
          <motion.div variants={fadeInUpVariants} className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9A9C92] block">
              Channels
            </span>
            <ul className="space-y-2.5 text-sm font-sans">
              {siteConfig.contact.email && (
                <motion.li whileHover={{ x: 3 }} transition={snappySpring}>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#D4FF69] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69] rounded py-0.5 inline-flex items-center gap-1 font-mono text-xs"
                  >
                    <span>{siteConfig.contact.email}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.li>
              )}
              {githubUrl && (
                <motion.li whileHover={{ x: 3 }} transition={snappySpring}>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9A9C92] hover:text-[#F2F0E9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69] rounded py-0.5 inline-flex items-center gap-1"
                  >
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9C92]" />
                  </a>
                </motion.li>
              )}
              {linkedinUrl && (
                <motion.li whileHover={{ x: 3 }} transition={snappySpring}>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9A9C92] hover:text-[#F2F0E9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69] rounded py-0.5 inline-flex items-center gap-1"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9C92]" />
                  </a>
                </motion.li>
              )}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar with dynamic year, colophon and return to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-mono text-[#9A9C92]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {currentYear} {siteConfig.name}. All rights reserved.</span>
          </div>
          <ScrollToTop />
        </div>
      </Container>
    </footer>
  );
}
