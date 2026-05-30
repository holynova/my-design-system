# Design System — Notion (Minimalist Workspace)

Extracted and adapted from [notion.so](https://www.notion.so).
A content-first, layout-agnostic workspace design system prioritizing block-based modularity, minimal visual noise, and pastel highlight states.

---

## 1. Design Philosophy

- **Absolute content deference** — the workspace behaves as a blank sheet of paper; layout and borders are secondary to text
- **Block-based modularity** — every element (paragraph, heading, callout, image) is a self-contained block that can be moved, colored, or indented
- **Minimal chrome** — sidebars, toolbars, and controls fade away or toggle off to keep user attention on content
- **Functional highlights** — color is utilized only to denote status, highlight text segments, or structure card groupings
- **System fallback integration** — fonts and rendering rely on native OS frameworks to load instantly and feel cohesive

---

## 2. Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--bg-default` | `#ffffff` | Primary canvas white |
| `--bg-sidebar` | `#fbfbfa` | Warm off-white for left sidebar |
| `--border-default`| `#edecee` | Fine divider border |
| `--text-primary` | `#37352f` | Notion dark gray for high readability (near-black) |
| `--text-secondary`| `#7c7b77` | Muted gray for subtitles, dates, and placeholders |
| `--highlight-yellow`| `#fff9e6` | Pastel yellow background highlight |
| `--highlight-blue`  | `#f1f6f9` | Pastel blue background highlight |
| `--highlight-green` | `#f2f6f3` | Pastel green background highlight |
| `--highlight-pink`  | `#fdf2f5` | Pastel pink background highlight |
| `--highlight-orange`| `#faecec` | Pastel red/orange background highlight |

**Usage rules:**
- Never use pure black text (`#000000`); use Notion Slate (`#37352f`) to reduce eye strain.
- Color highlights are applied to either text color (e.g. Red text) or block background (e.g. Red background `#faecec`). Never apply both simultaneously.

---

## 3. Typography

### Font Stack

| Option | Stack |
|--------|-------|
| Default Sans | `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"` |
| Serif Mode | `Lyon-Text, Georgia, ui-serif, serif` |
| Mono Mode | `iawriter-mono, Nitti, Menlo, Monaco, Consolas, monospace` |

### Type Scale

| Element | Size | Weight | Line-height | Letter-spacing | Notes |
|---------|------|--------|-------------|----------------|-------|
| Title (H1) | 40px (`2.5rem`) | 700 | 1.2 | -0.02em | Workspace page title |
| H2 | 24px (`1.5rem`) | 600 | 1.3 | -0.015em | Major section title |
| H3 | 20px (`1.25rem`) | 600 | 1.4 | -0.01em | Subsection title |
| Body Text | 16px (`1rem`) | 400 | 1.5 | — | Default body block |
| Sidebar Link| 14px (`0.875rem`)| 500 | 1.4 | — | Left page navigation |
| Captions | 12px (`0.75rem`)| 400 | 1.4 | — | Property lists |

---

## 4. Spacing System

Notion uses block flow margins for vertical layouts:

| Element | Margin / Padding | Role |
|---------|------------------|------|
| Page width | `900px` (max-width) | Default reading container width |
| Block vertical | `4px` (margin-bottom) | Space between consecutive paragraphs |
| Heading top | `24px` (margin-top) | Separating headings from text |
| Callout padding | `16px 16px 16px 12px` | Internal container spacing |
| Sidebar padding | `12px 14px` | Workspace padding |

---

## 5. Borders & Dividers

- **Border width:** Always 1px (thin, clean dividers).
- **Border colors:** `#edecee` (default gray) or `#e9e9e9` (darker slate-gray).
- **Dividers:** Clean, block-level `<hr>` divider styled as `1px solid var(--border-default)`.

---

## 6. Border Radius

| Element | Value |
|---------|-------|
| Small controls | 3px |
| Callout blocks | 4px |
| Selection overlays | 4px |
| Database card panels | 6px |
| Profile avatars / icons| 50% (circle) or 4px |

---

## 7. Shadows

- **Database Cards:** `0 1px 3px rgba(15, 15, 15, 0.05), 0 0 1px rgba(15, 15, 15, 0.10)` (very soft layout elevation).
- **Popovers & Menus:** `0 3px 6px rgba(15, 15, 15, 0.10), 0 9px 24px rgba(15, 15, 15, 0.20)`.

---

## 8. Layout Patterns

### Callout Block
```html
<div class="callout-block bg-highlight-blue rounded-md border border-default p-4 flex gap-3">
  <span class="emoji">💡</span>
  <p class="text-primary text-sm">This is a callout box detailing an important design instruction.</p>
</div>
```

### Workspace Header
```
├── .cover-image-container (height: 280px, background crop)
└── .page-metadata-wrap (margin-top: -64px, negative translation)
      ├── .page-icon (emoji or image, 78x78px)
      └── h1.page-title (font-size: 40px)
```

---

## 9. Component Patterns

### Database Row Link
```
.flex + .items-center + .gap-2 + .px-3 + .py-2 + .hover:bg-sidebar-hover + .rounded-md + .cursor-pointer
```

---

## 10. Transitions & Motion

- **Speed:** Instant (`0ms` to `100ms` transitions) to simulate zero-overhead web document feel.
- **Fade:** Simple `opacity` fade on hover controls (`transition: opacity 100ms ease`).
- **Sidebar toggle:** `200ms` horizontal width translation (`transition: width 200ms cubic-bezier(0.2, 0.8, 0.2, 1)`).

---

## 11. Responsive Breakpoints

- **Sidebar Collapse:** Below 900px, the left workspace sidebar collapses into a floating menu, and the main cover sheet fills 100% of the screen.
- **Font Reduction:** Titles scale down slightly on mobile viewports.

---

## 12. Iconography

- **Emojis** are the dominant visual marker for folders, databases, and page symbols
- **Simple line icons** (`stroke-width: 2`, `#37352f` color) represent sidebar actions and database filters
- Emojis scale at `24x24px` inside headings, or `78x78px` as main page icons

---

## 13. Code & Inline Elements

- Inline code wraps inside minimal red/pink chips `bg-highlight-pink text-pink-600 px-1.5 py-0.5 rounded font-mono text-sm`
- Block code uses a light gray background with copy buttons `bg-sidebar border border-default p-4 rounded font-mono`

---

## 14. Anti-Patterns (What This System Avoids)

- No floating cards with heavy shadows on the primary canvas
- No bright background fills — surfaces are strictly white or very faint gray
- No rounded shapes above 8px (except circles)
- No decorative borders — dividers are used strictly to divide distinct sections
- No non-system sans-serif fonts
