// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import vue from '@astrojs/vue';

import svelte from '@astrojs/svelte';

import db from '@astrojs/db';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 1000
      }
    },
  },

  integrations: [react(), mdx(), vue(), svelte(), db()],

  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  },

  adapter: node({
    mode: 'standalone'
  }),

  output: 'server',

  server: {
    host: true,
    port: 3000
  }
});