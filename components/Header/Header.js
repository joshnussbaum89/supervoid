import HeroBackground from '../HeroBackground/HeroBackground'
import HeroInfo from '../HeroInfo/HeroInfo'
import { header } from './Header.module.css'

export default function Header() {
  return (
    <header className={header}>
      <HeroBackground />
      <HeroInfo />
    </header>
  )
}
