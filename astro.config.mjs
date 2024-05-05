import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import Swiper from 'swiper';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});