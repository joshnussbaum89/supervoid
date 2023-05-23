// Components
import Image from 'next/image'

// Styles, images
import styles from './Description.module.css'
import tateMcrae from '../../../public/images/tate-mcrae-mia_stupid.webp'

export default function RentalsDescription() {
  return (
    <section className={styles.description}>
      <div className={styles.general}>
        <p>
          we design and build custom media server racks in house to meet the needs of shows large
          and small. our SVX series media servers pack a big punch in a small footprint.
        </p>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="30.725px"
          height="30.725px"
          viewBox="0 0 30.725 30.725"
        >
          <g>
            <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731 L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z"></path>
          </g>
        </svg>
      </div>
      <div className={styles.philosophy}>
        <figure>
          <Image
            src={tateMcrae}
            width={2048}
            height={1338}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt="Tate McRae performing at Made In America festival in Philadelphia, PA"
          />
          <figcaption>Tate McRae at MIA festival</figcaption>
        </figure>
        <p>
          after spending years programming top tier media servers like Disguise and Hippo, which can
          be prohibitively expensive to rent, we wanted to create a solution for our clients that
          could still be powerful enough to run big shows without breaking the bank.
        </p>
      </div>
    </section>
  )
}
