import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { siteConfig } from "@/data/site-config";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Aurora } from "@/components/react-bits/Aurora";
import "./globals.css";

// 1. Primary Typography: Manrope (Headings, Body, Interface, Navigation, Buttons)
const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// 2. Technical Labels, Indices, and Selected Metadata: IBM Plex Mono
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// 3. Editorial Highlight Accent (Italic Serif): Newsreader
const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111210",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: [
    "Andyto",
    "Software Engineer",
    "Frontend Engineer",
    "UI/UX Developer",
    "Full-Stack",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.seo.siteUrl }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.seo.siteUrl),
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable} ${newsreader.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#111210] text-[#F2F0E9] selection:bg-[#D4FF69] selection:text-[#111210] relative">
        <SmoothScroll>
          {/* Atmospheric React Bits Aurora background */}
          <Aurora className="fixed inset-0 z-0 pointer-events-none" opacity={0.32} />
          
          <ScrollProgress />
          <SiteHeader />
          <main id="main-content" className="flex-1 w-full font-sans relative z-10">
            {children}
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
