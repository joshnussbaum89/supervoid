import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import sentry from '@sentry/astro'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.supervoid.tv',
  scopedStyleStrategy: 'class',
  integrations: [
    icon(),
    partytown(),
    sitemap({
      lastmod: new Date(),
    }),
    sentry({
      dsn: 'https://7067e3e9ec200c9fc02667a9bc86d558@o4505993173467136.ingest.sentry.io/4505993189588992',
      sourceMapsUploadOptions: {
        project: 'supervoid',
      },
    }),
  ],
})
