import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          SUPERVOID: Custom Stage Visuals, Animations, Music Videos,
          Livestreaming and more
        </title>
        <meta
          name="description"
          content="Philadelphia creative team specializing in music videos, stage visuals, documentaries and more"
        />
        <link rel="icon" href="/images/supervoid-favicon.png" />
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}
