// Components
import Image from 'next/image'

// Styles, images
import styles from './HeroBackground.module.css'
import supernova from '../../../public/images/msg-test-pattern.webp'

export default function ServersPageHeroBackground() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src={supernova}
        sizes="100vw"
        alt="Test pattern on a big screen on the Madison Square Garden stage"
        quality={50}
        priority
      />
      <div className={styles.shadow}></div>
    </div>
  )
}
