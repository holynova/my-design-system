---
version: 1.0
name: Anonymous Study
description: "A quiet, editorial gallery for product craft. Warm-white canvas, Geist typography, precise hairline borders, generous 24px rounding, and a fixed narrative rail frame an irregular masonry of interface details."
source: "anonymous reference"
extracted: "2026-08-27"
---

# Design System: Detail

Derived from an anonymous reference.

## 1. Visual theme and atmosphere

**Calm product-craft gallery.** Density is moderate (5/10), layout variance is high (7/10), and motion is restrained (3/10). The page feels closer to a neatly pinned research wall than a marketing landing page: a stable left rail gives context, while an irregular masonry grid lets every finding retain its natural visual weight.

- Let useful screenshots or demos lead every card; the interface itself should recede.
- Pair an editorial, left-aligned narrative rail with an image-first content field.
- Use clean whitespace and a warm neutral canvas to make black, colorful, or busy reference images legible.
- Prefer categorization and short statements over ornamental storytelling.

## 2. Color palette and roles

| Token | Value | Role |
|---|---:|---|
| `--canvas` | `#faf8f4` | Primary warm-white page background |
| `--surface` | `#ffffff` | Cards, pills, controls, and popovers |
| `--ink` | `#1a1a1a` | Main text, active navigation, primary icons |
| `--text-secondary` | `#525252` | Body copy, inactive filters, muted labels |
| `--text-tertiary` | `#a3a3a3` | Category labels and low-priority metadata |
| `--border` | `#e8e4dc` | One-pixel card and control boundaries |
| `--surface-hover` | `#f5f3ef` | Hover-only neutral fill |

Color is structural, not decorative. There is no persistent brand accent. Preserve the warm neutral family; never substitute pure black, cool gray, neon glow, gradient fill, or a competing action color. Content imagery supplies the occasional saturated color.

## 3. Typography rules

```css
--font-sans: Geist, "Geist Fallback", -Anonymous Study-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
```

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Card title | `20px` | 500 | `28px` | `-0.025em` |
| Rail navigation | `24px` | 500 | `1.85` | `-0.03em` |
| Body / card description | `16px` | 400 | `24px` | `-0.02em` |
| Filter / button label | `14px` | 500 | `20px` | normal |
| Category label | `16px` | 400 | `24px` | `-0.02em` |

- Use Geist or a metrically compatible neutral UI sans. Do not use Inter, display serifs, mono labels, or all-caps decoration.
- Titles are medium rather than bold; hierarchy comes from size, proximity, and space.
- Keep body paragraphs under 32 characters per line inside cards and about 42 characters in the rail.
- Apply tight tracking to titles and navigation, but keep short UI labels at normal tracking.

## 4. Components

### Detail card

- `background: var(--surface)`, `border: 1px solid var(--border)`, `border-radius: 24px`, `overflow: hidden`.
- No shadow. Cards gain depth only through the border, white surface, and their image edge.
- Use a full-width visual at the top. Do not force a shared aspect ratio; preserve each source image's natural ratio.
- Use 24px horizontal and bottom padding for the text region. Place category, title, then optional one- or two-line description.
- A title is `20px / 500 / 28px`; category and description use quieter gray.
- The entire card is a link. On hover, only shift the surface to `--surface-hover` or make the border subtly more apparent; avoid lift, scale, or shadow.

### Filter pills and sort control

- White fill, 1px `--border`, fully rounded (`999px`), 36px tall on desktop, 44px touch target on mobile.
- Horizontal padding: 14px for filters, 16px for utility controls. Gap between pills: 8px.
- Default text: `--text-secondary`. Active or hover text: `--ink`.
- Keep a selected state readable without color alone: use darker type and a subtly altered surface.

### Narrative rail

- Desktop width: 320px; `position: sticky; top: 0; min-height: 100dvh`.
- Navigation starts around the vertical midpoint; explanatory copy and sign-in action rest near the bottom.
- Navigation uses 24px medium text. The current page receives an em dash after the word rather than a filled tab, underline, or icon.
- Explanatory copy is 16px / 24px and max 22rem wide. The supporting action is a quiet outline pill.

### Utility icon

- Use a small black circular mark (`36px`) with a simple white glyph.
- Treat it as a compact brand anchor, not a floating control cluster.

## 5. Layout principles

- The desktop shell is a two-region grid: `320px minmax(0, 1fr)`. The rail is independent of the scrolling mosaic.
- The content region has a centered top filter row and a right-aligned sort control; its cards use a three-column masonry layout with approximately 24px gutters.
- Do not normalize card heights. The visual creates the card height, so the field forms an intentional irregular rhythm.
- Limit the content canvas with an approximately `1088px` grid width; give the outer page 16–24px breathing room.
- Keep cards at least 280px wide. Use CSS columns or grid-row placement that preserves the reading sequence accessibly.
- Do not use hero banners, dense app navigation, equal-height feature grids, floating panels, or overlapping content.

## 6. Responsive behavior

- Below `1024px`, reduce the rail to a compact top introduction and let the mosaic take the full width.
- Below `768px`, make navigation and filters horizontally scrollable only within their own deliberate rails; never allow page-level horizontal overflow.
- Below `640px`, show one card column, keep 16px page padding, and turn the introduction into normal-flow content before the filters.
- Preserve the 44px minimum interactive target even where the visually painted pill remains 36px tall.
- Never crop an interface reference image solely to create a uniform card grid.

## 7. Motion and interaction

| Interaction | Timing | Response |
|---|---:|---|
| Filter hover | `150ms ease` | Surface shifts to `--surface-hover`; text becomes ink |
| Pill press | `100ms ease` | One-pixel downward tactile translation is allowed |
| Card hover | `150ms ease` | Border or surface gains slight contrast; no scale or elevation |
| Filter change | `180ms ease-out` | Fade/reflow results without disorienting motion |

- Motion must explain a state change, never decorate idle content.
- Restrict animation to `opacity`, `transform`, and color. Respect `prefers-reduced-motion` by removing transitions.
- No parallax, cursor-follow glow, bouncing arrows, autoplay carousels, or perpetual animation.

## 8. Accessibility and guardrails

- Maintain at least 4.5:1 contrast for text against canvas and surface; category labels must remain legible, not merely decorative.
- Use semantic `<nav>`, `<main>`, `<article>`, `<button>`, headings, and visible focus states (`2px solid var(--ink)` with offset).
- Images require concise alt text that names the demonstrated detail; do not duplicate the card title if it adds no information.
- Keep filtering keyboard-operable and announce result-count changes where applicable.
- Never do the following: use pure black `#000`, introduce a neon accent or gradient, add soft card shadows, use Inter, create a centered marketing hero, force equal-height cards, over-round every nested element, or put content on top of imagery.

## 9. Agent prompt guide

> Build a calm, editorial gallery for small product-design decisions. Use a warm-white canvas (#faf8f4), white surfaces (#ffffff), nearly black ink (#1a1a1a), muted gray text (#525252), and hairline borders (#e8e4dc). Set all copy in Geist. On desktop, place a 320px sticky narrative rail at the left and an irregular three-column masonry of image-first cards to the right. Cards are white, border-only, 24px rounded, shadowless, and retain each visual's natural aspect ratio. Put 36px white filter pills in a centered row above the mosaic. Keep the system quiet: no gradient, glow, heavy shadow, dashboard chrome, equal-height card grid, or oversized hero.
