// Styles
import styles from './Arrow.module.css'

/**
 * Arrow SVG
 * @param {string} direction Determines which direction the arrow will face. Accepts "top", "bottom", "left" or "right" values.
 * @param {string} size Determines arrow size. Accepts string or number value ex/ 15 or "34.5". DO NOT ADD UNIT ex/ 10px "2rem"
 * @returns An arrow SVG displayed with given "direction" and "size" values
 */
export default function Arrow({ direction, size }) {
  return (
    <svg
      className={styles.svg}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 ${size} ${size}`}
      data-direction={direction}
    >
      <g>
        <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731 L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
      </g>
    </svg>
  )
}
