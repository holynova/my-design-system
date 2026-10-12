---
version: 1.0
name: Holynova Portfolio Design System
description: "A dark-first, high-craft project archive: zinc surfaces, centered editorial introduction, floating utility controls, progressive sticky blur, and a searchable masonry of engineering and design work."
source: "https://holynova.github.io/"
extracted: "2026-08-27"
---

# Design System: Holynova Portfolio

Extracted from [holynova.github.io](https://holynova.github.io/) on 2026-08-27. This system makes a large personal archive feel curated rather than crowded. A disciplined near-black canvas, soft layered elevation, compact controls, and a clear catalogue workflow keep the focus on individual projects.

## 1. Visual Theme & Atmosphere

**Dark-first editorial archive.** Moderate density (6/10), low layout variance (4/10), and deliberate interaction motion (5/10). The interface begins with a confident central statement, then moves into a practical sequence: search, sort, filter, browse, inspect.

- Use darkness as a quiet exhibition ground, not a sci-fi aesthetic.
- Keep visual color nearly monochrome. Project artwork provides the color and personality.
- Make controls feel like precise floating hardware: compact, rounded, bordered, and softly elevated.
- Let motion clarify focus, scroll position, filtering, and card selection—never create ambient spectacle.

## 2. Color Palette & Roles

| Token | Dark | Light | Role |
|---|---:|---:|---|
| `--bg-page` | `#09090b` | `#fafafa` | Page canvas |
| `--surface-primary` | `#121214` | `#ffffff` | Header pills, toolbar, cards |
| `--surface-secondary` | `#18181b` | `#f4f4f5` | Inputs and secondary controls |
| `--surface-tertiary` | `#27272a` | `#e4e4e7` | Stronger inset or active surface |
| `--text-primary` | `#f4f4f5` | `#09090b` | Titles and active controls |
| `--text-secondary` | `#a1a1aa` | `#52525b` | Supporting copy |
| `--text-muted` | `#71717a` | `#a1a1aa` | Hints and auxiliary metadata |
| `--accent-star` | `#eab308` | `#ca8a04` | Star count only; never a general CTA color |
| `--border-subtle` | `rgba(255,255,255,.07)` | `rgba(0,0,0,.06)` | Resting structure |
| `--border-medium` | `rgba(255,255,255,.12)` | `rgba(0,0,0,.11)` | Active or raised structure |

Color rules: primary actions are white in dark mode and ink in light mode. Keep status color sparse and semantic. Do not use rainbow palettes, blue-purple glows, gradient text, or pure-black-filled cards that erase surface hierarchy.

## 3. Typography Rules

```css
--font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace;
--font-serif: "Noto Serif SC", "Source Han Serif SC", "Songti SC", serif;
```

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Hero title | `clamp(32px, 5vw, 56px)` | 700 | 1.12 | `-0.035em` |
| Project title | `20–24px` | 600–700 | 1.25 | `-0.025em` |
| Body / subtitle | `14–16px` | 400 | 1.6 | normal |
| Control label | `12–13px` | 500–600 | 1.3 | `-0.01em` |
| Numeric badge / metadata | `11px` | 400–600 | 1.4 | normal, mono |

- Use Plus Jakarta Sans for all interface prose; use JetBrains Mono for counts, keyboard hints, technology labels, and compact metadata.
- Do not use the serif stack in controls, cards, or the catalogue grid; reserve it for deliberate Chinese editorial accents only.
- Keep the hero to one or two lines. Let scale and negative tracking create confidence rather than all-caps labels.

## 4. Components

### Floating brand pill and utility buttons

- Background `--surface-primary`, `1px solid --border-subtle`, full pill radius, and a small soft shadow.
- Brand pill: 8px internal leading inset, 26px round avatar, 13px/600 name, then an 11px mono count badge.
- Utility buttons use 7px × 13px padding, 12px text, and raise by 1px on hover.
- Apply `backdrop-filter: blur(20px)` only to controls that visibly float above moving content.

### Hero

- Centered, max 820px headline and max 600px description.
- Desktop top padding is about 130px; bottom padding 40px.
- Place a small author line underneath rather than a stack of CTAs. Underline the author name with a low-contrast rule.

### Sticky catalogue toolbar

- Sticky at `top: 0`, with a full-width progressive backdrop blur behind it.
- Container is a 16px rounded surface with 12–14px padding, subtle border, and resting small shadow.
- First row: search field on the left; sort control on the right. Second row: horizontally scrollable category pills.
- On scroll, increase border contrast and use a deeper soft shadow—this is the only persistent elevation change.
- Search input has a 16px left icon, 12px keyboard hint, and a 240px minimum width.

### Project cards and inspector

- Cards use `20px` outer rounding and `14px` media rounding, resting soft shadow, and deeper shadow at hover.
- Preserve source imagery. Do not apply a uniform crop that hides work context.
- Each card must give category, project name, a compact description, language/stars/update metadata, and a clear affordance to inspect.
- The inspector is a modal/drawer with a small category tag, like count, previous/next/close controls, live preview region, and an information/sidebar split.

## 5. Layout Principles

- Cap the page at 1360px and use 24px side gutters; footer and header share that alignment.
- Header is 60px tall and deliberately sparse: brand left, language/theme toggles right.
- Keep the catalogue’s reading order usable without masonry placement; CSS columns or visually irregular cards must not scramble keyboard focus.
- The toolbar is a workflow boundary between the editorial introduction and high-density project archive.
- Avoid dashboard sidebars, oversized metric tiles, multi-accent navigation, or generic three-card marketing rows.

## 6. Motion & Interaction

| Interaction | Timing | Response |
|---|---:|---|
| Theme swap | `250ms cubic-bezier(.16,1,.3,1)` | Background and text crossfade cleanly |
| Pill/button hover | `180–200ms` | Border strengthens; translateY(-1px) |
| Toolbar after scroll | `250–350ms` | Border and shadow deepen |
| Card hover | `220ms cubic-bezier(.16,1,.3,1)` | Shadow expands; no large scale |
| Search/filter results | `180–250ms` | Reflow and fade without layout jumping |

- Use `transform`, `opacity`, color, border, and shadow only. Respect `prefers-reduced-motion`.
- A cursor-follow spotlight can be extremely faint (`2.5%` white in dark mode), fixed, and disabled on reduced motion. It must never become an obvious gradient effect.

## 7. Responsive & Accessibility Rules

- At mobile widths, reduce outer padding to 16px; keep the header in a single row.
- Toolbar rows wrap only where necessary. Category pills scroll inside their rail, never at document level.
- Keep every interactive target at least 44px tall on touch screens, even if the visible control is visually compact.
- Support `/` to focus search, Escape to close inspector, and arrow keys to browse from the inspector.
- Preserve visible focus rings using `--border-focus`; labels and icons must retain accessible names.
- Dark and light themes are both first-class: update all neutral surfaces, borders, text, and shadows together.

## 8. Anti-patterns (Banned)

- No neon blue/purple gradients, glass everywhere, or color-saturated status decoration.
- No Inter, generic serif headings, emoji UI icons, or oversized all-caps kickers.
- No centered feature-card grid, fake dashboard statistics, hard black voids, or flat unlayered dark surfaces.
- No autoplay video, bouncing scroll cues, infinite card float, or uncontrolled parallax.
- No color-only state changes; never hide keyboard hints and close actions from screen readers.

## 9. Agent Prompt Guide

> Build a dark-first project archive with a Zinc-950 canvas (#09090b), layered charcoal surfaces (#121214, #18181b, #27272a), pale text (#f4f4f5), and low-contrast translucent borders. Use Plus Jakarta Sans for UI and JetBrains Mono for compact metadata. Place a slim floating header with a brand pill and language/theme controls above a centered editorial hero. Below it, add a sticky 16px-rounded search, sort, and category toolbar with a progressive backdrop blur. Render work as a natural-height project masonry with 20px rounded cards, restrained rest shadows, and a practical detail inspector. Make light mode complete and intentional. Avoid gradients, neon, generic feature cards, large CTA clusters, and motion that does not communicate state.
