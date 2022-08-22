/* TODO: 
  1. create active hamburger logic
  2. create hide/show onScroll logic
*/

import Image from 'next/image'
import Link from 'next/link'
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation'
import Hamburger from '../Hamburger/Hamburger'
import heroBackground from '../../public/images/supervoid-logo-voidstar-stylized.png'
import { navigation, background } from './Navigation.module.css'

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
      <DesktopNavigation />
      <Hamburger />
    </nav>
  )
}
