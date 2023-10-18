import { useRef, useState, useEffect } from 'react'

// Styles
import styles from './Card.module.css'

/**
 * @param {string} text
 * @param {string} column
 * @returns Card component with 'active' styling handled via :hover and :scroll
 */
export default function Card({ text, column }: { text: string; column?: string }) {
  const containerRef = useRef(null)
  const [cardActive, setCardActive] = useState(false)

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries
    setCardActive(entry.isIntersecting)
  }

  useEffect(() => {
    if (!window.IntersectionObserver) return

    const { current } = containerRef
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })

    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [containerRef])

  // Card styles -> handles 'active' styles
  const cardStyles = cardActive ? `${styles.card} ${styles.active}` : styles.card

  return (
    <div className={cardStyles} data-column={column && column} ref={containerRef}>
      <p>{text}</p>
    </div>
  )
}
