"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/react-bits/LogoLoop";
import { Container } from "@/components/ui/Container";
import { Code2 } from "lucide-react";

export function TechMarquee() {
  const verifiedTechLogos: LogoItem[] = [
    {
      title: "React",
      href: "https://react.dev",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="-11.5 -10.2 23 20.4"
          aria-hidden="true"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      title: "Next.js",
      href: "https://nextjs.org",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 180 180"
          fill="none"
          aria-hidden="true"
        >
          <mask height="180" id="nextjs-marquee-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#nextjs-marquee-mask)">
            <circle cx="90" cy="90" fill="#0C0D0A" r="88" stroke="rgba(242,240,233,0.24)" strokeWidth="4" />
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.52Z"
              fill="url(#next-diag-grad)"
            />
            <rect fill="url(#next-vert-grad)" height="72" width="12" x="115" y="54" />
          </g>
          <defs>
            <linearGradient id="next-diag-grad" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next-vert-grad" gradientUnits="userSpaceOnUse" x1="121" x2="120.8" y1="54" y2="106.9">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect width="24" height="24" rx="4.5" fill="#3178C6" />
          <path d="M11.5 8.5H6.5V10.2H8.1V17.5H10V10.2H11.5V8.5Z" fill="white" />
          <path
            d="M16.8 10.9C16.4 10.4 15.8 10.1 14.9 10.1C13.9 10.1 13.4 10.5 13.4 11.2C13.4 11.8 13.9 12.2 14.9 12.6L15.6 12.8C16.9 13.3 17.6 14 17.6 15.1C17.6 16.5 16.3 17.4 14.6 17.4C13.4 17.4 12.4 16.9 11.7 15.9L13.1 14.8C13.5 15.3 14 15.7 14.8 15.7C15.5 15.7 15.9 15.4 15.9 14.9C15.9 14.4 15.4 14 14.5 13.7L13.8 13.4C12.5 12.9 11.8 12.3 11.8 11.2C11.8 9.9 12.9 9.1 14.6 9.1C15.6 9.1 16.5 9.5 17.1 10.1L16.8 10.9Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect width="24" height="24" rx="4.5" fill="#F7DF1E" />
          <path
            d="M6.5 17.5C7.2 18.5 8.2 19.1 9.4 19.1C10.9 19.1 12 18.3 12 16.6V9.5H10V16.5C10 17.2 9.6 17.5 9 17.5C8.4 17.5 8 17.1 7.7 16.6L6.5 17.5Z"
            fill="#000000"
          />
          <path
            d="M13.6 17.4C14.3 18.5 15.4 19.2 16.9 19.2C18.6 19.2 19.8 18.2 19.8 16.7C19.8 15.2 18.9 14.5 17.3 13.8L16.5 13.5C15.5 13.1 14.9 12.7 14.9 12C14.9 11.3 15.5 10.8 16.4 10.8C17.2 10.8 17.8 11.2 18.3 11.9L19.7 11C19 9.8 18 9.2 16.5 9.2C14.8 9.2 13.6 10.3 13.6 11.8C13.6 13.3 14.5 14 16 14.7L16.8 15C17.9 15.5 18.5 16 18.5 16.8C18.5 17.6 17.8 18.1 16.9 18.1C15.8 18.1 15.1 17.5 14.6 16.8L13.6 17.4Z"
            fill="#000000"
          />
        </svg>
      ),
    },
    {
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#38BDF8"
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          />
        </svg>
      ),
    },
    {
      title: "Vite",
      href: "https://vite.dev",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="url(#vite-grad-1)"
            d="M21.41 3.59L12.59 20.31a.7.7 0 01-1.24 0L2.59 3.59A.7.7 0 013.2 2.6h17.6a.7.7 0 01.61.99z"
          />
          <path
            fill="url(#vite-grad-2)"
            d="M12.98 2.82l-5.6 10.51a.3.3 0 00.38.41l3.52-1.39-2.03 4.92a.3.3 0 00.48.33l6.54-7.85a.3.3 0 00-.32-.49l-3.26.79 3.29-6.8a.3.3 0 00-.4-.43l-2.6 0z"
          />
          <defs>
            <linearGradient id="vite-grad-1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="vite-grad-2" x1="7" y1="3" x2="16" y2="17" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFEA83" />
              <stop offset="0.5" stopColor="#FFDD35" />
              <stop offset="1" stopColor="#FFA800" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#336791"
            d="M12.003 2.002c-5.523 0-10 4.477-10 10 0 3.238 1.543 6.117 3.936 7.935-.046-.576-.073-1.186-.073-1.815 0-3.924 1.544-7.147 4.544-9.054a10.51 10.51 0 014.282-1.332 5.088 5.088 0 011.666-.302c1.789 0 3.197.872 3.87 2.378.583 1.306.49 2.924-.26 4.557-.704 1.535-1.92 2.955-3.42 3.998-1.58 1.1-3.418 1.83-5.23 2.083.74.52 1.625.832 2.585.832 1.488 0 2.82-.72 3.67-1.838.31.294.654.552 1.03.766a5.577 5.577 0 002.766.726c.49 0 .963-.07 1.405-.2.748-.22 1.385-.634 1.87-1.19a9.96 9.96 0 001.37-5.547c0-5.523-4.477-10-10-10z"
          />
          <path
            fill="#FFFFFF"
            d="M14.2 12.2c-.4.8-1 1.5-1.8 2.1-.9.6-1.8 1-2.9 1.2.4.3.9.5 1.4.5.8 0 1.5-.4 2-.9.2.1.4.3.6.4a3 3 0 001.5.4c.3 0 .5 0 .8-.1.4-.1.8-.3 1-.7a5.5 5.5 0 00.7-3.1c-.9.1-2.2-.2-3.3.2z"
            opacity="0.85"
          />
        </svg>
      ),
    },
    {
      title: "Prisma ORM",
      href: "https://www.prisma.io",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#FFFFFF"
            d="M21.053 17.472L13.303 1.654a1.71 1.71 0 00-1.53-.965c-.63 0-1.21.353-1.53.965L.947 17.472c-.347.708-.29 1.545.15 2.2a2.02 2.02 0 001.764.939h18.278c.7 0 1.345-.348 1.764-.94.44-.654.497-1.491.15-2.199zm-9.053-12.75l6.47 13.208H5.53L12 4.722z"
          />
          <path fill="#5A67D8" d="M12 4.722l6.47 13.208H5.53L12 4.722z" />
          <path fill="#2D3748" d="M12 4.722L5.53 17.93h6.47V4.722z" opacity="0.6" />
        </svg>
      ),
    },
    {
      title: "Laravel",
      href: "https://laravel.com",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#FF2D20"
            d="M20.25 15.5l-6-3.5v7l6 3.5v-7zm-7.5-4.375l6-3.5-6-3.5-6 3.5 6 3.5zm-1.5 4.375l-6-3.5v7l6 3.5v-7z"
          />
        </svg>
      ),
    },
    {
      title: "PHP",
      href: "https://www.php.net",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
          <path
            fill="#FFFFFF"
            d="M7.4 14.2H6.3l.5-2.5h.9c.7 0 1.3-.3 1.5-1 .2-.7-.1-1.1-.7-1.1h-1.5l-.4 2.1h-.9l.9-4.6h1.8c1.1 0 1.9.6 1.6 1.8-.2 1.1-1.1 1.8-2.2 1.8h-.4l-.5 2.5zm4.3-2.5h-1l-.5 2.5h-.9l.9-4.6h.9l-.3 1.5h1c.7 0 1.3-.3 1.5-1 .2-.7-.1-1.1-.7-1.1h-1.3l.3-1.5h1.3c1.1 0 1.9.6 1.6 1.8-.2 1.1-1.1 1.8-2.2 1.8zm3.5 2.5h-.9l.5-2.5h.9c.7 0 1.3-.3 1.5-1 .2-.7-.1-1.1-.7-1.1H15l-.4 2.1h-.9l.9-4.6h1.8c1.1 0 1.9.6 1.6 1.8-.2 1.1-1.1 1.8-2.2 1.8h-.4l-.5 2.5z"
          />
        </svg>
      ),
    },
    {
      title: "Docker",
      href: "https://www.docker.com",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#2496ED"
            d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m21.724-.053c-.347-.234-.993-.332-1.777-.28a4.743 4.743 0 00-2.31.81 7.158 7.158 0 00-.987-.905c-.347-.246-.993-.348-1.78-.295-.084 0-.17.006-.254.017a4.93 4.93 0 00-.414.074.187.187 0 00-.154.18v2.793a.186.186 0 00.186.185h6.398c.102 0 .185-.083.185-.185v-.748a3.14 3.14 0 00-.54-.067 1.838 1.838 0 00-.916.236 1.848 1.848 0 011.03-.892 2.775 2.775 0 011.333.067c.074.02.148.016.2-.016a.187.187 0 00.103-.162c.002-.328-.103-.54-.303-.675M.05 13.023c-.027.14-.04.283-.04.427 0 1.95 1.057 3.738 2.825 4.778 1.82 1.07 4.195 1.488 6.516 1.144 2.115-.313 4.07-1.398 5.485-3.048.91-.03 1.833-.217 2.684-.575 1.343-.564 2.52-1.464 3.42-2.616a.187.187 0 00-.062-.279c-.43-.243-1.077-.42-1.845-.487-1.042-.09-2.122.086-3.04.5a.186.186 0 01-.225-.043 6.96 6.96 0 00-4.043-1.928H.242a.185.185 0 00-.184.185c0 .014.002.028.005.042-.005.13-.01.26-.013.392z"
          />
        </svg>
      ),
    },
    {
      title: "Node.js",
      href: "https://nodejs.org",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#5FA04E"
            d="M11.998 2.45c-.32 0-.64.08-.91.24L3.638 7.02c-.56.32-.91.92-.91 1.56v8.68c0 .64.35 1.24.91 1.56l7.45 4.33c.27.16.59.24.91.24s.64-.08.91-.24l7.45-4.33c.56-.32.91-.92.91-1.56v-8.68c0-.64-.35-1.24-.91-1.56l-7.45-4.33c-.27-.16-.59-.24-.91-.24zm0 2.2l6.23 3.62-2.73 1.59-6.23-3.62 2.73-1.59zm-7.37 5.08l6.23 3.62v7.24l-6.23-3.62V9.73zm14.74 7.24l-6.23 3.62v-7.24l6.23-3.62v7.24z"
          />
        </svg>
      ),
    },
    {
      title: "Figma",
      href: "https://figma.com",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M8 2h4v4H8a2 2 0 110-4z" fill="#F24E1E" />
          <path d="M12 2h4a2 2 0 010 4h-4V2z" fill="#FF7262" />
          <path d="M8 6h4v4H8a2 2 0 110-4z" fill="#A259FF" />
          <path d="M12 6h4a2 2 0 010 4h-4V6z" fill="#1ABCFE" />
          <path d="M8 10h4v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2h2z" fill="#0ACF83" />
        </svg>
      ),
    },
    {
      title: "Git",
      href: "https://git-scm.com",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#F05032"
            d="M21.62 10.45l-8.07-8.07a2.53 2.53 0 00-3.58 0L8.43 3.92l2.36 2.36a1.88 1.88 0 012.38 2.38l2.27 2.27a1.88 1.88 0 11-1.07 1.07l-2.12-2.12v4.86a1.88 1.88 0 11-1.5 0V9.82a1.88 1.88 0 01-1.01-2.47L7.38 4.98 2.38 9.98a2.53 2.53 0 000 3.58l8.07 8.07a2.53 2.53 0 003.58 0l7.59-7.59a2.53 2.53 0 000-3.59z"
          />
        </svg>
      ),
    },
    {
      title: "GitHub",
      href: "https://github.com",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      title: "Astro",
      href: "https://astro.build",
      node: (
        <svg
          className="h-7 sm:h-8 md:h-[32px] w-auto shrink-0 transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            fill="#FFFFFF"
            d="M12 2.5c-.8 0-1.5.6-1.8 1.4L4.8 18.2c-.2.5 0 1 .4 1.3.4.3.9.3 1.3.1l4.5-2.6c.6-.3 1.4-.3 2 0l4.5 2.6c.4.2.9.2 1.3-.1.4-.3.6-.8.4-1.3L13.8 3.9c-.3-.8-1-1.4-1.8-1.4z"
          />
          <path
            fill="url(#astro-flame)"
            d="M8.5 16.5c-1.5 0-2.8-.8-3.5-2.1C6.2 16 8.5 17 11 17c1.8 0 3.5-.5 5-1.5-1.5.7-3.2 1-5 1H8.5z"
          />
          <path
            fill="url(#astro-glow)"
            d="M12 11.5c-1.4 0-2.5 1.1-2.5 2.5 0 2.2 2.5 5 2.5 5s2.5-2.8 2.5-5c0-1.4-1.1-2.5-2.5-2.5z"
          />
          <defs>
            <linearGradient id="astro-flame" x1="5" y1="14" x2="16" y2="17" gradientUnits="userSpaceOnUse">
              <stop stopColor="#BC52EE" />
              <stop offset="1" stopColor="#FF5D01" />
            </linearGradient>
            <linearGradient id="astro-glow" x1="9.5" y1="11.5" x2="14.5" y2="19" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF5D01" />
              <stop offset="1" stopColor="#BC52EE" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-7 md:py-9 border-y border-[rgba(242,240,233,0.08)] bg-[#0C0D0A]/80 backdrop-blur-md overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 sm:mb-5 px-1">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#8E9086]">
            <Code2 className="w-3.5 h-3.5 text-[#D4FF69]" />
            <span>Verified Production Stack & Engineering Ecosystem</span>
          </div>
          <span className="text-[11px] font-mono text-[#8E9086] hidden sm:inline">
            Original Brand Identities · Continuous Loop
          </span>
        </div>

        {/* High-Impact Logo Strip with genuine brand colors and smooth edge fades */}
        <div className="relative rounded-2xl bg-[#111210]/60 border border-[rgba(242,240,233,0.07)] py-3.5 sm:py-4.5 shadow-xl overflow-hidden">
          <LogoLoop
            logos={verifiedTechLogos}
            speed={28}
            direction="left"
            logoHeight={32}
            gap={48}
            labels="none"
            intro={false}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutWidth={0.08}
            ariaLabel="Verified production technology stack brand logos"
          />
        </div>
      </Container>
    </section>
  );
}

export default TechMarquee;
