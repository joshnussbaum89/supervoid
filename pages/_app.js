// Components, hooks
import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Global/Layout/Layout'

// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [overlayDisplayed, setOverlayDisplayed] = useState(false)

  // Track URL path
  const { pathname } = useRouter()

  return (
    <>
      <Layout
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
        urlPath={pathname}
      >
        <Component
          {...pageProps}
          urlPath={pathname}
          overlayDisplayed={overlayDisplayed}
          setOverlayDisplayed={setOverlayDisplayed}
        />
      </Layout>
    </>
  )
}

export default MyApp
