import { hamburger, top, bottom, active } from './Hamburger.module.css'

export default function Hamburger({
  handleMobileNavDisplay,
  mobileNavIsActive,
}) {
  return (
    <div
      onClick={handleMobileNavDisplay}
      className={mobileNavIsActive ? `${hamburger} ${active}` : `${hamburger}`}
    >
      <div className={top}></div>
      <div className={bottom}></div>
    </div>
  )
}
