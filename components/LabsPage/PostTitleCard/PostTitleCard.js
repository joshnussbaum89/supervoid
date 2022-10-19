// Components, helpers
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../sanityClient'
import { formatDate } from '../../../lib/formatDate'

// Styles, images
import styles from './PostTitleCard.module.css'
import Image from 'next/future/image'

// "Labs" page post preview card
export default function PostTitleCard({ post }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  // Format 'published at' date
  const formattedDate = formatDate(post.publishedAt)

  // Format preview text
  const previewText = post.body[0].children[0].text.substring(0, 200)
  const lastChar = previewText[previewText.length - 1]
  const formattedText =
    lastChar !== ' '
      ? `${previewText}...`
      : `${previewText.substring(0, 199)}...`

  return (
    <div className={styles.post}>
      <figure>
        <Link
          href={{
            pathname: `/labs/[slug]`,
            query: { slug: post.slug.current },
          }}
        >
          <Image
            src={urlFor(post.mainImage).url()}
            className={styles.image}
            width={1000}
            height={1000}
            alt=""
          />
        </Link>
        <figcaption>
          <Link
            href={{
              pathname: `/labs/[slug]`,
              query: { slug: post.slug.current },
            }}
          >
            <h2>{post.title}</h2>
          </Link>
          <p>{formattedDate}</p>
          <p>{formattedText}</p>
        </figcaption>
      </figure>
    </div>
  )
}
