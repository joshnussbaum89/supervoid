import Image from 'next/image'
import { backgroundImage } from './HeroBackground.module.css'
import supernova from '../../public/images/supernova-site-background.png'

export default function HeroBackground() {
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
