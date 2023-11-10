import { HiDownload, HiArrowSmRight } from 'react-icons/hi'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/files/supervoid-lookbook.pdf" download>
        <span>SUPERVOID 2023 Lookbook</span>
        <HiDownload />
      </a>
      <div className={styles.footerInfo}>
        <p>Supervoid © {new Date().getFullYear()}</p>
        <p>
          Website by{' '}
          <a href="http://wavelandweb.com" target="_blank" rel="noopener noreferrer">
            Wave Land Web <HiArrowSmRight />
          </a>
        </p>
      </div>
    </footer>
  )
}
