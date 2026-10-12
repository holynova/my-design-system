---
version: 1.0
name: Yadong Xie Lab Design System
description: "A compact editorial lab index: warm paper, Charter serif text, a narrow reading column, baseline-aligned navigation, and image-led experiment rows without card decoration."
source: "https://www.yadongxie.com/lab"
extracted: "2026-08-28"
---

# Design System: Yadong Xie Lab

Extracted from [Yadong Xie Lab](https://www.yadongxie.com/lab) on 2026-08-28. This is an author-led index for small interfaces, visual experiments, and thinking tools. It uses the calm density of a well-edited field notebook: one narrow column, a direct header, quiet black type, and a chronological list where each image earns its place.

## 1. Visual Theme & Atmosphere

**Quiet research notebook.** Density 4/10, variance 3/10, motion 2/10. The visual system is intentionally subordinate to the work: large blank margins, one uninterrupted reading column, small image windows, and no elevated cards.

- Make the page feel like an independent designer's collected notes rather than a product catalogue.
- Use an image as a compact index marker, not a decorative hero.
- Let the experiments themselves use vivid or dark imagery; the site shell remains warm, paper-like, and neutral.
- Keep the order simple: identity and navigation, a concise page thesis, then a continuous list.

## 2. Color Palette & Roles

| Token | Value | Role |
|---|---:|---|
| `--paper` | `#fafafa` | Main canvas and reading background |
| `--ink` | `#27272a` | Primary text, active navigation, icons |
| `--muted` | `#52525b` | Description text and metadata |
| `--quiet` | `#71717a` | Low-priority labels |
| `--media-black` | `#000000` | Thumbnail fallback only |
| `--hover-ink` | `#18181b` | Text emphasis and title underline |

The shell uses no persistent accent color. Treat color inside thumbnails as project content, not a UI token. Do not introduce badges, colored CTA buttons, gradients, soft shadows, or decorative surface layers.

## 3. Typography Rules

```css
--font-editorial: Charter, "Iowan Old Style", "Palatino Linotype", serif;
--font-ui: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Site name / page title | `20px` | 700 | 1.25 | `-0.025em` |
| Nav | `14px` | 400; active 700 | 1.4 | normal |
| Item title | `14px`, then `16px` at 640px | 700 | 1.4 | normal |
| Item metadata | `12px` | 400 | 1.4 | normal |
| Item description | `12px`, then `14px` at 640px | 400 | 1.55 | normal |

- Use the site's Charter-style serif for all text; do not replace it with a generic geometric sans.
- Use weight, underline on hover, and spatial hierarchy instead of type-size theatrics.
- Keep copy concise: an item title, one type/year line, and a single short explanatory sentence.

## 4. Components

### Masthead

- Maximum content width `768px` (`max-w-3xl`), `24px` mobile / `32px` desktop side padding, about `48px` top padding.
- Brand name is a 20px bold text link. Nav sits opposite it, baseline-aligned and wraps cleanly when needed.
- Nav uses 16px horizontal gaps and 4px vertical gaps. The current page is bold, with no tab background or underlining.
- A textual separator before social icons is acceptable; icons are small (`1.05em`) and fade to 60% opacity on hover.

### Page introduction

- Begin around 40px below the masthead.
- Page title: 20px bold. Supporting text: `14px / 1.625`, with 12px top margin.
- Do not add a hero image, CTA, eyebrow label, or large decorative statement.

### Experiment list row

- List has 40px top margin and 24px vertical gaps.
- Whole row is an anchor with `display:flex`, `align-items:flex-start`, and a 12px gap on mobile / 20px at `640px`.
- Thumbnail has a strict 8:5 ratio; width `112px` mobile / `160px` desktop, black fallback, no rounding, and `object-fit:cover`.
- At rest, image opacity is 1; hover lowers it gently to `.85`. No scaling, elevation, or colored border.
- Text block begins one pixel above the image on mobile for optical baseline alignment. Order is title, 6px metadata margin, 8px description margin.

## 5. Layout Principles

- Place all material in one centered, 768px maximum column. Avoid sidebars, masonry grids, card containers, and full-width content bands.
- Keep a deliberate reading rhythm: masthead, 40px gap, introduction, 40px gap, list; list rows are separated by whitespace instead of rules.
- The page may use a scroll viewport with hidden scrollbars, but the content must remain naturally scrollable with keyboard and touch.
- Use images at a fixed index size so titles line up; preserve the 8:5 crop, but always give clear alt text.

## 6. Motion & Interaction

| Interaction | Timing | Response |
|---|---:|---|
| Nav hover | `150ms ease` | Text shifts to ink or active tone |
| Social hover | `150ms ease` | Opacity to `.6` |
| List row hover | `150ms ease` | Title becomes underlined; media opacity `.85` |
| Focus | Immediate | Visible text-color or outline confirmation |

Motion is almost absent. No scroll-linked animation, layout entrance, parallax, ambient grain, custom cursor, or perpetual effect belongs in the index shell.

## 7. Responsive & Accessibility Rules

- Retain a single column at every width; decrease only outer padding from 32px to 24px.
- Thumbnails are 112px wide before 640px and 160px after; never allow them to shrink below their ratio or force page overflow.
- Long titles and descriptions wrap in the remaining `min-width:0` text column.
- Use semantic `<header>`, `<nav>`, `<main>`, `<ul>`, `<li>`, and `<a>`. Make the entire list row one keyboard-focusable target.
- Keep social icon labels in visually-hidden text and ensure linked image alt text describes the experiment image, not just its filename.

## 8. Anti-Patterns (Banned)

- No rounded cards, box shadows, glass, pill filters, prominent CTA buttons, or dashboard chrome.
- No Inter, geometric display headline, all-caps labels, colored tag chips, or artificial type scale.
- No gradients or neon in the shell; experiments may contain strong color inside their own images.
- No three-column gallery, hero artwork, noisy dividers, duplicated “read more” links, or vague marketing copy.

## 9. Agent Prompt Guide

> Build a compact editorial index for small digital experiments. Use a warm off-white canvas (#fafafa), zinc ink (#27272a), a Charter-style serif typeface, and a centered 768px reading column. Create a baseline-aligned masthead with an author-name link, small text navigation, a quiet separator, and social icons. Add only a 20px title and one restrained 14px description. Present experiments as a vertical list of full-row links: each has a 112px mobile / 160px desktop 8:5 image on the left and title, type/year, and short description on the right. Use whitespace instead of cards and dividers; hover only underlines the title and gently lowers image opacity. Avoid rounded UI, shadows, CTAs, pills, gradients, motion spectacle, and generic product-landings.
