// Components, hooks
import { useState } from 'react'
import { useRouter } from 'next/router'

// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [overlayDisplayed, setOverlayDisplayed] = useState(false)

  // Track URL path
  const { pathname } = useRouter()

  return (
    <Component
      {...pageProps}
      urlPath={pathname}
      overlayDisplayed={overlayDisplayed}
      setOverlayDisplayed={setOverlayDisplayed}
    />
  )
}

export default MyApp
