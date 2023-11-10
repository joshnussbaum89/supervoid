// Components
import SEO from '../components/Global/SEO/SEO'
import RecentWork from '../components/HomePage/RecentWork/RecentWork'
import About from '../components/HomePage/About/About'

export default function Home() {
  return (
    <>
      <SEO
        title="SUPERVOID | Psychedelic Dreams for Stage + Screen"
        url="https://supervoid.tv"
        image="https://supervoid.tv/images/supernova-site-background.webp"
        description="Philadelphia based creative team specializing in live performance stage visuals and music videos"
      />
      <main>
        <RecentWork />
        <About />
      </main>
    </>
  )
}
