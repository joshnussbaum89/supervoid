// Components, hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Global/Layout/Layout'

// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [mobileNavOverlayDisplayed, setMobileNavOverlayDisplayed] =
    useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')

      if (mobileNavOverlayDisplayed) {
        body.classList.add('mobile-nav-overlay-active')
      } else {
        body.classList.remove('mobile-nav-overlay-active')
      }
    }
  })

  // Track URL path
  const urlPath = useRouter().pathname.replace('/', '')

  return (
    <>
      <Layout
        mobileNavOverlayDisplayed={mobileNavOverlayDisplayed}
        setMobileNavOverlayDisplayed={setMobileNavOverlayDisplayed}
        pathname={urlPath}
      >
        <Component
          {...pageProps}
          pathname={urlPath}
          mobileNavOverlayDisplayed={mobileNavOverlayDisplayed}
          setMobileNavOverlayDisplayed={setMobileNavOverlayDisplayed}
        />
      </Layout>
    </>
  )
}

export default MyApp
