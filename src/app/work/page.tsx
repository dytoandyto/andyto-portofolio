import React from "react";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WorkGallery } from "@/components/projects/WorkGallery";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Selected Work & Products",
  description:
    "Curated archive of digital products, frontend interfaces, and full-stack systems engineered by Andyto.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        {/* Editorial Page Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <Eyebrow dotColor="lime">Project Archive</Eyebrow>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F2F0E9] tracking-[-0.03em] leading-[1.14]">
            Selected work & digital systems<span className="text-[#D4FF69]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#8E9086] leading-[1.65] font-normal">
            An archive of production applications, active projects, and architectural prototypes. Each project demonstrates deliberate technical decisions, information architecture, and interface craft.
          </p>
        </div>

        {/* Dynamic Interactive Gallery */}
        <WorkGallery initialProjects={projects} />
      </Container>

      {/* Closing CTA */}
      <div className="mt-24 md:mt-32">
        <ContactSection />
      </div>
    </div>
  );
}
