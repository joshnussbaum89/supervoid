// Components
import Head from 'next/head'
// import MostRecentPosts from '../components/LabsPage/MostRecentPosts/MostRecentPosts'

// Helpers
import { getAllPosts } from '../lib/getAllPosts'
import { getAllAuthors } from '../lib/getAllAuthors'

/**
 * Labs (Blog) Page
 *
 * [ TEMPORARILY DISABLED ]
 *
 * @param {object} posts
 * @param {object} authors
 */
export default function Labs({ posts, authors }) {
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
        <meta property="og:title" content="SUPERVOID TV: Labs" />
        <meta property="og:url" content="https://supervoid.tv/labs" />
        <meta
          property="og:description"
          content="Custom media server racks built in house to meet the needs of shows large and small."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          // TODO: Replace placeholder image
          content="https://supervoid.tv/images/labs-placeholder.webp"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <title>SUPERVOID: Labs</title>
      </Head>
      <main>
        {/* <MostRecentPosts posts={posts} authors={authors} /> */}
        <h2 style={{ marginBottom: '12rem' }}>Coming soon</h2>
      </main>
    </>
  )
}

// Fetch Sanity posts + authors
export async function getStaticProps() {
  const posts = await getAllPosts()
  const authors = await getAllAuthors()

  return {
    props: {
      posts,
      authors,
    },
    revalidate: 10,
  }
}
