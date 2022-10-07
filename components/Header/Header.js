// Components
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainNavigation from '../MainNavigation/MainNavigation'
import HomePageHeroBackground from '../HeroBackground/HeroBackground'
import RentalsPageHeroBackground from '../RentalsPage/HeroBackground/HeroBackround'
import HomePageHeroInfo from '../HomePageHeroInfo/HomePageHeroInfo'
import PageTitle from '../PageTitle/PageTitle'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import PromoReel from '../PromoReel/PromoReel'

// Styles
import styles from './Header.module.css'

// TODO: Should this be dynamic for every page?
export default function Header() {
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

  // Hide/show mobile navigation + promo reel
  const handleMobileNavDisplay = () => setMobileNavIsActive(!mobileNavIsActive)
  const handleReelDisplay = () => setReelIsActive(!reelIsActive)

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
      <PromoReel
        handleReelDisplay={handleReelDisplay}
        reelIsActive={reelIsActive}
      />
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
