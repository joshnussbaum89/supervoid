// Components
import Image from 'next/future/image'

// Styles, images
import styles from './HomePageHeroInfo.module.css'
import titleImage from '../../public/images/supervoid-title-text-no-tv.webp'

export default function HomePageHeroInfo({ handleReelDisplay }) {
  return (
    <section className={styles.info}>
      <div className={styles.title}>
        <Image
          src={titleImage}
          width={832}
          height={120}
          priority
          alt="Supervoid title image text"
        />
      </div>
      <p>Psychedelic Dreams for Stage + Screen</p>
      <div className={styles.ctaContainer}>
        <button onClick={handleReelDisplay}>2022 reel</button>
      </div>
    </section>
  )
}
