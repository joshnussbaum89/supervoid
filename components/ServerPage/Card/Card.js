import { useState } from 'react'

// Hooks
import useScrollPosition from '../../../hooks/useScrollPosition'
import useWindowHeight from '../../../hooks/useWindowHeight'

// Styles
import styles from './Card.module.css'

/**
 * @param {string} text
 * @param {string} column
 * @returns Card component with 'active' styling handled via :hover and :scroll
 */
export default function Card({ text, column }) {
  // Track card position and 'active' state
  const [cardPosition, setCardPosition] = useState(0)
  const [cardActive, setCardActive] = useState(false)

  // Use scroll position + window height
  const scrollY = useScrollPosition()
  const windowHeight = useWindowHeight()

  // Track card position
  const trackCardPosition = (element) => {
    if (!element) return
    setCardPosition(element.getBoundingClientRect().top)
    cardPosition <= windowHeight / 2 + 100 && cardPosition > 100
      ? setCardActive(true)
      : setCardActive(false)
  }

  // Card styles -> handles 'active' styles
  const cardStyles = cardActive
    ? `${styles.card} ${styles.active}`
    : styles.card

  return (
    <div className={cardStyles} data-column={column && column} ref={trackCardPosition}>
      <p>{text}</p>
    </div>
  )
}
