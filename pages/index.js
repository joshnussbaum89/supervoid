// Hooks
import { useEffect } from 'react'
import Script from 'next/script'

// Components
import Head from 'next/head'
import Header from '../components/Header/Header'
import Work from '../components/Work/Work'
import About from '../components/About/About'

export default function Home({ overlayDisplayed, setOverlayDisplayed }) {
  const data = [
    {
      id: 0,
      project: 'made in america festival 2022',
      client: 'Tate McRae',
      description: 'stage visuals, media server programming, notch programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/11d8d3b4-5a04-4f7d-9d08-11cf6f5a0eec.gif?ClientID=vimeo-core-prod&Date=1662413184&Signature=61055276b57222e41e0f65997c6eda2a154bf545',
    },
    {
      id: 1,
      project: '2022 Tour',
      client: 'Rage Against The Machine',
      description: 'media server programming and operation, notch vfx',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/3d789203-2010-4941-9a87-a5e00504699d.gif?ClientID=vimeo-core-prod&Date=1661186640&Signature=12288d61c24ebd48382cf7fd50ea1191e75697d4',
    },
    {
      id: 2,
      project: 'NY State of mind tour 2022',
      client: 'Nas',
      description: 'technical director, media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/d7c06eae-fd2c-4651-9d36-bd3934dd39f4.gif?ClientID=vimeo-core-prod&Date=1662413267&Signature=3da8584e3d914f45a229a6a7d5b16fb8e3f87305',
    },
    {
      id: 3,
      project: '2022 Tour',
      client: 'SOJA',
      description: 'stage visuals ',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/488c4672-96b7-4de8-9edf-7472f1e0946f.gif?ClientID=vimeo-core-prod&Date=1657482218&Signature=289b9fe6545f987bc3205cd4faa978e1bb93d7f9',
    },
    {
      id: 4,
      project: '2022 Tour',
      client: 'Dan and Shay',
      description: 'media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7cfca9d0-058b-44ee-9e79-d65ea000d3fb.gif?ClientID=vimeo-core-prod&Date=1654465590&Signature=40d81bafb67a21d942237ad2197bf6f73f838d2e',
    },
    {
      id: 5,
      project: '2022 Tour',
      client: 'BoyWithUke',
      description: 'lighting design, programming and operation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f61353cf-ae10-4bea-a159-ac7fbdd5a513.gif?ClientID=vimeo-core-prod&Date=1655931103&Signature=941d9accec54faefe02baf8009a77ab7ac4ad3cb',
    },
    {
      id: 6,
      project: '2022 Tour',
      client: 'Caroline Polachek',
      description:
        'Multi-Camera Director, Notch Operation (Notch Programming by Cour Design)',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/fb4cc548-1e0b-4322-8ee6-20acefcd4fb1.gif?ClientID=vimeo-core-prod&Date=1647119832&Signature=ab4b71d465c2e505d2d7a282a21d4fa7a4ebe570',
    },
    {
      id: 7,
      project: '2019 Tour',
      client: 'Tom Morello',
      description: 'Lighting Design and Media Server Programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/bd4e03e1-34a3-449f-b33c-552cfd22277b.gif?ClientID=vimeo-core-prod&Date=1647118482&Signature=3f5a40a2977d58fcf62ea74b4372719610d2de67',
    },
    {
      id: 8,
      project: '2022 Tour',
      client: 'Crank Gameplays',
      description:
        'production design, lighting programming, media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/d7796bb8-6d88-4e91-b882-ee35b8a85c84.gif?ClientID=vimeo-core-prod&Date=1654465567&Signature=577c61742a7436ca802182f605bc333de19f8680',
    },
    {
      id: 9,
      project: '2022 Tour',
      client: 'Motion City Soundtrack',
      description: 'lighting programming and operation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/3c13c261-5dd0-41d2-bfef-d5cb17a5dd6a.gif?ClientID=vimeo-core-prod&Date=1655928708&Signature=d9a0aa872d86c369699193e5e601578c6c91649b',
    },
    {
      id: 10,
      project: '2021 Tour',
      client: '311',
      description: 'Multi-Camera Director, Livestreaming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b4863331-54b7-48c2-a0b7-8ea59c5eace5.gif?ClientID=vimeo-core-prod&Date=1647119127&Signature=e3be602fe40b4c22e3121c17eb9307f4a014108f',
    },
    {
      id: 11,
      project: '2021 Tour',
      client: 'The Disco Biscuits',
      description: 'Multi-Camera Director, Livestreaming, Notch Design',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b1f31aaa-dcb0-49d3-8924-d3c3b209b153.gif?ClientID=vimeo-core-prod&Date=1647118614&Signature=a7d3f03fe4202932f3711c39f8c1340819e881e5',
    },
    {
      id: 12,
      project: 'Live at Catskill Mountain Jubilee 2021',
      client: 'Lotus',
      description: 'Multi-Camera Director, Livestreaming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/4b799fed-c585-4879-9b15-2977d26c5c1f.gif?ClientID=vimeo-core-prod&Date=1647119378&Signature=c39c13abc5a9457d5ccf481ef8c2fbc0d08f20f3',
    },
    {
      id: 13,
      project: '2021 Tour',
      client: 'Thrice',
      description: 'animation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/6d31d873-a80e-4a8b-986b-94e328a175e1.gif?ClientID=vimeo-core-prod&Date=1647118572&Signature=59051ab1994f6a8d6a4d44301d9ab6c6989b9689',
    },
    {
      id: 14,
      project: 'Wicked',
      client: 'Luvrs',
      description: 'Directed, Edited, VFX by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/4f99c943-2e1b-4167-ae7e-c8a110df7477.gif?ClientID=vimeo-core-prod&Date=1647118942&Signature=41f0bc9ba1ac09ae84e75f15a55f9706e0cd6a55',
    },
    {
      id: 15,
      project: 'Lavender Hill',
      client: 'Luvrs',
      description: 'Editing and VFX by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/eeac6921-5882-4b93-8273-5819c75287f2.gif?ClientID=vimeo-core-prod&Date=1647125405&Signature=fb7789958d368e54d3948c658427e2a8ea5d8686',
    },
    {
      id: 16,
      project: 'Decibel Metal and Beer Fest 2021',
      client: 'Converge',
      description: 'Multi-Camera Director',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/fe944ac1-4a87-4868-b584-baa7d71707ab.gif?ClientID=vimeo-core-prod&Date=1647119318&Signature=754b4aafafca8e8ba94b1254377d513f020c9410',
    },
    {
      id: 17,
      project: 'Decibel Metal and Beer Fest 2021',
      client: 'Deadguy',
      description: 'Multi-Camera Director',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b71d7b8f-4090-42a8-9efa-8ddc00a158f5.gif?ClientID=vimeo-core-prod&Date=1647119371&Signature=7b93820068ea0b350551977bdfeffe07517dded4',
    },
    {
      id: 18,
      project: 'Live Performance for Decibel 200th Anniversary Special',
      client: 'Horrendous',
      description: 'Directed and Edited by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/2164d349-e09f-404b-a832-9d0791b07d35.gif?ClientID=vimeo-core-prod&Date=1647116570&Signature=781b181fbf008eddf61809284afb81527f77ce5b',
    },
    {
      id: 19,
      project: 'You Should See Me In A Crown',
      client: 'Gnarbot',
      description: 'Directed, Edited, VFX by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/73463f17-794a-4016-8e30-0d22846ef5ab.gif?ClientID=vimeo-core-prod&Date=1647119144&Signature=ed8a176e68f7167b066fe83d17e1e34761a4915a',
    },
    {
      id: 20,
      project: 'Cheebot',
      client: 'Gnarbot',
      description: 'Animation by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7e103ed7-f4b5-457a-9662-e2a1c2a7cbf5.gif?ClientID=vimeo-core-prod&Date=1647125365&Signature=235eb8c6272b0d76a4d6120c2a00a1d2a573ded4',
    },
    {
      id: 21,
      project: '2021 Tour',
      client: 'Soja',
      description: 'Animation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/a857670e-4290-4946-8bca-765614237f80.gif?ClientID=vimeo-core-prod&Date=1647118730&Signature=9e8e79a749f46563472b1c5164be19ff7f51c34e',
    },
    {
      id: 22,
      project: 'As Hell',
      client: 'Fruut',
      description: 'Animation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7ef72304-d016-40ca-afae-a38488961861.gif?ClientID=vimeo-core-prod&Date=1647119254&Signature=a5d74e63de8366cd3c874b1248d89c74a09df3af',
    },
    {
      id: 23,
      project: 'Burger Scholar',
      client: 'Trap Rabbit',
      description: 'Directed, Edited, Animation and VFX by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/cc4fd752-da1b-4ee0-b452-0e5840ec9ebf.gif?ClientID=vimeo-core-prod&Date=1647118429&Signature=c4e4b57b3f829e7b830317afefa5adc7f918a8fe',
    },
    {
      id: 24,
      project: 'Cold Sweat Music Video',
      client: 'Decouplr',
      description: 'Directed, Edited and VFX by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/4cac58fe-42e8-4318-87e3-15de2ec8c468.gif?ClientID=vimeo-core-prod&Date=1647118884&Signature=97e4cbd6fd8093d524073e5eff21e2d4d680c640',
    },
    {
      id: 25,
      project: 'Changes',
      client: 'Decouplr',
      description: 'Directed, Edited and VFX by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/a7340912-a24e-4c2c-93a3-e5d76e107fe2.gif?ClientID=vimeo-core-prod&Date=1647120364&Signature=096db4b723e55804e14e5c3311d5ba418fbad1fd',
    },
    {
      id: 26,
      project: 'Call Me',
      client: 'Luvrs',
      description: 'Editing and VFX by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/03fd7e6f-79cf-432b-828a-e127b2716cd7.gif?ClientID=vimeo-core-prod&Date=1647119066&Signature=c94d55151dc6d6adc0173f30b73d328eeba65acb',
    },
    {
      id: 27,
      project: 'Commercial for Decibel 200th Anniversary Special',
      client: 'Adroit Theory Brewing',
      description: 'Directed and Edited by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/739af316-37bd-4039-87d3-f274d8dba0f8.gif?ClientID=vimeo-core-prod&Date=1647119486&Signature=e4bcb864f13d6a09e2650febdc1b1d5269d05200',
    },
    {
      id: 28,
      project: 'Commercial Shorts',
      client: 'NextFab',
      description: 'Directed and Edited by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ced62763-22f6-4cfb-98f8-3b93b59c11b8.gif?ClientID=vimeo-core-prod&Date=1647118808&Signature=8c220193c737ab96b3d321a4995c059cb54ed62e',
    },
    {
      id: 29,
      project: 'Waiting To Die',
      client: 'Working On Dying',
      description: 'Animation by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/76d7f315-5fce-4c53-b2cc-2baa8834904f.gif?ClientID=vimeo-core-prod&Date=1647118328&Signature=4a825fe5b396845245c87cc93e6c25787464b24f',
    },
    {
      id: 30,
      project: 'Maybe',
      client: 'Taylor Kelly',
      description: 'Directed, Edited, VFX by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/1f9891d7-fdef-4987-8dd6-a5fefdc0e5e8.gif?ClientID=vimeo-core-prod&Date=1647125333&Signature=1a9abb511e014c261a70cbb53ac6c6f4d6075043',
    },
    {
      id: 31,
      project: '2019 Tour',
      client: 'Bones UK',
      description: 'Lighting Design and Media Server Programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/07534631-061c-4617-9009-ca87d094c66a.gif?ClientID=vimeo-core-prod&Date=1647119026&Signature=979b8b33b4197570ff1bc5db47110b9d13483914',
    },
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')

      // Remove scrolling when modal overlay is shown
      if (overlayDisplayed) {
        body.classList.add('overlay-active')
      } else {
        body.classList.remove('overlay-active')
      }
    }
  })

  return (
    <>
      {/* Head tag for this page only */}
      <Head>
        <meta
          name="description"
          content="Philadelphia creative team specializing in music videos, stage visuals, documentaries and more"
        />
        <meta
          name="keywords"
          content="lighting, music, video, concerts, film, design, animation, philadelphia"
        />
        <meta property="og:title" content="SUPERVOID TV" />
        <meta property="og:url" content="https://supervoid.tv" />
        <meta
          property="og:description"
          content="Philadelphia creative team specializing in music videos, stage visuals, documentaries and more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://supervoid.tv/images/supernova-site-background.webp"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@SUPERVOIDtv" />
        <meta property="twitter:creator" content="@SUPERVOIDtv" />
        <title>SUPERVOID: Psychedelic Dreams for Stage + Screen</title>
      </Head>
      {/* Animate on Scroll library (AOS) */}
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="lazyOnload"
        onLoad={() => AOS.init({ once: true })}
      />
      <Header
        overlayDisplayed={overlayDisplayed}
        setOverlayDisplayed={setOverlayDisplayed}
      />
      <main>
        <Work
          projectData={data}
          overlayDisplayed={overlayDisplayed}
          setOverlayDisplayed={setOverlayDisplayed}
        />
        <About />
      </main>
    </>
  )
}
