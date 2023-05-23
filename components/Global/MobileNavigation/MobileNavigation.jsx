// Components
import Link from 'next/link'

// Styles
import styles from './MobileNavigation.module.css'

export default function MobileNavigation({ handleMobileNavDisplay, mobileNavIsActive }) {
  return (
    <nav
      className={
        mobileNavIsActive ? `${styles.navigation} ${styles.active}` : `${styles.navigation}`
      }
    >
      <ul>
        <li>
          <Link href="/#work" onClick={handleMobileNavDisplay}>
            Work
          </Link>
        </li>
        <li>
          <Link href="/#about" onClick={handleMobileNavDisplay}>
            About
          </Link>
        </li>
        <li>
          <Link href="/servers" onClick={handleMobileNavDisplay}>
            servers
          </Link>
        </li>
        {/* <li>
          <Link href="/labs" onClick={handleMobileNavDisplay}>
            labs
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}
