# Component Adaptation & Implementation Rules

Every component added to this codebase—whether manually authored or integrated from React Bits, Animate UI, Lightswind UI, or 21st.dev—must adhere to these permanent requirements:

## 1. Typography Discipline
- **Centralized Tokens Only:** Components must use the typography tokens defined in `src/styles/typography.css` and font variables (`font-sans`, `font-mono`, `font-serif`).
- **No Rogue Typefaces:** Never import ad-hoc fonts or inline fonts. Never leave components with browser fallback defaults (e.g., Times New Roman).
- **Scale Hierarchy:**
  - Display / Hero Headline: `clamp(2.35rem, 5.5vw, 4.25rem)` font-semibold leading-[1.1] tracking-[-0.035em]
  - Section Headings: `clamp(2rem, 4vw, 3.25rem)` font-semibold leading-[1.15] tracking-[-0.025em]
  - Card Titles: `text-xl sm:text-2xl` font-semibold tracking-[-0.02em]
  - Body Narrative: `text-base sm:text-lg` leading-[1.65] font-normal
  - Small / Mono Metadata: `text-xs sm:text-sm` font-mono tracking-wider

## 2. Shared Surface & Color System
- Components must use the curated palette:
  - Ink black base: `#111210`
  - Elevated surfaces: `#181916`
  - Translucent borders: `rgba(242, 240, 233, 0.10)`
  - Primary text: `#F2F0E9`
  - Secondary text: `#9A9C92`
  - Signal lime: `#D4FF69`
- Avoid arbitrary colors, neon purple gradients, or unadapted default component themes.

## 3. Responsive Integrity
- **Mandatory Viewports:** Every component must look deliberately designed at `360px`, `392px`, `430px`, `768px`, `1024px`, and `1440px`.
- **Mobile Stack Rule:** At viewports under 640px, never compress multi-column desktop grids into tiny side-by-side columns. Use clean vertical stacks (`grid-cols-1`, `flex-col`) with full-width cards.
- **No Overflow:** All moving components (e.g., marquees, tilted cards, carousels) must enforce `overflow-hidden` on outer boundaries and prevent horizontal page scrolling.

## 4. Resilient Motion & Accessibility
- **Motion Conventions:** Use shared spring curves (`gentleSpring`, `snappySpring`) and cubic beziers from `src/components/motion/motion-variants.ts`.
- **Safe Fallbacks:** Never leave essential content hidden behind `opacity: 0` without fallback. If JavaScript fails, animations are disabled, or scrolling is fast, content must remain fully visible and accessible.
- **Prefers-Reduced-Motion:** Honor `@media (prefers-reduced-motion: reduce)` by bypassing continuous animations and showing static layouts.
- **Interactive Feedback:** Every interactive control (card, button, link) must have intentional `:hover`, `:focus-visible`, and `:active` states with accessible focus rings (`focus-visible:ring-2 focus-visible:ring-[#D4FF69]`).
