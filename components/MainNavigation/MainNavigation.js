import Image from 'next/image'
import Link from 'next/link'
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation'
import Hamburger from '../Hamburger/Hamburger'
import siteLogo from '../../public/images/supervoid-logo-voidstar-stylized.png'
import { navigation, logo, show } from './MainNavigation.module.css'

export default function MainNavigation({
  mainNavIsVisible,
  mobileNavIsActive,
  handleMobileNavDisplay,
}) {
  return (
    <nav className={mainNavIsVisible ? `${navigation} ${show}` : navigation}>
      <Link href="/">
        <div
          onClick={mobileNavIsActive ? handleMobileNavDisplay : null}
          className={logo}
        >
          <Image
            src={siteLogo}
            title="Supervoid"
            alt="Supervoid Logo Voidstar Stylized"
            priority
          />
        </div>
      </Link>
      <DesktopNavigation />
      <Hamburger
        handleMobileNavDisplay={handleMobileNavDisplay}
        mobileNavIsActive={mobileNavIsActive}
      />
    </nav>
  )
}
