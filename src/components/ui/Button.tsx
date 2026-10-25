"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { snappySpring } from "@/components/motion/motion-variants";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "lime" | "outline-light" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = false,
  external = false,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium font-body transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 rounded-md",
    md: "text-sm px-5 py-2.5 gap-2 rounded-md",
    lg: "text-base px-6 py-3.5 gap-2.5 rounded-lg font-medium",
  };

  const variantClasses = {
    primary:
      "bg-[#F2F0E9] text-[#111210] hover:bg-white shadow-sm",
    secondary:
      "bg-transparent text-[#F2F0E9] border border-[rgba(242,240,233,0.2)] hover:border-[rgba(242,240,233,0.4)] hover:bg-[rgba(242,240,233,0.05)]",
    lime:
      "bg-[#D4FF69] text-[#111210] font-semibold hover:bg-[#c2f34e] shadow-[0_0_20px_rgba(212,255,105,0.25)]",
    "outline-light":
      "bg-transparent text-[#111210] border border-[rgba(17,18,16,0.25)] hover:border-[#111210] hover:bg-[rgba(17,18,16,0.05)]",
    ghost:
      "bg-transparent text-[#8E9086] hover:text-[#F2F0E9] hover:bg-[rgba(242,240,233,0.06)]",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={snappySpring}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          <span>{children}</span>
          {icon && (
            <motion.div whileHover={{ x: 2, y: -2 }} transition={snappySpring}>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          )}
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={snappySpring}
        className="inline-block"
      >
        <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
          <span>{children}</span>
          {icon && (
            <motion.div whileHover={{ x: 2, y: -2 }} transition={snappySpring}>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          )}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={snappySpring}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {icon && (
        <motion.div whileHover={{ x: 2, y: -2 }} transition={snappySpring}>
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      )}
    </motion.button>
  );
}
