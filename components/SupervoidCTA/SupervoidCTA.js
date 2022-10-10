// Components
import Link from 'next/link'

// Styles
import styles from './SupervoidCTA.module.css'

// Supervoid CTA - use throughout site
export default function SupervoidCTA({ urlPath, handleClick, buttonText }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {urlPath ? <Link href={urlPath}>{buttonText}</Link> : buttonText}
    </button>
  )
}
