// Components
import { motion } from 'framer-motion'
import Image from 'next/image'

// Styles, images
import titleImage from '../../../public/images/supervoid-title-text-no-tv.webp'
import styles from './HomePageHeroInfo.module.css'

export default function HomePageHeroInfo() {
  return (
    <motion.section
      className={styles.info}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.title}>
        <Image
          src={titleImage}
          sizes="(min-width: 768px) 48rem, 100vw"
          alt="Supervoid title image text"
          priority
        />
      </div>
      <p>Psychedelic Dreams for Stage + Screen</p>
    </motion.section>
  )
}
