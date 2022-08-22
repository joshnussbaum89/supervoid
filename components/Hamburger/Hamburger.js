import { hamburger, top, bottom } from './Hamburger.module.css'

export default function Hamburger() {
  return (
    <div className={hamburger}>
      <div className={top}></div>
      <div className={bottom}></div>
    </div>
  )
}
