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

