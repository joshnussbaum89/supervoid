import { header } from './Header.module.css'
import HeroBackground from '../HeroBackground/HeroBackground'
import HeroInfo from '../HeroInfo/HeroInfo'

export default function Header() {
  return (
    <header className={header}>
      <HeroBackground />
      <HeroInfo />
    </header>
  )
}
