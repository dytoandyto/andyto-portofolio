"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { motion } from "motion/react";
import {
  containerStaggerVariants,
  fadeInUpVariants,
  snappySpring,
} from "@/components/motion/motion-variants";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#0D0E0C] text-[#F2F0E9] border-t border-[rgba(242,240,233,0.08)] py-16 md:py-24 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerStaggerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(242,240,233,0.08)]"
        >
          {/* Identity & Statement */}
          <motion.div variants={fadeInUpVariants} className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-block font-display text-2xl font-semibold tracking-[-0.02em] text-[#F2F0E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
            >
              {siteConfig.name.toLowerCase()}
              <span className="text-[#D4FF69]">.</span>
            </Link>
            <p className="font-body text-sm text-[#8E9086] max-w-sm leading-[1.6]">
              {siteConfig.statement}
            </p>
            <p className="text-xs font-mono text-[#8E9086]">
              {siteConfig.role} · {siteConfig.location}
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={fadeInUpVariants} className="md:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-body">
              {siteConfig.navItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 3 }}
                  transition={snappySpring}
                >
                  <Link
                    href={item.href}
                    className="text-[#8E9086] hover:text-[#F2F0E9] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B6DB61]"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Channels & Profiles */}
          <motion.div variants={fadeInUpVariants} className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
              Channels
            </span>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.contact.email && (
                <motion.li whileHover={{ x: 3 }} transition={snappySpring}>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#D4FF69] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B6DB61]"
                  >
                    {siteConfig.contact.email}
                  </a>
                </motion.li>
              )}
              {siteConfig.contact.github && (
                <motion.li whileHover={{ x: 3 }} transition={snappySpring}>
                  <a
                    href={siteConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8E9086] hover:text-[#F2F0E9] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B6DB61]"
                  >
                    GitHub Profile ↗
                  </a>
                </motion.li>
              )}
              {siteConfig.contact.linkedin && (
                <motion.li whileHover={{ x: 3 }} transition={snappySpring}>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8E9086] hover:text-[#F2F0E9] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B6DB61]"
                  >
                    LinkedIn Profile ↗
                  </a>
                </motion.li>
              )}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar with dynamic year and return to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-mono text-[#8E9086]">
          <div>
            <span>© {currentYear} {siteConfig.name}. Designed & engineered with Next.js & Motion.</span>
          </div>

          <ScrollToTop />
        </div>
      </Container>
    </footer>
  );
}
