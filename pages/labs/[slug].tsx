// Components, helpers
import Image from 'next/image'
import Head from 'next/head'
import PostNavigation from '../../components/LabsPage/PostNavigation/PostNavigation'
import { PortableText } from '@portabletext/react'
import { getAllPosts } from '../../lib/getAllPosts'
import { getAllAuthors } from '../../lib/getAllAuthors'
import { formatDate } from '../../lib/formatDate'
import { ellipsisText } from '../../lib/ellipsisText'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../lib/sanityClient'

// Styles
import styles from './Post.module.css'

// TODO: add TypeScript Types when page is re-enabled - replace all examples of 'any' with correct types

// Types
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { GetStaticProps } from 'next'

// Create post based on post clicked
export default function Post({ post, author, previousPost, nextPost }: any) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source: SanityImageSource) => builder.image(source)

  // Format 'published at' date
  const formattedDate = formatDate(post[0].publishedAt)

  // Format description text
  const formattedDescriptionText = ellipsisText(post[0].body[0].children[0].text, 100)

  // Populate post values
  const { title, mainImage, body, slug } = post[0]
  const altText = mainImage.alt ? mainImage.alt : 'Lab header image'
  const { name } = author[0]

  return (
    <>
      <Head>
        <meta name="description" content={formattedDescriptionText} />
        <meta
          name="keywords"
          content="lighting, music, video, concerts, film, design, animation, philadelphia"
        />
        <meta property="og:title" content={`SUPERVOID TV: ${title}`} />
        <meta property="og:url" content={`https://supervoid.tv/labs/${slug.current}`} />
        <meta property="og:description" content={formattedDescriptionText} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={urlFor(mainImage).url()} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <title>{`SUPERVOID: ${title}`}</title>
      </Head>
      <article className={styles.post}>
        <div className={styles.postHeader}>
          <h1>{title}</h1>
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
        <PostNavigation previousPost={previousPost} nextPost={nextPost} />
      </article>
    </>
  )
}

// Create dynamic URLs from post slug
export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post: any) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return { paths, fallback: 'blocking' }
}

// Get post + author props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = await getAllPosts()
  const allAuthors = await getAllAuthors()

  // Get current post
  const post = allPosts.filter((post: any) => post.slug.current === params?.slug)

  // Get post author
  const author = allAuthors.filter((author: any) => author._id === post[0].author._ref)

  // Calculate prev and next post information
  const currentPostIndex = allPosts.findIndex((lab: any) => lab._id === post[0]._id)
  const previousPost = allPosts[currentPostIndex - 1]
  const nextPost = allPosts[currentPostIndex + 1]

  return {
    props: {
      post,
      author,
      previousPost: previousPost ? previousPost : null,
      nextPost: nextPost ? nextPost : null,
    },
    revalidate: 60,
  }
}
