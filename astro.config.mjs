import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.supervoid.tv',
  scopedStyleStrategy: 'class',
  integrations: [
    icon(),
    sitemap({
      lastmod: new Date(),
    }),
  ],
  output: 'hybrid',
  adapter: netlify({
    imageCDN: false,
    cacheOnDemandPages: true,
  }),
})
