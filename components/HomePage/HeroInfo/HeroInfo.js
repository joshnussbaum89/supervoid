// Components
import Image from 'next/future/image'
import SupervoidCTA from '../../Global/SupervoidCTA/SupervoidCTA'

// Styles, images
import styles from './HeroInfo.module.css'
import titleImage from '../../../public/images/supervoid-title-text-no-tv.webp'

export default function HeroInfo({ handleReelDisplay }) {
  return (
    <section className={styles.info}>
      <div className={styles.title}>
        <Image
          src={titleImage}
          width={1728}
          height={250}
          sizes="(min-width: 768px) 52rem, 100vw"
          alt="Supervoid title image text"
          priority
        />
      </div>
      <p>Psychedelic Dreams for Stage + Screen</p>
      <SupervoidCTA handleClick={handleReelDisplay} buttonText="2022 reel" />
    </section>
  )
}
