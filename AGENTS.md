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

## AI Configuration

This project follows the [.agents Protocol](https://dotagentsprotocol.com/):

```
.agents/
├── agents.md              # this file (AGENTS.md-compatible)
├── system-prompt.md       # system prompt for AI agents
├── mcp.json               # MCP server configuration
├── models.json            # model presets
├── agents/                # sub-agent profiles
├── skills/                # agent skills
├── tasks/                 # repeat tasks
└── memories/
    └── project-arch.md    # architecture decisions
```

## Design Context

For ALL styling decisions — colors, typography, spacing, components — always refer to
**[DESIGN.md](./DESIGN.md)** — the single source of truth for:
- Color tokens (primary, secondary, accent, semantic)
- Typography scale and font stack
- Spacing rhythm and layout rules
- Component specs (buttons, cards, inputs, badges, code blocks)
- Do's and Don'ts for visual consistency

Prefer DaisyUI component classes over custom CSS. Never deviate from DESIGN.md tokens.

## Marketing Context

Before generating any marketing content (landing pages, copy, READMEs), read
**[MARKETING.md](./MARKETING.md)** — the single source of truth for:
- Brand voice & tone
- ICP and audience segments
- Messaging pillars
- Channel strategy
- Campaign rules and autonomy tiers
