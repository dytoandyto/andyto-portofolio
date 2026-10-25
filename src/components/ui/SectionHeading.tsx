import React from "react";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
  layout?: "stacked" | "split";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "dark",
  layout = "stacked",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  if (layout === "split") {
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline mb-12 md:mb-20 ${className}`}
      >
        <div className="md:col-span-6 space-y-3">
          {eyebrow && <Eyebrow theme={theme}>{eyebrow}</Eyebrow>}
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] leading-[1.2] ${
              isDark ? "text-[#F2F0E9]" : "text-[#111210]"
            }`}
          >
            {title}
          </h2>
        </div>
        {description && (
          <div className="md:col-span-6">
            <p
              className={`text-base sm:text-lg leading-[1.65] font-normal max-w-xl ${
                isDark ? "text-[#8E9086]" : "text-[#6E7067]"
              }`}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-4 max-w-3xl mb-12 md:mb-16 ${className}`}>
      {eyebrow && <Eyebrow theme={theme}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] leading-[1.2] ${
          isDark ? "text-[#F2F0E9]" : "text-[#111210]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-[1.65] font-normal ${
            isDark ? "text-[#8E9086]" : "text-[#6E7067]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
