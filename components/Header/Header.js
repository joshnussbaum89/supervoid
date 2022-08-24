import { useRouter } from 'next/router'
import { useState } from 'react'

import MainNavigation from '../MainNavigation/MainNavigation'
import HomePageHeroBackground from '../HomePageHeroBackground/HomePageHeroBackground'
import HomePageHeroInfo from '../HomePageHeroInfo/HomePageHeroInfo'
import PageTitle from '../PageTitle/PageTitle'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import PromoReel from '../PromoReel/PromoReel'

import { homeHeader, rentalsHeader } from './Header.module.css'

export default function Header() {
  const { pathname } = useRouter()
  
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)
  const [reelIsActive, setReelIsActive] = useState(false)

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
