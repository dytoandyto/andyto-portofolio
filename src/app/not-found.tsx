import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FuzzyText } from "@/components/react-bits/FuzzyText";

export const metadata: Metadata = {
  title: "404 — Page Not Found · Andyto",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center py-24 sm:py-32 relative overflow-hidden bg-[#0C0D0A]">
      {/* Restrained technical background gradient */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#181916]/80 via-[#0C0D0A] to-[#0C0D0A] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="narrow" className="relative z-10 text-center">
        <div className="space-y-6 sm:space-y-8 p-8 sm:p-14 rounded-2xl bg-[#141512]/90 border border-[rgba(242,240,233,0.08)] shadow-2xl backdrop-blur-sm">
          <Eyebrow dotColor="lime" className="justify-center">
            ERROR 404 · ROUTE NOT FOUND
          </Eyebrow>

          {/* Prominent FuzzyText Error Code */}
          <div className="flex justify-center my-2">
            <FuzzyText
              fontSize="clamp(5rem, 18vw, 11rem)"
              fontWeight={900}
              color="#F2F0E9"
              trigger="hover"
              baseIntensity={0.12}
              hoverIntensity={0.38}
              fuzzRange={18}
              sliceSize={2}
              fps={40}
              direction="horizontal"
              intro
              introDuration={1100}
              enableHover
              clickEffect={false}
              glitchMode={false}
              className="font-mono tracking-tight"
            >
              404
            </FuzzyText>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F2F0E9] tracking-tight">
              This page went off the grid<span className="text-[#D4FF69]">.</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-[#9A9C92] max-w-md mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="lime" size="md">
              Back to Home
            </Button>
            <Button href="/work" variant="secondary" size="md">
              Explore Projects
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
