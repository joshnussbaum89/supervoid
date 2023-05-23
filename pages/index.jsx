// Components
import Head from 'next/head'
import RecentWork from '../components/HomePage/RecentWork/RecentWork'
import About from '../components/HomePage/About/About'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Philadelphia based creative team specializing in stage visuals and music videos"
        />
        <meta
          name="keywords"
          content="lighting, music, video, concerts, film, design, animation, philadelphia"
        />
        <meta property="og:title" content="SUPERVOID TV" />
        <meta property="og:url" content="https://supervoid.tv" />
        <meta
          property="og:description"
          content="Philadelphia based creative team specializing in stage visuals and music videos"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://supervoid.tv/images/supernova-site-background.webp"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <meta
          name="google-site-verification"
          content="zX9VfT0iiNgGZmfY-EzVrlc5JtJOwiTtZm3TPPBog9w"
        />
        <title>SUPERVOID: Psychedelic Dreams for Stage + Screen</title>
      </Head>
      <main>
        <RecentWork />
        <About />
      </main>
    </>
  )
}
