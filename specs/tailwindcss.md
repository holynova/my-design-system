# Design System — Tailwind CSS (Utility-First)

Extracted and adapted from [tailwindcss.com](https://tailwindcss.com).
A modern, utility-first CSS design framework prioritizing customizability, high-density utility scales, and clean component composition.

---

## 1. Design Philosophy

- **Utility-first composition** — build custom designs directly in markup using low-level utility classes rather than pre-designed components
- **Strict constraints** — colors, font sizes, spacing, and border radius scales are locked in to ensure visual consistency
- **Mobile-first responsive flow** — layout adaptivity is designed from screen size zero upward, utilizing clean media query prefixes
- **Vibrant & cohesive colors** — built-in harmonious palettes covering 22 color families with 10 shades each (from 50 to 950)
- **Zero runtime overhead** — compiler purges unused utilities, producing ultra-lightweight custom production css

---

## 2. Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--bg-slate-900` | `#0f172a` | Dark mode main canvas background |
| `--bg-slate-950` | `#020617` | Dark mode surface background |
| `--text-slate-50` | `#f8fafc` | High contrast white for dark mode headings |
| `--text-slate-400`| `#94a3b8` | Muted slate-gray for text descriptions |
| `--indigo-500` | `#6366f1` | Primary interactive brand color |
| `--indigo-600` | `#4f46e5` | Indigo hover state variant |
| `--sky-400` | `#38bdf8` | Secondary vibrant cyan accent |
| `--emerald-500` | `#10b981` | Success / Active status green |
| `--amber-500` | `#f59e0b` | Warning status amber |
| `--rose-500` | `#f43f5e` | Danger / Destructive status rose |

**Usage rules:**
- Neutrals are categorized into Slate (blue-gray), Zinc (clean gray), Neutral (pure gray), and Stone (warm gray).
- Backgrounds are always clean white `#ffffff` in light mode or slate-navy `#0f172a` in dark mode.
- Interactive components use `--indigo-500` for default call-to-actions, accompanied by focus rings and subtle scale transitions.

---

## 3. Typography

### Font Stack

| Token | Stack |
|-------|-------|
| `--font-sans` | `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--font-serif` | `Georgia, Cambria, "Times New Roman", Times, serif` |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |

### Type Scale

| Element | Size | Weight | Line-height | Letter-spacing | Notes |
|---------|------|--------|-------------|----------------|-------|
| `text-xs` | 12px (`0.75rem`) | 400 | 16px | 0.05em | Badges, captions |
| `text-sm` | 14px (`0.875rem`) | 500 | 20px | — | UI controls, labels |
| `text-base` | 16px (`1rem`) | 400 | 24px | — | Primary body text |
| `text-lg` | 18px (`1.125rem`) | 600 | 28px | -0.01em | Subheadings |
| `text-xl` | 20px (`1.25rem`) | 700 | 28px | -0.015em | Small section titles |
| `text-3xl`| 30px (`1.875rem`)| 800 | 36px | -0.02em | Section headings |
| `text-6xl`| 60px (`3.75rem`)| 800 | 60px | -0.025em | Main hero displays |

---

## 4. Spacing System

Tailwind uses a proportional 4px layout scale (1 unit = 4px):

| Token | Value | Usage |
|-------|-------|-------|
| `p-1` | 4px | Small item spacing |
| `p-2` | 8px | Button inline gutters |
| `p-4` | 16px | Card internal padding |
| `p-6` | 24px | Major bento-grid cells padding |
| `p-8` | 32px | Section gap or page margin padding |
| `p-16` | 64px | Vertical section separation |

---

## 5. Borders & Dividers

- **Border width:** `border-0` (0px), `border` (1px), `border-2` (2px), `border-4` (4px).
- **Colors:** Default border uses light slate-gray `#e2e8f0` (light mode) or `#334155` (dark mode).
- **Dividers:** Utility class `divide-y` or `divide-x` adds clean rules automatically between stacked items.

---

## 6. Border Radius

| Token | Value | Element |
|-------|-------|---------|
| `rounded-sm` | 2px | Micro tags |
| `rounded-md` | 6px | Input fields, small buttons |
| `rounded-lg` | 8px | Cards, primary CTA buttons |
| `rounded-xl` | 12px | Bento cells, modular overlays |
| `rounded-2xl`| 16px | Banner frames, popovers |
| `rounded-full`| 999px | Badges, tags, avatar rings |

---

## 7. Shadows

- **`shadow-sm`**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` (highly subtle layout boundaries)
- **`shadow`**: `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)` (default card)
- **`shadow-lg`**: `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` (interactive card hover)
- **`shadow-xl`**: `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)` (dropdown panels)

---

## 8. Layout Patterns

### Flexbox Row
```html
<div class="flex items-center justify-between gap-4">
  <span>Label</span>
  <button class="bg-indigo-500 text-white rounded-lg px-4 py-2">Action</button>
</div>
```

### Responsive Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="rounded-xl border border-slate-200 p-6">Card 1</div>
  <div class="rounded-xl border border-slate-200 p-6">Card 2</div>
  <div class="rounded-xl border border-slate-200 p-6">Card 3</div>
</div>
```

---

## 9. Component Patterns

### Button Component
```
.bg-indigo-500 + .hover:bg-indigo-600 + .text-white + .font-medium + .px-4 + .py-2 + .rounded-lg + .transition-all
```

---

## 10. Transitions & Motion

- **Speed:** `duration-150` (150ms) for snappy controls, `duration-300` (300ms) for slide-overs.
- **Easing:** Default ease is `ease-in-out` (`cubic-bezier(0.4, 0, 0.2, 1)`).
- **Dynamic Scale:** Hover triggers small scaling elements `hover:scale-105` combined with shadow lifts.

---

## 11. Responsive Breakpoints

| Breakpoint | Prefix | Width |
|------------|--------|-------|
| Mobile Landscape | `sm:` | 640px |
| Tablet | `md:` | 768px |
| Laptop / Desktop | `lg:` | 1024px |
| Large Desktop | `xl:` | 1280px |
| Ultrawide | `2xl:`| 1536px |

---

## 12. Iconography

- **Heroicons** are the default SVG companion
- Sleek wireframe lines with standard `stroke-width="1.5"` or `stroke-width="2"`
- SVG elements scale responsively with `w-5 h-5` (20px) or `w-6 h-6` (24px)

---

## 13. Code & Inline Elements

- Inline code runs inside light purple/pink gray chips `bg-slate-100 text-pink-600 px-1 py-0.5 rounded`
- Preformatted blocks use dark slate background `bg-slate-900 text-slate-100 p-4 rounded-xl font-mono`

---

## 14. Anti-Patterns (What This System Avoids)

- No absolute colors — color is always tied to semantic numerical tokens
- No custom class inflation — styles are resolved directly via tailwind utility combinations
- No complex layout floats — CSS Flex and Grid are the exclusive structure systems
- No unconstrained font sizes — type sizes map strictly to the `text-` prefixes scale
