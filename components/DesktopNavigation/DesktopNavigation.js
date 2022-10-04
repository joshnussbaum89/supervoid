// Components
import Link from 'next/link'

// Styles
import styles from './DesktopNavigation.module.css'

export default function DesktopNavigation() {
  return (
    <ul className={styles.desktopNav}>
      <li>
        <Link href="/#work">Work</Link>
      </li>
      <li>
        <Link href="/#about">About</Link>
      </li>
      <li>
        <Link href="/rentals">Rentals</Link>
      </li>
    </ul>
  )
}
