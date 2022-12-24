// Hooks
import { useEffect } from 'react'
import Head from 'next/head'

// Components
import Header from '../components/Header/Header'
import RentalsDescription from '../components/ServerPage/Description/Description'
import ServerSpecs from '../components/ServerPage/ServerSpecs/ServerSpecs'
import Footer from '../components/ServerPage/Footer/Footer'

export default function ServerPage({
  pathname,
  overlayDisplayed,
  setOverlayDisplayed,
}) {
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
        <meta property="og:title" content="SUPERVOID TV: Rentals" />
        <meta property="og:url" content="https://supervoid.tv/rentals" />
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
        <title>SUPERVOID: Rentals</title>
      </Head>
      <Header
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
      />
      <main>
        <RentalsDescription />
        <ServerSpecs />
      </main>
      <Footer pathname={pathname} />
    </>
  )
}
