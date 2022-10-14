import Head from 'next/head'
import Script from 'next/script'
import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Header from '../components/Header/Header'
import { useEffect } from 'react'

export default function Labs({ posts, overlayDisplayed, setOverlayDisplayed }) {
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
    <div>
      <Head>
        <meta
          name="description"
          content="Philadelphia creative team specializing in music videos, stage visuals, documentaries and more"
        />
        <meta
          name="keywords"
          content="lighting, music, video, concerts, film, design, animation, philadelphia"
        />
        <meta property="og:title" content="SUPERVOID TV: Rentals" />
        <meta property="og:url" content="https://supervoid.tv/rentals" />
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
      {/* Animate on Scroll library (AOS) */}
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        onReady={() => AOS.init({ once: true })}
      />
      <Header
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
      />
      {/* Sanity Posts */}
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <PortableText value={post.body} />
        </div>
      ))}
    </div>
  )
}

const client = createClient({
  projectId: 'gd9aazh0',
  dataset: 'production',
  apiVersion: '2022-10-14',
  useCdn: false,
})

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`)

  return {
    props: {
      posts,
    },
  }
}
