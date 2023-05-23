import { HiDownload } from 'react-icons/hi'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/files/supervoid-lookbook.pdf" download>
        <span>SUPERVOID 2023 Lookbook</span>
        <HiDownload />
      </a>
      <p>Supervoid © {new Date().getFullYear()}</p>
    </footer>
  )
}
