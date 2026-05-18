# nativelens-site

Landing page for [`@reynsu/nativelens-cli`](https://www.npmjs.com/package/@reynsu/nativelens-cli) — E2E testing for React Native with React-fiber-level snapshots and AI diagnosis.

Built with [Astro](https://astro.build) (no framework integration — plain Astro + scoped CSS). Single page, dark-only, no client JS (pure SSG).

## Local dev

```sh
pnpm install
pnpm dev           # http://localhost:4321
pnpm build         # ./dist/ static output, ready for any CDN
pnpm preview       # serve the production build locally
```

## Deploy

Configured for [Vercel](https://vercel.com) (auto-detects Astro, no `vercel.json` needed). To connect:

1. Sign in to vercel.com with the GitHub account that owns this repo.
2. Click "Add new" → "Project" → import `reynsu/nativelens-site`.
3. Vercel detects Astro, sets build = `pnpm build`, output = `dist`. Click deploy.
4. (Optional) Add a custom domain in the Vercel project settings.

After the deploy, update `astro.config.mjs`'s `site` field if the URL differs from `https://nativelens-site.vercel.app`.

## Editing content

Single source: [`src/pages/index.astro`](src/pages/index.astro). Sections are inline (hero, install, features, calibration, footer). Style tokens in [`src/styles/global.css`](src/styles/global.css). Layout scaffold in [`src/layouts/Base.astro`](src/layouts/Base.astro).

## Related repos

- [`reynsu/nativelens`](https://github.com/reynsu/nativelens) — the actual product (cli, probe, dashboard, detox-adapter)
- [`reynsu/nativelens-protocol`](https://github.com/reynsu/nativelens-protocol) — `@reynsu/nativelens-event-protocol` schemas
