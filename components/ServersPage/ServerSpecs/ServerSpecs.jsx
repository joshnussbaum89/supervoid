// Components
import Pricing from '../Pricing/Pricing'
import Card from '../Card/Card'

// Styles
import styles from './ServerSpecs.module.css'

export default function ServerSpecs() {
  const cardData = [
    [
      {
        id: 0,
        text: 'run up to 12 HD screens, 3 4K screens, or even a single 8K screen, with a dedicated GUI for controlling the software',
      },
      {
        id: 1,
        text: 'capture up to 4 HD inputs or one 4K input over SDI or HDMI',
      },
    ],
    [
      {
        id: 0,
        text: 'real-time low latency visual effects with Notch built into each server',
      },
      {
        id: 1,
        text: 'Pixel map and control hundreds of universes of lights over artnet',
      },
    ],
    [
      {
        id: 0,
        text: 'control via your lighting desk with artnet or from MIDI or OSC',
      },
      {
        id: 1,
        text: 'remote Control over LAN/Wifi from any Windows or Mac computer',
      },
    ],
  ]

  return (
    <section className={styles.serverSpecs}>
      <h2>SVX Series Servers Quick Specs</h2>
      <div className={styles.cardContainer}>
        <div>
          {cardData[0].map((card) => (
            <Card key={card.id} text={card.text} column="1" />
          ))}
        </div>
        <div>
          {cardData[1].map((card) => (
            <Card key={card.id} text={card.text} column="2" />
          ))}
        </div>
        <div>
          {cardData[2].map((card) => (
            <Card key={card.id} text={card.text} column="3" />
          ))}
        </div>
      </div>
      <Pricing />
    </section>
  )
}
