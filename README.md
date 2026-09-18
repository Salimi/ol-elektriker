# olelektriker.se

Website for OL Elektriker, an electrician company in Stockholm.

## Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- shadcn/ui

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deployment

Every push to `main` automatically builds and deploys to Cloudflare Workers via `.github/workflows/deploy.yml`.
