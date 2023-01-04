// Hooks
import { useEffect } from 'react'
import Head from 'next/head'

// Components
import RentalsDescription from '../components/ServersPage/Description/Description'
import ServerSpecs from '../components/ServersPage/ServerSpecs/ServerSpecs'
import Contact from '../components/ServersPage/Contact/Contact'

/**
 * Servers Page
 * @param {string} pathname
 * @param {boolean} overlayDisplayed
 */
export default function ServersPage({ pathname, overlayDisplayed }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')

      // Remove scrolling when modal overlay is shown
      if (overlayDisplayed) {
        body.classList.add('overlay-active')
      } else {
        body.classList.remove('overlay-active')
      }
    }
  })

  return (
    <>
      {/* Head tag for this page only */}
      <Head>
        <meta
          name="description"
          content="Philadelphia creative team specializing in music videos, stage visuals, documentaries and more"
        />
        <meta
          name="keywords"
          content="lighting, music, video, concerts, film, design, animation, philadelphia"
        />
        <meta property="og:title" content="SUPERVOID TV: Servers" />
        <meta property="og:url" content="https://supervoid.tv/servers" />
        <meta
          property="og:description"
          content="Custom media server racks built in house to meet the needs of shows large and small."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://supervoid.tv/images/msg-test-pattern.webp"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <title>SUPERVOID: Servers</title>
      </Head>
      <main>
        <RentalsDescription />
        <ServerSpecs />
      </main>
      <Contact pathname={pathname} />
    </>
  )
}
