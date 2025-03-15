// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://icarus.t3rm1n4l.dev',
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "/src/styles/global.css";`,
        },
      },
    },
  },
});
