// Components
import Image from 'next/image'
import Link from 'next/link'
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation'
import Hamburger from '../Hamburger/Hamburger'

// Styles
import styles from './MainNavigation.module.css'
import siteLogo from '../../public/images/supervoid-logo-voidstar-stylized.png'

export default function MainNavigation({
  mainNavIsVisible,
  mobileNavIsActive,
  handleMobileNavDisplay,
}) {
  return (
    <nav
      className={
        mainNavIsVisible
          ? `${styles.navigation} ${styles.show}`
          : styles.navigation
      }
    >
      <Link href="/">
        <div
          onClick={mobileNavIsActive ? handleMobileNavDisplay : null}
          className={styles.logo}
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
