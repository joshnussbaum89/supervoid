// Components
import Image from 'next/image'

// Styles, images
import styles from './HeroBackground.module.css'
import supernova from '../../../public/images/supernova-site-background.webp'

export default function HomePageHeroBackground() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src={supernova}
        sizes="(min-width: 768px) 40rem, 100vw"
        alt="Exploding supernova with black and white clouds"
        priority
      />
    </div>
  )
}
