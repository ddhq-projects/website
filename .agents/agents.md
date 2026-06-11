---
kind: agents
---

# ddhq-site — Project Guidelines

## Stack
- **Framework:** Astro 6.x
- **CSS:** Tailwind CSS 3.4 + DaisyUI 4.12
- **Language:** TypeScript 6.x (strict mode)
- **Package manager:** pnpm (preferred)

## Build & Test
- `pnpm dev` — start dev server
- `pnpm build` — production build (`astro build`)
- `pnpm preview` — preview production build

## Conventions
- Pages go in `src/pages/` — file-based routing
- Global styles in `src/styles/global.css` (Tailwind directives)
- TypeScript strict mode enforced via `astro/tsconfigs/strict`
- DaisyUI components preferred over custom CSS
- Follow Astro's content-focused patterns

## File Structure
```
src/
├── pages/        # .astro pages (routes)
│   └── index.astro
├── styles/
│   └── global.css
astro.config.mjs
tailwind.config.mjs
tsconfig.json
```
