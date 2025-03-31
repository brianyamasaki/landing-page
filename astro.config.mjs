import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react(), 
    starlight({
      title: 'Yamasaki Design Landing'
    })
  ]
});