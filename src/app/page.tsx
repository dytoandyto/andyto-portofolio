import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TechMarquee } from "@/components/home/TechMarquee";
import { ProfileSection } from "@/components/home/ProfileSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO with interactive React Bits Lanyard */}
      <HeroSection />

      {/* 2. LOOPING TECHNOLOGY MARQUEE directly under Hero */}
      <TechMarquee />

      {/* 3. PROFILE with concise biography, philosophy, and approach */}
      <ProfileSection />

      {/* 4. CAPABILITIES with React Bits Spotlight Cards */}
      <SkillsSection />

      {/* 5. SELECTED WORK with React Bits Tilted Cards */}
      <ProjectsSection />

      {/* 6. CONTACT CTA */}
      <ContactSection />
    </>
  );
}
