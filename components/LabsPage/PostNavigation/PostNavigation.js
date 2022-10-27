// Components, helpers
import Link from 'next/link'
import Arrow from '../../Global/Arrow/Arrow'
import { ellipsisText } from '../../../lib/ellipsisText'

// Styles
import styles from './PostNavigation.module.css'

export default function PostNavigation({ previousPost, nextPost }) {
  // Format prev button text
  const formattedPrevButtonText =
    previousPost && ellipsisText(previousPost.title, 10)

  // Format next button text
  const formattedNextButtonText = nextPost && ellipsisText(nextPost.title, 10)

  return (
    <div className={styles.postNavigation}>
      {previousPost?.slug.current && (
        <Link href={`${previousPost.slug.current}`}>
          <div className={styles.previous} title={previousPost.title}>
            <Arrow direction="left" size="30.75" />
            <p>{formattedPrevButtonText}</p>
          </div>
        </Link>
      )}
      {nextPost?.slug.current && (
        <Link href={`${nextPost.slug.current}`}>
          <div className={styles.next} title={nextPost.title}>
            <p>{formattedNextButtonText}</p>
            <Arrow direction="right" size="30.75" />
          </div>
        </Link>
      )}
    </div>
  )
}
