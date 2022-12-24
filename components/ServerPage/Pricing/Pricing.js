// Components
import Image from 'next/future/image'

// Styles, images
import styles from './Pricing.module.css'
import flyRack from '../../../public/images/2ru-rack.webp'

export default function Pricing() {
  return (
    <div className={styles.pricing}>
      <Image
        src={flyRack}
        width={1204}
        height={1365}
        sizes="(min-width: 768px) 50vw, 100vw"
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
