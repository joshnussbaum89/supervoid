// Components
import Image from 'next/image'
import { motion } from 'framer-motion'
import SupervoidCTA from '../../Global/SupervoidCTA/SupervoidCTA'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules'

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Styles, images
import styles from './Contact.module.css'
import danAndShay from '../../../public/images/dan-shay.webp'
import tomMorello from '../../../public/images/tom-morello_red.webp'
import tateMcrae from '../../../public/images/tate-mcrae-mia_red.webp'

export default function Contact({ pathname }: { pathname: string }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.contact}
      data-pathname={pathname}
    >
      <SupervoidCTA urlPath="/#about" buttonText="contact us" />
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image src={danAndShay} sizes="100vw" alt="Dan + Shay Stadium Tour 2022" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={tomMorello}
            sizes="100vw"
            alt="Tom Morello Rage Against the Machine Tour 2022"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={tateMcrae} sizes="100vw" alt="Tate McRae Made In America Festival 2022" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.gallery}>
        <Image
          src={danAndShay}
          sizes="(min-width: 768px) 33vw, 100vw"
          alt="Dan + Shay Stadium Tour 2022"
        />
        <Image
          src={tomMorello}
          sizes="(min-width: 768px) 33vw, 100vw"
          alt="Tom Morello Rage Against the Machine Tour 2022"
        />
        <Image
          src={tateMcrae}
          sizes="(min-width: 768px) 33vw, 100vw"
          alt="Tate McRae Made In America Festival 2022"
        />
      </div>
    </motion.section>
  )
}
