import React from "react";

interface StatusBadgeProps {
  status: "completed" | "in-progress" | "prototype" | "concept";
  customLabel?: string;
  className?: string;
}

export function StatusBadge({
  status,
  customLabel,
  className = "",
}: StatusBadgeProps) {
  const configs = {
    completed: {
      label: customLabel || "Production",
      dotClass: "bg-[#72E58A]",
      badgeClass:
        "bg-[rgba(114,229,138,0.1)] text-[#72E58A] border-[rgba(114,229,138,0.25)]",
    },
    "in-progress": {
      label: customLabel || "Active Development",
      dotClass: "bg-[#D4FF69]",
      badgeClass:
        "bg-[rgba(212,255,105,0.1)] text-[#D4FF69] border-[rgba(212,255,105,0.25)]",
    },
    prototype: {
      label: customLabel || "Functional Prototype",
      dotClass: "bg-[#FFAE5E]",
      badgeClass:
        "bg-[rgba(255,174,94,0.1)] text-[#FFAE5E] border-[rgba(255,174,94,0.25)]",
    },
    concept: {
      label: customLabel || "Exploratory Concept",
      dotClass: "bg-[#B89BFF]",
      badgeClass:
        "bg-[rgba(184,155,255,0.1)] text-[#B89BFF] border-[rgba(184,155,255,0.25)]",
    },
  };

  const config = configs[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${config.badgeClass} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full inline-block ${config.dotClass}`}
        aria-hidden="true"
      />
      <span>{config.label}</span>
    </span>
  );
}
