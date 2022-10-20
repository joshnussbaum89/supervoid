// Hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// Components
import MainNavigation from '../MainNavigation/MainNavigation'
import HomePageHeroBackground from '../HeroBackground/HeroBackground'
import RentalsPageHeroBackground from '../RentalsPage/HeroBackground/HeroBackround'
import HomePageHeroInfo from '../HomePageHeroInfo/HomePageHeroInfo'
import PageTitle from '../PageTitle/PageTitle'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
const PromoReel = dynamic(() => import('../PromoReel/PromoReel'), {
  // loading: () => <h2>Loading...</h2>,
  ssr: false,
})

// Styles
import styles from './Header.module.css'

// Dynamic for each page (tracking URL path)
export default function Header({ overlayDisplayed, setOverlayDisplayed }) {
  const [mainNavIsVisible, setMainNavIsVisible] = useState(false)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)
  const [reelIsActive, setReelIsActive] = useState(false)

  // Current user path
  const { pathname } = useRouter()

  // Hide/show main navigation
  useEffect(() => {
    // On scroll
    const hideShowMainNavigation = () => {
      if (window.scrollY > 0) {
        setMainNavIsVisible(true)
      } else {
        setMainNavIsVisible(false)
      }
      setPreviousScrollPosition(window.scrollY)
    }

    // On resize
    const hideShowMobileNavigation = () => {
      if (window.innerWidth > 768) {
        setMobileNavIsActive(false)
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
  }, [previousScrollPosition])

  // Hide/show mobile navigation
  const handleMobileNavDisplay = () => {
    setMobileNavIsActive(!mobileNavIsActive)
    setOverlayDisplayed(!overlayDisplayed)
  }

  // Hide/show promo reel
  const handleReelDisplay = () => {
    setReelIsActive(!reelIsActive)
    setOverlayDisplayed(!overlayDisplayed)
  }

  // Determine header styling based on currently displayed page
  return pathname === '/' ? (
    <header className={styles.homeHeader}>
      <MainNavigation
        handleMobileNavDisplay={handleMobileNavDisplay}
        mobileNavIsActive={mobileNavIsActive}
        mainNavIsVisible={mainNavIsVisible}
      />
      <HomePageHeroInfo handleReelDisplay={handleReelDisplay} />
      <HomePageHeroBackground />
      {reelIsActive && (
        <PromoReel
          handleReelDisplay={handleReelDisplay}
          reelIsActive={reelIsActive}
        />
      )}
      <MobileNavigation
        handleMobileNavDisplay={handleMobileNavDisplay}
        mobileNavIsActive={mobileNavIsActive}
      />
    </header>
  ) : pathname === '/rentals' ? (
    <header className={styles.rentalsHeader}>
      <MainNavigation
        handleMobileNavDisplay={handleMobileNavDisplay}
        mobileNavIsActive={mobileNavIsActive}
        mainNavIsVisible={mainNavIsVisible}
      />
      <RentalsPageHeroBackground />
      <PageTitle title="Rentals" />
      <MobileNavigation
        handleMobileNavDisplay={handleMobileNavDisplay}
        mobileNavIsActive={mobileNavIsActive}
      />
    </header>
  ) : null
}
