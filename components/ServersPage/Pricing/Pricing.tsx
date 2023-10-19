// Components
import Image from 'next/image'
import { motion } from 'framer-motion'

// Styles, images
import styles from './Pricing.module.css'
import serverBack from '../../../public/images/server-back.webp'
import serverFront from '../../../public/images/server-front.webp'

export default function Pricing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.pricing}
    >
      <div className={styles.serverImages}>
        <Image
          src={serverBack}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt="Back display of the Supervoid 2RU Fly Rack Kit"
        />
        <Image
          src={serverFront}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt="Front display of the Supervoid 2RU Fly Rack Kit"
        />
      </div>
      <p>
        our 2RU Fly Rack Kits contain everything you need to run your show. rentals start as low as
        $500/week, with 24/7 tech support and SUPERVOID exclusive VJ loops and visual content
        included in every rental.
      </p>
    </motion.div>
  )
}
