import React from "react";
import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Initiate Collaboration",
  description:
    "Direct contact channels, inquiries, and collaboration opportunities with Andyto. Available for product engineering and design systems.",
  openGraph: {
    title: "Contact — Initiate Collaboration | Andyto",
    description:
      "Direct contact channels, inquiries, and collaboration opportunities with Andyto. Available for product engineering and design systems.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
