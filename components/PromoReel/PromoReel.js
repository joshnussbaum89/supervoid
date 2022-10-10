// Components, hooks
import { useEffect } from 'react'
import Player from '@vimeo/player'

// Styles
import styles from './PromoReel.module.css'

export default function PromoReel({ reelIsActive, handleReelDisplay }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const player = new Player('promoReel', { id: 690321472 })

      // IF user closes promo reel, pause video
      if (!reelIsActive) player.pause()
    }
  })

  // Promo reel container styles
  const containerStyles = reelIsActive
    ? `${styles.container} ${styles.active}`
    : styles.container

  return (
    <div className={containerStyles}>
      <div id="promoReel" data-vimeo-id="690321472"></div>
      <div className={styles.close} onClick={handleReelDisplay}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  )
}
