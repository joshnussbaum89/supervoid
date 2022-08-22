import Image from 'next/image'
import supernova from '../../public/images/supernova-site-background.png'
import { backgroundImage } from './HomePageHeroBackground.module.css'

export default function HomePageHeroBackground() {
  return (
    <div className={backgroundImage}>
      <Image
        src={supernova}
        alt="Exploding supernova with black and white clouds"
        placeholder="blur"
      />
    </div>
  )
}
