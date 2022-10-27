// Components
import Image from 'next/future/image'
import Arrow from '../../Global/Arrow/Arrow'

// Styles, images
import styles from './Description.module.css'
import tateMcrae from '../../../public/images/tate-mcrae-mia_stupid.webp'

export default function RentalsDescription() {
  return (
    <section className={styles.description}>
      <div
        className={styles.general}
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <p>
          we design and build custom media server racks in house to meet the
          needs of shows large and small. our SVX series media servers pack a
          big punch in a small footprint.
        </p>
        <Arrow direction="bottom" size="30.725" />
      </div>
      <div className={styles.philosophy}>
        <figure data-aos="fade-up" data-aos-duration="600">
          <Image
            src={tateMcrae}
            width={2048}
            height={1338}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt="Tate McRae performing at Made In America festival in Philadelphia, PA"
          />
          <figcaption>Tate McRae at MIA festival</figcaption>
        </figure>
        <p data-aos="fade-up" data-aos-duration="600">
          after spending years programming top tier media servers like Disguise
          and Hippo, which can be prohibitively expensive to rent, we wanted to
          create a solution for our clients that could still be powerful enough
          to run big shows without breaking the bank.
        </p>
      </div>
    </section>
  )
}
