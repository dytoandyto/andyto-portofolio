import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="py-24 md:py-36 bg-[#161714] border-y border-[rgba(242,240,233,0.08)] relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Abstract Typographic Brand Graphic (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#111210] border border-[rgba(242,240,233,0.12)] p-8 sm:p-10 overflow-hidden shadow-xl">
              {/* Monogram / Brand Geometric Composition */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[rgba(242,240,233,0.08)]">
                <span className="font-mono text-xs text-[#8E9086] uppercase tracking-wider">
                  Builder Profile · 2026
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-[#D4FF69]">
                  <MapPin className="w-3.5 h-3.5" /> {siteConfig.location}
                </span>
              </div>

              <div className="py-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[#181916] border border-[rgba(212,255,105,0.3)] shadow-[0_0_30px_rgba(212,255,105,0.1)]">
                  <span className="font-display text-4xl font-bold text-[#F2F0E9] tracking-tighter">
                    A<span className="text-[#D4FF69]">.</span>
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#F2F0E9]">
                    {siteConfig.name}
                  </h3>
                  <p className="font-mono text-xs text-[#8E9086] mt-1">
                    {siteConfig.role}
                  </p>
                </div>
              </div>

              {/* Verified Disciplines Checklist */}
              <div className="pt-6 border-t border-[rgba(242,240,233,0.08)] space-y-2 text-xs font-mono text-[#8E9086]">
                <div className="flex items-center justify-between">
                  <span>Frontend Architecture</span>
                  <span className="text-[#D4FF69]">Next.js · React 19</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Design Systems</span>
                  <span className="text-[#D4FF69]">Editorial · Tailwind</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Backend & Storage</span>
                  <span className="text-[#D4FF69]">PostgreSQL · Prisma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Story Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Eyebrow dotColor="lime">The Builder Behind The Code</Eyebrow>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F2F0E9] tracking-tight leading-[1.12]">
              Driven by curiosity for how thoughtful interfaces shape human focus.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#8E9086] leading-relaxed">
              <p>
                I am a software engineer focused on the intersection of frontend craft, system architecture, and product design. Rather than viewing engineering and aesthetics as separate disciplines, I believe the best digital experiences arise when engineering rigor informs interaction detail from day one.
              </p>
              <p>
                From building full-featured academic portals that organize daily student life to engineering fast, keyboard-first task dashboards, my goal is always the same: turn messy, complex requirements into intuitive, reliable products that users trust.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="lime" size="lg" icon>
                Read full background & principles
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
