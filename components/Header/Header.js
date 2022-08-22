// TODO: show mobile overlay when mobileNavIsActive === true

import { useRouter } from 'next/router'
import { useState } from 'react'
import MainNavigation from '../MainNavigation/MainNavigation'
import HomePageHeroBackground from '../HomePageHeroBackground/HomePageHeroBackground'
import HomePageHeroInfo from '../HomePageHeroInfo/HomePageHeroInfo'
import { homeHeader, rentalsHeader } from './Header.module.css'
import PageTitle from '../PageTitle/PageTitle'

export default function Header() {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false)
  const { pathname } = useRouter()

  const handleMobileNavDisplay = () => setMobileNavIsActive(!mobileNavIsActive)

  return (
    <>
      {pathname === '/' ? (
        <header className={homeHeader}>
          <MainNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
          <HomePageHeroBackground />
          <HomePageHeroInfo />
        </header>
      ) : pathname === '/rentals' ? (
        <header className={rentalsHeader}>
          <MainNavigation
            handleMobileNavDisplay={handleMobileNavDisplay}
            mobileNavIsActive={mobileNavIsActive}
          />
          <PageTitle title="Rentals" />
        </header>
      ) : null}
    </>
  )
}
