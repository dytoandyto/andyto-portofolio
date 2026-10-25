import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-32">
      <Container size="narrow">
        <div className="text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.1)] shadow-2xl">
          <Eyebrow dotColor="lime" className="justify-center">
            Error 404 · Route Not Found
          </Eyebrow>

          <h1 className="font-display text-5xl sm:text-7xl font-bold text-[#F2F0E9] tracking-tight">
            Page not found<span className="text-[#D4FF69]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#8E9086] max-w-md mx-auto leading-relaxed">
            The page or project you requested does not exist or has been relocated within the archive.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="lime" size="md">
              Return to Homepage
            </Button>
            <Button href="/work" variant="secondary" size="md">
              Browse Project Archive
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
