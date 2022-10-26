// Components, helpers
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../sanityClient'
import { formatDate } from '../../../lib/formatDate'
import { ellipsisText } from '../../../lib/ellipsisText'

// Styles, images
import styles from './PostTitleCard.module.css'
import Image from 'next/future/image'

// "Labs" page post preview card
export default function PostTitleCard({ post, author }) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  // Format 'published at' date
  const formattedDate = formatDate(post.publishedAt)

  // Format preview text
  const formattedPreviewText = ellipsisText(post.body[0].children[0].text, 200)

  // Populate post values
  const { title, mainImage } = post
  const altText = mainImage.alt ? mainImage.alt : 'Lab preview image'
  const slug = post.slug.current
  const authorName = author[0].name

  return (
    <div className={styles.post}>
      <figure>
        <Link
          href={{
            pathname: `/labs/[slug]`,
            query: { slug },
          }}
        >
          <div className={styles.imageContainer}>
            <Image
              src={urlFor(mainImage).url()}
              className={styles.image}
              sizes="(min-width: 768px) 50vw,
              (min-width: 1024px) 33vw,
              100vw"
              fill
              alt={altText}
            />
          </div>
        </Link>
        <figcaption>
          <Link
            href={{
              pathname: `/labs/[slug]`,
              query: { slug },
            }}
          >
            <h2>{title}</h2>
          </Link>
          <p>
            {authorName} | {formattedDate}
          </p>
          <p>{formattedPreviewText}</p>
        </figcaption>
      </figure>
    </div>
  )
}
