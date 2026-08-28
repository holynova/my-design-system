---
version: alpha
name: Anonymous Study (BRAIN.md) Design System
description: "A precision-crafted, developer-first documentation and CLI interface design system based on the Geist design philosophy. Featuring high-contrast terminal preview windows with traffic-light dots, monochrome grayscale base with vibrant multi-tint semantic accents (Blue, Green, Purple, Red, Amber), Geist Sans & Mono typography, interactive typewriter CLI showcases, modular workflow arrows, and clean accordion disclosures."
source: "anonymous reference"
extracted: "2026-08-17"

colors:
  light:
    background-100: "#ffffff"
    background-200: "#fafafa"
    gray-100: "#f2f2f2"
    gray-200: "#ebebeb"
    gray-300: "#e6e6e6"
    gray-400: "#eaeaea"
    gray-500: "#c9c9c9"
    gray-600: "#a8a8a8"
    gray-700: "#8f8f8f"
    gray-800: "#7d7d7d"
    gray-900: "#4d4d4d"
    gray-1000: "#171717"
    blue-700: "#006bff"
    purple-700: "#a000f8"
    green-700: "#28a948"
    red-700: "#fc0035"
    amber-700: "#ffae00"
  dark:
    background-100: "#000000"
    background-200: "#000000"
    gray-100: "#1a1a1a"
    gray-200: "#1f1f1f"
    gray-300: "#292929"
    gray-400: "#2e2e2e"
    gray-500: "#454545"
    gray-600: "#878787"
    gray-700: "#8f8f8f"
    gray-800: "#7d7d7d"
    gray-900: "#a0a0a0"
    gray-1000: "#ededed"
    blue-600: "#0090ff"
    blue-900: "#47a8ff"
    purple-600: "#9440d5"
    green-600: "#00952d"
    green-900: "#00ca50"
    red-600: "#f32e40"
    amber-600: "#ed9a00"

typography:
  font-sans: "'Geist', -Anonymous Study-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  font-mono: "'Geist Mono', 'SF Mono', 'Fira Code', Consolas, monospace"
  hero-title:
    fontSize: "clamp(32px, 5vw, 40px)"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-2.4px"
  section-heading:
    fontSize: "clamp(20px, 3vw, 24px)"
    fontWeight: 600
    lineHeight: "1.33"
    letterSpacing: "-0.96px"
  card-title:
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.42"
    letterSpacing: "-0.28px"
  body:
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.71"
  code-terminal:
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.6"

rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  full: "9999px"

shadows:
  raised: "0 2px 2px rgba(0, 0, 0, 0.04)"
  window: "0 4px 24px rgba(0, 0, 0, 0.35)"
  focus-ring-light: "0 0 0 2px #ffffff, 0 0 0 4px #006bff"
  focus-ring-dark: "0 0 0 2px #000000, 0 0 0 4px #47a8ff"
---

# Anonymous Study (BRAIN.md) Design System Specification

Derived from an anonymous reference.
Official Website & Docs for BRAIN.md — A persistent memory layer for developer projects.

---

## 1. Design Philosophy

- **Geist-Driven Precision**: Built upon modern monochromatic restraint, ultra-crisp typography (Geist Sans + Geist Mono), and mathematical contrast scales.
- **Developer-Native Utility**: Prioritizes code blocks, terminal prompts, folder tree ASCII visuals, and decision-tree diagrams over purely decorative fluff.
- **Before-vs-After Asymmetric Contrast**: Uses interactive side-by-side terminal simulations to demonstrate immediate value propositions.
- **Atomic Color Intent**: Restrained use of color — 90% monochrome grayscale, with semantic pops of Blue (prompts/links), Purple (AI sigils/section titles), Green (strings/success), Red (errors/before state), and Amber (warnings).
- **Zero-Dependency Native Modernism**: Clean semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<details>`, `<summary>`) paired with CSS custom properties and smooth cubic-bezier transitions (`cubic-bezier(0.175, 0.885, 0.32, 1.1)`).

---

## 2. Color System & Semantic Tokens

### Core Semantic Variables

| Variable | Light Theme | Dark Theme (`html.dark`) | Usage |
| :--- | :--- | :--- | :--- |
| `--paper` | `#ffffff` | `#000000` | Main canvas background |
| `--background-200` | `#fafafa` | `#000000` | Subtle contrast background |
| `--ink` | `#171717` (`--gray-1000`) | `#ededed` (`--gray-1000`) | Primary headlines & text |
| `--muted` | `#4d4d4d` (`--gray-900`) | `#a0a0a0` (`--gray-900`) | Body copy, secondary text |
| `--chip` | `#f2f2f2` (`--gray-100`) | `#292929` (`--gray-300`) | Card containers, inline code background |
| `--border` | `#ebebeb` (`--gray-200`) | `#1f1f1f` (`--gray-200`) | Dividers, table borders |
| `--hover` | `#f2f2f2` (`--gray-100`) | `#1a1a1a` (`--gray-100`) | Hover background state |

### Grayscale Scale (Light / Dark)

- `100`: `#f2f2f2` / `#1a1a1a`
- `200`: `#ebebeb` / `#1f1f1f`
- `300`: `#e6e6e6` / `#292929`
- `400`: `#eaeaea` / `#2e2e2e`
- `500`: `#c9c9c9` / `#454545`
- `600`: `#a8a8a8` / `#878787`
- `700`: `#8f8f8f` / `#8f8f8f`
- `800`: `#7d7d7d` / `#7d7d7d`
- `900`: `#4d4d4d` / `#a0a0a0`
- `1000`: `#171717` / `#ededed`

### Terminal Theme Variables

```css
.ui-window {
  --window-bg: #171717;
  --window-titlebar: #171717;
  --window-border: #2a2a2a;
  --window-muted: #6b6b6b;
  --window-text: #b3b3b3;
  --window-text-strong: #e5e5e5;
  --window-blue: #79c0ff;
  --window-purple: #d2a8ff;
  --window-green: #7ee787;
  --window-inline-bg: #1e2a1e;
}
```

---

## 3. Typography & Text Hierarchy

### Font Family
- **Sans**: `'Geist', -Anonymous Study-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Mono**: `'Geist Mono', 'SF Mono', 'Fira Code', Consolas, monospace`

### Typography Hierarchy

| Level | Size | Weight | Line Height | Letter Spacing | Target Elements |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `40px` (`32px` mobile) | 600 | `48px` (`1.2`) | `-2.4px` | Main headline `.hero-title` |
| **Section Heading** | `24px` (`20px` mobile) | 600 | `32px` (`1.33`) | `-0.96px` | Section titles `.section-heading` |
| **Tagline / Lead** | `18px` / `15px` | 400 | `1.55` | `0` | Subtitles, intro paragraphs |
| **Step Title** | `16px` | 600 | `24px` (`1.5`) | `-0.32px` | Workflow card headers |
| **Card Title** | `14px` | 600 | `20px` (`1.42`) | `-0.28px` | Feature card headers |
| **Body Copy** | `14px` | 400 | `24px` (`1.71`) | `0` | `.section-body`, general text |
| **Terminal Code** | `13px` | 400 | `1.6` | `0` | Monospace CLI code blocks |
| **Micro Labels** | `12px` | 500 | `1.0` | `0.04em` | Arrow labels, uppercase headers |

---

## 4. Components & Layout Patterns

### 1. Terminal Window (`.ui-window`, `.ui-window--terminal`)
- **Structure**:
  - Mac Traffic Lights Header: 3 dots sized `12px × 12px` (`#ff5f57`, `#febc2e`, `#28c840`).
  - Centered Title: `.ui-window__title` (Red for Before state `#ff5f57`, Green for After state `#28c840`).
  - Body: `.ui-window__body` with dark terminal styling, monospace text, colored prompts (`❯` in blue, `✦` in purple).

### 2. Feature Cards Grid (`.feat-grid`, `.feat-card`)
- 3-column responsive layout (`repeat(3, 1fr)` down to 2 columns on tablet and 1 column on mobile).
- Top media slot containing an embedded dark mini-terminal window snippet.
- Bottom slot containing `font-weight: 600` title and muted description.

### 3. Workflow Step Indicator (`.workflow-row`, `.workflow-step`, `.workflow-arrow`)
- Flex row linking numbered steps with distinct arrows.
- Arrow carries uppercase tag (`compile`, `resume`) and glyph (`→` on desktop, `↓` rotated `90deg` on mobile).

### 4. Interactive Accordion FAQs (`.faq-list`, `.faq-item`)
- Semantic `<details>` and `<summary>`.
- Pseudo-element arrow rotated `45deg` by default and `225deg` when `[open]`.
- Smooth height and clean horizontal borders.

### 5. Pill CTA Buttons (`.btn-primary`, `.btn-secondary`)
- `height: 48px`, `border-radius: 9999px` (`var(--radius-full)`).
- Primary button uses inverted solid ink background (`background: var(--ink); color: var(--paper)`).
- Secondary button uses bordered outline with hover highlight.

### 6. Mode & Language Switchers
- Floating or nav pill containers with full border-radius.
- Sun/Moon icon swap with SVG strokes.

---

## 5. Do's and Don'ts

### Do's:
- Maintain strict high-contrast dark terminal surfaces even when the page is in light mode.
- Use Geist Mono for all code, CLI commands, file trees, and terminal prompts.
- Ensure all interactive buttons, cards, and toggles have clear `:focus-visible` ring outlines.
- Use negative letter-spacing on bold headings for modern geometric sharpness.

### Don'ts:
- Do not apply saturated color gradients across body backgrounds; maintain flat, clean whites and deep blacks.
- Do not mix non-monospace fonts inside terminal command windows.
- Do not use harsh shadows; limit box-shadows to elevation values (`0 2px 2px rgba(0,0,0,0.04)` and `0 4px 24px rgba(0,0,0,0.35)`).
