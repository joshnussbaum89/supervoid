// Components
import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import RentalsDescription from '../components/RentalsPage/Description/Description'

// Animate on Scroll (AOS) library
import AOS from 'aos'

export default function RentalsPage() {
  // Initialize AOS library
  useEffect(() => {
    AOS.init({ once: true })
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
        <meta property="og:title" content="SUPERVOID TV" />
        <meta
          property="og:url"
          // TODO: replace with https://supervoid.tv in PROD
          content="https://supervoid-next-joshnussbaum89.vercel.app"
        />
        <meta
          property="og:description"
          content="Custom media server racks built in house to meet the needs of shows large and small."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          // TODO: replace with https://supervoid.tv in PROD
          content="https://supervoid-next-joshnussbaum89.vercel.app/images/msg-test-pattern.webp"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <title>SUPERVOID: Rentals</title>
      </Head>
      <Header />
      <main>
        <RentalsDescription />
      </main>
    </>
  )
}
