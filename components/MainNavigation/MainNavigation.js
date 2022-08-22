// TODO: create hide/show onScroll logic

import Image from 'next/image'
import Link from 'next/link'
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation'
import Hamburger from '../Hamburger/Hamburger'
import heroBackground from '../../public/images/supervoid-logo-voidstar-stylized.png'
import { navigation, background } from './MainNavigation.module.css'

export default function MainNavigation({
  handleMobileNavDisplay,
  mobileNavIsActive,
}) {
  return (
    <nav className={navigation}>
      <Link href="/">
        <div className={background}>
          <Image
            src={heroBackground}
            title="Supervoid"
            alt="Supervoid Logo Voidstar Stylized"
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
