// Components, hooks
import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Global/Header/Header'

// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [overlayDisplayed, setOverlayDisplayed] = useState(false)

  // Track URL path
  const { pathname } = useRouter()

  return (
    <>
      <Header
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
        urlPath={pathname}
      />
      <Component
        {...pageProps}
        urlPath={pathname}
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
      />
    </>
  )
}

export default MyApp
