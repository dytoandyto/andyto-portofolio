"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { ensureAbsoluteUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/react-bits/SplitText";
import { motion } from "motion/react";
import {
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  MapPin,
} from "lucide-react";

export function ContactContent() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    if (siteConfig.contact.email) {
      navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setError(null);
    // Prepare direct mailto URL with prefilled user inputs so it genuinely sends
    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const githubUrl = ensureAbsoluteUrl(siteConfig.contact.github);
  const linkedinUrl = ensureAbsoluteUrl(siteConfig.contact.linkedin);

  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-36">
      <Container>
        {/* Header with SplitText */}
        <div className="max-w-3xl space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow dotColor="lime">Direct Inquiries</Eyebrow>
          </motion.div>

          <SplitText
            as="h1"
            text="Let's build something thoughtful together."
            trigger="load"
            variant="rise"
            delay={0.06}
            stagger={0.05}
            duration={0.6}
            highlightWord="thoughtful"
            highlightClassName="font-editorial-accent italic text-[#D4FF69]"
            accentPunctuation={true}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F2F0E9] tracking-[-0.03em] leading-[1.14]"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#8E9086] leading-[1.65] font-normal"
          >
            Whether you have a product engineering inquiry, an interface design challenge, or want to explore collaboration, I would love to hear from you.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Email Card */}
            {siteConfig.contact.email && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.12)] space-y-4 shadow-lg">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="block font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#F2F0E9] hover:text-[#D4FF69] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="font-body text-xs text-[#8E9086] leading-relaxed">
                  Fastest response time: usually within 24 to 48 hours.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111210] border border-[rgba(242,240,233,0.12)] text-xs font-mono text-[#F2F0E9] hover:border-[#D4FF69] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#72E58A]" />
                        <span className="text-[#72E58A]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4FF69] text-[#111210] font-semibold text-xs font-mono hover:bg-[#c2f34e] transition-colors"
                  >
                    <span>Open email client</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Availability & Location */}
            <div className="p-6 rounded-xl bg-[#161714] border border-[rgba(242,240,233,0.08)] space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#D4FF69]">
                <Clock className="w-3.5 h-3.5" />
                <span>Current Status</span>
              </div>
              <p className="text-sm text-[#F2F0E9]">
                {siteConfig.availability.label}
              </p>
              <div className="pt-2 flex items-center gap-2 font-mono text-xs text-[#8E9086]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location: {siteConfig.location}</span>
              </div>
            </div>

            {/* Verified External Profiles */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8E9086] block">
                Verified Profiles
              </span>
              <div className="flex flex-col space-y-2">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#181916] border border-[rgba(242,240,233,0.08)] text-sm text-[#F2F0E9] hover:border-[rgba(242,240,233,0.2)] hover:text-[#D4FF69] transition-all"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8E9086]" />
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#181916] border border-[rgba(242,240,233,0.08)] text-sm text-[#F2F0E9] hover:border-[rgba(242,240,233,0.2)] hover:text-[#D4FF69] transition-all"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8E9086]" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Genuine Message Composer Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#181916] border border-[rgba(242,240,233,0.1)] space-y-6">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#F2F0E9]">
                  Send a direct inquiry
                </h2>
                <p className="font-body text-sm text-[#8E9086] leading-[1.6] mt-1">
                  Compose your message here. Submitting will launch your verified email client with your text safely formatted.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-lg bg-[rgba(114,229,138,0.12)] border border-[rgba(114,229,138,0.3)] text-sm text-[#72E58A] flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    Thank you! Your mail application was launched with your inquiry.
                  </span>
                </div>
              )}

              {error && (
                <div className="p-4 rounded-lg bg-[rgba(255,95,86,0.12)] border border-[rgba(255,95,86,0.3)] text-sm text-[#FF5F56]">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-wider text-[#8E9086]"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Maya Chen"
                      className="w-full px-4 py-3 rounded-lg bg-[#111210] border border-[rgba(242,240,233,0.12)] text-[#F2F0E9] placeholder-[#555] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-wider text-[#8E9086]"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="e.g. maya@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#111210] border border-[rgba(242,240,233,0.12)] text-[#F2F0E9] placeholder-[#555] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs uppercase tracking-wider text-[#8E9086]"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="e.g. Product Engineering Inquiry / Role Opportunity"
                    className="w-full px-4 py-3 rounded-lg bg-[#111210] border border-[rgba(242,240,233,0.12)] text-[#F2F0E9] placeholder-[#555] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-[#8E9086]"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about your product, timeline, and what you are looking to build..."
                    className="w-full px-4 py-3 rounded-lg bg-[#111210] border border-[rgba(242,240,233,0.12)] text-[#F2F0E9] placeholder-[#555] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6DB61] resize-y"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="lime"
                    size="lg"
                    className="w-full sm:w-auto"
                    icon
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

