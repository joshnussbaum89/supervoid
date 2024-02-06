// Components
import SEO from '../components/Global/SEO/SEO'
import RecentWork from '../components/HomePage/RecentWork/RecentWork'
import About from '../components/HomePage/About/About'

export default function Home() {
  return (
    <>
      <SEO
        title="SUPERVOID | Animation, VFX, and Technical Design Studio"
        url="https://supervoid.tv"
        image="https://supervoid.tv/images/supernova-site-background.webp"
        description="SUPERVOID is an animation, vfx and technical design studio based in philadelphia. our primary output is creating dynamic and interactive media packages for artists, agencies and brands."
      />
      <main>
        <RecentWork />
        <About />
      </main>
    </>
  )
}
