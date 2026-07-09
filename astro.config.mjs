import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://rentar.com',
  output: 'static',
  devToolbar: { enabled: false },
  adapter: cloudflare()
});