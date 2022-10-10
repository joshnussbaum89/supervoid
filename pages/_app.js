// Components, hooks
import { useState } from 'react'
import { useRouter } from 'next/router'

// Styles
import '../styles/globals.css'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  const [overlayDisplayed, setOverlayDisplayed] = useState(false)

  // Track URL path
  const urlPath = useRouter().pathname.replace('/', '')

  return (
    <Component
      {...pageProps}
      pathname={urlPath}
      overlayDisplayed={overlayDisplayed}
      setOverlayDisplayed={setOverlayDisplayed}
    />
  )
}

export default MyApp
