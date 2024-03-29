// Components
import Link from 'next/link'

// Styles
import styles from './Mobile.module.css'

export default function MobileNavigation({
  handleMobileNavDisplay,
  mobileNavIsActive,
}: {
  handleMobileNavDisplay: () => void
  mobileNavIsActive: boolean
}) {
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
      </ul>
    </nav>
  )
}
