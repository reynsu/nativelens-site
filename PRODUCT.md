# Product

## Register

brand

## Users

React Native developers running end-to-end tests on real or emulated devices. They have a Detox setup, they ship to Expo + EAS dev client, they hit failures that screenshots can't explain. They land here from npm, from a search for "react native e2e", from a coworker's link. They have ~30 seconds to decide whether `nativelens` is interesting enough to read the CLI README.

Context when reading: a laptop, often a dev console open in another tab, with an opinion about what an "honest" dev tool landing page looks like. They've seen 50 versions of the same Vercel-gradient SaaS landing this month and they recognize that surface immediately.

The job-to-be-done: figure out if this tool measurably solves the "test bug or real bug?" problem they have, fast.

## Product Purpose

Land developers on a single page that:

1. Communicates what `nativelens` does, in their own technical vocabulary (probe, fiber, snapshot, testID — not "AI-powered intelligent testing platform").
2. Shows the install in 3 commands.
3. Proves the diagnosis agent is worth the trust through a real measured number (calibration v4: 14/15 floor, 100% high-confidence).
4. Routes them to GitHub + npm + the CLI README to dig deeper.

Success = the next thing they do is run `npx @reynsu/nativelens-cli init` in their project, or open the GitHub repo. NOT staying on the landing.

## Brand Personality

**engineering-zine · indie · slightly-anarchic**

Voice: rigorous, slightly opinionated, monospace-first. Reads like documentation written by someone who likes typography. Doesn't apologize for technical density, doesn't dumb down vocabulary. Comfortable with footnotes and asides.

Emotional goal: the reader closes the tab thinking "okay, this person knows what they're doing", not "this is a startup pitching me". Confidence by way of show-your-work, not by way of bold claims.

References in the right lane: fly.io blog (technical editorial), val.town (indie code-first density), pkg.go.dev (mono-only Go doc aesthetic). The page should sit comfortably alongside those, not alongside generic dev-tool marketing.

## Anti-references

Explicit don'ts. If a design proposal smells like any of these, kill it and start over:

- **Generic SaaS marketing**: gradient meshes (blue→purple, teal→pink), big stock illustrations, "Built for teams" copy, dashboard mockups floating in 3D, badges of imaginary customer logos. The Vercel-marketing-page default that 5,000 dev tools converged on.
- **Heavy WebGL / 3D hero**: shader-driven hero scenes, Three.js animated meshes, scroll-driven 3D experiences. Expensive bandwidth, expensive attention, no information added. Studio Spass / WindSurf / Linear shader heroes are out of bounds.
- **Y2K cosplay**: holographic gradients, "CYBER 2000" type treatments, GeoCities pastiche, animated under-construction GIFs. The Y2K influence we want is the typography play and indie-web density of the era, not the meme aesthetic.
- **Notion-style safe minimalism**: whitespace + soft sans + pastel accents + center-aligned everything. Pretty but invisible — looks like every Vercel/Linear/Notion template.

## Design Principles

Five strategic rules that resolve future decisions when they're not obvious:

1. **The code is the marketing.** Code snippets are first-class content, not screenshots of code. Real commands, real package names, real metrics. The 3-command install and the 14/15 calibration number ARE the proof — no abstract claim layered on top.

2. **Restraint over reach.** Every decorative element has a budget. The acid-lime accent gets ≤6 spots on the page; hot pink gets ≤2. Adding a sixth animation? Cut one first. Maximalism comes from the system (mono + asymmetry + marginalia), not from piling effects.

3. **Engineering document, not brochure.** Section numbers (§01, §02), marginalia in the right margin, registration crosshairs at corners, monospace throughout. The page reads like a technical doc OF the product, not a pitch FOR it.

4. **Y2K-influenced, not Y2K-pastiche.** The aesthetic borrows the era's typography density, indie-web layout play, and document-as-art conventions. It does NOT borrow holographic chrome, geocities backgrounds, or "cyber" trope visuals.

5. **Practice what you preach.** The landing itself meets the technical bar that nativelens enforces on its users' tests: real measurements (14/15 calibration v4, 100% high-conf, 0 dependencies bundler-side), no aspirational claims, honest about what doesn't work (Bare React Native is on the roadmap, ollama backend is lower accuracy). Quality as proof of competence.

## Accessibility & Inclusion

WCAG 2.2 AA as the floor:

- Body text contrast ratio ≥4.5:1 (and ≥3:1 for large text) against the manila or ink background, in both light and dark themes. The acid-lime backgrounded `<strong>` runs ink on lime — verified contrast.
- Focus rings visible on all interactive elements (2px solid acid outline at 2px offset, via `a:focus-visible` and `.btn:focus-visible`).
- Keyboard navigation works across the page; theme toggle is a `<button>` with `aria-pressed`.
- `prefers-reduced-motion: reduce` disables the marquee scroll, cursor blink, and status dot pulse. The visual statements stay; the kinetic ones freeze.
- Decorative marks (`+` registration crosshairs, marquee track) carry `aria-hidden="true"` to keep them out of screen-reader output.
- No content depends on color alone. Acid emphasis is paired with bold weight, not used as the sole indicator of importance.
