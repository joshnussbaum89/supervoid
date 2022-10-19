// Components, helpers
import Image from 'next/future/image'
import Header from '../../components/Header/Header'
import { PortableText } from '@portabletext/react'
import { getAllPosts } from '../../lib/getAllPosts'
import { formatDate } from '../../lib/formatDate'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../sanityClient'

// Styles
import styles from './Post.module.css'

// Create post based on post clicked
export default function Post({
  post,
  overlayDisplayed,
  setOverlayDisplayed,
  urlPath,
}) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  // Format 'published at' date
  const formattedDate = formatDate(post[0].publishedAt)

  return (
    <>
      <Header
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
        urlPath={urlPath}
      />
      <div className={styles.post}>
        <div className={styles.header}>
          <h2>{post[0].title}</h2>
          <p>{formattedDate}</p>
        </div>
        <Image
          src={urlFor(post[0].mainImage).url()}
          className={styles.image}
          width={1000}
          height={1000}
          alt=""
        />
        <PortableText value={post[0].body} />
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

// Get post props
export async function getStaticProps(context) {
  const posts = await getAllPosts()

  return {
    props: {
      post: posts.filter((post) => post.slug.current === context.params.slug),
    },
  }
}
