// Hooks
import { useEffect, useState } from 'react'

// Components
import HomePageHeroBackground from '../../HomePage/HeroBackground/HeroBackground'
import HomePageHeroInfo from '../../HomePage/HomePageHeroInfo/HomePageHeroInfo'
import LabsPageHeroBackground from '../../LabsPage/HeroBackground/HeroBackround'
import ServersPageHeroBackground from '../../ServersPage/HeroBackground/HeroBackground'
import MobileNavigation from '../Navigation/Mobile/Mobile'
import Navigation from '../Navigation/Navigation'
import PageTitle from '../PageTitle/PageTitle'

// Styles
import styles from './Header.module.css'

/**
 * Dynamic header for each page (tracking URL path)
 *
 * @param {boolean} mobileNavOverlayDisplayed
 * @param {function} setMobileNavOverlayDisplayed
 * @param {string} pathname
 * @returns correct header depending on page
 */
export default function Header({
  mobileNavOverlayDisplayed,
  setMobileNavOverlayDisplayed,
  pathname,
}: {
  mobileNavOverlayDisplayed: boolean
  setMobileNavOverlayDisplayed: React.Dispatch<React.SetStateAction<boolean>>
  pathname: string
}) {
  const [navIsVisible, setNavIsVisible] = useState(false)
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)

  // Hide/show main navigation
  useEffect(() => {
    // On scroll
    const hideShowNavigation = () => {
      if (window.scrollY > 0) {
        setNavIsVisible(true)
      } else {
        setNavIsVisible(false)
      }
    }

    // On resize
    const hideShowMobileNavigation = () => {
      if (window.innerWidth > 768) {
        setMobileNavIsActive(false)
        setMobileNavOverlayDisplayed(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', hideShowNavigation)
      window.addEventListener('resize', hideShowMobileNavigation)
      return () => {
        window.removeEventListener('scroll', hideShowNavigation)
        window.addEventListener('resize', hideShowMobileNavigation)
      }
    }
  }, [setMobileNavOverlayDisplayed])

  // Hide/show mobile navigation
  const handleMobileNavDisplay = () => {
    setMobileNavIsActive(!mobileNavIsActive)
    setMobileNavOverlayDisplayed(!mobileNavOverlayDisplayed)
  }

  // Determine header styling based on currently displayed page
  return (
    <>
      {pathname === '' ? (
        <header className={styles.homeHeader}>
          <Navigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            navIsVisible={navIsVisible}
          />
          <HomePageHeroInfo />
          <HomePageHeroBackground />
          <MobileNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
        </header>
      ) : pathname === 'servers' ? (
        <header className={styles.serverHeader}>
          <Navigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            navIsVisible={navIsVisible}
          />
          <ServersPageHeroBackground />
          <PageTitle title="Servers" />
          <MobileNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
        </header>
      ) : pathname === 'labs' ? (
        <header className={styles.labsHeader}>
          <Navigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            navIsVisible={navIsVisible}
          />
          <LabsPageHeroBackground />
          <PageTitle
            title="Labs"
            body="Insights into our creative process for our current projects"
          />
          <MobileNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
        </header>
      ) : pathname === 'labs/[slug]' ? (
        <header className={styles.singlePostHeader}>
          <Navigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            navIsVisible={navIsVisible}
          />
          <MobileNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
        </header>
      ) : pathname === '404' || pathname === '500' ? (
        <header className={styles.errorHeader}>
          <Navigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            navIsVisible={navIsVisible}
          />
          <MobileNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
        </header>
      ) : null}
    </>
  )
}
