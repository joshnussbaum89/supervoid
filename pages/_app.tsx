// Components, hooks
import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Global/Footer/Footer'
import Header from '../components/Global/Header/Header'

// Styles
import '../styles/globals.css'

import type { AppProps } from 'next/app'

// Fonts
const benzin_regular = localFont({ src: '../public/fonts/Benzin-Regular.woff2' })
const benzin_bold = localFont({ src: '../public/fonts/Benzin-ExtraBold.woff2' })

export default function App({ Component, pageProps }: AppProps) {
  const [mobileNavOverlayDisplayed, setMobileNavOverlayDisplayed] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')

      if (mobileNavOverlayDisplayed) {
        body?.classList.add('overlay-active')
      } else {
        body?.classList.remove('overlay-active')
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
      <Header
        mobileNavOverlayDisplayed={mobileNavOverlayDisplayed}
        setMobileNavOverlayDisplayed={setMobileNavOverlayDisplayed}
        pathname={urlPath}
      />
      <Component
        {...pageProps}
        pathname={urlPath}
        mobileNavOverlayDisplayed={mobileNavOverlayDisplayed}
        setMobileNavOverlayDisplayed={setMobileNavOverlayDisplayed}
      />
      <Footer />
    </>
  )
}
