// Components
import SEO from '../components/Global/SEO/SEO'
import Head from 'next/head'
import RecentWork from '../components/HomePage/RecentWork/RecentWork'
import About from '../components/HomePage/About/About'

export default function Home() {
  return (
    <>
      <SEO
        title="SUPERVOID: Psychedelic Dreams for Stage + Screen"
        url="https://supervoid.tv"
        image="https://supervoid.tv/images/supernova-site-background.webp"
        description="Philadelphia based creative team specializing in stage visuals and music videos"
      />
      <Head>
        <meta
          name="google-site-verification"
          content="zX9VfT0iiNgGZmfY-EzVrlc5JtJOwiTtZm3TPPBog9w"
        />
      </Head>
      <main>
        <RecentWork />
        <About />
      </main>
    </>
  )
}
