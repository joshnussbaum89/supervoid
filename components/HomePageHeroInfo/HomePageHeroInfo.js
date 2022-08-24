import Image from 'next/image'
import titleImage from '../../public/images/supervoid-title-text-no-tv.png'
import { info, title, ctaContainer } from './HomePageHeroInfo.module.css'

export default function HomePageHeroInfo({ handleReelDisplay }) {
  return (
    <section className={info}>
      <div className={title}>
        <Image
          src={titleImage}
          alt="Supervoid.tv Site Title"
          placeholder="blur"
        />
      </div>
      <p>
        We are a team of animators, designers, engineers, and programmers,
        working together to bring wild stuff to your screen.
      </p>
      <div className={ctaContainer}>
        <button onClick={handleReelDisplay}>2022 reel</button>
      </div>
    </section>
  )
}
