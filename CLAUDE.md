# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GAMO2 & DJDAO product documentation site built with **Docusaurus 3.9.2** and **React 19**. Written in TypeScript. Deployed to GitHub Pages at https://docs.vpietc.com.

GitHub repo: `doc769/vpie_doc`

## Commands

```bash
npm start              # Dev server (port 3000, default locale zh)
npm run build          # Production build (all locales)
npm run serve          # Serve production build locally
npm run typecheck      # TypeScript type checking (tsc)
npm run clear          # Clear Docusaurus cache (.docusaurus/)

# i18n specific
npm start -- --locale en           # Dev server with specific locale
npm run write-translations         # Generate i18n translation files
npm run write-heading-ids          # Auto-generate heading anchor IDs
```

Node.js >= 20.0 required.

## Architecture

### Multi-Instance Docs

The site uses **3 docs instances** via Docusaurus multi-instance plugin:

| Instance | Directory | Route | Sidebar Config | Description |
|----------|-----------|-------|----------------|-------------|
| default (preset) | `docs/` | `/` | `sidebars.ts` | Main site — welcome page + contributing |
| djdao | `docs-djdao/` | `/djdao` | `sidebars-djdao.ts` | DJDAO product documentation |
| gamo2 | `docs-gamo2/` | `/gamo2` | `sidebars-gamo2.ts` | GAMO2 product documentation |

The default instance serves the root (`routeBasePath: '/'`) as a product selection landing page. DJDAO and GAMO2 are separate plugin instances registered in `docusaurus.config.ts` under `plugins`.

### Content Structure

**GAMO2** (`docs-gamo2/`):
- `phoenixwan/` — PHOENIXWAN tutorials (replace panel, PCB upgrade, audio mesh, LMT damping)
- `k28/` — K28 firmware guides (V39, V40)
- `faucetwo-portable/` — FAUCETWO Portable (replace encoder with Steps, F2PE Options guide)
- `be2ps/` — BE2PS firmware guides (V12, V18)
- `faucetwo.md`, `be2bt.md` — placeholder pages

**DJDAO** (`docs-djdao/`):
- `taikoller/` — TAIKOLLER Options tutorial (Steps + FaqAccordion)
- `tasoller-plus/` — TASOLLER PLUS tutorials
- `gitaller/`, `divaller/`, `eztoller5/`, `nostroller/`, `ontroller/`, `redlms/` — product subdirectories
- `ezmax-plus.md`, `popoller.md` — single-page entries

### Sidebar Wrapper

A swizzled `DocSidebar` wrapper (`src/theme/DocSidebar/index.tsx`) wraps the default sidebar in a `div.sidebarWrapper` for styling purposes. It is a simple CSS wrapper with `overflow-y: auto; overflow-x: hidden` — no tab switcher logic.

### Navbar

- **Left:** search
- **Right:** DJDAO link, GAMO2 link, Discord, Twitter, 2 placeholder icons, locale dropdown, color mode toggle
- Logo links to `/` (site root)

### i18n (4 locales)

- **Default:** `zh` (Chinese)
- **Additional:** `en`, `ja`, `ko`
- Translation files live in `/i18n/{locale}/` with subdirectories per plugin:
  - `docusaurus-plugin-content-docs/` — main instance
  - `docusaurus-plugin-content-docs-djdao/` — DJDAO instance
  - `docusaurus-plugin-content-docs-gamo2/` — GAMO2 instance
- **Korean (`ko`) is translated from English**, not from Chinese
- When adding new docs, always create all 4 locale versions

### Content Migration (from WordPress SQL)

Source data: WordPress `wp_posts` table exported as SQL. Each article has separate rows per locale (ZH/EN/JA), identified by `post_name` slug and `'ht_kb'` post type.

### Styling

- Global styles in `src/css/custom.css` — extensive customizations including:
  - Infima CSS variable overrides (primary color: `#5fa0ff`)
  - Custom fonts: Poppins, M PLUS Rounded 1c, Noto Sans SC, Noto Sans KR (per-locale)
  - Dark/light theme support via `html[data-theme="dark"]` selectors
  - Tauri-style sidebar with active highlight, vertical lines, icons
  - Navbar icon styles: `.header-right-link`, `.header-discord-link`, `.header-twitter-link`, etc.
  - Custom card/link components: `.reference-link`, `.card-link`, `.card-link-lean`
- Component-scoped styles use CSS Modules (`.module.css` files)

### Key Components

- `src/components/ReferenceLink.tsx` — link card component that auto-resolves paths relative to the active docs plugin instance via `useActivePlugin`
- `src/components/Steps.tsx` / `Steps.module.css` — numbered step component used in tutorials
- `src/components/FaqAccordion.tsx` / `FaqAccordion.module.css` — collapsible FAQ component
- `src/theme/DocSidebar/index.tsx` — simple CSS wrapper div around the default DocSidebar
- `src/theme/MDXComponents.ts` — globally registers `Steps`, `Step`, `FaqAccordion`, `FaqItem`, `ReferenceLink` for use in MDX without imports

### Static Assets

- `/static/img/docs/gamo2/` — GAMO2 documentation images (png)
- `/static/img/docs/` — other documentation images
- `/static/img/social/` — social media icons (Discord, Twitter, GitHub, etc.)
- `/static/img/sidebar/` — sidebar icons (welcome, contributing, start, explore, concepts)

### Key Config Details (docusaurus.config.ts)

- `onBrokenLinks: 'throw'` — build fails on broken links
- `future.v4: true` — Docusaurus v4 compatibility mode enabled
- `trailingSlash: false`
- Prism themes: GitHub (light) / Dracula (dark)
- Search: `@easyops-cn/docusaurus-search-local` indexing all 3 docs instances

### Link Conventions

- Within a docs instance, use **relative paths** in markdown (e.g., `getting-started/quick-start`)
- For cross-instance links, use **absolute paths** (e.g., `/djdao`, `/gamo2`)
- In `<a>` JSX tags, always use absolute paths with the instance prefix (e.g., `/djdao/getting-started/...`)
- `ReferenceLink` component handles path resolution automatically — pass paths relative to the instance root

### Download Button Convention

Use `<a className="button button--primary" href="...">` for all firmware/software download links. Do **not** use markdown `[text](url)` links for downloads.

### Step-by-Step Tutorial Convention

Use `<Steps>` / `<Step title="...">` components (registered globally) for any sequential how-to procedures. These are available in `.mdx` files without importing.
