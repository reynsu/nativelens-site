// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// `site` is the canonical URL of the deployed landing page. Used by the
// Base layout to emit <link rel="canonical"> and Open Graph URLs. Update
// here once the production domain is connected via Vercel (or wherever
// the page ends up living).
export default defineConfig({
  site: 'https://nativelens-site.vercel.app',
});
