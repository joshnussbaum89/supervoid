import netlify from '@astrojs/netlify'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.supervoid.tv',
  output: 'hybrid',
  scopedStyleStrategy: 'class',
  build: {
    inlineStylesheets: 'always',
  },
  adapter: netlify({
    imageCDN: false,
    cacheOnDemandPages: true,
  }),
  integrations: [
    icon(),
    partytown(),
    sitemap({
      lastmod: new Date(),
    }),
  ],
  devToolbar: {
    enabled: false,
  },
})
