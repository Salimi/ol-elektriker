# AGENTS.md — ol-elektriker (olelektriker.se)

## What this is
Website for OL Elektriker, an electrician company (authorized electrical installer) in Stockholm → **https://olelektriker.se**

## Stack
- React 18 + Vite 5 + TypeScript + Tailwind CSS + shadcn/ui

## Infrastructure
- **GitHub** (`Salimi/ol-elektriker`) = source of truth
- **Hosting: Cloudflare Workers with Static Assets** via Cloudflare's Git integration (Workers Builds). Every push to `main` is imported by Cloudflare, which runs `npm run build` + `npx wrangler deploy` automatically.
- **More Code dispatcher** triggers `.github/workflows/code-agent.yml` in this repo for chat-driven edits.

## Rules for agents
- NEVER modify: `.github/workflows/*`, any `.env` file, `wrangler.json`
- `npm run build` MUST pass before commit/push
- Minimal, focused edits; match existing design
- Commit messages: short, imperative, e.g. `Contact: update phone number`

## Secrets (locations only — values are never in this repo)
- `KIMI_API_KEY` → GitHub repo Settings → Secrets → Actions (used by code-agent workflow)

## Key files
- `src/components/About.tsx` — about section
- `src/components/Contact.tsx` — contact section (form, phone, map)
- `src/components/Hero.tsx` — hero section
- `public/uploads/` — static image assets
