"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";
import { Menu } from "lucide-react";
import { motion } from "motion/react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111210]/85 backdrop-blur-md border-b border-[rgba(242,240,233,0.08)] py-3.5 shadow-sm"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="group flex items-center font-display text-xl font-semibold tracking-[-0.02em] text-[#F2F0E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] rounded-sm"
                aria-label={`${siteConfig.name} - Home`}
              >
                <span>{siteConfig.name.toLowerCase()}</span>
                <span className="text-[#D4FF69] transition-transform group-hover:scale-125 inline-block ml-0.5">
                  .
                </span>
              </Link>

              {/* Status pill on desktop */}
              {siteConfig.availability && (
                <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(242,240,233,0.04)] border border-[rgba(242,240,233,0.1)] text-xs font-mono text-[#8E9086]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF69] shadow-[0_0_8px_rgba(212,255,105,0.7)]" />
                  <span className="truncate max-w-[240px]">
                    {siteConfig.availability.label}
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[#181916]/80 p-1.5 rounded-full border border-[rgba(242,240,233,0.1)]">
              {siteConfig.navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-sm font-medium font-body rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] ${
                      isActive
                        ? "text-[#111210] font-semibold"
                        : "text-[#8E9086] hover:text-[#F2F0E9]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-[#F2F0E9] shadow-sm -z-10"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Quick Contact CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs sm:text-sm font-medium tracking-tight text-[#111210] bg-[#D4FF69] hover:bg-[#c2f34e] px-4 py-2 rounded-md transition-all active:scale-[0.98] shadow-[0_0_15px_rgba(212,255,105,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
              >
                Let&apos;s talk
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-[#F2F0E9] hover:bg-[rgba(242,240,233,0.08)] border border-[rgba(242,240,233,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Modal */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
