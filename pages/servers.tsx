// Components
import SEO from '../components/Global/SEO/SEO'
import Description from '../components/ServersPage/Description/Description'
import Specs from '../components/ServersPage/Specs/Specs'
import Contact from '../components/ServersPage/Contact/Contact'

export default function Servers({ pathname }: { pathname: string }) {
  return (
    <>
      <SEO
        title="SUPERVOID | Servers"
        url="https://supervoid.tv/servers"
        image="https://supervoid.tv/images/msg-test-pattern.webp"
        description="We design and build custom media server racks in house to meet the needs of shows large and small. our SVX series media servers pack a big punch in a small footprint."
      />
      <main>
        <Description />
        <Specs />
      </main>
      <Contact pathname={pathname} />
    </>
  )
}
