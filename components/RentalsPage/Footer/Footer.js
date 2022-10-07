import Link from 'next/link'
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
import styles from './Footer.module.css'
import danAndShay from '../../../public/images/dan-shay.webp'
import tomMorello from '../../../public/images/tom-morello_red.webp'
import tateMcrae from '../../../public/images/tate-mcrae-mia_red.webp'

export default function Footer({ pathname }) {
  return (
    <footer
      className={styles.footer}
      data-pathname={pathname}
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className={styles.supervoidCTA}>
        <Link href="/#about">contact us</Link>
      </div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image
            src={danAndShay}
            width={467}
            height={700}
            placeholder="blur"
            alt="Dan + Shay Stadium Tour 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={tomMorello}
            width={467}
            height={700}
            placeholder="blur"
            alt="Tom Morello Rage Against the Machine Tour 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={tateMcrae}
            width={467}
            height={700}
            placeholder="blur"
            alt="Tate McRae Made In America Festival 2022"
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.gallery}>
        <Image
          src={danAndShay}
          width={330}
          height={495}
          placeholder="blur"
          alt="Dan + Shay Stadium Tour 2022"
        />
        <Image
          src={tomMorello}
          width={330}
          height={495}
          placeholder="blur"
          alt="Tom Morello Rage Against the Machine Tour 2022"
        />
        <Image
          src={tateMcrae}
          width={330}
          height={495}
          placeholder="blur"
          alt="Tate McRae Made In America Festival 2022"
        />
      </div>
    </footer>
  )
}
