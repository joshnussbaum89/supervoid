// Components
import Image from 'next/future/image'

// Styles, images
import styles from './Pricing.module.css'
import flyRack from '../../../public/images/2ru-rack.webp'

export default function Pricing() {
  return (
    <div className={styles.pricing} data-aos="fade-up" data-aos-duration="600">
      <Image
        src={flyRack}
        width={503}
        height={570}
        placeholder="blur"
        alt="Drew Mercadante standing with Supervoid 2RU Fly Rack Kit"
      />
      <p>
        our 2RU Fly Rack Kits contain everything you need to run your show.
        rentals start as low as $500/week, with 24/7 tech support and SUPERVOID
        exclusive VJ loops and visual content included in every rental.
      </p>
    </div>
  )
}