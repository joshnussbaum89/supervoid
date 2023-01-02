// Components, hooks
import { useState } from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Footer/Footer'

// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [overlayDisplayed, setOverlayDisplayed] = useState(false)

  // Track URL path
  const urlPath = useRouter().pathname.replace('/', '')

  return (
    <>
      <Component
        {...pageProps}
        pathname={urlPath}
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
      />
      <Footer />
    </>
  )
}

export default MyApp
