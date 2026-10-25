import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: "lime" | "muted" | "none";
  theme?: "dark" | "light";
}

export function Eyebrow({
  children,
  className = "",
  dotColor = "lime",
  theme = "dark",
}: EyebrowProps) {
  const dotClasses = {
    lime: "bg-[#D4FF69] shadow-[0_0_8px_rgba(212,255,105,0.6)]",
    muted: theme === "dark" ? "bg-[#8E9086]" : "bg-[#6E7067]",
    none: "",
  };

  const textClasses =
    theme === "dark" ? "text-[#8E9086]" : "text-[#6E7067]";

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-medium ${textClasses} ${className}`}
    >
      {dotColor !== "none" && (
        <span
          className={`h-1.5 w-1.5 rounded-full inline-block ${dotClasses[dotColor]}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
}
