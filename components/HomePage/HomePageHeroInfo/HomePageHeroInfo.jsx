// Components
import Image from 'next/image'

// Styles, images
import styles from './HomePageHeroInfo.module.css'
import titleImage from '../../../public/images/supervoid-title-text-no-tv.webp'

export default function HomePageHeroInfo() {
  return (
    <section className={styles.info}>
      <div className={styles.title}>
        <Image
          src={titleImage}
          sizes="(min-width: 768px) 48rem, 100vw"
          alt="Supervoid title image text"
          priority
        />
      </div>
      <p>Psychedelic Dreams for Stage + Screen</p>
    </section>
  )
}
