// Components
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaRegEnvelope } from 'react-icons/fa'

// Styles
import styles from './About.module.css'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="about"
      className={styles.about}
    >
      <div>
        <h2>About</h2>
        <p>
          <span>SUPERVOID</span> is an Animation, VFX and Technical Design studio based in
          Philadelphia. Our primary output is creating dynamic and interactive media packages for
          artists, agencies and brands.
        </p>
        <p className={styles.email}>info@supervoid.tv</p>
        <div className={styles.contactInfo}>
          <a
            href="https://www.instagram.com/supervoidtv/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/supervoidtv"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a href="mailto:info@supervoid.tv" target="_blank" rel="noreferrer" aria-label="Email">
            <FaRegEnvelope />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
