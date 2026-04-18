# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview production build locally

## Stack

Astro 5 + Tailwind CSS 4 (via `@tailwindcss/vite` plugin) + TypeScript. No framework islands (React/Vue) — all `.astro` components.

## Architecture

Single-page portfolio (`src/pages/index.astro`) composing section components in order: Hero → About → TechStack → Projects → Timeline → Contact → Footer.

**Data layer** (`src/data/`): typed TS files — `projects.ts`, `skills.ts`, `timeline.ts`, `icons.ts`. Components import data directly. No API routes, no CMS.

**Styling**: Tailwind 4 with custom theme tokens in `src/styles/app.css` using `@theme {}`. Custom color palette (`primary-50` through `primary-900`, `surface-*`, `dark-*`). Dark mode via `.dark` class on `<html>`, toggled by `ThemeToggle.astro` with View Transitions API circle animation (fallback overlay for unsupported browsers). FOUC prevented by inline `<script>` in `Layout.astro` head that reads `localStorage` + `prefers-color-scheme`.

**Icons**: `Icon.astro` maps string names to inline SVG strings. `icons.ts` has tech stack SVGs. External skill icons pulled from `skillicons.dev`.

**Images**: Astro `<Image />` component for optimized local images. External image domains whitelisted in `astro.config.mjs`: `ghchart.rshah.org`, `skillicons.dev`.

**Animations**: CSS keyframes (`float`, `pulse-ring`, `bounce-slow`, `fade-up`) in `app.css`. Scroll reveal via IntersectionObserver in `Layout.astro` — elements with `.reveal` class get `.visible` on intersect. Header scroll effect (backdrop blur + shadow) via vanilla JS in `Header.astro`.

**Mobile nav**: hamburger toggle in `Header.astro` using `max-h-0`/`max-h-96` transition, closes on link click.

## Conventions

- Bento grid layout for projects — first item spans 2 cols on `lg:` (`ProjectCard.astro` receives `className` prop)
- `skillNames` lookup record duplicated in `ProjectCard.astro` and `Timeline.astro` for tech badge display names
- All external links use `target="_blank" rel="noopener noreferrer"`
- Custom SVG cursor defined in `app.css` (does not adapt to dark mode — hardcoded colors)
