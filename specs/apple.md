# Design System — Apple.com (Clean Premium Light)

Extracted and adapted from [apple.com](https://www.apple.com).
An elegant, product-forward, light-themed design language optimized for dynamic typography and editorial clarity.

---

## 1. Design Philosophy

- **Clarity & Readability** — content is king; typography is sized and spaced to be immediately understandable
- **Deference to content** — visual styling behaves as a clean stage for high-resolution product showcase
- **Layered depth** — frosted glass overlays, subtle margins, and smooth scale transitions create physical layers
- **Adaptive layout** — fluid layouts that adapt gracefully to viewport widths, orientations, and fonts
- **Semantic colors** — clean color tokens representing status and structure; absolutely no decorative clutter

---

## 2. Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--bg-base` | `#f5f5f7` | Page body background |
| `--bg-surface` | `#ffffff` | Card / main section background |
| `--text-primary` | `#1d1d1f` | Bold black for primary text |
| `--text-secondary`| `#86868b` | Muted gray for subtitles and captions |
| `--accent-blue` | `#0066cc` | Classic interactive link blue |
| `--accent-blue-hover`| `#0077ed` | Brightened link hover variant |
| `--border-light` | `#d2d2d7` | Muted card border |
| `--border-dark` | `#86868b` | Stronger divider / focus border |
| `--apple-gray` | `#e5e5ea` | Light tag background |

**Usage rules:**
- Pure white surfaces overlaid on light gray backgrounds
- Near-black text (`#1d1d1f`) to maintain high contrast without the harshness of pure black (`#000000`)
- Accent blue used exclusively for text links, navigation points, and call-to-action (CTA) buttons
- Color is adaptive: transitions to dark mode variants (`#000000` body, `#1d1d1f` card surfaces) automatically

---

## 3. Typography

### Font Stack

| Token | Stack |
|-------|-------|
| `--sf-display` | `SF Pro Display, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif` |
| `--sf-text` | `SF Pro Text, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif` |
| `--mono` | `SF Mono, ui-monospace, Menlo, Monaco, Consolas, monospace` |

### Type Scale

| Element | Font | Size | Weight | Line-height | Letter-spacing | Notes |
|---------|------|------|--------|-------------|----------------|-------|
| Hero Title | sf-display | `clamp(40px, 7vw, 64px)` | 700 | 1.07 | -0.015em | Very prominent |
| Subsection Head | sf-display | 40px | 600 | 1.1 | -0.009em | Product blocks |
| Card Title | sf-display | 24px | 600 | 1.15 | 0.007em | Standard cards |
| Body Text | sf-text | 17px | 400 | 1.47 | -0.022em | Highly readable |
| Caption / Small | sf-text | 14px | 400 | 1.42 | -0.016em | Sub-text, labels |
| Micro Badge | sf-text | 11px | 600 | 1.3 | 0.04em | Badges, pills |
| Code | mono | 13.5px | 400 | 1.5 | — | Developer examples |

**Rules:**
- `SF Pro Display` used for headings size 20px and above
- `SF Pro Text` used for sizes below 20px
- High line-height (`1.47` on body) ensures text blocks do not feel squeezed
- Subtitles are styled with secondary gray text to establish clear reading order

---

## 4. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Content max-width | 1024px | Standard section grid wrapper |
| Section gap | 80px | Space between major product blocks |
| Card internal padding | 32px | Grid cell padding |
| Button padding | 8px 16px | CTA button padding |
| Navbar height | 44px | Sticky top header height |

**Rules:**
- Layout emphasizes open space (whitespace is a key graphic element)
- Margins scale proportionally with screen widths using viewport sizing
- Columns collapse gracefully into stacked grids on tablet/mobile screens

---

## 5. Borders & Dividers

- **Border width:** 1px (thin, clean lines)
- **Border colors:** `#e5e5ea` or `#d2d2d7` (light slate-gray)
- **Separators:** Highly transparent borders dividing header zones

---

## 6. Border Radius

| Element | Value |
|---------|-------|
| Large hero elements | 28px |
| Standard cards | 18px |
| Small panels | 12px |
| Pill buttons / badges | 999px (fully rounded) |

---

## 7. Shadows

- **Static cards:** No box shadow; borders or color blocks define edges.
- **Floating overlays / drop-downs:** `0 15px 30px rgba(0, 0, 0, 0.08)` (very faint, soft, natural shadows).

---

## 8. Layout Patterns

### Product Grid
Grid showing features or accessories side-by-side:
```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
```

### Frosted Header Bar
```css
.global-nav {
  position: sticky;
  top: 0;
  height: 44px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
```

---

## 9. Component Patterns

### Product Card
```
.product-card
  ├── .card-image (occupies background or top zone)
  └── .card-overlay-text (absolute overlay, positioned at top/bottom)
        ├── .badge (micro category label)
        ├── h3 (card title, 24px)
        └── p (muted description text, 14px)
```

---

## 10. Transitions & Motion

- **Speed:** `400ms` for page transitions, `200ms` for interactive buttons.
- **Easing:** Apple standard ease (`cubic-bezier(0.25, 0.1, 0.25, 1.0)`).
- **Scale:** Cards scale up very slightly (`1.02`) on hover to express tactile depth.

---

## 11. Responsive Breakpoints

| Viewport | Behavior |
|----------|----------|
| 1068px | Global container locks width |
| 734px | Grid cards stack vertically; typography sizes scale down |

---

## 12. Iconography

- Simple, geometric strokes matching **SF Symbols** line weights
- Icons align centered to text blocks
- Fills/strokes are dynamic, shifting automatically to represent disabled, active, or hover states

---

## 13. Code & Inline Elements

- Inline code wraps inside light gray chips `#e5e5ea`
- Links have a solid accent blue color; they display a solid underline on hover
- Buttons are styled as text links with a trailing arrow `→` or as pill-shaped solid buttons

---

## 14. Anti-Patterns (What This System Avoids)

- No harsh black text on pure white background — use slate-black `#1d1d1f`
- No complex gradients — solid flat colors only
- No heavy box shadows on cards — borders define shapes
- No cluttered grids — cards have massive internal padding and margins
- No bold weights above 700 for display typography
- No non-dynamic typography sizes
