// Components
import Image from 'next/future/image'

// Styles, images
import styles from './HeroBackground.module.css'
// TODO: replace
import supernova from '../../../public/images/labs-placeholder.jpg'

export default function LabsPageHeroBackground() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src={supernova}
        width={6016}
        height={4016}
        sizes="100vw"
        alt="TODO: replace this text"
        priority
      />
      <div className={styles.shadow}></div>
    </div>
  )
}
