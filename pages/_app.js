// Components, hooks
import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Global/Layout/Layout'

// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [overlayDisplayed, setOverlayDisplayed] = useState(false)

  // Track URL path
  const urlPath = useRouter().pathname.replace('/', '')

  return (
    <>
      <Layout
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
        pathname={urlPath}
      >
        <Component
          {...pageProps}
          pathname={urlPath}
          overlayDisplayed={overlayDisplayed}
          setOverlayDisplayed={setOverlayDisplayed}
        />
      </Layout>
    </>
  )
}

export default MyApp
