"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle escape key & focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#111210]/95 backdrop-blur-2xl md:hidden text-[#F2F0E9] p-6"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[rgba(242,240,233,0.1)]">
            <Link
              href="/"
              onClick={onClose}
              className="font-display text-xl font-semibold tracking-[-0.02em] text-[#F2F0E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
            >
              {siteConfig.name.toLowerCase()}
              <span className="text-[#D4FF69]">.</span>
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#8E9086] hover:text-[#F2F0E9] hover:bg-[rgba(242,240,233,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center space-y-6 py-8">
            {siteConfig.navItems.map((item, i) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between font-display text-3xl font-semibold tracking-[-0.02em] transition-colors ${
                      isActive
                        ? "text-[#D4FF69]"
                        : "text-[#F2F0E9] hover:text-[#D4FF69]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className={`w-6 h-6 transition-transform ${
                        isActive
                          ? "text-[#D4FF69] translate-x-1"
                          : "text-[#8E9086]"
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[rgba(242,240,233,0.1)] space-y-4">
            {siteConfig.availability && (
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E9086]">
                <span className="w-2 h-2 rounded-full bg-[#D4FF69] animate-pulse" />
                <span>{siteConfig.availability.label}</span>
              </div>
            )}
            <div className="flex items-center justify-between text-sm font-mono text-[#8E9086]">
              {siteConfig.contact.github && (
                <a
                  href={siteConfig.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F0E9] transition-colors"
                >
                  GitHub
                </a>
              )}
              {siteConfig.contact.linkedin && (
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F0E9] transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#F2F0E9] transition-colors text-[#D4FF69]"
                >
                  {siteConfig.contact.email}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
