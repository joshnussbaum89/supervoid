// Components
import Link from 'next/link'

// Styles
import styles from './MobileNavigation.module.css'

export default function MobileNavigation({
  handleMobileNavDisplay,
  mobileNavIsActive,
}) {
  return (
    <nav
      className={
        mobileNavIsActive
          ? `${styles.navigation} ${styles.active}`
          : `${styles.navigation}`
      }
    >
      <ul>
        <li onClick={handleMobileNavDisplay}>
          <Link href="/#portfolio">Portfolio</Link>
        </li>
        <li onClick={handleMobileNavDisplay}>
          <Link href="/rentals">Rentals</Link>
        </li>
        <li onClick={handleMobileNavDisplay}>
          <Link href="/#about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
