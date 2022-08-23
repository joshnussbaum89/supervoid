import Head from 'next/head'
import Portfolio from '../components/Portfolio/Portfolio'
import About from '../components/About/About'
import useSWR from 'swr'

const fetchProjectData = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/staticdata', fetchProjectData)

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
      <Portfolio projectData={data} projectDataError={error} />
      <About />
    </>
  )
}
