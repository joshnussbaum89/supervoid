// Components, helpers
import Image from 'next/future/image'
import Header from '../../components/Header/Header'
import { PortableText } from '@portabletext/react'
import { getAllPosts } from '../../lib/getAllPosts'
import { getAllAuthors } from '../../lib/getAllAuthors'
import { formatDate } from '../../lib/formatDate'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../sanityClient'

// Styles
import styles from './Post.module.css'

// Create post based on post clicked
export default function Post({
  post,
  author,
  overlayDisplayed,
  setOverlayDisplayed,
  urlPath,
}) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  // Format 'published at' date
  const formattedDate = formatDate(post[0].publishedAt)

  // Populate post values
  const { title, mainImage, body } = post[0]
  const altText = mainImage.alt ? mainImage.alt : 'Lab header image'
  const { name } = author[0]

  return (
    <>
      <Header
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
        urlPath={urlPath}
      />
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <h2>{title}</h2>
          <p>
            {name} | {formattedDate}
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={urlFor(mainImage).url()}
            className={styles.image}
            sizes="(min-width: 768px) 50vw, 100vw"
            fill
            alt={altText}
            priority
          />
        </div>
        <div className={styles.postBody}>
          <PortableText
            value={body}
            components={{
              types: {
                image: ({ value }) => {
                  return (
                    <Image
                      src={urlFor(value.asset).url()}
                      width={750}
                      height={750}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      alt={value.alt ? value.alt : 'Post body image'}
                    />
                  )
                },
              },
            }}
          />
        </div>
      </div>
    </>
  )
}

// Create dynamic URLs from post slug
export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return { paths, fallback: false }
}

// Get post + author props
export async function getStaticProps(context) {
  const allPosts = await getAllPosts()
  const allAuthors = await getAllAuthors()

  // Get current post
  const post = allPosts.filter(
    (post) => post.slug.current === context.params.slug
  )

  // Get post author
  const author = allAuthors.filter(
    (author) => author._id === post[0].author._ref
  )

  return {
    props: {
      post,
      author,
    },
  }
}
