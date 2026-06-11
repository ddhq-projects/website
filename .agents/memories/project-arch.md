---
id: ddhq_arch_001
title: ddhq-site Architecture
importance: high
tags: astro, tailwind, daisyui, architecture
---

## Tech Stack
- **Astro 6.4.6** — static site framework
- **Tailwind CSS 3.4.18** — utility-first CSS
- **DaisyUI 4.12.24** — Tailwind component library
- **TypeScript 6.0.3** — type checking (strict)

## Routing
- File-based routing via `src/pages/`
- Current pages: `index.astro` (homepage)

## Styling
- Tailwind utilities + DaisyUI theme (base-200 background, hero layout)
- Global CSS in `src/styles/global.css` with Tailwind directives
- DaisyUI configured as Tailwind plugin in `tailwind.config.mjs`

## Build
- `astro build` produces static output
- Dev server: `astro dev` (default port 4321)
- No SSR, no API routes — purely static
