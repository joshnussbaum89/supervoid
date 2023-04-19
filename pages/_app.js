// Components, hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import localFont from 'next/font/local'
import Layout from '../components/Global/Layout/Layout'

// Styles
import '../styles/globals.css'

// Fonts
const benzin_regular = localFont({ src: '../public/fonts/benzin_regular.ttf' })
const benzin_bold = localFont({ src: '../public/fonts/benzin_bold.ttf' })

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
  }, [mobileNavOverlayDisplayed])

  // Track URL path
  const urlPath = useRouter().pathname.replace('/', '')

  return (
    <>
      <style jsx global>{`
        :root {
          --font-supervoid-body: ${benzin_regular.style.fontFamily};
          --font-supervoid-header: ${benzin_bold.style.fontFamily};
        }

        body {
          font-family: var(--font-supervoid-body);
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: var(--font-supervoid-header);
        }
      `}</style>
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
