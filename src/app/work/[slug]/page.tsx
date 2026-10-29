import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ensureAbsoluteUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProjectMockup } from "@/components/projects/ProjectMockup";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { ContactSection } from "@/components/home/ContactSection";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Target,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study | Andyto`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const liveUrl = project.liveUrl ? ensureAbsoluteUrl(project.liveUrl) : null;
  const repositoryUrl = project.repositoryUrl
    ? ensureAbsoluteUrl(project.repositoryUrl)
    : null;

  return (
    <article className="pt-32 md:pt-40">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#8E9086] hover:text-[#F2F0E9] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B6DB61] px-1 py-0.5 rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-6 max-w-4xl pb-12 border-b border-[rgba(242,240,233,0.1)]">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge
              status={project.status}
              customLabel={project.statusLabel}
            />
            <span className="font-mono text-xs text-[#8E9086]">
              {project.year}
            </span>
            <div className="flex items-center gap-1.5 ml-auto">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="font-mono text-xs text-[#8E9086] px-2.5 py-0.5 rounded bg-[rgba(242,240,233,0.06)]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F2F0E9] tracking-[-0.03em] leading-[1.14]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#D4FF69] font-medium">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-[#8E9086] leading-[1.65] font-normal">
            {project.summary}
          </p>

          {/* Optional Project Direct Links */}
          {(liveUrl || repositoryUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4FF69] text-[#111210] font-semibold text-xs font-mono hover:bg-[#c2f34e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
                >
                  <span>Live Preview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {repositoryUrl && (
                <a
                  href={repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181916] border border-[rgba(242,240,233,0.12)] text-xs font-mono text-[#F2F0E9] hover:border-[#D4FF69] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
                >
                  <span>Source Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9086]" />
                </a>
              )}
            </div>
          )}

          {/* Quick Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-[rgba(242,240,233,0.08)]">
            <div>
              <span className="font-mono text-xs uppercase text-[#8E9086] block mb-2">
                My Role
              </span>
              <ul className="space-y-1 text-sm text-[#F2F0E9]">
                {project.role.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-[#8E9086] block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-[#181916] border border-[rgba(242,240,233,0.08)] text-[#F2F0E9]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-[#8E9086] block mb-2">
                Status
              </span>
              <p className="text-sm text-[#F2F0E9]">{project.statusLabel}</p>
              <p className="font-mono text-xs text-[#8E9086] mt-1">
                Active Codebase
              </p>
            </div>
          </div>
        </header>

        {/* Hero Interface Visual */}
        <section className="my-16" aria-label="Interface Mockup">
          <ProjectMockup project={project} variant="hero" />
        </section>

        {/* Narrative Content Body (Asymmetric 12-Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20">
          {/* Main Story (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Problem / Context */}
            {project.problem && (
              <section className="space-y-4">
                <Eyebrow dotColor="lime">Context & Opportunity</Eyebrow>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#F2F0E9]">
                  The Problem Space
                </h2>
                <p className="font-body text-base sm:text-lg text-[#8E9086] leading-[1.65]">
                  {project.problem}
                </p>
              </section>
            )}

            {/* Contribution */}
            {project.contribution && (
              <section className="space-y-4 p-6 sm:p-8 rounded-xl bg-[#161714] border border-[rgba(242,240,233,0.1)]">
                <Eyebrow dotColor="lime">Direct Engineering Responsibility</Eyebrow>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.025em] text-[#F2F0E9]">
                  My Role & Contribution
                </h2>
                <p className="font-body text-base text-[#8E9086] leading-[1.65]">
                  {project.contribution}
                </p>
              </section>
            )}

            {/* Architecture Decisions */}
            {project.decisions && project.decisions.length > 0 && (
              <section className="space-y-6">
                <Eyebrow dotColor="lime">Technical Architecture</Eyebrow>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#F2F0E9]">
                  Key Engineering Decisions
                </h2>
                <div className="space-y-4">
                  {project.decisions.map((dec, i) => (
                    <div
                      key={dec.title}
                      className="p-6 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.08)] space-y-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#D4FF69] bg-[rgba(212,255,105,0.1)] px-2 py-0.5 rounded">
                          0{i + 1}
                        </span>
                        <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                          {dec.title}
                        </h3>
                      </div>
                      <p className="font-body text-sm sm:text-base text-[#8E9086] leading-[1.6] pl-9">
                        {dec.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Trade-offs */}
            {project.challenges && project.challenges.length > 0 && (
              <section className="space-y-4">
                <Eyebrow dotColor="muted">Honest Constraints</Eyebrow>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#F2F0E9]">
                  Challenges & Trade-offs
                </h2>
                <ul className="space-y-3 font-body">
                  {project.challenges.map((ch, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-[#8E9086] leading-[1.6]"
                    >
                      <AlertTriangle className="w-5 h-5 text-[#FFAE5E] shrink-0 mt-0.5" />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Outcomes & Current Status */}
            {project.outcomes && project.outcomes.length > 0 && (
              <section className="space-y-4">
                <Eyebrow dotColor="lime">Verified Results</Eyebrow>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#F2F0E9]">
                  Outcomes & Technical Impact
                </h2>
                <ul className="space-y-3 font-body">
                  {project.outcomes.map((out, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-[#F2F0E9] leading-[1.6]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#72E58A] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Lessons Learned */}
            {project.lessons && project.lessons.length > 0 && (
              <section className="space-y-4 p-6 sm:p-8 rounded-xl bg-[#141512] border border-[rgba(212,255,105,0.15)]">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#D4FF69]" />
                  <Eyebrow dotColor="none">Retrospective</Eyebrow>
                </div>
                <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                  Lessons Learned
                </h2>
                <ul className="space-y-2 text-sm font-body text-[#8E9086] leading-[1.6]">
                  {project.lessons.map((lesson, i) => (
                    <li key={i}>• {lesson}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Project Goals Checklist */}
            {project.goals && project.goals.length > 0 && (
              <div className="p-6 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.1)] space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
                  Core Project Goals
                </span>
                <ul className="space-y-3">
                  {project.goals.map((g, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F2F0E9] leading-relaxed"
                    >
                      <Target className="w-4 h-4 text-[#D4FF69] shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Summary Box */}
            <div className="p-6 rounded-xl bg-[#181916] border border-[rgba(242,240,233,0.1)] space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
                Engineering Discipline
              </span>
              <p className="text-xs text-[#8E9086] leading-relaxed">
                Authored with high standards for type safety, accessible DOM structure, and clean maintainability.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="lime" size="sm" className="w-full">
                  Discuss this project
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* Previous / Next Case Study Navigation */}
        <ProjectNavigation currentSlug={project.slug} projects={projects} />
      </Container>

      {/* Footer Contact CTA */}
      <ContactSection />
    </article>
  );
}
