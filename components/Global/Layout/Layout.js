// Components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout({
  mobileNavOverlayDisplayed,
  setMobileNavOverlayDisplayed,
  pathname,
  children,
}) {
  return (
    <>
      <Header
        mobileNavOverlayDisplayed={mobileNavOverlayDisplayed}
        setMobileNavOverlayDisplayed={setMobileNavOverlayDisplayed}
        pathname={pathname}
      />
      {children}
      <Footer />
    </>
  )
}
