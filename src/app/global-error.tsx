"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FuzzyText } from "@/components/react-bits/FuzzyText";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global root layout error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0C0D0A] text-[#F2F0E9] font-sans flex items-center justify-center p-6 antialiased selection:bg-[#D4FF69] selection:text-[#111210]">
        <main className="w-full max-w-xl mx-auto text-center space-y-6 sm:space-y-8 p-8 sm:p-12 rounded-2xl bg-[#141512] border border-[rgba(242,240,233,0.1)] shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#9A9C92] bg-[#181916] border border-[rgba(242,240,233,0.08)]">
            <span className="w-2 h-2 rounded-full bg-[#D4FF69]" />
            CRITICAL 500 · ROOT EXCEPTION
          </div>

          <div className="flex justify-center my-2">
            <FuzzyText
              fontSize="clamp(5rem, 18vw, 10rem)"
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
              className="font-mono tracking-tight"
            >
              500
            </FuzzyText>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#F2F0E9] tracking-tight">
              Something unexpected happened<span className="text-[#D4FF69]">.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#9A9C92] max-w-md mx-auto leading-relaxed">
              The page couldn&apos;t be displayed correctly. You can retry the request or return to the homepage.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#D4FF69] text-[#111210] font-semibold text-sm hover:bg-[#c2f34e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69]"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#181916] border border-[rgba(242,240,233,0.15)] text-[#F2F0E9] font-medium text-sm hover:border-[#D4FF69] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF69]"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
