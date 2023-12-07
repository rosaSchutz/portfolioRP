import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [astroI18next(), tailwind()],
  target: "_blank",
});