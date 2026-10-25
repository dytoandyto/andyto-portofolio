import React from "react";
import { Project } from "@/data/projects";
import {
  Clock,
  CheckCircle2,
  Users,
  Search,
  Layers,
  ShieldCheck,
} from "lucide-react";

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

  if (project.slug === "classhub") {
    return (
      <div
        className={`relative w-full rounded-xl overflow-hidden bg-[#0F1411] border border-[rgba(114,229,138,0.2)] text-[#F2F0E9] font-sans shadow-2xl select-none ${
          isHero ? "min-h-[420px] p-6 sm:p-8" : "min-h-[280px] p-4 sm:p-5"
        } ${className}`}
      >
        {/* Window Chrome / Browser Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(242,240,233,0.08)] text-xs font-mono text-[#8E9086]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            <span className="ml-2 text-[11px] text-[#A2A49B] hidden sm:inline">
              classhub.local/timetable
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[rgba(114,229,138,0.15)] text-[#72E58A] text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#72E58A]" /> Semester 4
            </span>
          </div>
        </div>

        {/* Header Tabs */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="px-3 py-1 rounded-md bg-[rgba(242,240,233,0.1)] text-[#F2F0E9] border border-[rgba(242,240,233,0.15)]">
              Weekly Schedule
            </span>
            <span className="px-3 py-1 rounded-md text-[#8E9086] hover:text-[#F2F0E9] hidden sm:inline">
              Assignments (3)
            </span>
            <span className="px-3 py-1 rounded-md text-[#8E9086] hover:text-[#F2F0E9] hidden sm:inline">
              Student Directory
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#8E9086]">
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Filter courses...</span>
          </div>
        </div>

        {/* Timetable Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {/* Lecture 1 */}
          <div className="p-3.5 rounded-lg bg-[#151D18] border border-[rgba(114,229,138,0.18)] hover:border-[rgba(114,229,138,0.35)] transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#72E58A] mb-1.5">
              <span>08:00 – 10:30</span>
              <span className="px-1.5 py-0.5 rounded bg-[rgba(114,229,138,0.15)]">Lab 304</span>
            </div>
            <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
              Distributed Systems
            </h4>
            <p className="text-xs text-[#8E9086] mb-3">Prof. Aris Sudarsono</p>
            <div className="flex items-center justify-between pt-2 border-t border-[rgba(242,240,233,0.06)] text-[10px] text-[#8E9086]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#72E58A]" /> Module 4 Ready
              </span>
              <span>42 Enrolled</span>
            </div>
          </div>

          {/* Lecture 2 */}
          <div className="p-3.5 rounded-lg bg-[#151D18] border border-[rgba(114,229,138,0.18)] hover:border-[rgba(114,229,138,0.35)] transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#D4FF69] mb-1.5">
              <span>13:00 – 15:30</span>
              <span className="px-1.5 py-0.5 rounded bg-[rgba(212,255,105,0.15)]">Auditorium B</span>
            </div>
            <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
              UI/UX & Human Interaction
            </h4>
            <p className="text-xs text-[#8E9086] mb-3">Dr. Maya Handayani</p>
            <div className="flex items-center justify-between pt-2 border-t border-[rgba(242,240,233,0.06)] text-[10px] text-[#8E9086]">
              <span className="flex items-center gap-1 text-[#D4FF69]">
                <Clock className="w-3 h-3" /> Due Tomorrow
              </span>
              <span>38 Enrolled</span>
            </div>
          </div>

          {/* Lecture 3 */}
          <div className="hidden md:block p-3.5 rounded-lg bg-[#151D18]/70 border border-[rgba(242,240,233,0.08)]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#8E9086] mb-1.5">
              <span>15:45 – 17:15</span>
              <span className="px-1.5 py-0.5 rounded bg-[rgba(242,240,233,0.08)]">Room 201</span>
            </div>
            <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
              Database Engineering
            </h4>
            <p className="text-xs text-[#8E9086] mb-3">Ir. Hendra Kusuma</p>
            <div className="flex items-center justify-between pt-2 border-t border-[rgba(242,240,233,0.06)] text-[10px] text-[#8E9086]">
              <span className="flex items-center gap-1">Prisma + Supabase</span>
              <span>35 Enrolled</span>
            </div>
          </div>
        </div>

        {isHero && (
          <div className="mt-4 pt-4 border-t border-[rgba(242,240,233,0.08)] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E9086]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#72E58A]" /> 45 Students Synchronized
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#72E58A]" /> Binary Magic Byte Upload Gate
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#72E58A]">PostgreSQL + Next.js SSR</span>
          </div>
        )}
      </div>
    );
  }

  if (project.slug === "sada-taskly") {
    return (
      <div
        className={`relative w-full rounded-xl overflow-hidden bg-[#14100D] border border-[rgba(255,174,94,0.2)] text-[#F2F0E9] font-sans shadow-2xl select-none ${
          isHero ? "min-h-[420px] p-6 sm:p-8" : "min-h-[280px] p-4 sm:p-5"
        } ${className}`}
      >
        {/* Window Chrome */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(242,240,233,0.08)] text-xs font-mono text-[#8E9086]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            <span className="ml-2 text-[11px] text-[#A2A49B] hidden sm:inline">
              taskly.app/workspace/sada-core
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[rgba(255,174,94,0.15)] text-[#FFAE5E] text-[10px]">
            Inertia SPA Mode
          </span>
        </div>

        {/* Task Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {/* Column 1: In Progress */}
          <div className="p-3 rounded-lg bg-[#1C1612] border border-[rgba(255,174,94,0.18)]">
            <div className="flex items-center justify-between text-xs font-semibold text-[#FFAE5E] mb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFAE5E]" /> In Progress
              </span>
              <span className="text-[10px] font-mono bg-[rgba(255,174,94,0.1)] px-1.5 py-0.5 rounded">
                2
              </span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-md bg-[#241D17] border border-[rgba(242,240,233,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#FFAE5E] mb-1">
                  <span>TASK-108</span>
                  <span className="text-[#FF5F56]">High</span>
                </div>
                <p className="text-xs font-medium text-[#F2F0E9] mb-2">
                  Implement workspace role switcher
                </p>
                <div className="flex items-center justify-between text-[10px] text-[#8E9086]">
                  <span>Optimistic mutation</span>
                  <span className="w-5 h-5 rounded-full bg-[#FFAE5E]/20 text-[#FFAE5E] flex items-center justify-center font-mono">
                    AD
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-md bg-[#241D17] border border-[rgba(242,240,233,0.08)]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8E9086] mb-1">
                  <span>TASK-112</span>
                  <span>Normal</span>
                </div>
                <p className="text-xs font-medium text-[#F2F0E9]">
                  Laravel Eloquent pagination audit
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: In Review */}
          <div className="p-3 rounded-lg bg-[#1C1612] border border-[rgba(242,240,233,0.08)]">
            <div className="flex items-center justify-between text-xs font-semibold text-[#D4FF69] mb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4FF69]" /> Code Review
              </span>
              <span className="text-[10px] font-mono bg-[rgba(212,255,105,0.1)] px-1.5 py-0.5 rounded">
                1
              </span>
            </div>

            <div className="p-2.5 rounded-md bg-[#241D17] border border-[rgba(212,255,105,0.2)]">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#D4FF69] mb-1">
                <span>TASK-104</span>
                <span>Ready</span>
              </div>
              <p className="text-xs font-medium text-[#F2F0E9] mb-2">
                TypeScript DTO contract validation
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#8E9086]">
                <span>2 comments</span>
                <span className="text-[#D4FF69]">✓ Passes CI</span>
              </div>
            </div>
          </div>

          {/* Column 3: Completed */}
          <div className="hidden md:block p-3 rounded-lg bg-[#1C1612]/70 border border-[rgba(242,240,233,0.08)]">
            <div className="flex items-center justify-between text-xs font-semibold text-[#8E9086] mb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8E9086]" /> Shipped
              </span>
              <span className="text-[10px] font-mono bg-[rgba(242,240,233,0.08)] px-1.5 py-0.5 rounded">
                14
              </span>
            </div>

            <div className="p-2.5 rounded-md bg-[#241D17]/60 border border-[rgba(242,240,233,0.05)] opacity-80">
              <div className="text-[10px] font-mono text-[#8E9086] mb-1">TASK-098</div>
              <p className="text-xs text-[#8E9086] line-through">
                Authentication session guard
              </p>
            </div>
          </div>
        </div>

        {isHero && (
          <div className="mt-4 pt-4 border-t border-[rgba(242,240,233,0.08)] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E9086]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#FFAE5E]" /> Inertia Hybrid Pipeline
              </span>
              <span>Sub-100ms Perceived Interaction</span>
            </div>
            <span className="font-mono text-[11px] text-[#FFAE5E]">Laravel + React SPA</span>
          </div>
        )}
      </div>
    );
  }

  // SuaraSiswa Prototype Mockup
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
            suarasiswa.campus.id/triage
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[rgba(184,155,255,0.15)] text-[#B89BFF] text-[10px]">
          Public Accountability Timeline
        </span>
      </div>

      {/* Ticket Triage Stream */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-lg bg-[#1B1629] border border-[rgba(184,155,255,0.2)]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#B89BFF] mb-1.5">
            <span>TICKET #418</span>
            <span className="px-1.5 py-0.5 rounded bg-[rgba(212,255,105,0.15)] text-[#D4FF69]">
              In Review
            </span>
          </div>
          <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
            Library Wi-Fi Bandwidth Allocation
          </h4>
          <p className="text-xs text-[#8E9086] mb-3">
            Routed to IT Infrastructure Department
          </p>
          <div className="w-full bg-[#262038] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#B89BFF] h-full w-2/3" />
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#1B1629] border border-[rgba(184,155,255,0.2)]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#FFAE5E] mb-1.5">
            <span>TICKET #412</span>
            <span className="px-1.5 py-0.5 rounded bg-[rgba(255,174,94,0.15)] text-[#FFAE5E]">
              Action Slated
            </span>
          </div>
          <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
            Lab 2 AC Compressor Replacement
          </h4>
          <p className="text-xs text-[#8E9086] mb-3">
            Facilities Management Approved
          </p>
          <div className="w-full bg-[#262038] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#FFAE5E] h-full w-4/5" />
          </div>
        </div>

        <div className="hidden md:block p-3.5 rounded-lg bg-[#1B1629]/70 border border-[rgba(242,240,233,0.08)]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#72E58A] mb-1.5">
            <span>TICKET #399</span>
            <span className="px-1.5 py-0.5 rounded bg-[rgba(114,229,138,0.15)] text-[#72E58A]">
              Resolved
            </span>
          </div>
          <h4 className="font-display font-semibold text-sm text-[#F2F0E9] mb-1">
            Exam Hall Seating Plan Publication
          </h4>
          <p className="text-xs text-[#8E9086] mb-3">
            Academic Registrar Verified
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89BFF]" /> Student Privacy Verification
            </span>
            <span>Transparent Stage Audit Trail</span>
          </div>
          <span className="font-mono text-[11px] text-[#B89BFF]">Zod Schema + Next.js</span>
        </div>
      )}
    </div>
  );
}
