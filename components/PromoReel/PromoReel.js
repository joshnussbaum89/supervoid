import { container, active, close, top, bottom } from './PromoReel.module.css'

export default function PromoReel({ reelIsActive, handleReelDisplay }) {
  return (
    <div className={reelIsActive ? `${container} ${active}` : container}>
      <iframe
        src="https://player.vimeo.com/video/690321472?h=e01e074c87&title=0&byline=0&portrait=0"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
      <div className={close} onClick={handleReelDisplay}>
        <div className={top}></div>
        <div className={bottom}></div>
      </div>
    </div>
  )
}
