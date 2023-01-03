// Components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout({
  overlayDisplayed,
  setOverlayDisplayed,
  pathname,
  children,
}) {
  return (
    <>
      <Header
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
        pathname={pathname}
      />
      {children}
      <Footer />
    </>
  )
}
