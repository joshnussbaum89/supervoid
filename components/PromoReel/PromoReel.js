// Styles
import styles from './PromoReel.module.css'

export default function PromoReel({ reelIsActive, handleReelDisplay }) {
  return (
    <div
      className={
        reelIsActive ? `${styles.container} ${styles.active}` : styles.container
      }
    >
      <iframe
        src="https://player.vimeo.com/video/690321472?h=e01e074c87&title=0&byline=0&portrait=0"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
      <div className={styles.close} onClick={handleReelDisplay}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  )
}
