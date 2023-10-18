// Components
import Image from 'next/image'
import { FaInstagram, FaFacebook, FaRegEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper'

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Styles, images
import styles from './About.module.css'
import drewAndKepplerPast from '../../../public/images/drew-keppler-2005.webp'
import drewAndKepplerPresent from '../../../public/images/drew-keppler-2022.webp'

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
          <span>SUPERVOID</span> is the Philly-based studio of Drew Mercadante + Matt Keppler.
        </p>
        <p>
          live performance visuals and music videos make up the majority of their projects. veering
          from techno-psychedelia to adult swim-esque chaotic whimsy, their work is a reflection of
          who they are - best friends who grew up playing in punk bands together. always evolving,
          never taking it too seriously. if it looks like something you&apos;ve already seen before,
          then what was the point of making it?
        </p>
        <p className={styles.email}>info@supervoid.tv</p>
        <div className={styles.contactInfo}>
          <a href="https://www.instagram.com/supervoidtv/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/supervoidtv" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="mailto:info@supervoid.tv" target="_blank" rel="noreferrer">
            <FaRegEnvelope />
          </a>
        </div>
      </div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image
            src={drewAndKepplerPast}
            width={2880}
            height={1620}
            sizes="100vw"
            alt="Highschool yearbook photo of Drew Mercedante and Matt Keppler"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={drewAndKepplerPresent}
            width={2880}
            height={1620}
            sizes="100vw"
            alt="Present day photo of Drew Mercedante and Matt Keppler at the Supervoid office"
          />
        </SwiperSlide>
        <p>2005 - present</p>
      </Swiper>
      <figure className={styles.aboutImagesContainer}>
        <div className={styles.aboutImages}>
          <Image
            src={drewAndKepplerPast}
            width={2880}
            height={1620}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt="Highschool yearbook photo of Drew Mercedante and Matt Keppler"
          />
          <Image
            src={drewAndKepplerPresent}
            width={2880}
            height={1620}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt="Present day photo of Drew Mercedante and Matt Keppler at the Supervoid office"
          />
        </div>
        <figcaption>2005 - present</figcaption>
      </figure>
      <div className={styles.aboutServices}>
        <h3>Services</h3>
        <ul>
          <li>Creative Direction</li>
          <li>Technical Direction</li>
          <li>Stage Visuals</li>
          <li>Music Videos</li>
          <li>Lighting Design + Programming</li>
          <li>Media Server Programming</li>
          <li>Notch</li>
          <li>Unreal Engine</li>
          <li>Cinema 4D</li>
          <li>After Effects</li>
        </ul>
      </div>
    </motion.section>
  )
}