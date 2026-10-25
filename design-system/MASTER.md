# Andyto Portfolio Design System: Master Specification V2

## 1. Brand Identity & Positioning
- **Brand:** Andyto
- **Positioning:** Product-minded Software Engineer & Digital Product Builder
- **Core Aesthetic:** Technical, elegant, modern, confident, crafted digital excellence
- **Tone:** Motion-led editorial, high contrast, clean typography, restraint over decorative excess

---

## 2. Color Palette & Surface Tokens
| Token | Value | Role |
| :--- | :--- | :--- |
| `color-base` | `#111210` | Primary dark ink canvas base |
| `color-surface` | `#181916` | Card backgrounds, elevated modules |
| `color-surface-hover` | `#21231E` | Hovered surface state |
| `color-border` | `rgba(242, 240, 233, 0.10)` | Default subtle borders |
| `color-border-hover` | `rgba(242, 240, 233, 0.22)` | Interactive card hover borders |
| `color-text-primary` | `#F2F0E9` | Warm ivory display headings & primary text |
| `color-text-secondary`| `#9A9C92` | Subheadings, editorial body narrative |
| `color-text-muted` | `#8E9086` | Technical mono tags, timestamps, indices |
| `color-accent-lime` | `#D4FF69` | Signal lime interactive accents, dots, focus rings |
| `color-accent-dim` | `rgba(212, 255, 105, 0.12)` | Spotlight glows, subtle badge backdrops |

---

## 3. Typography Hierarchy
1. **Primary Font:** `Manrope` (`--font-sans`)
   - Used for all major page headings, section titles, card headers, body narrative, navigation links, and action buttons.
2. **Technical Metadata:** `IBM Plex Mono` (`--font-mono`)
   - Used sparingly for eyebrows, category tags, tech badges, dates, coordinate labels, and code specifications.
3. **Editorial Highlight Accent:** `Newsreader` italic serif (`--font-serif`)
   - Used exclusively for small, deliberate single-word highlights (e.g. *"thoughtful"*) to provide editorial warmth.

---

## 4. Spacing, Radii & Depth
- **Grid Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Vertical Rhythm:** `py-20 md:py-32`
- **Border Radii:** `rounded-2xl` (cards, modules), `rounded-3xl` (project showcases, hero container), `rounded-full` (pills, badges)
- **Shadows:** Multi-layer soft elevation (`shadow-xl`, `shadow-2xl`) combined with 1px translucent borders (`border-[rgba(242,240,233,0.10)]`)
