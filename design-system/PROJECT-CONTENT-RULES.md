# Project Content & Portfolio Data Integrity Rules

Every project record, case study, and asset published in this portfolio MUST strictly comply with these permanent rules.

---

## 1. Zero Fictional Information
- **Evidence-Based Content Only:** All project descriptions, capabilities, technical architecture, and challenges must be corroborated by actual implemented source code, documented requirements, or verified project repositories.
- **Never Fabricate Metrics:** Never invent user counts, client names, adoption numbers, performance percentages, dates, team sizes, or testimonials. If measurable evidence is unavailable, omit it rather than writing plausible-sounding estimates.
- **Accurate Implementation Status:** Represent the project's true development phase honestly using the defined status enum:
  - `"completed"`: Verified, working applications with functional implementation.
  - `"in-progress"`: Projects actively under development.
  - `"prototype"`: Functional prototypes or capstone systems demonstrating key concepts.
  - `"concept"`: Exploratory UI/UX or architectural designs.

---

## 2. Verified External Links Separation
- **Source Code vs. Live Applications:** Keep source code repository links and live deployed application links strictly separated. Never label a source repository as a live demo or vice versa.
- **Mandatory URL Validation:** Never render a "Live Preview", "Visit Project", or "Source Code" CTA button unless the destination URL is verified, reachable, and uses the `https://` protocol.
- **Absent Over Invented:** If a project does not have a public cloud deployment or public repository, leave the optional property (`liveUrl` or `repositoryUrl`) legitimately `undefined`. Never use empty strings (`""`), placeholder domains (`example.com`, `localhost`, `placeholder.com`), or dummy destinations.
- **Case-Study Route Distinction:** Never substitute the internal portfolio route (`/work/[slug]`) for an external live deployment URL.

---

## 3. Confidential Project Protection
- **No Confidential Projects in Public Bundles:** Confidential or non-public projects must be completely excluded from the exported `projects` array in `src/data/projects.ts`.
- **No Client-Side Filtering as Security:** Never include confidential records in a client-side bundle with an `isVisible: false` flag. Any data in the JavaScript bundle is publicly inspectable.
- **Dynamic 404 Status:** Any unlisted or confidential slug requested at `/work/[slug]` must trigger Next.js `notFound()` and return a proper HTTP 404 response.

---

## 4. Honest Interface Visuals
- **Label Mockups Accurately:** When interactive SVG or HTML/CSS simulated previews are rendered in place of live screenshots, treat them as illustrative interface diagrams. Never misrepresent an illustrative mockup as a live application screenshot.
- **No Fake Address Bars:** Do not render fake public URLs in mockup chrome bars that imply a live public deployment exists when it does not.

---

## 5. Modular & Optional Case-Study Sections
- **Omit Unsupported Fields:** Optional case study sections (`problem`, `goals`, `contribution`, `decisions`, `challenges`, `outcomes`, `lessons`) must be rendered conditionally.
- **No Filler Copy:** If a project lacks documented lessons learned or specific challenges, omit the section entirely. Never insert generic AI-generated filler paragraphs.

---

## 6. Automated Pre-Build Validation
- Run `npm run validate:projects` (executing `scripts/validate-projects.mjs`) before committing or building to verify:
  1. Unique, kebab-case slugs.
  2. Complete required fields (title, summary, status, categories, role, technologies).
  3. No confidential project identifiers.
  4. Valid `https://` protocol for any supplied optional URL with zero placeholder domains.
  5. Valid case-study sections without placeholder copy.

