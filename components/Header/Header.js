import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainNavigation from '../MainNavigation/MainNavigation'
import HomePageHeroBackground from '../HomePageHeroBackground/HomePageHeroBackground'
import HomePageHeroInfo from '../HomePageHeroInfo/HomePageHeroInfo'
import PageTitle from '../PageTitle/PageTitle'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import PromoReel from '../PromoReel/PromoReel'
import { homeHeader, rentalsHeader } from './Header.module.css'

export default function Header() {
  // Current user path
  const { pathname } = useRouter()

  // State
  const [mainNavIsVisible, setMainNavIsVisible] = useState(false)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)
  const [reelIsActive, setReelIsActive] = useState(false)

  // Hide/show main navigation
  useEffect(() => {
    const hideShowMainNavigation = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > previousScrollPosition) {
          setMainNavIsVisible(false)
        } else {
          setMainNavIsVisible(true)
        }

        setPreviousScrollPosition(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', hideShowMainNavigation)
      return () => {
        window.removeEventListener('scroll', hideShowMainNavigation)
      }
    }
  }, [previousScrollPosition])

  // Hide/show mobile navigation + promo reel
  const handleMobileNavDisplay = () => setMobileNavIsActive(!mobileNavIsActive)
  const handleReelDisplay = () => setReelIsActive(!reelIsActive)

  // Determine header styling based on currently displayed page
  const navigationToDisplay =
    pathname === '/' ? (
      <header className={homeHeader}>
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
      <header className={rentalsHeader}>
        <MainNavigation
          handleMobileNavDisplay={handleMobileNavDisplay}
          mobileNavIsActive={mobileNavIsActive}
          mainNavIsVisible={mainNavIsVisible}
        />
        <PageTitle title="Rentals" />
        <MobileNavigation
          handleMobileNavDisplay={handleMobileNavDisplay}
          mobileNavIsActive={mobileNavIsActive}
        />
      </header>
    ) : null

  return <>{navigationToDisplay}</>
}
