// Styles
import styles from './PageTitle.module.css'

export default function PageTitle({ title, body }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {body && <p>{body}</p>}
    </div>
  )
}
