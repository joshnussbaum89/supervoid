{
  /* TODO: 
     1. break out any possible components
     2. create active hamburger logic
     3. create hide/show onScroll logic
  */
}

import Image from 'next/image'
import Link from 'next/link'
import {
  navigation,
  desktopNav,
  background,
  hamburger,
  top,
  bottom,
} from './Navigation.module.css'
import heroBackground from '../../public/images/supervoid-logo-voidstar-stylized.png'

export default function Navigation() {
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
      <ul className={desktopNav}>
        <li>
          <Link href="/#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/rentals">Rentals</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
      </ul>
      <div className={hamburger}>
        <div className={top}></div>
        <div className={bottom}></div>
      </div>
    </nav>
  )
}
