# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nanos World documentation site built with **Docusaurus 3.9.2** and **React 19**. Written in TypeScript. Deployed to GitHub Pages at https://docs.vpietc.com.

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

### Docs as Root

Docs are served at the site root (`routeBasePath: '/'`), not under `/docs/`. This means doc pages map directly to top-level URLs.

### i18n (4 locales)

- **Default:** `zh` (Chinese)
- **Additional:** `en`, `ja`, `ko`
- Translation files live in `/i18n/{locale}/` with subdirectories per plugin
- Crowdin integration for community translations (nanos-world-docs project)
- `_redirects` file handles SPA routing for non-default locales

### Sidebar

Auto-generated from `/docs/` directory structure (configured in `sidebars.ts`).

### Styling

- Global styles in `src/css/custom.css` — extensive customizations including:
  - Infima CSS variable overrides (primary color: `#5fa0ff`)
  - Custom fonts: Poppins + M PLUS Rounded 1c (loaded via `src/css/poppins.css` and `src/css/m-plus-rounded-1c.css`)
  - Dark/light theme support via `html[data-theme="dark"]` selectors
  - Custom CSS classes for scripting docs: `.authority-availability`, `.native-type`, `.efficiency-type`
  - Custom card/link components: `.reference-link`, `.card-link`, `.card-link-lean`
- Component-scoped styles use CSS Modules (`.module.css` files)

### Static Assets

- `/static/img/docs/` — documentation images (webp format)
- `/static/img/social/` — social media icons
- `/static/img/scripting/` — scripting API icons (authority, native types, efficiency indicators)

### Key Config Details (docusaurus.config.ts)

- `onBrokenLinks: 'throw'` — build fails on broken links
- `future.v4: true` — Docusaurus v4 compatibility mode enabled
- `trailingSlash: false`
- Prism themes: GitHub (light) / Dracula (dark)
- Navbar logo links to https://nanos-world.com/ (external)
