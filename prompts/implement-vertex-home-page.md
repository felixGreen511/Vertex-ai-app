# Implement Vertex Home Page

## Goal

Implement the Vertex home page from `design/vertex-home.png` as the first screen of the existing Next.js app.

The result should replace the default starter page with a production-style static home page that closely matches the provided desktop UI and adapts cleanly down to mobile.

## Skills And Docs Read

- No named project skill was required for this UI-only request.
- Read the project instructions in `AGENTS.md` from the user-provided context.
- Read the local Next.js 16 docs under `node_modules/next/dist/docs/`:
  - App Router pages and layouts.
  - Global CSS and Tailwind setup.
  - `next/font/google` guidance for self-hosted Google fonts.
  - Image guidance, including Next 16 `preload` replacing deprecated `priority`.

## Code Inspected

- `package.json`
  - Next.js `16.3.3`, React `19.2.8`, Tailwind `4`.
  - Scripts: `dev`, `build`, `lint`.
- `app/page.tsx`
  - Currently the default Create Next App starter page.
- `app/layout.tsx`
  - Currently loads Geist and Geist Mono via `next/font/google`.
  - Uses `LayoutProps<"/">`.
  - Metadata is still Create Next App defaults.
- `app/globals.css`
  - Imports Tailwind with `@import "tailwindcss";`.
  - Defines basic background/foreground variables.
  - Maps Tailwind theme fonts to Geist variables.
- `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`
  - Standard starter config, no extra app conventions found.

## Decisions And Assumptions

- Build this as a static Server Component in `app/page.tsx`; no client state or backend integration is needed.
- Keep the implementation small and avoid adding dependencies.
- Use inline SVG/icon markup only where no icon library is installed.
- Use text and local CSS shapes for course icons instead of adding image assets.
- Use `next/font/google` for `Inter` and `Playfair_Display` to match the design system and keep fonts self-hosted.
- Replace Geist font variables in the layout with Vertex font variables.
- Update metadata to Vertex-specific title and description.
- Match the desktop UI closely:
  - Cream page background with subtle diagonal side hatch.
  - Centered max-width app shell.
  - Header with Vertex mark, nav links, notification icon, and avatar.
  - Large hero with pill label, Playfair headline, copy, orange CTA, and search bar.
  - All Courses section with three cards.
  - Bottom update message and decorative orange skyline blocks.
- Make mobile responsive by stacking nav/content/cards and keeping touch targets usable.
- Links may point to future routes (`/courses`, `/my-learning`, `/search`) even if those routes do not exist yet.

## Files To Touch

- `app/layout.tsx`
  - Swap fonts to Inter and Playfair Display.
  - Update metadata.
- `app/globals.css`
  - Add Vertex design tokens, base styles, utility classes, and body background.
- `app/page.tsx`
  - Replace starter content with the home page UI.

## Requirements

- Reproduce the attached desktop UI as closely as possible with the current stack.
- Preserve the project boundary: no Sanity, Clerk, PostHog, MCP, LLM, or progress code for this presentational page.
- Keep all browser-visible content static and token-free.
- Use accessible labels for icon-only controls.
- Do not use deprecated Next 16 `Image priority`; use `preload` if an optimized image is introduced.
- Avoid dark-mode inversion from the starter template; the design is light.
- Keep text fitting across mobile and desktop.
- Do not add unrelated pages or overbuild data fetching.

## Security Considerations

- No environment variables or secrets are introduced.
- No client-side token, API call, MCP call, LLM call, or write path is introduced.
- Links are internal routes only.

## Acceptance Criteria

- `/` renders the Vertex home page, not the Next starter template.
- Desktop at the reference aspect ratio visually matches `design/vertex-home.png`:
  - Header spacing and brand placement are close.
  - Hero typography, CTA, search bar, and course cards align with the mock.
  - Colors, borders, radius, and shadows reflect the Vertex design system.
- Mobile width stacks the cards, avoids overlap, and keeps navigation usable.
- TypeScript and lint pass.
- Production build passes because route, layout, and global style files changed.
- Dev server starts successfully and the page is available locally.

## Checks To Run

1. `npm run lint`
2. `npm run build`
3. `npm run dev`

## Manual Test Steps

1. Open the local dev server URL.
2. Confirm the header shows the Vertex logo, Courses, My Learning, notification icon, and avatar.
3. Confirm the hero reads `Search your learning in plain English.`
4. Confirm the search bar placeholder reads `Ask anything about your learning...`.
5. Confirm the All Courses section shows:
   - Next.js for Production
   - Docker Essentials
   - TypeScript Deep Dive
6. Resize to a mobile viewport and confirm there is no text overlap or horizontal scroll.
7. Click `Explore Courses` and `View all courses`; both should attempt to navigate to `/courses`.
