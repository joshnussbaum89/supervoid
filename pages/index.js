// Components
import Head from 'next/head'
import Work from '../components/HomePage/Work/Work'
import About from '../components/HomePage/About/About'

/**
 * Home Page
 */
export default function Home() {
  const data = [
    {
      id: 0,
      project: 'Billboard Women In Music Awards 2023',
      musicVideo: false,
      client: 'Lainey Wilson',
      description: 'stage visuals',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/996c6379-04fd-4c9f-8932-038e3795186e.gif?ClientID=vimeo-core-prod&Date=1677861690&Signature=94aebb24a991d141ff51d7e7bdc3c4bd1e86ac45',
    },
    {
      id: 1,
      project: '2023 Festival Dates',
      musicVideo: false,
      client: 'Spiritbox',
      description: 'stage visuals',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/43a3ab08-3e26-4239-a1bd-ac085cca8078.gif?ClientID=vimeo-core-prod&Date=1677861562&Signature=5f64567014549f2efa2bcfbf34405b0f894506e9',
    },
    {
      id: 2,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Rage Against The Machine',
      description: 'media server programming and operation, notch vfx',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/3d789203-2010-4941-9a87-a5e00504699d.gif?ClientID=vimeo-core-prod&Date=1661186640&Signature=12288d61c24ebd48382cf7fd50ea1191e75697d4',
    },
    {
      id: 3,
      project: '2022 Tour',
      musicVideo: false,
      client: 'BoyWithUke',
      description: 'lighting design, programming and operation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f61353cf-ae10-4bea-a159-ac7fbdd5a513.gif?ClientID=vimeo-core-prod&Date=1655931103&Signature=941d9accec54faefe02baf8009a77ab7ac4ad3cb',
    },
    {
      id: 4,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Keshi',
      description: 'lighting design + programming, media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b35b1281-0c78-4d38-879e-4ebb3a3c2ff1.gif?ClientID=vimeo-core-prod&Date=1671303085&Signature=288462e4fd576969e981d502e291523c8613e12c',
    },
    {
      id: 5,
      project: 'made in america festival 2022',
      musicVideo: false,
      client: 'Tate McRae',
      description: 'stage visuals, media server programming, notch programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/11d8d3b4-5a04-4f7d-9d08-11cf6f5a0eec.gif?ClientID=vimeo-core-prod&Date=1662413184&Signature=61055276b57222e41e0f65997c6eda2a154bf545',
    },
    {
      id: 6,
      project: 'SNACKMFTIME',
      musicVideo: true,
      client: 'Snacktime',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ce822c08-c49d-496a-ac2b-b6050b319c38.gif?ClientID=vimeo-core-prod&Date=1671301224&Signature=a92717bca7a65fa857bfe0fc745d5e18db4e8716',
    },
    {
      id: 7,
      project: 'Junkyard Fire',
      musicVideo: true,
      client: 'Snacktime',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f6420ada-1c80-4241-814e-f52fb59b2123.gif?ClientID=vimeo-core-prod&Date=1671301355&Signature=3795cc51eb84ab50c946d1d8a7aeff437005b3eb',
    },
    {
      id: 8,
      project: 'Tipbucket Luvr',
      musicVideo: true,
      client: 'Snacktime',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/209b7d2f-6e83-4892-8fd3-32ee517c449b.gif?ClientID=vimeo-core-prod&Date=1671301977&Signature=ce94149a6d224d6cb7bd70e6c6bb52f233b919fc',
    },
    {
      id: 9,
      project: 'Sweet Treat',
      musicVideo: true,
      client: 'Snacktime',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/051a4830-2818-4502-af88-946a6f0e4693.gif?ClientID=vimeo-core-prod&Date=1671302793&Signature=e4aee5a9e208dc81be6982d0b038bfc5d4b6749b',
    },
    {
      id: 10,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Dan and Shay',
      description: 'media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7cfca9d0-058b-44ee-9e79-d65ea000d3fb.gif?ClientID=vimeo-core-prod&Date=1654465590&Signature=40d81bafb67a21d942237ad2197bf6f73f838d2e',
    },
    {
      id: 11,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Ninja Sex Party',
      description: 'lighting design + programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/9f66b04d-262a-4b64-8b66-e98f68cd2eec.gif?ClientID=vimeo-core-prod&Date=1671303315&Signature=3a37dbad5021f0cbb500a043315b30a0d13348b9',
    },
    {
      id: 12,
      project: '2019 Tour',
      musicVideo: false,
      client: 'Tom Morello',
      description: 'Lighting Design and Media Server Programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/bd4e03e1-34a3-449f-b33c-552cfd22277b.gif?ClientID=vimeo-core-prod&Date=1647118482&Signature=3f5a40a2977d58fcf62ea74b4372719610d2de67',
    },
    {
      id: 13,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Motion City Soundtrack',
      description: 'lighting programming and operation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/3c13c261-5dd0-41d2-bfef-d5cb17a5dd6a.gif?ClientID=vimeo-core-prod&Date=1655928708&Signature=d9a0aa872d86c369699193e5e601578c6c91649b',
    },
    {
      id: 14,
      project: '2022 Tour',
      musicVideo: false,
      client: 'SOJA',
      description: 'stage visuals ',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/488c4672-96b7-4de8-9edf-7472f1e0946f.gif?ClientID=vimeo-core-prod&Date=1657482218&Signature=289b9fe6545f987bc3205cd4faa978e1bb93d7f9',
    },
    {
      id: 15,
      project: '2021 Tour',
      musicVideo: false,
      client: '311',
      description: 'Multi-Camera Director, Livestreaming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b4863331-54b7-48c2-a0b7-8ea59c5eace5.gif?ClientID=vimeo-core-prod&Date=1647119127&Signature=e3be602fe40b4c22e3121c17eb9307f4a014108f',
    },
    {
      id: 16,
      project: 'Major Tom',
      musicVideo: true,
      client: 'Laura Lizcano',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/491b30ea-4eb8-4e96-88b6-3756c7ba9d26.gif?ClientID=vimeo-core-prod&Date=1671300696&Signature=a3fa771f241197960f2c6dbdb8a8b2ede46aaaa0',
    },
    {
      id: 17,
      project: 'Salvador Dolly Parton Attorney',
      musicVideo: true,
      client: 'Muscle Tough',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/348fa8e6-420c-4405-8542-8c8ffc22b8b7.gif?ClientID=vimeo-core-prod&Date=1671301103&Signature=5e0428f3af882b5fadfa92d666b54ea5625d8ff4',
    },
    {
      id: 18,
      project: 'Wicked',
      musicVideo: true,
      client: 'Luvrs',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/4f99c943-2e1b-4167-ae7e-c8a110df7477.gif?ClientID=vimeo-core-prod&Date=1647118942&Signature=41f0bc9ba1ac09ae84e75f15a55f9706e0cd6a55',
    },
    {
      id: 19,
      project: 'Decibel Metal and Beer Fest 2021',
      musicVideo: false,
      client: 'Converge',
      description: 'Multi-Camera Director',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/fe944ac1-4a87-4868-b584-baa7d71707ab.gif?ClientID=vimeo-core-prod&Date=1647119318&Signature=754b4aafafca8e8ba94b1254377d513f020c9410',
    },
    {
      id: 20,
      project: 'Live Performance for Decibel 200th Anniversary Special',
      musicVideo: false,
      client: 'Horrendous',
      description: 'Directed and Edited by SUPERVOID.tv',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/2164d349-e09f-404b-a832-9d0791b07d35.gif?ClientID=vimeo-core-prod&Date=1647116570&Signature=781b181fbf008eddf61809284afb81527f77ce5b',
    },
    {
      id: 21,
      project: 'You Should See Me In A Crown',
      musicVideo: true,
      client: 'Gnarbot',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/73463f17-794a-4016-8e30-0d22846ef5ab.gif?ClientID=vimeo-core-prod&Date=1647119144&Signature=ed8a176e68f7167b066fe83d17e1e34761a4915a',
    },
  ]

  return (
    <>
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
        <meta
          name="google-site-verification"
          content="zX9VfT0iiNgGZmfY-EzVrlc5JtJOwiTtZm3TPPBog9w"
        />
        <title>SUPERVOID: Psychedelic Dreams for Stage + Screen</title>
      </Head>
      <main>
        <Work projectData={data} />
        <About />
      </main>
    </>
  )
}
