// Components
import Link from 'next/link'

// Styles
import styles from './SupervoidCTA.module.css'

export default function SupervoidCTA({
  urlPath,
  handleClick,
  buttonText,
}: {
  urlPath?: string
  handleClick?: () => void
  buttonText: string
}) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {urlPath ? <Link href={urlPath}>{buttonText}</Link> : buttonText}
    </button>
  )
}
