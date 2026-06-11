---
name: ddhq-site
description: Clean, developer-focused design system for the ddhq team portfolio site. No fluff, high contrast, technical confidence.
colors:
  primary: "#4F46E5"
  primary-light: "#818CF8"
  primary-dark: "#3730A3"
  secondary: "#64748B"
  secondary-light: "#94A3B8"
  accent: "#06B6D4"
  accent-light: "#22D3EE"
  neutral: "#1E293B"
  neutral-light: "#334155"
  base-100: "#FFFFFF"
  base-200: "#F8FAFC"
  base-300: "#E2E8F0"
  base-content: "#1E293B"
  success: "#10B981"
  warning: "#F59E0B"
  error: "#EF4444"
  info: "#3B82F6"
typography:
  h1:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "JetBrains Mono", "Fira Code", monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  card:
    backgroundColor: "{colors.base-100}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "0 1px 3px rgba(0,0,0,0.08)"
  input:
    backgroundColor: "{colors.base-100}"
    borderColor: "{colors.base-300}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    fontSize: 16px
  input-focus:
    borderColor: "{colors.primary}"
---

# ddhq-site Design System

> Design tokens and rules for the ddhq developer team website.
> AI agents: use this file for ALL styling decisions. Never deviate.

---

## Overview / Brand & Style

**Brand character:** technically competent, direct, no marketing fluff. We build tools — the design reflects that: clean, functional, confident. No gradients for gradients' sake, no unnecessary decoration.

**Visual direction:**
- High contrast, readable, accessible (WCAG AA minimum)
- Generous whitespace — content breathes
- One accent color does the heavy lifting; the rest stays neutral
- Code blocks and technical content are first-class citizens
- Dark mode readiness: token structure supports it natively

**DaisyUI integration:** this design system maps directly to DaisyUI 4.12 theme tokens. The `components` section in frontmatter defines the semantic layer; DaisyUI provides the implementation. Prefer DaisyUI component classes over custom CSS. When you need a component not covered here, default to the closest DaisyUI variant and stay within the defined color/typography/spacing tokens.

---

## Colors

### Primary — Indigo (#4F46E5)
For primary actions, key UI elements, brand identity. Confident but not aggressive. Works well on both light and dark backgrounds.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#4F46E5` | Buttons, links, active states, brand marks |
| `primary-light` | `#818CF8` | Hover backgrounds, subtle highlights |
| `primary-dark` | `#3730A3` | Button hover/press states |

### Secondary — Slate (#64748B)
For secondary text, muted UI, supporting elements.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary` | `#64748B` | Secondary text, icons, borders |
| `secondary-light` | `#94A3B8` | Disabled states, placeholder text |

### Accent — Cyan (#06B6D4)
For highlights, badges, feature callouts. The "tech" accent — use sparingly.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | `#06B6D4` | Feature badges, code highlights, focus rings |
| `accent-light` | `#22D3EE` | Subtle accent backgrounds |

### Neutral & Base
Backgrounds and text. `base-100`/`base-200`/`base-300` follow DaisyUI convention.

| Token | Hex | Usage |
|-------|-----|-------|
| `base-100` | `#FFFFFF` | Card backgrounds, content areas |
| `base-200` | `#F8FAFC` | Page background, section alternation |
| `base-300` | `#E2E8F0` | Borders, dividers, subtle separators |
| `base-content` | `#1E293B` | Body text, headings (on light bg) |

### Semantic
Standard success/warning/error/info — keep these consistent across all projects.

| Token | Hex | When to use |
|-------|-----|-------------|
| `success` | `#10B981` | Confirmation, success states |
| `warning` | `#F59E0B` | Warnings, attention needed |
| `error` | `#EF4444` | Errors, destructive actions |
| `info` | `#3B82F6` | Informational, neutral callouts |

---

## Typography

**Font stack:** Inter for UI and body. JetBrains Mono for code. System sans-serif fallback.

**Strategy:**
- Headings: bold weight, tight line-height, slight negative letter-spacing
- Body: regular weight, comfortable line-height (1.6 for readability)
- Code: monospace, slightly smaller than body (14px vs 16px)
- Text should never be below 14px — accessibility first

**Hierarchy in practice:**
- Each page has exactly one `<h1>` — the main message
- `<h2>` sections use generous top margin (2xl or 3xl)
- `<h3>` for subsections within cards or feature blocks
- Body text: 16px default, 14px for captions and meta

---

## Layout & Spacing

**Grid:** DaisyUI responsive grid, 12 columns. Content max-width: `max-w-6xl` (72rem / 1152px) for most sections, `max-w-4xl` for article-like content.

**Spacing rhythm:** the system uses a 4px base unit. All spacing values are multiples of 4.

| Token | px | Tailwind | Use case |
|-------|----|----------|----------|
| `xs` | 4px | `gap-1`, `p-1` | Tight icon+label groups |
| `sm` | 8px | `gap-2`, `p-2` | Button internal padding, small gaps |
| `md` | 16px | `gap-4`, `p-4` | Default gap between elements |
| `lg` | 24px | `gap-6`, `p-6` | Section internal padding |
| `xl` | 32px | `gap-8`, `p-8` | Section separation |
| `2xl` | 48px | `gap-12`, `p-12` | Major section breaks |
| `3xl` | 64px | `gap-16`, `p-16` | Hero top/bottom padding |

**Rules:**
- Cards: `padding: lg`, `gap: md` between children
- Sections: `padding: 2xl` vertical, horizontal handled by container
- Hero: generous `3xl` vertical padding, centered content
- Never let content touch screen edges — always use container padding

---

## Elevation & Depth

Minimal elevation — flat design with subtle shadows. Depth is communicated through background alternation (`base-100` → `base-200`) more than shadows.

**Shadow scale:**
- Cards: `0 1px 3px rgba(0,0,0,0.08)` — barely visible, just enough to separate
- Dropdowns/modals: `0 4px 12px rgba(0,0,0,0.12)` — clear elevation
- No heavy shadows (no `shadow-2xl` unless absolutely justified)

**Background alternation:** when stacking sections, alternate between `base-100` and `base-200` to create visual separation without borders or shadows.

---

## Shapes

**Corner radius:** consistent but not overly rounded. The brand is technical, not playful.

| Token | px | Use |
|-------|----|-----|
| `none` | 0 | Code blocks, tables |
| `sm` | 4px | Inputs, small elements |
| `md` | 8px | Buttons, cards, standard UI |
| `lg` | 12px | Large cards, hero images |
| `xl` | 16px | Feature cards, modals |
| `full` | 9999px | Badges, pills, avatars |

**Rule:** use `md` (8px) for most interactive elements. `lg` for containers. `full` only for pill-shaped elements.

---

## Components

### Buttons
- **Primary:** solid indigo background, white text, `md` rounded, font-weight 600. Hover: darker indigo.
- **Secondary/Outline:** transparent background, indigo border and text. Hover: light indigo background.
- **Ghost:** no border, indigo text only. For toolbars and inline actions.
- **Size variants:** `sm` (32px height), default (40px), `lg` (48px).
- Implementation: use DaisyUI `btn btn-primary`, `btn btn-outline`, `btn btn-ghost`.

### Badges
- Pill-shaped (`rounded-full`), small text (14px), padding `xs` horizontal, `sm` vertical.
- Use `badge-primary`, `badge-accent`, or the semantic colors.
- Never stack more than 3 badges in a row.

### Cards
- White background, `lg` rounded, `lg` padding, subtle shadow.
- Title: `h3` style, description: `body` style in `secondary` color.
- Actions at the bottom, right-aligned.
- Hover: slightly elevated shadow (add `shadow-md` on hover).

### Inputs
- White background, `base-300` border (1px), `md` rounded.
- Focus: border turns `primary`, add a subtle ring (`ring-2 ring-primary/20`).
- Labels above, 14px, `secondary` color, `sm` margin-bottom.

### Code Blocks
- Dark background (`neutral` or `#0F172A`), `none` rounding (sharp corners).
- `mono` typography tokens, generous padding (`lg`).
- Syntax highlighting: use `accent` for keywords, `primary-light` for strings.
- Inline code: `base-200` background, `sm` rounded, `sm` horizontal padding.

---

## Do's and Don'ts

### ✅ Do
- Use DaisyUI component classes — they implement this design system
- Prefer `gap` over `margin` for spacing between elements
- Use semantic color tokens (`success`, `warning`, `error`) for states
- Keep one primary action per section — don't compete for attention
- Use `base-200` section backgrounds to break up long pages
- Write alt text for all images — accessibility matters
- Code examples get `mono` font and dark background — always

### ❌ Don't
- Don't use gradients on buttons or backgrounds (flat is cleaner)
- Don't add custom CSS when DaisyUI has a class for it
- Don't use more than 3 font sizes on a single page section
- Don't center-align text blocks wider than 3 lines (left-align for readability)
- Don't use `primary` color for non-interactive elements (it signals "clickable")
- Don't add decorational borders or dividers — whitespace is enough
- Don't use buzzwords in UI copy (see MARKETING.md brand voice)
- Don't use `shadow-xl` or `shadow-2xl` — our elevation is subtle

---

## Responsive Behavior

- Mobile-first: design at 375px, enhance upward
- Breakpoints: follow Tailwind defaults (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`)
- Font scale: reduce heading sizes by ~15% on mobile (use Tailwind responsive prefixes)
- Cards: stack vertically on mobile, grid on `md+`
- Navigation: hamburger below `lg`, full nav above
- Padding: reduce section vertical padding by one step on mobile (e.g. `2xl` → `xl`)

---

## Integration Notes

This DESIGN.md works with:
- **DaisyUI 4.12** — tokens map to DaisyUI's semantic color system. The `daisyui` config in `tailwind.config.mjs` can be extended with these tokens.
- **Tailwind CSS 3.4** — all spacing, typography, and color tokens are Tailwind-compatible.
- **AGENTS.md** — AI agents should read both files. AGENTS.md defines code conventions; DESIGN.md defines visual rules.
- **MARKETING.md** — brand voice rules apply to all UI copy. Read MARKETING.md before writing any user-facing text.

**CLI tools (optional):**
```bash
# Validate tokens and contrast ratios
npx @google/design.md lint DESIGN.md

# Export to Tailwind config
npx @google/design.md export --format tailwind DESIGN.md
```
