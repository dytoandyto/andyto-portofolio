"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FuzzyText } from "@/components/react-bits/FuzzyText";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console for development diagnostics without exposing internal trace to users
    console.error("Application runtime error boundary caught:", error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center py-24 sm:py-32 relative overflow-hidden bg-[#0C0D0A]">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#181916]/80 via-[#0C0D0A] to-[#0C0D0A] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="narrow" className="relative z-10 text-center">
        <div className="space-y-6 sm:space-y-8 p-8 sm:p-14 rounded-2xl bg-[#141512]/90 border border-[rgba(242,240,233,0.08)] shadow-2xl backdrop-blur-sm">
          <Eyebrow dotColor="lime" className="justify-center">
            SYSTEM 500 · RUNTIME EXCEPTION
          </Eyebrow>

          <div className="flex justify-center my-2">
            <FuzzyText
              fontSize="clamp(5rem, 18vw, 11rem)"
              fontWeight={900}
              color="#F2F0E9"
              trigger="hover"
              baseIntensity={0.08}
              hoverIntensity={0.3}
              fuzzRange={14}
              sliceSize={2}
              fps={40}
              direction="horizontal"
              intro
              introDuration={800}
              enableHover
              clickEffect={false}
              glitchMode={false}
              className="font-mono tracking-tight"
            >
              500
            </FuzzyText>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F2F0E9] tracking-tight">
              Something unexpected happened<span className="text-[#D4FF69]">.</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-[#9A9C92] max-w-md mx-auto leading-relaxed">
              The page couldn&apos;t be displayed correctly. You can retry the request or return to the homepage.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              type="button"
              onClick={() => reset()}
              variant="lime"
              size="md"
            >
              Try Again
            </Button>
            <Button href="/" variant="secondary" size="md">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

