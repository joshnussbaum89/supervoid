// Styles
import styles from './PageTitle.module.css'

export default function PageTitle({ title }) {
  return <h1 className={styles.titleText}>{title}</h1>
}
