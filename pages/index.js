import Head from 'next/head'
import Header from '../components/Header/Header'

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
        <meta
          name="keywords"
          content="lighting, music, video, concerts, film, design, animation, philadelphia"
        />
      </Head>
      <Header />
    </>
  )
}
