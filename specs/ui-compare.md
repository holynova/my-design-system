---
version: alpha
name: Anonymous Study Design System
description: "A warm, precision-first utility system for visual UI acceptance: paper surfaces, ink rules, compact controls, and one amber signal that turns comparison state into a readable decision."
source: "anonymous reference"
extracted: "2026-08-09"

colors:
  paper: "#f3f1e9"
  surface: "#fbfaf5"
  ink: "#20201c"
  muted: "#737269"
  line: "#d8d5ca"
  line-strong: "#aaa69a"
  amber: "#e99b20"
  amber-soft: "#fff0d2"
  green: "#2f7a4d"
  red: "#b84535"

typography:
  ui-title:
    fontFamily: "Avenir Next, Avenir, -Anonymous Study-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.02em"
  section-label:
    fontFamily: "Avenir Next, Avenir, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 800
    lineHeight: "1.4"
    letterSpacing: "0.08em"
    textTransform: uppercase
  body:
    fontFamily: "Avenir Next, Avenir, -Anonymous Study-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.4"
    letterSpacing: "0"
  helper:
    fontFamily: "Avenir Next, Avenir, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.45"
    letterSpacing: "0"

spacing:
  xxs: "4px"
  xs: "6px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "14px"
  section: "13px"
  page: "14px"

rounded:
  control: "5px"
  field: "6px"
  card: "7px"
  menu: "8px"
  dialog: "10px"
  pill: "999px"

components:
  primary-button:
    backgroundColor: "{colors.ink}"
    textColor: "#fffdf6"
    rounded: "{rounded.field}"
    minHeight: "34px"
    padding: "0 11px"
    fontWeight: 650
  secondary-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line-strong}"
    rounded: "{rounded.field}"
    minHeight: "34px"
  segmented-control:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.line}"
    activeBackground: "{colors.ink}"
    activeTextColor: "#ffffff"
    rounded: "{rounded.control}"
    minHeight: "30px"
  notice:
    backgroundColor: "{colors.surface}"
    borderInlineStart: "3px solid {colors.amber}"
    padding: "9px 10px"
    fontSize: "12px"
  image-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.line}"
    activeBorder: "{colors.amber}"
    rounded: "{rounded.card}"
    thumbnail: "66px × 48px"
  field:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.line-strong}"
    focusBorder: "{colors.amber}"
    focusRing: "0 0 0 2px rgba(233, 155, 32, 0.17)"
    rounded: "{rounded.field}"

---

# Anonymous Study Design System

Derived from an anonymous reference.

## 1. Design Philosophy

- **Make the comparison surface disappear.** The tool should feel like a calm measuring instrument attached to the page, not a second application competing for attention.
- **Use structure before decoration.** Fine rules, grouped sections, and compact labels provide hierarchy before color or shadow is introduced.
- **Give one signal one job.** Amber means active comparison or attention. Green means accepted, red means changes, and the neutral canvas carries everything else.
- **Keep state inspectable.** Every control exposes its current value in plain language: image name, viewport width, alignment, opacity, mode, or acceptance status.
- **Preserve the user's page.** The overlay follows document coordinates, the panel can close for exact-width work, and page access stays user-initiated.

## 2. Color Palette

| Token | Hex | Role |
|---|---:|---|
| `--paper` | `#f3f1e9` | Side Panel canvas and quiet background |
| `--surface` | `#fbfaf5` | Inputs, cards, dialogs, and raised controls |
| `--ink` | `#20201c` | Primary text, active controls, and brand mark |
| `--muted` | `#737269` | Helper copy, captions, labels, and inactive state |
| `--line` | `#d8d5ca` | Section dividers and image-card borders |
| `--line-strong` | `#aaa69a` | Input borders and secondary action frames |
| `--amber` | `#e99b20` | Active comparison, focus, selected image, attention |
| `--amber-soft` | `#fff0d2` | Quiet amber background and selected-state halo |
| `--green` | `#2f7a4d` | Passed / accepted state |
| `--red` | `#b84535` | Changes / destructive state |

### Color rules

- Keep the canvas warm and low-contrast. Do not replace the paper with a generic white dashboard background.
- Use `--ink` for only the strongest hierarchy: primary action, active mode, and the wordmark.
- Use amber for action or comparison state, never for decoration or large page fills.
- Pair green and red with words such as **Passed** and **Changes**. Never encode acceptance status by color alone.
- Keep adjacent surfaces distinct through a small background step: `--paper` outside, `--surface` inside.

## 3. Typography

### Font stacks

```css
:root {
  --font-ui: "Avenir Next", Avenir, -Anonymous Study-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
```

The runtime uses a compact UI sans. Use mono only for coordinates, selectors, raw values, or debug-like measurements. Do not introduce a display face into the Side Panel: the product's personality comes from density, spacing, and measured contrast.

| Element | Size | Weight | Line height | Tracking | Use |
|---|---:|---:|---:|---:|---|
| Product title | 13px | 700 | 1.15 | -0.02em | Side Panel brand |
| Section label | 10px | 800 | 1.4 | 0.08em | Uppercase group headings |
| Body | 13px | 400 | 1.4 | 0 | Inputs and descriptions |
| Helper | 11px | 400 | 1.45 | 0 | Hints, anchors, secondary metadata |
| Numeric readout | 13px | 400 | 1.4 | 0 | Geometry and viewport values with tabular numerals |

## 4. Spacing and Layout

| Token | Value | Usage |
|---|---:|---|
| `--space-xxs` | 4px | Label to field, icon gaps |
| `--space-xs` | 6px | Button groups and card gutters |
| `--space-sm` | 8px | Inline controls and field rows |
| `--space-md` | 10px | Notice padding and compact stacks |
| `--space-lg` | 12px | Main content inset |
| `--space-xl` | 14px | Side Panel outer inset |
| `--space-section` | 13px | Control section rhythm |

### Layout rules

- The Side Panel is a narrow utility column. Default to a 300px minimum width and let content wrap or stack at 330px.
- Group controls into named sections separated by a 1px rule. Do not create a card for every field.
- Use two-column number grids for geometry. Use equal-width segmented controls for modes and status.
- Keep the project selector at the top, the image rail immediately below it, and the active image inspector below the rail.
- When a panel would change the page viewport, close it before measuring. Exact width is a workflow state, not a permanent layout.

## 5. Depth, Borders, and Radius

- Default depth is flat: `1px solid var(--line)` plus the paper-to-surface background step.
- Use `var(--line-strong)` for fields and secondary controls where the hit target must be unmistakable.
- Reserve the small brand mark shadow (`3px 3px 0 var(--ink)`) for identity. Do not turn every surface into a sticker.
- Use 5px for compact segmented controls, 6px for fields and buttons, 7px for image cards, 8px for menus, and 10px for dialogs.
- Avoid blur shadows, gradients, glass panels, and oversized radii. Precision work benefits from edges that remain legible.

## 6. Component Showcase

### Primary and secondary buttons

- Primary: ink fill, near-white text, 34px minimum height, 6px radius.
- Secondary: surface fill, strong line, same height and radius.
- Quiet: transparent background, muted text, gains a paper tint on hover.
- Danger: red fill for the final destructive action, with confirmation before deletion.

### Segmented controls

- Use 30px minimum height and equal-width cells.
- Default cell is surface plus a light border.
- Active cell is ink with white text. Acceptance states may use green or red only after the label remains visible.

### Notices

- Use a 3px left rule and a surface background.
- Amber is informational or attention-seeking, green is success, red is an actionable failure.
- Keep the copy short and name the next action. For page access, say to click the toolbar action, not to expose a raw browser permission error.

### Image rail

- Thumbnails are 66px × 48px, cropped with a 3px inner radius.
- Cards are 76px wide with 4px internal padding, 7px radius, and a 1px line.
- The selected image uses amber border plus a 2px amber-soft halo.

### Fields and inspectors

- Labels are uppercase section-label typography above the field.
- Fields use a 34px height, 8px horizontal padding, and a 6px radius.
- Focus uses the amber border and a two-pixel amber-soft ring. Never remove `:focus-visible`.

## 7. Interaction and Motion

| Interaction | Duration | Effect |
|---|---:|---|
| Field focus | 120ms | Border changes to amber, soft two-pixel ring appears |
| Hover on quiet control | 120ms | Surface tint appears, text becomes ink |
| Mode selection | 120ms | Cell inverts to ink and white text |
| Notice entry | 160ms | Instant layout participation, no bouncing or parallax |
| Overlay blink | User-controlled | Respect the selected frequency, never animate by default outside comparison mode |

### Accessibility

- Maintain a visible keyboard focus ring with at least 2px contrast against the paper.
- Keep all click targets at least 30px in the compact Side Panel, and 34px for primary actions.
- State changes must include text, icon, or a value update in addition to color.
- Respect `prefers-reduced-motion`: disable decorative transitions and never hide comparison state behind motion.

## 8. Responsive Behavior

The Side Panel's compact breakpoint is **330px**.

- At widths above 330px, mode controls stay in a four-column row and anchor/viewport controls can sit side by side.
- At 330px and below, mode controls become a two-by-two grid; anchor, width, and diff rows stack vertically.
- Reduce outer padding from 14px to 10px at the compact breakpoint.
- Keep the image rail horizontally scrollable. Never shrink image cards until their names and selection state become ambiguous.
- For exact design widths, close the Side Panel, resize the normal Chrome window, and verify the resulting CSS viewport.

## 9. Do's and Don'ts

### Do

- Keep the warm paper/surface contrast and ink hierarchy.
- Use one amber signal for active comparison and focus.
- Group controls by the user's decision: acceptance, compare, geometry, anchor, viewport.
- Show the current value next to a slider or numeric field.
- Use short, actionable notices with a calm tone.
- Treat page access as temporary and user initiated.

### Don't

- Don't add persistent host permissions just to make the UI feel automatic.
- Don't use raw browser injection errors as product copy.
- Don't fill the entire Side Panel with cards, shadows, or decorative gradients.
- Don't hide a state change in color alone.
- Don't use a display font or oversized hero heading inside the utility panel.
- Don't let side-panel width contaminate exact-width measurements.

## 10. Agent Prompt Guide

```text
Build a compact visual-acceptance utility with a warm paper canvas (#f3f1e9), off-white surfaces (#fbfaf5), ink text (#20201c), muted labels (#737269), hairline rules (#d8d5ca), and one amber action signal (#e99b20). Use an Avenir Next/system UI sans at 13px body, 10px uppercase section labels, and 11px helper copy. Keep controls compact: 34px fields and primary buttons, 30px segmented controls, 5–10px radii, and almost no shadow. Organize the panel into project, image rail, acceptance, compare, geometry, DOM anchor, and design viewport sections. Active controls invert to ink; selected images use amber plus an amber-soft halo; passed and changes states retain readable labels. At 330px, stack anchor and width rows and wrap comparison modes. Avoid gradients, glass, large display type, broad host permissions, and color-only status.
```

## 11. Source Boundary

This specification records the UI tokens and interaction patterns in the local Anonymous Study Side Panel stylesheet on 2026-08-09. IndexedDB behavior, activeTab permissions, overlay geometry, and comparison algorithms are product behavior, not visual tokens. Re-check the source before copying the system into a different product.
