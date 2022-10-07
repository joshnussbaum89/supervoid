// Components
import Image from 'next/future/image'

// Styles, images
import styles from './HeroBackground.module.css'
import supernova from '../../../public/images/msg-test-pattern.webp'

export default function RentalsPageHeroBackground() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src={supernova}
        width={4000}
        height={2667}
        priority
        placeholder="blur"
        alt="Test pattern on a big screen on the Madison Square Garden stage"
      />
      <div className={styles.shadow}></div>
    </div>
  )
}
