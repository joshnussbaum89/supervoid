import Image from 'next/image'
import titleImage from '../../public/images/supervoid-title-text-no-tv.png'
import { info, title, ctaContainer } from './HomePageHeroInfo.module.css'

export default function HomePageHeroInfo() {
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
        philadelphia creative team specializing in stage visuals, animations,
        music videos, livestreaming and more
      </p>
      <div className={ctaContainer}>
        <button>2022 reel</button>
      </div>
    </section>
  )
}
