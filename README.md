# Website Doctor

A modern, template-driven website platform for small businesses, performers,
creatives, and service professionals.

One shared design system. A small library of polished templates. Safe, guided
editing for clients. Built to scale into a long-term service business.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router 7**
- **Framer Motion** (subtle, purposeful animations only)

No CSS-in-JS, no UI kit, no state management library. Add Firebase/Supabase
only when a template actually needs a backend.

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # eslint
```

## Architecture

```diagram
╭───────────────────╮     ╭───────────────────╮     ╭───────────────────╮
│   data/*.js       │────▶│   templates/      │────▶│   pages/          │
│ (client-editable) │     │  (compose blocks) │     │ (routes)          │
╰───────────────────╯     ╰──────┬────────────╯     ╰───────────────────╯
                                 │ uses
                                 ▼
                          ╭───────────────────╮
                          │   sections/       │
                          │ (Hero, About, …)  │
                          ╰──────┬────────────╯
                                 │ uses
                                 ▼
                          ╭───────────────────╮
                          │   components/     │
                          │ (Container, Btn…) │
                          ╰───────────────────╯
```

### Folders

- `src/components/` — primitive UI: `Container`, `Section`, `Button`, `Nav`, `Footer`.
- `src/sections/` — reusable, opinionated content blocks: `Hero`, `About`, `Services`, `Gallery`, `Contact`.
- `src/templates/` — full sites composed of sections. Each template is wrapped by `SiteShell` which applies the accent color + nav/footer.
- `src/data/` — **the only place clients edit.** Plain JS objects with text, links, images, prices, etc.
- `src/pages/` — top-level routes: `Home` (template gallery) + `TemplatePreview` (`/t/:slug`).
- `src/index.css` — design tokens (colors, fonts, motion preferences). Shared across every template.

### Design tokens

All templates share one design language defined in [`src/index.css`](src/index.css):

- Typography: Inter (UI) + Fraunces (display)
- Neutral palette: ink, soft ink, muted, line, surface, canvas
- Accent: a single brand color per template, swapped via CSS custom properties from each template's data file

This keeps every site visually consistent while letting each client feel personal.

## What clients can / cannot edit

**Clients edit** (in `src/data/<template>.js`):
text, bios, schedules, photos, links, announcements, services, prices,
contact info, social links.

**Clients do not touch**:
layouts, components, design tokens, responsive behavior, SEO structure,
analytics, performance settings, integrations.

This is the core promise of the platform — agency-quality work with
Squarespace-simple maintenance, without the user being able to break it.

## Adding a new template

1. Add a content file in `src/data/<name>.js`.
2. Create `src/templates/<Name>.jsx` that composes sections from `src/sections/`.
3. Register it in [`src/templates/registry.js`](src/templates/registry.js).

It will automatically appear on the home page and be available at `/t/<slug>`.

## Adding a new section

1. Create `src/sections/<Name>.jsx` using `Container` + `Section` + design tokens.
2. Accept a flat props API so it can be driven by data files.
3. Use it inside any template.

## Service model (business layer)

The platform is designed to support three service tiers:

1. **Fully Managed** — we own everything; client just sends updates.
2. **Guided Editing** — client edits content files via a safe interface; we own design + infra.
3. **Growth Partnership** — managed website + SEO + analytics + ongoing strategy.

Recurring revenue lives in care plans, SEO, analytics reporting, integrations,
and redesigns — not in one-time builds.

## Decision filter

Before adding anything, ask:
> Does this make the experience simpler, clearer, faster, safer, or more valuable?

If not, leave it out.
