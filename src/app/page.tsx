import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ProfileSection } from "@/components/home/ProfileSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO with interactive React Bits Lanyard */}
      <HeroSection />

      {/* 2. PROFILE with React Bits ScrollReveal text */}
      <ProfileSection />

      {/* 3. DETAILED SKILLS SECTION with Spotlight Cards & Tech LogoLoop */}
      <SkillsSection />

      {/* 4. PROJECTS with Tilted 3D Cards */}
      <ProjectsSection />

      {/* 5. CONTACT CTA */}
      <ContactSection />
    </>
  );
}
