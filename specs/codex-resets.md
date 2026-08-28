---
version: alpha
name: Anonymous Study Design System
description: "A sticker-sheet neo-brutalist interface built from warm cream paper, dark cocoa ink, hard offset shadows, rounded Baloo 2 display type, one loud orange, and three pastel status colors. It turns a tiny operational tracker into a playful shrine without sacrificing scan speed: the current status dominates, summary metrics read as crooked stickers, the event calendar behaves like a tactile pixel grid, and archived updates become speech bubbles."
source: "anonymous reference"
extracted: "2026-07-30"

colors:
  paper: "#fff4dd"
  card: "#fffdf7"
  ink: "#26201a"
  ink-secondary: "#5c5347"
  ink-muted: "#877b6b"
  accent-orange: "#ff5c2b"
  sun-yellow: "#ffd84d"
  watch-orange: "#ffb02e"
  watch-paper: "#fff0bd"
  rose: "#ffb9cc"
  sky: "#a5dcff"
  calendar-empty: "#f1e3c4"

typography:
  display-hero:
    fontFamily: "Baloo 2"
    fontSize: "clamp(40px, 7.5vw, 68px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-title:
    fontFamily: "Baloo 2"
    fontSize: "clamp(28px, 4.5vw, 36px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  section-title:
    fontFamily: "Baloo 2"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  statistic:
    fontFamily: "Baloo 2"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0"
  body-lead:
    fontFamily: "system-ui"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  body:
    fontFamily: "system-ui"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  metadata:
    fontFamily: "ui-monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.08em"
  micro-label:
    fontFamily: "ui-monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"

rounded:
  cell: "6px"
  tooltip: "8px"
  highlight: "10px"
  control: "12px"
  card: "14px"
  bubble: "16px"
  pill: "999px"
  full: "50%"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "18px"
  xl: "24px"
  xxl: "34px"
  section: "46px"
  page-bottom: "72px"

components:
  sticker-button:
    backgroundColor: "{colors.sun-yellow}"
    textColor: "{colors.ink}"
    typography: "Baloo 2 / 14px / 700"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.pill}"
    shadow: "3px 3px 0 {colors.ink}"
    padding: "8px 14px"
    minHeight: "40px"
  sticker-button-pressed:
    backgroundColor: "{colors.sun-yellow}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.pill}"
    shadow: "0 0 0 {colors.ink}"
    transform: "translate(3px, 3px)"
  hero-status-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    shadow: "6px 6px 0 {colors.ink}"
    padding: "26px 30px 30px"
    transform: "rotate(-0.4deg)"
  hero-status-highlight:
    backgroundColor: "{colors.sun-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.display-hero}"
    rounded: "{rounded.highlight}"
    padding: "0 16px 4px"
    transform: "rotate(-1.2deg)"
  statistic-tile-sun:
    backgroundColor: "{colors.sun-yellow}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    shadow: "4px 4px 0 {colors.ink}"
    padding: "14px 18px 16px"
    transform: "rotate(-1deg)"
  statistic-tile-rose:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    shadow: "4px 4px 0 {colors.ink}"
    padding: "14px 18px 16px"
    transform: "rotate(0.8deg)"
  statistic-tile-sky:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    shadow: "4px 4px 0 {colors.ink}"
    padding: "14px 18px 16px"
    transform: "rotate(-0.6deg)"
  contribution-cell-empty:
    backgroundColor: "{colors.calendar-empty}"
    rounded: "{rounded.cell}"
    size: "22px"
  contribution-cell-hit:
    backgroundColor: "{colors.accent-orange}"
    border: "1.5px solid {colors.ink}"
    rounded: "{rounded.cell}"
    shadow: "1.5px 1.5px 0 {colors.ink}"
    size: "22px"
  speech-bubble:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.bubble}"
    shadow: "4px 4px 0 {colors.ink}"
    padding: "14px 18px"
  watch-card:
    backgroundColor: "{colors.watch-paper}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.ink}"
    rounded: "{rounded.card}"
    shadow: "4px 4px 0 {colors.ink}"
    padding: "20px 22px 18px"
    transform: "rotate(0.45deg)"
---

# Design System: Anonymous Study

Derived from an anonymous reference.

The visual thesis is **sticker-sheet neo-brutalism**: warm cream paper, thick cocoa outlines, hard offset shadows, one loud orange, and pastel metric stickers placed at slight angles. Rounded display type keeps the mood friendly while mono metadata makes the live tracker feel precise.

## 1. Design Philosophy

- **Make one status unmistakable.** The elapsed time is the only oversized figure and sits inside a yellow marker-like highlight.
- **Turn data into objects.** Metrics, chart cells, timestamps, and controls look like tactile stickers instead of neutral dashboard widgets.
- **Use comedy through restraint.** The copy is playful, but the information architecture remains direct: status, summary, history, source log.
- **Let ink create depth.** Dark outlines and unblurred offset shadows define every interactive or elevated surface.
- **Keep color semantic.** Orange marks activity, yellow marks the primary status, rose and sky separate supporting statistics.
- **Preserve scan speed.** Body copy stays in a system sans; Baloo 2 is reserved for titles, figures, and controls.

## 2. Color Palette

| Token | Hex | Role |
|---|---:|---|
| `--paper` | `#fff4dd` | Warm page canvas |
| `--card` | `#fffdf7` | Raised cards, graph panel, speech bubbles |
| `--ink` | `#26201a` | Primary text, outlines, hard shadows |
| `--ink-2` | `#5c5347` | Body-secondary text and explanatory copy |
| `--ink-3` | `#877b6b` | Dates, subtitles, low-priority metadata |
| `--accent` | `#ff5c2b` | Links, reset cells, active notification state |
| `--sun` | `#ffd84d` | Hero highlight, primary action, first statistic |
| `--watch` | `#ffb02e` | Reserved warm alert accent |
| `--watch-paper` | `#fff0bd` | Forecast or watch surface |
| `--rose` | `#ffb9cc` | Second statistic tile |
| `--sky` | `#a5dcff` | Third statistic tile and secondary hover |
| `--cg-empty` | `#f1e3c4` | Inactive calendar cells and muted status highlight |

### Color rules

- Keep the base warm. Do not replace the paper and ink with pure white and black.
- Use `--accent` for activity and link emphasis, not as a large decorative background.
- Use pastel fills as discrete sticker surfaces. Keep all text on them in `--ink`.
- The hard shadow always uses `--ink`; no translucent gray or colored blur shadows.
- Adjacent large panels stay on `--card` or a named pastel. Avoid arbitrary tint proliferation.

## 3. Typography

### Font stacks

```css
--font-display: "Baloo 2", "Arial Rounded MT Bold", system-ui, sans-serif;
--font-body: system-ui, -Anonymous Study-system, "Segoe UI", sans-serif;
--font-mono: ui-monospace, "SF Mono", "Cascadia Code", Menlo, Consolas, monospace;
```

### Type scale

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Hero status | `clamp(40px, 7.5vw, 68px)` | 800 | 1.05 | `-0.02em` |
| Masthead | `clamp(28px, 4.5vw, 36px)` | 800 | 1.05 | `-0.01em` |
| Watch figure | `clamp(48px, 9vw, 68px)` | 800 | 0.95 | `-0.05em` |
| Section title | `24px` | 800 | 1.2 | `-0.01em` |
| Statistic | `30px` | 700 | 1.1 | normal |
| Button / pill | `14px` | 700 | 1.2 | normal |
| Lead body | `17px` | 400 | 1.55 | normal |
| Event body | `16px` | 400 | 1.55 | normal |
| Metadata | `11–12px` | 400–700 | 1.4–1.45 | `0.06–0.12em` |

### Typography rules

- Use Baloo 2 only for high-level voice: titles, numbers, pills, and emphasized quotations.
- Use the system sans for paragraphs, explanations, and long event text.
- Use mono for dates, labels, chart axes, legends, and small operational metadata.
- Use tabular numerals for live counters and metrics.
- Uppercase mono labels at 11–12px with positive tracking; never uppercase body copy.

## 4. Shape, Border, and Depth

### Border system

| Token | Value | Use |
|---|---|---|
| `--border` | `2px solid #26201a` | Cards, buttons, avatars, bubbles |
| Emphasis hairline | `1.5px solid #26201a` | Active calendar cells, timestamp pills, legend keys |

### Radius scale

| Radius | Value | Use |
|---|---:|---|
| Cell | `6px` | Contribution cells |
| Tooltip | `8px` | Chart tooltip |
| Highlight | `10px` | Hero marker highlight |
| Control | `12px` | Watch probability block |
| Card | `14px` | Hero, graph, statistic, watch cards |
| Bubble | `16px` | Event speech bubbles |
| Pill | `999px` | Buttons, timestamps, badges |
| Full | `50%` | Avatars |

### Hard shadows

```css
--shadow: 4px 4px 0 var(--ink);
--shadow-sm: 3px 3px 0 var(--ink);
--shadow-hero: 6px 6px 0 var(--ink);
```

- Shadows never blur.
- A larger or more important object gets a slightly larger offset, not a softer shadow.
- Pressed controls translate by the shadow offset and collapse the shadow to zero.
- Static cards may rotate between `-1deg` and `0.8deg`; keep text readable and never stack rotations.

## 5. Layout and Rhythm

- Main wrapper: `max-width: 880px; margin: 0 auto; padding: 0 24px 72px`.
- Masthead: horizontal avatar plus title, `34px` top padding, `14px` internal gap.
- Hero intro: reading measure capped at `58ch`.
- Status card: `26px 30px 30px` padding with a subtle 18px dot grid.
- Statistic row: 3 equal columns, `18px` gap, `34px` top margin.
- Section start: `46px` top padding.
- Event list: one vertical column with `22px` gaps.
- Avatar-to-bubble gap: `14px`; the bubble tail visually bridges the two.
- Contribution chart uses a horizontal scroll container rather than squeezing cells below legibility.

### Information sequence

```text
Masthead
  -> one-sentence explainer + notification controls
  -> dominant current status card
  -> three summary statistic stickers
  -> 26-week contribution calendar
  -> chronological speech-bubble log
  -> quiet source footer
```

## 6. Component Patterns

### Sticker button

- 2px ink border, 999px radius, 3px hard shadow.
- Baloo 2 at 14px / 700; minimum height 40px.
- Primary fill is yellow. Secondary fill is the warm card color.
- Active: `transform: translate(3px, 3px)` and `box-shadow: 0 0 0 var(--ink)`.
- A notification-on state may flip to orange with light card text.

### Hero status card

- Card surface plus 18px radial dot grid at 10% ink opacity.
- 2px outline, 14px radius, 6px hard shadow, `rotate(-0.4deg)`.
- Mono uppercase label first, oversized yellow-highlighted status second, muted mono absolute time last.
- The highlighted figure enters with a short overshoot scale animation.

### Statistic sticker

- Three equal-width tiles: yellow, rose, sky.
- Same geometry and shadow; only fill and tiny rotation change.
- Label is uppercase mono 11px at 75% opacity.
- Value is Baloo 2, 30px / 700, with tabular numerals.
- Hover straightens the rotation and lifts the tile 3px.

### Contribution calendar

- Empty cell: 22px square, cream fill, 6px radius, no border.
- Hit cell: orange fill, 1.5px outline, 1.5px hard shadow.
- Hover: empty cells scale to 1.22; hit cells scale to 1.25 and rotate 6deg.
- Tooltip: inverted ink surface with paper text, 8px radius, mono metadata.

### Event speech bubble

- 44px circular avatar, 2px outline, 2px hard shadow.
- Card bubble with 16px radius and 4px hard shadow.
- A rotated square pseudo-element creates the left-pointing tail.
- Relative time is a small yellow bordered pill; absolute time is muted mono.
- Event prose remains body sans; the source link returns to mono.

### Watch card

- Pale watch-paper surface with 2px ink border, 4px shadow, and `rotate(0.45deg)`.
- The probability figure uses a nested yellow object with its own 3px shadow.
- Supporting forecast copy stays mono, uppercase, and compact.

## 7. Motion and Interaction

| Interaction | Duration | Easing | Effect |
|---|---:|---|---|
| Button press | `100ms` | ease | Translate to shadow offset; shadow collapses |
| Statistic hover | `200ms` | overshoot cubic-bezier | Straighten and lift 3px |
| Calendar hover | `150ms` | overshoot cubic-bezier | Scale; active cell also rotates 6deg |
| Avatar hover | `200ms` | overshoot cubic-bezier | Rotate from -4deg to 4deg and scale 1.06 |
| Telegram icon | `150ms` | ease | Move 2px right/up and rotate -4deg |
| Bell hover | `500ms` | ease | Short damped wiggle |
| Hero figure enter | `500ms` | overshoot cubic-bezier | Scale from 0.85 to 1 with fixed tilt |
| Watch card enter | `420ms` | cubic-bezier(0.16,1,0.3,1) | Fade and rise 12px |

### Accessibility

- Default focus ring: `3px solid var(--ink)` with `2px` offset.
- Controls maintain a 40px minimum height.
- Links combine underline, 2px accent decoration, and color change.
- Respect `prefers-reduced-motion`: disable entry animations, wiggles, transforms, and transitions.
- Never encode status with color alone; pair activity colors with labels, counts, or link semantics.

## 8. Responsive Behavior

The single breakpoint is `640px`.

- Page horizontal padding reduces from 24px to 16px.
- Contribution cell size reduces from 22px to 15px; horizontal scrolling remains available.
- Masthead top padding reduces from 34px to 24px; avatar reduces from 48px to 40px.
- Hero card padding reduces to `20px 18px 22px`.
- Statistic grid stays three columns but gaps and internal padding tighten.
- Statistic labels swap to shorter wording and values reduce from 30px to 22px.
- Section headers stack title over subtitle.
- Event avatar reduces from 44px to 36px.
- Never collapse the three summary metrics into a carousel; the immediate comparison is part of the design.

## 9. Do's and Don'ts

### Do

- Keep the warm paper and cocoa ink pairing intact.
- Use one dominant status figure per screen.
- Use hard shadows as a consistent interaction affordance.
- Assign yellow, rose, and sky to stable metric roles.
- Mix tiny rotations only across separate sticker-like objects.
- Keep operational labels, dates, and chart axes in mono.
- Preserve horizontal scrolling for dense pixel grids.

### Don't

- Don't introduce blurred shadows, glass panels, gradients, or translucent floating cards.
- Don't use Baloo 2 for paragraphs or long tweet content.
- Don't turn every surface orange; orange represents an event or active state.
- Don't add more pastel categories without a clear data meaning.
- Don't apply rotation to the page wrapper, long text blocks, or nested children.
- Don't remove outlines to make the interface feel cleaner; the ink frame is the system.
- Don't animate under `prefers-reduced-motion`.

## 10. Agent Prompt Guide

```text
Build a compact operational tracker in the Anonymous Study visual language.

Use a warm cream paper canvas (#fff4dd), dark cocoa ink (#26201a), and off-white raised cards (#fffdf7). Use Baloo 2 at weights 700–800 only for titles, figures, and pill controls; use system sans for body copy and ui-monospace for labels, dates, legends, and metrics.

Every elevated surface uses a 2px solid ink outline, 14–16px radius, and an unblurred 3–6px bottom-right ink shadow. The primary status must be the only oversized figure, placed on a yellow marker highlight (#ffd84d). Use orange (#ff5c2b) for active events, rose (#ffb9cc) and sky (#a5dcff) for supporting metric groups.

Make buttons feel physical: on press, translate them by the shadow offset and collapse the shadow. Add only tiny rotations to discrete sticker cards. Use a 640px compact breakpoint, preserve horizontal scrolling for dense charts, provide visible focus rings, and disable transforms and animations under prefers-reduced-motion.

Avoid gradients, glassmorphism, blurred shadows, generic white dashboard cards, extra accent colors, and rounded display type in long body text.
```

## 11. Source Boundary

This specification records the visual system observed on the public homepage and its public stylesheet on 2026-07-30. Live counts, timestamps, event copy, notification availability, and forecast states are content or application behavior, not permanent design tokens.
