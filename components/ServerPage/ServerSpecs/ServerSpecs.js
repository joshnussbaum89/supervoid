// Components
import { useState } from 'react'
import Pricing from '../Pricing/Pricing'

// Hooks
import useScrollPosition from '../../../hooks/useScrollPosition'
import useWindowHeight from '../../../hooks/useWindowHeight'

// Styles
import styles from './ServerSpecs.module.css'

export default function ServerSpecs() {
  // Card One
  const [cardOnePosition, setCardOnePosition] = useState(0)
  const [cardOneActive, setCardOneActive] = useState(false)

  // Card Two
  const [cardTwoPosition, setCardTwoPosition] = useState(0)
  const [cardTwoActive, setCardTwoActive] = useState(false)

  // Card Three
  const [cardThreePosition, setCardThreePosition] = useState(0)
  const [cardThreeActive, setCardThreeActive] = useState(false)

  // Card Four
  const [cardFourPosition, setCardFourPosition] = useState(0)
  const [cardFourActive, setCardFourActive] = useState(false)

  // Card Five
  const [cardFivePosition, setCardFivePosition] = useState(0)
  const [cardFiveActive, setCardFiveActive] = useState(false)

  // Card Five
  const [cardSixPosition, setCardSixPosition] = useState(0)
  const [cardSixActive, setCardSixActive] = useState(false)

  // Use scroll position + window height
  const scrollY = useScrollPosition()
  const windowHeight = useWindowHeight()

  // Track card positions
  const trackCardOnePosition = (element) => {
    if (!element) return
    setCardOnePosition(element.getBoundingClientRect().top)
    cardOnePosition <= windowHeight / 2 + 100 && cardOnePosition > 100
      ? setCardOneActive(true)
      : setCardOneActive(false)
  }
  const trackCardTwoPosition = (element) => {
    if (!element) return
    setCardTwoPosition(element.getBoundingClientRect().top)
    cardTwoPosition <= windowHeight / 2 + 100 && cardTwoPosition > 100
      ? setCardTwoActive(true)
      : setCardTwoActive(false)
  }
  const trackCardThreePosition = (element) => {
    if (!element) return
    setCardThreePosition(element.getBoundingClientRect().top)
    cardThreePosition <= windowHeight / 2 + 100 && cardThreePosition > 100
      ? setCardThreeActive(true)
      : setCardThreeActive(false)
  }
  const trackCardFourPosition = (element) => {
    if (!element) return
    setCardFourPosition(element.getBoundingClientRect().top)
    cardFourPosition <= windowHeight / 2 + 100 && cardFourPosition > 100
      ? setCardFourActive(true)
      : setCardFourActive(false)
  }
  const trackCardFivePosition = (element) => {
    if (!element) return
    setCardFivePosition(element.getBoundingClientRect().top)
    cardFivePosition <= windowHeight / 2 + 100 && cardFivePosition > 100
      ? setCardFiveActive(true)
      : setCardFiveActive(false)
  }
  const trackCardSixPosition = (element) => {
    if (!element) return
    setCardSixPosition(element.getBoundingClientRect().top)
    cardSixPosition <= windowHeight / 2 + 100 && cardSixPosition > 100
      ? setCardSixActive(true)
      : setCardSixActive(false)
  }

  // Handle .active state card styles
  const cardOneStyles = cardOneActive
    ? `${styles.card} ${styles.active}`
    : styles.card
  const cardTwoStyles = cardTwoActive
    ? `${styles.card} ${styles.active}`
    : styles.card
  const cardThreeStyles = cardThreeActive
    ? `${styles.card} ${styles.active}`
    : styles.card
  const cardFourStyles = cardFourActive
    ? `${styles.card} ${styles.active}`
    : styles.card
  const cardFiveStyles = cardFiveActive
    ? `${styles.card} ${styles.active}`
    : styles.card
  const cardSixStyles = cardSixActive
    ? `${styles.card} ${styles.active}`
    : styles.card

  return (
    <section className={styles.serverSpecs}>
      <h2>SVX Series Servers Quick Specs</h2>
      <div className={styles.cardContainer}>
        <div className={styles.colOne}>
          <div className={cardOneStyles} ref={trackCardOnePosition}>
            <p>
              run up to 12 HD screens, 3 4K screens, or even a single 8K screen,
              with a dedicated GUI for controlling the software
            </p>
          </div>
          <div className={cardTwoStyles} ref={trackCardTwoPosition}>
            <p>capture up to 4 HD inputs or one 4K input over SDI or HDMI</p>
          </div>
        </div>
        <div className={styles.colTwo}>
          <div className={cardThreeStyles} ref={trackCardThreePosition}>
            <p>
              real-time low latency visual effects with Notch built into each
              server
            </p>
          </div>
          <div className={cardFourStyles} ref={trackCardFourPosition}>
            <p>
              Pixel map and control hundreds of universes of lights over artnet
            </p>
          </div>
        </div>
        <div className={styles.colThree}>
          <div className={cardFiveStyles} ref={trackCardFivePosition}>
            <p>
              control via your lighting desk with artnet or from MIDI or OSC
            </p>
          </div>
          <div className={cardSixStyles} ref={trackCardSixPosition}>
            <p>remote Control over LAN/Wifi from any Windows or Mac computer</p>
          </div>
        </div>
      </div>
      <Pricing />
    </section>
  )
}
