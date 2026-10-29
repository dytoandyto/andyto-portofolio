import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ShieldCheck } from "lucide-react";

interface ProjectMockupProps {
  project: Project;
  variant?: "card" | "hero";
  className?: string;
}

export function ProjectMockup({
  project,
  variant = "card",
  className = "",
}: ProjectMockupProps) {
  const isHero = variant === "hero";

  // ClassHub: Authentic Live Deployment Cover & Interface Preview
  if (project.slug === "classhub" && project.coverImage) {
    return (
      <div
        className={`relative w-full rounded-xl overflow-hidden bg-[#0C0F0D] border border-[rgba(114,229,138,0.22)] text-[#F2F0E9] font-sans shadow-2xl transition-all duration-300 group-hover:border-[rgba(114,229,138,0.4)] ${className}`}
      >
        {/* Window Chrome / Browser Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#111613] border-b border-[rgba(242,240,233,0.08)] text-xs font-mono text-[#8E9086]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            <span className="ml-2 text-[11px] text-[#A2A49B] hidden sm:inline-flex items-center gap-1">
              <span>tuj-si-2605.vercel.app</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[rgba(114,229,138,0.12)] text-[#72E58A] text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#72E58A] animate-pulse" />
              Live Deployment
            </span>
          </div>
        </div>

        {/* Real Live Application Screenshot */}
        <div className="relative w-full overflow-hidden bg-[#0A0D0B] aspect-[16/10]">
          <Image
            src={project.coverImage}
            alt="Academic Class Hub JS1SI-26-REG-05 live application interface"
            width={1440}
            height={900}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
            priority={isHero}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {/* Subtle bottom gradient to blend seamlessly into dark card surface */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F0D]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {isHero && (
          <div className="px-4 py-3 bg-[#111613] border-t border-[rgba(242,240,233,0.08)] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E9086]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#72E58A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#72E58A]" />
                Live Vercel Production
              </span>
              <span className="hidden sm:inline">Telkom University Jakarta (JS1SI-26-REG-05)</span>
            </div>
            <a
              href={project.liveUrl || "https://tuj-si-2605.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-[#72E58A] hover:underline"
            >
              Open Live Project ↗
            </a>
          </div>
        )}
      </div>
    );
  }

  // SuaraSiswa Prototype Mockup (Laravel 12 + React 19 + Inertia + Gemini AI)
  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-[#120F1C] border border-[rgba(184,155,255,0.2)] text-[#F2F0E9] font-sans shadow-2xl select-none ${
        isHero ? "min-h-[420px] p-6 sm:p-8" : "min-h-[280px] p-4 sm:p-5"
      } ${className}`}
    >
      {/* Chrome */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(242,240,233,0.08)] text-xs font-mono text-[#8E9086]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-[11px] text-[#A2A49B] hidden sm:inline">
            suarasiswa.local/aspirasi
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[rgba(184,155,255,0.15)] text-[#B89BFF] text-[10px]">
          Gemini AI Assistant & RBAC Triage
        </span>
      </div>

      {/* Ticket Triage Stream */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-lg bg-[#1B1629] border border-[rgba(184,155,255,0.2)]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#B89BFF] mb-1.5">
            <span>TICKET #204</span>
            <span className="px-1.5 py-0.5 rounded bg-[rgba(212,255,105,0.15)] text-[#D4FF69]">
              In Progress
            </span>
          </div>
          <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
            Laboratorium AC Compressor Repair
          </h4>
          <p className="text-xs text-[#8E9086] mb-3">
            Routed to Divisi Sarpras
          </p>
          <div className="w-full bg-[#262038] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#B89BFF] h-full w-2/3" />
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#1B1629] border border-[rgba(184,155,255,0.2)]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#FFAE5E] mb-1.5">
            <span>TICKET #209</span>
            <span className="px-1.5 py-0.5 rounded bg-[rgba(255,174,94,0.15)] text-[#FFAE5E]">
              In Review
            </span>
          </div>
          <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
            Kurikulum Merdeka Class Schedule
          </h4>
          <p className="text-xs text-[#8E9086] mb-3">
            Gemini AI Auto-Routed to Kurikulum
          </p>
          <div className="w-full bg-[#262038] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#FFAE5E] h-full w-4/5" />
          </div>
        </div>

        <div className="hidden md:block p-3.5 rounded-lg bg-[#1B1629]/70 border border-[rgba(242,240,233,0.08)]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#72E58A] mb-1.5">
            <span>TICKET #198</span>
            <span className="px-1.5 py-0.5 rounded bg-[rgba(114,229,138,0.15)] text-[#72E58A]">
              Selesai
            </span>
          </div>
          <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
            Student Certification Transcript
          </h4>
          <p className="text-xs text-[#8E9086] mb-3">
            Divisi Kesiswaan (Rated 5/5 Stars)
          </p>
          <div className="w-full bg-[#262038] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#72E58A] h-full w-full" />
          </div>
        </div>
      </div>

      {isHero && (
        <div className="mt-4 pt-4 border-t border-[rgba(242,240,233,0.08)] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E9086]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89BFF]" /> RBAC Division Gate & Stored Procedures
            </span>
            <span>Google Gemini 1.5 Flash Assistant</span>
          </div>
          <span className="font-mono text-[11px] text-[#B89BFF]">Laravel 12 + React 19 Inertia</span>
        </div>
      )}
    </div>
  );
}

export default ProjectMockup;
