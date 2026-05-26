# Design System — "The unreasonable effectiveness of HTML"

Extracted from [thariqs.github.io/html-effectiveness](https://thariqs.github.io/html-effectiveness).
A functional-minimalist, content-forward design language with editorial warmth.

---

## 1. Design Philosophy

- **Content-forward & readable** — trades walls of markdown for spatial, scannable layouts
- **Warm minimalism** — clean but not cold; ivory + clay + olive palette
- **Editorial typography** — serif headings, sans body, mono labels create clear hierarchy
- **Self-contained** — single-file HTML, no frameworks, system fonts only
- **Subtle delight** — gentle rotations, hover lifts, smooth transitions (never gaudy)

---

## 2. Color Palette

| Token     | Hex       | Role |
|-----------|-----------|------|
| `--ivory` | `#FAF9F5` | Page background |
| `--paper` | `#FFFFFF` | Card / surface background |
| `--slate` | `#141413` | Primary text (near-black) |
| `--clay`  | `#D97757` | Primary accent, links, highlights |
| `--clay-d`| `#B85C3E` | Darker accent (hover) |
| `--oat`   | `#E3DACC` | Secondary surface, decorative, hover thumb bg |
| `--olive` | `#788C5D` | Secondary accent (charts, diagrams) |
| `--g100`  | `#F0EEE6` | Light gray surface, thumb bg |
| `--g200`  | `#E6E3DA` | Light border |
| `--g300`  | `#D1CFC5` | Default border |
| `--g500`  | `#87867F` | Secondary / muted text |
| `--g700`  | `#3D3D3A` | Body text |

**Usage rules:**
- Warm neutrals throughout; never pure black or pure gray
- Clay is the only warm accent — used sparingly for emphasis
- Olive is a cool counterpoint, used only in decorative SVG graphics
- Text hierarchy: slate (headings) → g700 (body) → g500 (muted/captions)

---

## 3. Typography

### Font Stack

| Token     | Stack |
|-----------|-------|
| `--serif` | `ui-serif, Georgia, "Times New Roman", Times, serif` |
| `--sans`  | `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| `--mono`  | `ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace` |

### Type Scale

| Element | Font | Size | Weight | Line-height | Letter-spacing | Notes |
|---------|------|------|--------|-------------|----------------|-------|
| h1 | serif | `clamp(38px, 5.4vw, 62px)` | 500 | 1.06 | -0.018em | Max 17ch width |
| h1 em | serif | inherit | italic | — | — | Clay color |
| h2 | serif | 27px | 500 | — | -0.012em | Section headings |
| .intro | sans | 16.5px | 400 | — | — | Max 620px width |
| .sec-intro | sans | 14.5px | 400 | — | — | Max 700px width |
| .title (card) | serif | 19px | 500 | 1.22 | -0.008em | Card heading |
| .desc (card) | sans | 13.5px | 400 | 1.5 | — | Card description |
| .eyebrow | mono | 12px | 400 | — | 0.12em | Uppercase |
| .file | mono | 11px | 400 | — | — | File path label |
| .idx | mono | 13px | 600 | — | — | Section number |
| nav.toc a | sans | 12.5px | 400 | — | — | Nav pills |
| .tag | mono | 9.5px | 400 | — | 0.08em | Uppercase badges |

**Rules:**
- Serif for headings and editorial moments only
- Sans for all body copy
- Mono for metadata, labels, file names, section numbers
- Never bold; use weight 500–600 for emphasis
- Body line-height: 1.55

---

## 4. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Page max-width | 1120px | `.wrap` |
| Page horizontal padding | 32px | `.wrap` |
| Page bottom padding | 140px | `.wrap` |
| Section top margin | 72px | `section` |
| Card grid gap | 20px | `.grid` |
| Card internal padding | 18px 20px 16px | `.body` |
| Hero pane padding | 14px | `.pane` |
| Nav pill padding | 7px 14px | `nav.toc a` |
| Masthead top padding | 80px | `header.masthead` |
| Masthead bottom padding | 56px | `header.masthead` |

**Rules:**
- Generous whitespace; never cramped
- Section dividers are 1.5px borders + margin (not heavy rules)
- Cards use 14px border-radius with overflow hidden for consistent padding

---

## 5. Borders & Dividers

- **Border width:** 1.5px (consistent everywhere — borders, dividers, strokes)
- **Border colors:** `--g300` (default), `--g200` (light), `--slate` (emphasis/hover)
- **No heavy rules or thick separators**

---

## 6. Border Radius

| Element | Value |
|---------|-------|
| Cards | 14px |
| Hero panes | 10px |
| Tags / badges | 6px |
| Nav pills, count badges | 999px (pill) |
| SVG internal rects | 3–5px |

---

## 7. Shadows

| Context | Value |
|---------|-------|
| Card hover | `0 10px 30px rgba(20, 20, 19, 0.10)` |
| Hero HTML pane | `0 12px 32px rgba(20, 20, 19, 0.10)` |

**Rules:**
- Shadows only on hover or to establish depth hierarchy
- Single shadow, warm tint (slate-based), subtle opacity (0.10)
- No shadows on static cards — border alone defines them

---

## 8. Layout Patterns

### Page Wrapper
```css
.wrap { max-width: 1120px; margin: 0 auto; padding: 0 32px 140px; }
```

### Hero Grid
```css
.hero-grid { display: grid; grid-template-columns: 1fr 340px; gap: 48px; }
```
Stacks to single column at 880px.

### Card Grid
```css
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(316px, 1fr)); gap: 20px; }
```
Fluid cards, 316px minimum. No media queries needed for most widths.

### Section Layout
```
[section#id]
  └── .sec-head (flex row, baseline aligned)
  │     ├── .idx      (mono number, clay color, 34px fixed width)
  │     ├── h2        (serif heading)
  │     └── .count    (pill badge)
  └── .sec-intro      (sans paragraph, max 700px, 50px left indent)
  └── .grid           (card grid, 50px left indent)
```
Left indent (50px) drops at 640px.

### Navigation (TOC)
```css
nav.toc { display: flex; flex-wrap: wrap; gap: 8px; }
```

---

## 9. Component Patterns

### Card
```
a.card (block-level link)
  ├── .thumb         (132px tall, g100 bg, centered SVG)
  └── .body          (flex column)
        ├── .title   (serif, 19px)
        ├── .desc    (sans, 13.5px)
        └── .file    (mono, 11px, top-bordered, filename + → arrow)
```

Hover behavior: card lifts 3px, gains shadow, border darkens to slate, thumb bg shifts to oat, file text turns clay, arrow slides right 3px.

### Nav Pill
```
nav.toc a
  display: inline-flex
  border: 1.5px solid g300
  border-radius: 999px
  padding: 7px 14px
  transition: border-color 120ms, color 120ms, background 120ms
```

### Section Header
```
.sec-head (flex, baseline, gap 16px)
  .idx    — "01", "02", etc. (mono, clay, 34px width)
  h2      — section title
  .count  — "N demos" pill (mono, g500 on g100, 999px radius)
```

### Eyebrow
```
.eyebrow (mono, 12px, uppercase, g500)
  ::before — 24px × 1.5px clay accent line
```

### Hero Figure (Decorative)
Two overlapping "panes" (.md and .html) rotated slightly:
- `.md` — g100 bg, rotated -2.5deg, pushed down 6px
- `.html` — paper bg, rotated 1.5deg, slate border, shadow
- Each has a `.tag` badge positioned absolutely at top

---

## 10. Transitions & Motion

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Nav pills | border-color, color, background | 120ms | (default) |
| Cards | transform, box-shadow, border-color | 150ms | ease |
| Card thumb bg | background | 150ms | ease |
| Card arrow | transform | 150ms | ease |
| Page scroll | scroll-behavior | — | smooth |

**Rules:**
- Fast transitions (120–150ms) — snappy, not sluggish
- No opacity fades; changes are immediate or positional
- Scroll is smooth between anchor links

---

## 11. Responsive Breakpoints

| Width | Behavior |
|-------|----------|
| 880px | Hero grid stacks to single column |
| 640px | Section intro + card grid lose 50px left indent |

No breakpoint for the card grid itself — `auto-fill, minmax(316px, 1fr)` handles it.

---

## 12. Iconography

- **No icon font or library** — all decorative elements are inline SVGs
- SVG illustrations use the same design tokens (clay, olive, oat, slate fills/strokes)
- `stroke-width: 2.5` consistently
- Simple geometric shapes: rects, circles, lines with rounded caps
- Dashed lines use `stroke-dasharray: 4 4`
- SVGs change color on card hover (fills shift, clay becomes more prominent)

---

## 13. Code & Inline Elements

- `<code>` uses the system mono stack (inherited from body or explicit)
- Links: clay color with oat underline; on hover underline shifts to clay
- `text-underline-offset: 3px` for better readability
- No syntax highlighting — plain mono text

---

## 14. Anti-Patterns (What This System Avoids)

- No pure black (`#000`) or pure gray — always warm-tinted
- No bold weights above 600
- No box shadows on static elements
- No background blur or glassmorphism
- No gradient backgrounds (only one subtle gradient in hero SVG)
- No large border-radius (>14px) except for pills
- No animations over 150ms
- No external font loads — fully self-contained
- No opacity-based hover states — use color shifts or positional changes instead
