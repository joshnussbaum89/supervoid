// Components
import SEO from '../components/Global/SEO/SEO'
import Description from '../components/ServersPage/Description/Description'
import Specs from '../components/ServersPage/Specs/Specs'
import Contact from '../components/ServersPage/Contact/Contact'

/**
 * Servers Page
 */
export default function ServersPage({ pathname }: { pathname: string }) {
  return (
    <>
      <SEO
        title="SUPERVOID: Servers"
        url="https://supervoid.tv/servers"
        image="https://supervoid.tv/images/msg-test-pattern.webp"
        description="Philadelphia based creative team specializing in stage visuals and music videos"
      />
      <main>
        <Description />
        <Specs />
      </main>
      <Contact pathname={pathname} />
    </>
  )
}
