---
version: alpha
name: Vue.js progressive docs
description: A progressive documentation system driving modern web libraries, combining vibrant Vue Green, deep carbon gray, and semantic callouts.
colors:
  primary: "#42b883"
  primary-focus: "#338a60"
  canvas: "#ffffff"
  surface-card: "#f6f6f7"
  surface-soft: "#f6f6f7"
  ink: "#2c3e50"
  body: "#2c3e50"
  muted: "#476582"
  hairline: "#e2e2e3"
typography:
  display-xl:
    fontSize: "38px"
    fontWeight: "700"
    lineHeight: "1.2"
    use: "Page Heading"
  body-md:
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "1.6"
    use: "Primary Body"
---

# Design System — Vue.js (VitePress Documentation Style)

Extracted and adapted from [cn.vuejs.org](https://cn.vuejs.org) and [vuejs.org](https://vuejs.org).
A content-first, developer-friendly documentation design system characterized by vibrant Vue Green accents, soft semantic highlights, progressive layout flow, and exceptionally legible dark-theme code blocks.

---

## 1. Design Philosophy

- **Progressive Disclosure** — simple by default, advanced when needed. The design system is optimized to organize and present documentation layers progressively.
- **Deference to Technical Content** — typography and layout are crafted to prioritize readability of technical guides, API documentation tables, and nested lists.
- **Developer-Centric Semantics** — visual hierarchy relies heavily on custom callout containers (Tips, Warnings, Danger notes) and syntax-highlighted code blocks.
- **Vibrant Emerald Accents** — Vue Green serves as the primary visual anchor for brand identification, link states, active navigation elements, and badges.

---

## 2. Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--vp-c-brand` | `#42b883` | Primary brand accent (Vue Green) |
| `--vp-c-brand-dark` | `#338a60` | Hover state brand green |
| `--vp-c-text-1` | `#2c3e50` | Primary slate-charcoal text (light mode) |
| `--vp-c-text-dark` | `#ebebeb` | High-contrast text (dark mode) |
| `--vp-c-bg` | `#ffffff` | Primary light mode canvas background |
| `--vp-c-bg-dark` | `#1b1b1f` | Deep matte gray canvas background (dark mode) |
| `--vp-c-bg-alt` | `#f6f6f7` | Sidebar and alert backgrounds (light mode) |
| `--vp-c-bg-alt-dark`| `#202024` | Sidebar and alert backgrounds (dark mode) |
| `--vp-c-border` | `#e2e2e3` | Faint divider and table borders |
| `--vp-c-navy` | `#35495e` | Secondary brand color (classic Vue logo slate-blue) |

### Semantic Highlight Containers:
- **Tip (Info)**: Left border `#42b883`, background `#f0f9eb` (light) / `rgba(66, 184, 131, 0.08)` (dark).
- **Warning**: Left border `#e7c000` (amber), background `#fffdf4` (light) / `rgba(231, 192, 0, 0.08)` (dark).
- **Danger**: Left border `#c00` (red), background `#fdf3f3` (light) / `rgba(204, 0, 0, 0.08)` (dark).

---

## 3. Typography

### Font Stack

| Stack Option | Font Family List |
|--------------|------------------|
| Default Sans | `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif` |
| Code Monospace| `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |

### Sizing and Weights

| Role | Size | Weight | Line-height | Letter-spacing |
|------|------|--------|-------------|----------------|
| Page Heading (H1) | 38px | 700 (Bold) | 1.2 | -0.02em |
| Section Title (H2) | 24px | 600 (Semibold) | 1.25 | -0.01em |
| Subsection (H3) | 19px | 600 (Semibold) | 1.3 | — |
| Primary Body | 16px | 400 (Regular) | 1.6 | — |
| Navigation Link | 14px | 500 (Medium) | 1.4 | — |
| API Table Labels | 13px | 600 (Semibold) | 1.4 | — |

---

## 4. Spacing System

Layout rules align to standard document grid offsets:

- **Max Content Width**: `960px` (optimized reading line length).
- **Paragraph Spacing**: `margin-bottom: 16px`.
- **Heading Margins**: `margin-top: 36px` to separate conceptual blocks.
- **Custom Callout Padding**: `16px 24px` for balanced internal breathing room.
- **Inner Code Margin**: `8px` padding for code blocks, `4px` side margins for inline tags.

---

## 5. Custom Containers (Alert Callouts)

VitePress custom container blocks highlight tips, warnings, or danger guidelines. They feature a solid 4px left border and full-width background tints:

### Info / Tip Container
```html
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p>这是一个提示性信息，用于引导开发人员注意关键的使用方法或最佳实践。</p>
</div>
```

### Warning Container
```html
<div class="custom-block warning">
  <p class="custom-block-title">警告</p>
  <p>不推荐的操作或者存在潜在问题的配置项。</p>
</div>
```

---

## 6. Code & Code Blocks

- **Inline Code**: Faint gray background with crimson/green text: `bg: #f6f6f7`, `color: #476582` (light) / `#c8d6e2` (dark), `12px` size.
- **Preformatted Blocks**: Styled with a dark grey backdrop (`#202024`) even in light mode, featuring soft syntax highlighting, rounded corners (`8px`), and a top-right language indicator tag (e.g. `js`, `html`, `css`).

---

## 7. Border Radius Scale

- **Micro elements** (inline tags, checkboxes): `4px`
- **Buttons, badges, inputs**: `8px`
- **Callout boxes, code blocks**: `8px`
- **Large banners, floating popovers**: `12px`

---

## 8. Layout Patterns

### Right-Side Outline (Table of Contents)
A sticky right-side vertical menu (width: `224px`) displaying active page subsections. It updates in real-time as the user scrolls, styled with a fine `1px` border on the left:
```
├── Main Content Grid (1fr)
└── Page Outline Sidebar (224px)
      ├── "本页目录" heading (size: 11px, weight: 700)
      └── List of sub-anchors (hover color: --vp-c-brand)
```

## Do's and Don'ts

### Do
- Keep documentation layout flat and focused on readability.
- Use monospaced fonts for paths, variables, and terminal commands.
- Limit bright brand gradients to main logos and call-to-action cards.

### Don't
- Don't use overly stylized buttons or elements that distract from raw documentation content.
- Don't use heavy cards with deep blur box-shadows.
- Don't mix bright brand gradients inside long reading blocks.

