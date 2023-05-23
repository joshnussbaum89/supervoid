// Components
import Head from 'next/head'
import ServerDescription from '../components/ServersPage/Description/Description'
import ServerSpecs from '../components/ServersPage/ServerSpecs/ServerSpecs'
import Contact from '../components/ServersPage/Contact/Contact'

/**
 * Servers Page
 */
export default function ServersPage({ pathname }) {
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
        <meta property="og:title" content="SUPERVOID TV: Servers" />
        <meta property="og:url" content="https://supervoid.tv/servers" />
        <meta
          property="og:description"
          content="Philadelphia based creative team specializing in stage visuals and music videos"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://supervoid.tv/images/msg-test-pattern.webp" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <title>SUPERVOID: Servers</title>
      </Head>
      <main>
        <ServerDescription />
        <ServerSpecs />
      </main>
      <Contact pathname={pathname} />
    </>
  )
}
