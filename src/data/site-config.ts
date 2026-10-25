export interface SiteConfig {
  name: string;
  role: string;
  identity: {
    name: string;
    role: string;
    portrait: string;
  };
  portrait?: string;
  disciplines: string[];
  tagline: string;
  statement: string;
  supportingMessage: string;
  location: string;
  availability: {
    status: "available" | "limited" | "unavailable";
    label: string;
  };
  contact: {
    email?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
    siteUrl: string;
    locale: string;
  };
  navItems: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Andyto",
  role: "Product-minded Software Engineer",
  identity: {
    name: "Andyto",
    role: "Product-minded Software Engineer",
    portrait: "/images/profile/andyto-portrait.webp",
  },
  portrait: "/images/profile/andyto-portrait.webp",
  disciplines: [
    "Frontend Engineering",
    "UI/UX Implementation",
    "Full-Stack Web Development",
  ],
  tagline: "Software Engineer · Digital Product Builder",
  statement: "I turn complex ideas into thoughtful digital products.",
  supportingMessage:
    "I design and build digital experiences with a balance of product thinking, thoughtful interfaces, and reliable engineering.",
  location: "Indonesia",
  availability: {
    status: "available",
    label: "Available for product roles & bespoke engineering",
  },
  contact: {
    email: "contact@andyto.dev",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  seo: {
    title: "Andyto — Product-minded Software Engineer",
    titleTemplate: "%s | Andyto",
    description:
      "Personal portfolio of Andyto, a software engineer focusing on frontend architecture, UI/UX implementation, and full-stack product engineering.",
    siteUrl: "https://andyto.dev",
    locale: "en_US",
  },
  navItems: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
