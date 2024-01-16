// Components
import Link from 'next/link'

// Styles
import styles from './SupervoidCTA.module.css'

export default function SupervoidCTA({
  urlPath,
  handleClick,
  buttonText,
}: {
  urlPath: string
  handleClick?: () => void
  buttonText: string
}) {
  return (
    <Link className={styles.cta} href={urlPath} onClick={handleClick}>
      {buttonText}
    </Link>
  )
}
