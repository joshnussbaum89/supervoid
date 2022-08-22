// TODO: show mobile overlay when mobileNavIsActive === true

import { useRouter } from 'next/router'
import { useState } from 'react'
import MainNavigation from '../MainNavigation/MainNavigation'
import HomePageHeroBackground from '../HomePageHeroBackground/HomePageHeroBackground'
import HomePageHeroInfo from '../HomePageHeroInfo/HomePageHeroInfo'
import { homeHeader, rentalsHeader } from './Header.module.css'
import PageTitle from '../PageTitle/PageTitle'
import MobileNavigation from '../MobileNavigation/MobileNavigation'

export default function Header() {
  const { pathname } = useRouter()
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)

  // Hide/show mobile navigation overlay
  const handleMobileNavDisplay = () => setMobileNavIsActive(!mobileNavIsActive)

  // Determine header styling based on currently displayed page
  const navigationToDisplay =
    pathname === '/' ? (
      <header className={homeHeader}>
        <MainNavigation
          handleMobileNavDisplay={handleMobileNavDisplay}
          mobileNavIsActive={mobileNavIsActive}
        />
        <HomePageHeroInfo />
        <HomePageHeroBackground />
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
