import Link from 'next/link'
import { navigation, active } from './MobileNavigation.module.css'

export default function MobileNavigation({
  handleMobileNavDisplay,
  mobileNavIsActive,
}) {
  return (
    <nav
      className={
        mobileNavIsActive ? `${navigation} ${active}` : `${navigation}`
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
