// Components
import Image from 'next/future/image'

// Styles, images
import styles from './HeroBackground.module.css'
import supernova from '../../public/images/supernova-site-background.webp'

export default function HomePageHeroBackground() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src={supernova}
        width={800}
        height={800}
        priority
        placeholder="blur"
        alt="Exploding supernova with black and white clouds"
      />
    </div>
  )
}
