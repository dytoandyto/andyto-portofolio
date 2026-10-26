# Crafted Digital V3: Background Art Direction & Architecture Plan

This document establishes the official background system for the **Andyto Crafted Digital Portfolio**, aligning every major section to dedicated, real **React Bits** WebGL/canvas components with tailored dark editorial palette tokens, contrast calibration, and offscreen performance lifecycle.

---

## 1. Global Visual Identity & Palette Strategy

| Design Token | Hex Code | Visual Role |
| :--- | :--- | :--- |
| **Ink Black** | `#111210` / `#0C0D0A` | Deepest section ground; primary void anchor |
| **Charcoal Surface** | `#141512` / `#171915` | Section background baseline and card containers |
| **Card Surface** | `#181916` | High-contrast foreground panels |
| **Signal Lime** | `#D4FF69` | Primary interactive accent & phosphor glow |
| **Muted Olive** | `#252A22` / `#303A27` | Subtle technical wireframes, contours & secondary waves |
| **Warm Ivory** | `#F2F0E9` | Primary headlines and high-priority typographic content |
| **Muted Sage** | `#9A9C92` / `#8E9086` | Secondary editorial copy and subtle borders |

### Core Art Direction Principles
1. **Never washed out:** Section foundations are strictly dark (`#0C0D0A`, `#111210`, `#141512`). No white or light-gray horizontal wash or overexposed center blooms.
2. **Native Color Harmony:** Components are configured to render natively in dark tones rather than relying on heavy opacity masks to hide incorrect light defaults.
3. **Hierarchical Content Priority:** Main text, titles, authentic technology logos, and interactive controls always sit at `z-10` with high contrast against the decorative `z-0` background canvas.
4. **Resilient Performance:** Every background component pauses its animation loop (`requestAnimationFrame`) when offscreen via `IntersectionObserver`.

---

## 2. Section-by-Section Background Matrix

| Section | Target Component | Palette & Key Settings | Visual Role | Performance & Fallback |
| :--- | :--- | :--- | :--- | :--- |
| **1. Hero** | `ShapeGrid` | Base: `#0C0D0A`<br/>Line: `#252A22`<br/>Hover: `#D4FF69`<br/>Cell: 52px, Speed: 0.6 | Technical architectural grid grounding the Split Text headline and interactive 3D Lanyard | Pauses offscreen via `IntersectionObserver`. Settles to subtle static grid if `prefers-reduced-motion` is active. |
| **2. Tech Marquee** | `DotGrid` | Base: `#1F241C`<br/>Active: `#D4FF69`<br/>Opacity: 0.35, Gap: 22px<br/>Mouse: false | Extremely quiet, tactile technical dot-matrix texture beneath the infinite brand logo loop | Zero interactive overhead (`mouseInteraction=false`). Static dot array under reduced motion. |
| **3. Profile** | `Threads` | Color: `[0.18, 0.28, 0.16]` (Muted Olive)<br/>Accent: `[0.83, 1.0, 0.41]` (Signal Lime)<br/>Amplitude: 1.2, Distance: 0.35<br/>LineCount: 65, Speed: 0.35 | Delicate, organic flowing threads reflecting human product thinking and engineering depth | Pauses RAF when offscreen. Smooth CSS gradient fallback for low-power or non-WebGL devices. |
| **4. Skills / Capabilities** | `Dither` | Wave: `#D4FF69` (Signal Lime)<br/>Base: `#111210`<br/>Mode: `bayer`, ColorNum: 4<br/>PixelSize: 2, Speed: 0.05<br/>Freq: 3, Amp: 0.3, Mouse: `erase` | Retro-futuristic tactile Bayer matrix dithering; mathematical wave textures ground Spotlight cards with zero white bloom | Built-in `IntersectionObserver` halting RAF offscreen. Clean context cleanup on unmount. |
| **5. Projects** | `DarkVeil` | Color: `#1A2818`<br/>Speed: 0.22, Scale: 1.2<br/>Flow: 0.5, Brightness: 0.55<br/>Glow: 0.18, Opacity: 0.28 | Deep atmospheric flowing silk waves that add organic luxury without competing with UI mockups | Offscreen pause via `IntersectionObserver`. Project cards retain crisp high-contrast border definition. |
| **6. Initiate Collaboration** | `Galaxy` | StarColors: `["#D4FF69", "#F2F0E9", "#9A9C92", "#303A27"]`<br/>Density: 1, Glow: 0.3, Flare: 1<br/>StarSpeed: 0.5, MouseRepulsion: true<br/>ClickWarp: true, Transparent: true | Immersive cosmic constellation field; brand-palette stars drift and repel from cursor, clicking triggers warp pulse | Native WebGL2 with internal `IntersectionObserver` halting RAF offscreen. Email CTA remains 100% accessible. |
| **7. Footer** | `FloatingLines` | Gradient: `["#25351E", "#D4FF69"]`<br/>Lines: 8, Amplitude: 0.8<br/>Speed: 0.4, Glow: 0.3<br/>EdgeFade: 0.4, Opacity: 0.35 | Fine, low-contrast flowing wave lines creating a graceful and quiet editorial termination | Minimal GPU footprint; terminates RAF offscreen. Clean navigation link focus and hover rings. |

---

## 3. Contrast & Wash-Out Diagnosis & Resolution

### The Previous Root Causes
1. **Skills Horizontal Wash:** The previous `RippleGrid` component in perspective mode (`tilt={32}`) converged lines along the simulated horizon, where GLSL shaders blended line intensities into near-white (`mix(uColor, vec3(1.0), clamp(level - 0.7, 0.0, 1.0))`), generating a broad horizontal gray-white glow band across the section.
2. **Initiate Collaboration Pale Surface:** `PixelBlast` was previously passed `accentColor="#F2F0E9"` (warm ivory / off-white) alongside high `patternDensity={0.85}` and `glow={0.28}`. In the fragment shader, density and glow blended with the accent color, resulting in an inadvertent white cloud overlay across the dark base.
3. **Profile Atmospheric Disconnect:** The previous particle dust did not communicate the deliberate structural elegance of the engineer's philosophy and felt disconnected from the geometric and wave textures across adjacent sections.

### The Corrective Architecture
1. **Dither for Skills / Capabilities:** Integrates React Bits `<Dither />` with Bayer matrix 8x8 dithering (`ditherMode="bayer"`, `pixelSize={2}`, `colorNum={4}`), rendering subtle mathematical waves across ink black (`#111210`) with Signal Lime accents (`#D4FF69`). Features interactive mouse erasing (`mouseEffect="erase"`), zero specular white bloom, and an internal `IntersectionObserver` that completely freezes RAF loops when the section is offscreen.
2. **DarkVeil for Projects:** Replaced ambient Aurora with `DarkVeil`. Modified fragment shader to eliminate gamma over-boost (`pow(color, 1/2.2)`) and pure white gleam (`mix(uColor*2.0, vec3(1.0), 0.55)`), keeping colors firmly in deep dark olive (`#1A2818`) with properly premultiplied alpha (`outColor = vec4(color * alpha, alpha)`). Overlay updated to `via-[#141512]/65`.
3. **Galaxy for Initiate Collaboration:** Integrates React Bits `<Galaxy />` rendering an atmospheric cosmic starfield across ink black (`#111210`). Configured with authentic brand colors (`starColors={["#D4FF69", "#F2F0E9", "#9A9C92", "#303A27"]}`), `mouseRepulsion={true}`, `clickWarp={true}`, and `transparent={true}`. Stars twinkle and repel from the cursor over a deep dark base with zero haze, maintaining crystal-clear readability for the headline, email CTA, and copy.
4. **Threads for Profile:** Implements the official React Bits `Threads` component configured with muted olive and signal lime lines, bringing delicate flowing lines of craft behind the editorial biography.
5. **FloatingLines for Footer:** Replaces particle dust with elegant ribbons of glowing lines that echo the preceding sections in a quiet, restrained close.

