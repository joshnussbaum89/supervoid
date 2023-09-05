// Hooks
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Components
import MainNavigation from '../MainNavigation/MainNavigation'
import HomePageHeroBackground from '../../HomePage/HeroBackground/HeroBackground'
import ServersPageHeroBackground from '../../ServersPage/HeroBackground/HeroBackground'
import LabsPageHeroBackground from '../../LabsPage/HeroBackground/HeroBackround'
import HomePageHeroInfo from '../../HomePage/HomePageHeroInfo/HomePageHeroInfo'
import PageTitle from '../PageTitle/PageTitle'
import MobileNavigation from '../MobileNavigation/MobileNavigation'

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
}) {
  const [mainNavIsVisible, setMainNavIsVisible] = useState(false)
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)

  // Hide/show main navigation
  useEffect(() => {
    // On scroll
    const hideShowMainNavigation = () => {
      if (window.scrollY > 0) {
        setMainNavIsVisible(true)
      } else {
        setMainNavIsVisible(false)
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
      window.addEventListener('scroll', hideShowMainNavigation)
      window.addEventListener('resize', hideShowMobileNavigation)
      return () => {
        window.removeEventListener('scroll', hideShowMainNavigation)
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {pathname === '' ? (
        <header className={styles.homeHeader}>
          <MainNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            mainNavIsVisible={mainNavIsVisible}
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
          <MainNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            mainNavIsVisible={mainNavIsVisible}
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
          <MainNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            mainNavIsVisible={mainNavIsVisible}
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
          <MainNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            mainNavIsVisible={mainNavIsVisible}
          />
          <MobileNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
        </header>
      ) : pathname === '404' ? (
        <header className={styles.errorHeader}>
          <MainNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            mainNavIsVisible={mainNavIsVisible}
          />
          <MobileNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
        </header>
      ) : pathname === '500' ? (
        <header className={styles.errorHeader}>
          <MainNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
            mainNavIsVisible={mainNavIsVisible}
          />
          <MobileNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
        </header>
      ) : null}
    </motion.div>
  )
}
