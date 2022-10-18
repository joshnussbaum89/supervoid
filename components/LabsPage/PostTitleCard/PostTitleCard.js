// Components, hooks
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

// Styles
import styles from './PostTitleCard.module.css'

// "Labs" page post preview card
export default function PostTitleCard({ post }) {
  return (
    <div className={styles.post}>
      <Link
        href={{
          pathname: `/labs/[slug]`,
          query: { slug: post.slug.current },
        }}
      >
        <h2>{post.title}</h2>
      </Link>
      <PortableText value={post.body} />
    </div>
  )
}
