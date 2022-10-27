// Components, hooks
import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import MostRecentPosts from '../components/LabsPage/MostRecentPosts/MostRecentPosts'

// Helpers
import { getAllPosts } from '../lib/getAllPosts'
import { getAllAuthors } from '../lib/getAllAuthors'

// Fetch Sanity posts + authors
export async function getStaticProps() {
  const posts = await getAllPosts()
  const authors = await getAllAuthors()

  return {
    props: {
      posts,
      authors,
    },
  }
}

// "Labs" (Blog) page
export default function Labs({ posts, authors, overlayDisplayed }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')

      // Remove scrolling when modal overlay is shown
      if (overlayDisplayed) {
        body.classList.add('overlay-active')
      } else {
        body.classList.remove('overlay-active')
      }
    }
  })

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
          content="https://supervoid.tv/images/msg-test-pattern.webp"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <title>SUPERVOID: Labs</title>
      </Head>
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        onReady={() => AOS.init({ once: true })}
      />
      <main>
        <MostRecentPosts posts={posts} authors={authors} />
      </main>
    </>
  )
}
