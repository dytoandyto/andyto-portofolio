<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Permanent Portfolio Design & Component Engineering Rules

Every future component and modification in this repository MUST comply with these non-negotiable guidelines:

1. **Centralized Typography:** All typography must use the tokens in `src/styles/typography.css` (`--font-sans`: Manrope, `--font-mono`: IBM Plex Mono, `--font-serif`: Newsreader). Never apply arbitrary font families or leave unstyled text.
2. **Shared Surface & Color System:** Maintain the crafted digital palette: Ink Base `#111210`, Card Surface `#181916`, Borders `rgba(242, 240, 233, 0.10)`, Warm Ivory `#F2F0E9`, Muted Sage `#9A9C92`, Signal Lime `#D4FF69`.
3. **Responsive Architecture:** Every component must have deliberate compositions for both mobile (360px–430px) and desktop (1024px–1440px). Never squeeze desktop multi-column layouts into narrow mobile viewports.
4. **Resilient Motion & A11y:**
   - Use shared transitions from `src/components/motion/motion-variants.ts`.
   - Content must remain visible even if animation observers fail or JS is slow.
   - Always honor `prefers-reduced-motion`.
   - Provide clear focus rings (`focus-visible:ring-2 focus-visible:ring-[#D4FF69]`) and hover states on all interactive elements.
5. **No Third-Party Component Regressions:**
   - When integrating components from React Bits, Animate UI, or other libraries, adapt them into the design system immediately.
   - Never render unmodified default component styles that break site typography or color harmony.
6. **Visual Browser Verification:** Never commit changes without launching the dev server and visually inspecting the actual rendered experience across mobile and desktop viewports.
7. **Strict Homepage Section Order:** The homepage layout MUST always follow this exact hierarchy:
   `Hero` → `Looping Technology Marquee` → `Profile` → `Skills` → `Projects` → `Contact` → `Footer`.
   Never reorder sections based on convenient component imports or delete sections.
8. **React Bits Background System:** Each section features a dedicated, deliberate React Bits background:
   - **Hero:** `ShapeGrid` (diagonal dark olive lines with signal-lime accents).
   - **Tech Marquee:** `DotGrid` (tactile dot matrix with technical spacing).
   - **Profile:** `DarkVeil` (atmospheric dark silk wave depth).
   - **Skills:** `RippleGrid` (perspective dynamic ripple lines).
   - **Projects:** `Aurora` (soft olive/lime ambient light ribbons with offscreen pause).
   - **Contact & Footer:** `Particles` (ascending constellation beacon dust).
   Backgrounds must always be `pointer-events-none`, maintain high contrast for readable typography, and pause their animation loops when offscreen via `IntersectionObserver`.
9. **3D Lanyard Integrity & Framing:**
   - Preserve safe horizontal camera frustum coverage (`Math.min(0.52, 0.46 * Math.max(0.65, aspect))`) to guarantee the strap, ring, connector, and ID badge are 100% visible and unclipped.
   - Do not add duplicate phone mockups or secondary panels behind the 3D Lanyard.
   - Retain runtime dynamic portrait compositing into the badge texture (`/images/profile/andyto-portrait.webp`).
10. **Authentic Technology Brand Logos:**
    - Always use verified brand SVG logos retaining their official color identities (e.g. React Cyan `#61DAFB`, TS Blue `#3178C6`, JS Yellow `#F7DF1E`, Tailwind Cyan `#06B6D4`, Vite Purple/Yellow, Laravel Red `#FF2D20`, Node Green `#5FA04E`, Git Orange `#F05032`, etc.).
    - Never replace tech logos with generic Lucide icons or force monochrome grayscale/invert filters.
11. **Strict Project Content & Data Integrity:**
    - Always follow `design-system/PROJECT-CONTENT-RULES.md`.
    - Never invent metrics, client names, adoption numbers, testimonials, or fake public deployment URLs.
    - Never include confidential or private projects in the public dataset (`src/data/projects.ts`).
    - Keep repository URLs and live deployment URLs strictly separated.
    - Validate project schema with `npm run validate:projects` before building.
12. **FuzzyText Not-Found & Runtime Error Standard:**
    - Use the shared React Bits `FuzzyText` treatment (`src/components/react-bits/FuzzyText.tsx`) for applicable missing-page (404) and runtime-error (500) interfaces.
    - Whenever a new public route or route segment is added, reuse the global not-found design and error presentation.
    - Always provide semantic headings and accessible text (`sr-only`) alongside the canvas display.
    - Keep recovery links (`Back to Home`, `Explore Projects`, or `Try Again` reset callback) functional.
    - Maintain ink black `#0C0D0A`, ivory foreground `#F2F0E9`, and signal lime `#D4FF69` accents without bright rainbow chromatic aberrations.
    - Do not use `FuzzyText` on standard successful pages.
