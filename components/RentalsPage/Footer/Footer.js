// Components
import Image from 'next/future/image'
import SupervoidCTA from '../../SupervoidCTA/SupervoidCTA'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper'

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Styles, images
import styles from './Footer.module.css'
import danAndShay from '../../../public/images/dan-shay.webp'
import tomMorello from '../../../public/images/tom-morello_red.webp'
import tateMcrae from '../../../public/images/tate-mcrae-mia_red.webp'

export default function Footer({ urlPath }) {
  return (
    <footer
      className={styles.footer}
      data-urlPath={urlPath}
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <SupervoidCTA urlPath="/#about" buttonText="contact us" />
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image
            src={danAndShay}
            width={2000}
            height={3000}
            sizes="100vw"
            alt="Dan + Shay Stadium Tour 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={tomMorello}
            width={2000}
            height={3000}
            sizes="100vw"
            alt="Tom Morello Rage Against the Machine Tour 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={tateMcrae}
            width={1450}
            height={2175}
            sizes="100vw"
            alt="Tate McRae Made In America Festival 2022"
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.gallery}>
        <Image
          src={danAndShay}
          width={2000}
          height={3000}
          sizes="(min-width: 768px) 33vw, 100vw"
          alt="Dan + Shay Stadium Tour 2022"
        />
        <Image
          src={tomMorello}
          width={2000}
          height={3000}
          sizes="(min-width: 768px) 33vw, 100vw"
          alt="Tom Morello Rage Against the Machine Tour 2022"
        />
        <Image
          src={tateMcrae}
          width={1450}
          height={2175}
          sizes="(min-width: 768px) 33vw, 100vw"
          alt="Tate McRae Made In America Festival 2022"
        />
      </div>
    </footer>
  )
}
