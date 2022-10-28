// Components
import Header from '../Header/Header'

export default function Layout({
  overlayDisplayed,
  setOverlayDisplayed,
  urlPath,
  children,
}) {
  return (
    <>
      <Header
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
        urlPath={urlPath}
      />
      {children}
    </>
  )
}
