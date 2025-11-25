import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Use the Vite-aware preprocessors (supports TypeScript, PostCSS, etc.)
  preprocess: vitePreprocess(),

  kit: {
    // Base path for GitHub Pages. Set to '/<repo>' for project pages.
    paths: {
      base: '/rhit-schielaj.github.io'
    },
    // Use the static adapter and configure output directories
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    // Prerender configuration: include discoverable routes and handle HTTP
    // errors during prerendering. Missing pages (404) will be skipped so the
    // build doesn't fail when static HTML files are linked from the site root.
    prerender: {
      entries: ['*'],
      handleHttpError: ({ status }) => (status === 404 ? 'continue' : 'fail')
    }
  }
};

export default config;
