// Components
import Image from 'next/future/image'

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
import drewAndKepplerPast from '../../public/images/drew-keppler-2005.webp'
import drewAndKepplerPresent from '../../public/images/drew-keppler-2022.webp'

export default function About() {
  return (
    <footer id="about" className={styles.about}>
      <div data-aos="fade-up" data-aos-duration="600">
        <h2>About</h2>
        <p>
          <span>SUPERVOID</span> is the Philly-based studio of Drew Mercadante +
          Matt Keppler.
        </p>
        <p>
          Music videos, live performance visuals, and social media content make
          up the majority of their projects. Veering from techno-psychedelia to
          adult swim-esque chaotic whimsy, their work is a reflection of who
          they are - best friends who grew up playing in punk bands together.
          Always evolving, never taking it too seriously. If it looks like
          something you&apos;ve already seen before, then what was the point of
          making it?
        </p>
        <p className={styles.email}>info@supervoid.tv</p>
        <div className={styles.contactInfo}>
          <a
            href="https://www.instagram.com/supervoidtv/"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/supervoidtv"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
            </svg>
          </a>
          <a href="mailto:info@supervoid.tv" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.294 75.294">
              <g>
                <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <Swiper
        className={`${styles.swiper} swiper`}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <SwiperSlide>
          <Image
            src={drewAndKepplerPast}
            width={632}
            height={355}
            placeholder="blur"
            alt="Highschool yearbook photo of Drew Mercedante and Matt Keppler"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={drewAndKepplerPresent}
            width={632}
            height={355}
            placeholder="blur"
            alt="Present day photo of Drew Mercedante and Matt Keppler at the Supervoid office"
          />
        </SwiperSlide>
        <p>2005 - present</p>
      </Swiper>
      <figure
        className={styles.aboutImagesContainer}
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className={styles.aboutImages}>
          <Image
            src={drewAndKepplerPast}
            width={632}
            height={356}
            placeholder="blur"
            alt="Highschool yearbook photo of Drew Mercedante and Matt Keppler"
          />
          <Image
            src={drewAndKepplerPresent}
            width={632}
            height={356}
            placeholder="blur"
            alt="Present day photo of Drew Mercedante and Matt Keppler at the Supervoid office"
          />
        </div>
        <figcaption>2005 - present</figcaption>
      </figure>
      <div
        className={styles.aboutServices}
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <h3>Services</h3>
        <ul>
          <li>animation</li>
          <li>broadcast production</li>
          <li>lighting design & programming</li>
          <li>media server programming</li>
          <li>notch</li>
          <li>touch designer</li>
        </ul>
      </div>
    </footer>
  )
}
