// Components
import Image from 'next/image'

// Styles, images
import styles from './HeroBackground.module.css'

// TODO: replace
import placeholder from '../../../public/images/labs-placeholder.webp'

export default function LabsPageHeroBackground() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src={placeholder}
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
