// Components
import Image from 'next/image'
import Link from 'next/link'
import DesktopNavigation from './Desktop/Desktop'
import Hamburger from './Hamburger/Hamburger'

// Styles
import styles from './Navigation.module.css'
import siteLogo from '../../../public/images/supervoid-logo-voidstar-stylized.webp'

export default function MainNavigation({
  navIsVisible,
  mobileNavIsActive,
  handleMobileNavDisplay,
}: {
  navIsVisible: boolean
  mobileNavIsActive: boolean
  handleMobileNavDisplay: () => void
}) {
  return (
    <nav className={navIsVisible ? `${styles.navigation} ${styles.show}` : styles.navigation}>
      <Link href="/">
        <div
          onClick={mobileNavIsActive ? handleMobileNavDisplay : undefined}
          className={styles.logo}
        >
          <Image
            src={siteLogo}
            title="Supervoid"
            sizes="(min-width: 768px) 10rem, 8rem"
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
