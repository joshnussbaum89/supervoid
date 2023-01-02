// Components
import Image from 'next/future/image'

// Styles, images
import styles from './HomePageHeroInfo.module.css'
import titleImage from '../../public/images/supervoid-title-text-no-tv.webp'

export default function HomePageHeroInfo() {
  return (
    <section className={styles.info}>
      <div className={styles.title}>
        <Image
          src={titleImage}
          width={1728}
          height={250}
          sizes="(min-width: 768px) 48rem, 100vw"
          alt="Supervoid title image text"
          priority
        />
      </div>
      <p>Psychedelic Dreams for Stage + Screen</p>
    </section>
  )
}
