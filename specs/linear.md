# Design System — Linear.app (Sleek Dark Mode)

Extracted and adapted from [linear.app](https://linear.app).
A developer-centric, dark-mode-first, high-density design language with neon accent glows.

---

## 1. Design Philosophy

- **Dark-mode first** — primary visuals optimized for low-light, high-focus engineering environments
- **Bento box grid** — structured, clean, card-based containers grouping dense information cleanly
- **High legibility & clarity** — sharp typography, clear state colors, minimal decoration ("no chrome")
- **Dynamic accents** — signature glowing purple and neon details directing focus to key interactive paths
- **Snappy micro-interactions** — fast, highly responsive hover states and animations to feel performant

---

## 2. Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--bg` | `#000212` | Deep space-navy background |
| `--surface-base` | `#080a10` | Default card / surface background |
| `--surface-raised` | `#12131e` | Raised card / hover background |
| `--text-primary` | `#f0f3f6` | High contrast primary text |
| `--text-secondary`| `#8b949e` | Muted descriptions and secondary text |
| `--accent-purple` | `#5e6ad2` | Signature brand purple accent |
| `--accent-purple-glow` | `rgba(94, 106, 210, 0.15)` | Glowing shadow color |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Thin overlay border |
| `--border-hover` | `rgba(255, 255, 255, 0.2)` | Highlighted card border |
| `--success` | `#4cad6b` | Done / Completed indicator |
| `--warning` | `#f5a623` | In-progress / Medium priority indicator |
| `--danger` | `#f44336` | Backlog / High priority / Alert indicator |

**Usage rules:**
- Backgrounds are always very dark, near-black space-navy
- Accents (purple, teal) used strictly for interactive focus, hover states, and critical actions
- Low contrast grays for grids and borders to prevent cluttering the content
- Perceptually uniform theme generation based on the LCH space

---

## 3. Typography

### Font Stack

| Token | Stack |
|-------|-------|
| `--sans-display` | `Inter Display, system-ui, -apple-system, sans-serif` |
| `--sans-text` | `Inter, system-ui, -apple-system, sans-serif` |
| `--mono` | `ui-monospace, SF Mono, Menlo, Monaco, Consolas, monospace` |

### Type Scale

| Element | Font | Size | Weight | Line-height | Letter-spacing | Notes |
|---------|------|------|--------|-------------|----------------|-------|
| Title (Display) | sans-display | `clamp(32px, 4.5vw, 48px)` | 800 | 1.1 | -0.02em | High visual weight |
| Heading 2 | sans-display | 24px | 700 | 1.2 | -0.015em | Section headings |
| Subheading 3 | sans-text | 18px | 600 | 1.3 | -0.01em | Subsections |
| Body text | sans-text | 14px | 400 | 1.6 | — | High density reading |
| Secondary text | sans-text | 13px | 400 | 1.5 | — | Captions, sidebars |
| Micro labels | sans-text | 11px | 600 | 1.4 | 0.05em | Uppercase badges |
| Code block | mono | 12.5px | 400 | 1.6 | — | Tables, data lines |

**Rules:**
- Use Inter Display for large bold typography to capture brand expression
- UI controls and body text use standard Inter at small sizes
- Tabular figures utilized for status indicators and numbers
- Font smoothing: `-webkit-font-smoothing: antialiased`

---

## 4. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Container max-width | 1200px | Main page wrapper |
| Section top margin | 64px | Space between main blocks |
| Bento grid gap | 24px | Layout spacing |
| Card internal padding | 24px | Internal card gutters |
| Tag padding | 4px 8px | Status badge spacing |
| Button padding | 10px 16px | UI controls padding |

**Rules:**
- Layout follows a strict 4px/8px incremental grid
- Clean spacing prevents dense components from feeling overcrowded
- Bento elements are aligned dynamically to construct unified blocks

---

## 5. Borders & Dividers

- **Border width:** 1px (thin, crisp borders to fit the high-precision feel)
- **Border colors:** `rgba(255, 255, 255, 0.08)` (subtle) to `rgba(255, 255, 255, 0.2)` (hover highlight)
- **Separators:** Dotted or thin solid rules dividing headers from cards

---

## 6. Border Radius

| Element | Value |
|---------|-------|
| Bento cards | 12px |
| Inner panes | 8px |
| Buttons / inputs | 8px |
| Badges / tags | 6px |

---

## 7. Shadows

| Context | Value |
|---------|-------|
| Card hover glow | `0 0 30px rgba(94, 106, 210, 0.12)` |
| Spotlight banner | `radial-gradient(circle at top, rgba(94,106,210,0.15) 0%, transparent 60%)` |

**Rules:**
- Shadows are neon, glowing, and dynamic, representing light sources
- Used to signify card elevation and interactive feedback on hover
- Backdrop filters (`blur(12px)`) used on navigation bars and floating cards

---

## 8. Layout Patterns

### Bento Grid
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```
Adapts dynamically on tablet (2 columns) and mobile (1 column).

### Navigation
Frosted glass top navigation bar:
```css
.nav-bar {
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
  background: rgba(8, 10, 16, 0.8);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
```

---

## 9. Component Patterns

### Bento Card
```
.bento-card
  ├── .card-body (padded content)
  │     ├── .badge (micro uppercase tag)
  │     ├── h3 (subheading, 18px)
  │     └── p (secondary text, 13px)
  └── .card-glow-overlay (absolute layer, radial gradient follower)
```
On hover, borders transition to high contrast and a subtle background glow follows the cursor.

---

## 10. Transitions & Motion

- **Speed:** `200ms` or `300ms` with custom cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Transitions:** Applied to border colors, shadows, and transform offsets.
- **Scroll:** Smooth anchor navigation.

---

## 11. Responsive Breakpoints

| Width | Behavior |
|-------|----------|
| 1024px | Grid switches from 3 columns to 2 columns |
| 768px | Grid switches to single column, top navigation collapses |

---

## 12. Iconography

- Minimal, wireframe-style icons (`stroke-width: 1.5` or `2`)
- Colors match text hierarchy (secondary text color by default, switching to primary or accent on hover)
- SVGs reside inline for optimal loading speeds and style synchronization

---

## 13. Code & Inline Elements

- Inline code has a deep background `#161b22` and light text `#f0f3f6`
- Blocks of code are enclosed in thin borders with rounded corners (`8px`)
- Links are styled with the brand purple accent, shifting to white or glowing underline on hover

---

## 14. Anti-Patterns (What This System Avoids)

- No standard grays — background and shadows are space-navy tinted
- No heavy solid boxes — uses gradients and borders to structure layers
- No massive border-radii — cards are constrained to `12px` for a professional, sharp look
- No slow animations — transitions are snappy (`<300ms`) to maintain responsiveness
- No visual clutter — minimal icon count, strict density rules
