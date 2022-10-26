// Components, helpers
import Image from 'next/future/image'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Header from '../../components/Header/Header'
import { PortableText } from '@portabletext/react'
import { getAllPosts } from '../../lib/getAllPosts'
import { getAllAuthors } from '../../lib/getAllAuthors'
import { formatDate } from '../../lib/formatDate'
import { ellipsisText } from '../../lib/ellipsisText'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../sanityClient'

// Styles
import styles from './Post.module.css'

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

  // Calculate prev and next post information
  const currentPostIndex = allPosts.findIndex((lab) => lab._id === post[0]._id)
  const previousPost = allPosts[currentPostIndex - 1]
  const nextPost = allPosts[currentPostIndex + 1]

  return {
    props: {
      post,
      author,
      previousPost: previousPost ? previousPost : null,
      nextPost: nextPost ? nextPost : null,
    },
  }
}

// Create post based on post clicked
export default function Post({
  post,
  author,
  previousPost,
  nextPost,
  overlayDisplayed,
  setOverlayDisplayed,
  urlPath,
}) {
  // Build image from Sanity data
  const builder = imageUrlBuilder(client)
  const urlFor = (source) => builder.image(source)

  // Format 'published at' date
  const formattedDate = formatDate(post[0].publishedAt)

  // Format description text
  const formattedDescriptionText = ellipsisText(
    post[0].body[0].children[0].text,
    100
  )

  // Format prev button text
  const formattedPrevButtonText =
    previousPost && ellipsisText(previousPost.title, 10)

  // Format next button text
  const formattedNextButtonText = nextPost && ellipsisText(nextPost.title, 10)

  // Populate post values
  const { title, mainImage, body, slug } = post[0]
  const altText = mainImage.alt ? mainImage.alt : 'Lab header image'
  const { name } = author[0]

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Philadelphia creative team specializing in music videos, stage visuals, documentaries and more"
        />
        <meta
          name="keywords"
          content="lighting, music, video, concerts, film, design, animation, philadelphia"
        />
        <meta property="og:title" content={`SUPERVOID TV: ${title}`} />
        <meta
          property="og:url"
          content={`https://supervoid.tv/labs/${slug.current}`}
        />
        <meta property="og:description" content={formattedDescriptionText} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={urlFor(mainImage).url()} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <title>{`SUPERVOID: ${title}`}</title>
      </Head>
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        onReady={() => AOS.init({ once: true })}
      />
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
        {/* TODO: create separate navigation components */}
        <div className={styles.postNavigation}>
          {previousPost?.slug.current && (
            <Link href={`${previousPost.slug.current}`}>
              <div className={styles.previous} title={previousPost.title}>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30.725px"
                  height="30.725px"
                  viewBox="0 0 30.725 30.725"
                >
                  <g>
                    <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731 L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
                  </g>
                </svg>
                <p>{formattedPrevButtonText}</p>
              </div>
            </Link>
          )}
          {nextPost?.slug.current && (
            <Link href={`${nextPost.slug.current}`}>
              <div className={styles.next} title={nextPost.title}>
                <p>{formattedNextButtonText}</p>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30.725px"
                  height="30.725px"
                  viewBox="0 0 30.725 30.725"
                >
                  <g>
                    <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731 L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
                  </g>
                </svg>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
