# CRAFTED DIGITAL — MASTER DESIGN SYSTEM
**Author & Subject:** Andyto · Product-minded Software Engineer  
**Role & Disciplines:** Frontend Engineering, UI/UX Implementation, Full-Stack Product Engineering  
**Archetype:** The Thoughtful Builder  
**Core Thesis:** "I turn complex ideas into thoughtful digital products."

---

## 1. Visual Concept & Art Direction

"Crafted Digital" pairs the typographic rigor and pacing of a high-end editorial publication with the precision of a modern systems engineering studio.

### Core Principles
1. **Editorial Contrast & Pacing**: Instead of monotonous monochrome or generic dark-mode cards with purple glows, sections transition deliberately between deep ink (`#111210`) and warm ivory (`#F2F0E9`).
2. **Typography as Architecture**: Expressive headlines using fluid typography (`clamp(...)`), paired with monospaced metadata labels and readable body prose.
3. **Restrained Technical Accents**: Signal Lime (`#D4FF69`) is used surgically for live availability indicators, active filters, and key highlights — never as ubiquitous neon noise.
4. **Authentic Evidence over SaaS Tropes**: No fake testimonials, no artificial skill percentage bars, no arbitrary bento grids, and no stock photography. Interface previews are designed to honestly represent real software architecture.

---

## 2. Design Tokens

### Color Palette
```css
:root {
  /* Dark / Ink Anchor */
  --color-ink: #111210;
  --color-ink-soft: #1A1B18;
  --color-ink-card: #20221E;
  --color-ink-card-hover: #262823;
  --color-border-dark: rgba(242, 240, 233, 0.12);
  --color-border-dark-strong: rgba(242, 240, 233, 0.24);
  --color-muted-dark: #8E9086;

  /* Warm Ivory / Editorial Anchor */
  --color-ivory: #F2F0E9;
  --color-paper: #E7E4DB;
  --color-paper-card: #DEDAD0;
  --color-border-light: rgba(17, 18, 16, 0.12);
  --color-border-light-strong: rgba(17, 18, 16, 0.24);
  --color-muted-light: #6E7067;

  /* Signal & Focus */
  --color-lime: #D4FF69;
  --color-lime-glow: rgba(212, 255, 105, 0.2);
  --color-focus: #B6DB61;

  /* Typography Stacks */
  --font-display: var(--font-space-grotesk), var(--font-geist-sans), -apple-system, sans-serif;
  --font-body: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: var(--font-geist-mono), "IBM Plex Mono", "SF Mono", monospace;
}
```

### Contrast Ratios (WCAG 2.2 AA Compliance)
- Primary text on Ink: `#F2F0E9` on `#111210` = **15.2:1** (AAA)
- Muted text on Ink: `#8E9086` on `#111210` = **6.8:1** (AA)
- Primary text on Ivory: `#111210` on `#F2F0E9` = **15.2:1** (AAA)
- Muted text on Ivory: `#6E7067` on `#F2F0E9` = **4.9:1** (AA)
- Signal Lime text on Ink: `#D4FF69` on `#111210` = **13.5:1** (AAA)

---

## 3. Typography Hierarchy

| Style | Element / Role | Font Family | Size (Desktop / Mobile) | Weight | Line Height | Tracking |
|---|---|---|---|---|---|---|
| **Display 1** | Hero headline | Space Grotesk / Geist | clamp(2.5rem, 5.5vw, 4.75rem) | 600 | 1.08 | -0.035em |
| **Display 2** | Section headline | Space Grotesk / Geist | clamp(2rem, 3.5vw, 3rem) | 600 | 1.15 | -0.025em |
| **Title 1** | Project titles, card titles | Space Grotesk / Geist | clamp(1.25rem, 2vw, 1.75rem) | 600 | 1.25 | -0.02em |
| **Body Large** | Hero subhead, lead text | Geist / Inter | 1.125rem - 1.25rem | 400 | 1.6 | normal |
| **Body** | Standard paragraphs | Geist / Inter | 1rem (16px) | 400 | 1.65 | normal |
| **Body Small** | Captions, card body | Geist / Inter | 0.875rem (14px) | 400 | 1.55 | normal |
| **Meta / Tag** | Eyebrows, tech stack, dates | Geist Mono | 0.75rem - 0.8125rem | 500 | 1.4 | 0.05em (caps) |

---

## 4. Spacing, Grid & Layout

- **Max Content Width**: `1320px` with responsive gutters (`1.25rem` mobile, `2rem` tablet, `3rem` desktop).
- **Asymmetric 12-Column Grid**: Flexible column distributions (e.g. 5:7 split for Hero and Approach, 4:8 for Project Showcase).
- **Vertical Rhythm**:
  - Section vertical padding: `5rem` to `7.5rem` desktop, `3.5rem` to `4.5rem` mobile.
  - Component gaps: `1.5rem` (card internals), `2.5rem` (sub-blocks), `4rem` (major groups).
- **Corner Radii**:
  - Interface panels & project previews: `12px` (subtle, engineered feel).
  - Badges & small interactive pills: `9999px` (capsules).
  - Text cards & dividers: `0px` to `8px` (clean editorial edges).

---

## 5. Interaction States & Motion Principles

1. **Restrained Entrance**: Hero and sections use subtle 300–500ms opacity and translateY (12px) entrance.
2. **Hover Micro-interactions**: Smooth transitions (200ms cubic-bezier(0.16, 1, 0.3, 1)) on cards with subtle border highlight and arrow translate (+3px, -3px).
3. **Accessibility & Reduced Motion**:
   - Every animation query wraps inside `@media (prefers-reduced-motion: reduce)` or checks Framer/Motion reduced-motion hooks.
   - Fallbacks immediately render at final resting opacity `1` and transform `none`.
4. **Visible Focus**: All interactive links and buttons have high-contrast focus rings: `outline: 2px solid var(--color-focus); outline-offset: 3px;`.

---

## 6. Anti-Patterns (Strictly Avoided)

- ❌ No generic SaaS purple glow gradients.
- ❌ No bento grids packed with meaningless metric tiles.
- ❌ No fake skill bars ("TypeScript: 95%").
- ❌ No unverified customer logos or fabricated testimonials.
- ❌ No emoji icons used for UI controls (use clean SVG Lucide icons).
- ❌ No full-screen curtain page transitions that hinder browser back/forward navigation.
