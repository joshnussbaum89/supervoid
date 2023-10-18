// Components, hooks
import { useState, useEffect } from 'react'
import Project from '../Project/Project'
import ProjectModal from '../ProjectModal/ProjectModal'

// Styles
import styles from './RecentWork.module.css'

// Types
import { ImageLoader } from 'next/image'
import { ModalProps } from '../../../types'

export default function Work() {
  const [modalIsActive, setModalIsActive] = useState(false)
  const [modalData, setModalData] = useState<ModalProps>({
    id: 0,
    gif: '',
    client: '',
    project: '',
    description: '',
  })
  const [currentProjectID, setCurrentProjectID] = useState(0)
  const [projectOverlayDisplayed, setProjectOverlayDisplayed] = useState(false)

  const projectData = [
    {
      id: 0,
      project: 'Eternal Blue Tour 2023',
      musicVideo: false,
      client: 'Spiritbox',
      description: 'stage visuals, media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/9e78d34c-b7cc-4e9b-a46b-174e97ff715e.gif?ClientID=vimeo-core-prod&Date=1684802557&Signature=f6416411099c97ad4326efbd7ca3d35dcbf77906',
    },
    {
      id: 1,
      project: 'Reunion Tour 2023',
      musicVideo: false,
      client: 'Love and Rockets',
      description: 'stage visuals, media server programming, notch programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/53b25170-2aa2-4665-8dd7-9705e5c444eb.gif?ClientID=vimeo-core-prod&Date=1684802549&Signature=e7be96579a04b654cf8ac6c42cef8cdd9b9be7dd',
    },
    {
      id: 2,
      project: "Tell Me I'm Alive Tour 2023",
      musicVideo: false,
      client: 'All Time Low',
      description: 'stage visuals, media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/6b0a6ab5-3be6-4baa-be75-ce626e64235e.gif?ClientID=vimeo-core-prod&Date=1684807571&Signature=ef34ee673fceca49eed8f4cd50eaa1863e66886f',
    },
    {
      id: 3,
      project: 'Manic Tour 2023',
      musicVideo: false,
      client: 'Wage War',
      description: 'media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/9ba1094e-6ac2-4d70-abd3-ebbd0bb881e2.gif?ClientID=vimeo-core-prod&Date=1684807578&Signature=f9b80c7e54036dde7b2be359047aca4f50b6995b',
    },
    {
      id: 4,
      project: 'made in america festival 2022',
      musicVideo: false,
      client: 'Tate McRae',
      description: 'stage visuals, media server programming, notch programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/11d8d3b4-5a04-4f7d-9d08-11cf6f5a0eec.gif?ClientID=vimeo-core-prod&Date=1662413184&Signature=61055276b57222e41e0f65997c6eda2a154bf545',
    },
    {
      id: 5,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Rage Against The Machine',
      description: 'media server programming and operation, notch vfx',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/3d789203-2010-4941-9a87-a5e00504699d.gif?ClientID=vimeo-core-prod&Date=1661186640&Signature=12288d61c24ebd48382cf7fd50ea1191e75697d4',
    },
    {
      id: 6,
      project: 'Billboard Women In Music Awards 2023',
      musicVideo: false,
      client: 'Lainey Wilson',
      description: 'stage visuals',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/996c6379-04fd-4c9f-8932-038e3795186e.gif?ClientID=vimeo-core-prod&Date=1677861690&Signature=94aebb24a991d141ff51d7e7bdc3c4bd1e86ac45',
    },
    {
      id: 7,
      project: 'Suckerpunch Tour 2023',
      musicVideo: false,
      client: 'Maggie Lindemann',
      description: 'lighting design and programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/d4645705-ce40-4e70-aed8-f8c9c366cc90.gif?ClientID=vimeo-core-prod&Date=1684802562&Signature=8e3f13b89bb31e9a7a9430dfd6d9a87ee8f00b19',
    },
    {
      id: 8,
      project: '2022 Tour',
      musicVideo: false,
      client: 'BoyWithUke',
      description: 'lighting design, programming and operation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f61353cf-ae10-4bea-a159-ac7fbdd5a513.gif?ClientID=vimeo-core-prod&Date=1655931103&Signature=941d9accec54faefe02baf8009a77ab7ac4ad3cb',
    },
    {
      id: 9,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Keshi',
      description: 'lighting design + programming, media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b35b1281-0c78-4d38-879e-4ebb3a3c2ff1.gif?ClientID=vimeo-core-prod&Date=1671303085&Signature=288462e4fd576969e981d502e291523c8613e12c',
    },
    {
      id: 10,
      project: 'SNACKMFTIME',
      musicVideo: true,
      client: 'Snacktime',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ce822c08-c49d-496a-ac2b-b6050b319c38.gif?ClientID=vimeo-core-prod&Date=1671301224&Signature=a92717bca7a65fa857bfe0fc745d5e18db4e8716',
    },
    {
      id: 11,
      project: 'Junkyard Fire',
      musicVideo: true,
      client: 'Snacktime',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f6420ada-1c80-4241-814e-f52fb59b2123.gif?ClientID=vimeo-core-prod&Date=1671301355&Signature=3795cc51eb84ab50c946d1d8a7aeff437005b3eb',
    },
    {
      id: 12,
      project: 'Tipbucket Luvr',
      musicVideo: true,
      client: 'Snacktime',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/209b7d2f-6e83-4892-8fd3-32ee517c449b.gif?ClientID=vimeo-core-prod&Date=1671301977&Signature=ce94149a6d224d6cb7bd70e6c6bb52f233b919fc',
    },
    {
      id: 13,
      project: 'Sweet Treat',
      musicVideo: true,
      client: 'Snacktime',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/051a4830-2818-4502-af88-946a6f0e4693.gif?ClientID=vimeo-core-prod&Date=1671302793&Signature=e4aee5a9e208dc81be6982d0b038bfc5d4b6749b',
    },
    {
      id: 14,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Dan and Shay',
      description: 'media server programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7cfca9d0-058b-44ee-9e79-d65ea000d3fb.gif?ClientID=vimeo-core-prod&Date=1654465590&Signature=40d81bafb67a21d942237ad2197bf6f73f838d2e',
    },
    {
      id: 15,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Ninja Sex Party',
      description: 'lighting design + programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/9f66b04d-262a-4b64-8b66-e98f68cd2eec.gif?ClientID=vimeo-core-prod&Date=1671303315&Signature=3a37dbad5021f0cbb500a043315b30a0d13348b9',
    },
    {
      id: 16,
      project: '2019 Tour',
      musicVideo: false,
      client: 'Tom Morello',
      description: 'Lighting Design and Media Server Programming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/bd4e03e1-34a3-449f-b33c-552cfd22277b.gif?ClientID=vimeo-core-prod&Date=1647118482&Signature=3f5a40a2977d58fcf62ea74b4372719610d2de67',
    },
    {
      id: 17,
      project: '2022 Tour',
      musicVideo: false,
      client: 'Motion City Soundtrack',
      description: 'lighting programming and operation',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/3c13c261-5dd0-41d2-bfef-d5cb17a5dd6a.gif?ClientID=vimeo-core-prod&Date=1655928708&Signature=d9a0aa872d86c369699193e5e601578c6c91649b',
    },
    {
      id: 18,
      project: '2022 Tour',
      musicVideo: false,
      client: 'SOJA',
      description: 'stage visuals ',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/488c4672-96b7-4de8-9edf-7472f1e0946f.gif?ClientID=vimeo-core-prod&Date=1657482218&Signature=289b9fe6545f987bc3205cd4faa978e1bb93d7f9',
    },
    {
      id: 19,
      project: '2021 Tour',
      musicVideo: false,
      client: '311',
      description: 'Multi-Camera Director, Livestreaming',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b4863331-54b7-48c2-a0b7-8ea59c5eace5.gif?ClientID=vimeo-core-prod&Date=1647119127&Signature=e3be602fe40b4c22e3121c17eb9307f4a014108f',
    },
    {
      id: 20,
      project: 'Major Tom',
      musicVideo: true,
      client: 'Laura Lizcano',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/491b30ea-4eb8-4e96-88b6-3756c7ba9d26.gif?ClientID=vimeo-core-prod&Date=1671300696&Signature=a3fa771f241197960f2c6dbdb8a8b2ede46aaaa0',
    },
    {
      id: 21,
      project: 'Salvador Dolly Parton Attorney',
      musicVideo: true,
      client: 'Muscle Tough',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/348fa8e6-420c-4405-8542-8c8ffc22b8b7.gif?ClientID=vimeo-core-prod&Date=1671301103&Signature=5e0428f3af882b5fadfa92d666b54ea5625d8ff4',
    },
    {
      id: 22,
      project: 'Wicked',
      musicVideo: true,
      client: 'Luvrs',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/4f99c943-2e1b-4167-ae7e-c8a110df7477.gif?ClientID=vimeo-core-prod&Date=1647118942&Signature=41f0bc9ba1ac09ae84e75f15a55f9706e0cd6a55',
    },
    {
      id: 23,
      project: 'Decibel Metal and Beer Fest 2021',
      musicVideo: false,
      client: 'Converge',
      description: 'Multi-Camera Director',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/fe944ac1-4a87-4868-b584-baa7d71707ab.gif?ClientID=vimeo-core-prod&Date=1647119318&Signature=754b4aafafca8e8ba94b1254377d513f020c9410',
    },
    {
      id: 24,
      project: 'Live Performance for Decibel 200th Anniversary Special',
      musicVideo: false,
      client: 'Horrendous',
      description: 'Directed and Edited by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/2164d349-e09f-404b-a832-9d0791b07d35.gif?ClientID=vimeo-core-prod&Date=1647116570&Signature=781b181fbf008eddf61809284afb81527f77ce5b',
    },
    {
      id: 25,
      project: 'You Should See Me In A Crown',
      musicVideo: true,
      client: 'Gnarbot',
      description: 'Music Video by SUPERVOID',
      gif: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/73463f17-794a-4016-8e30-0d22846ef5ab.gif?ClientID=vimeo-core-prod&Date=1647119144&Signature=ed8a176e68f7167b066fe83d17e1e34761a4915a',
    },
  ]

  const handleModalDisplay = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event

    const id = +currentTarget.getAttribute('data-id')!
    const gif = currentTarget.getAttribute('data-gif')
    const client = currentTarget.getAttribute('data-client')
    const project = currentTarget.getAttribute('data-project')
    const description = currentTarget.getAttribute('data-description')

    setModalIsActive(!modalIsActive)
    setModalData({ id, gif, client, project, description })
    setCurrentProjectID(id)
    setProjectOverlayDisplayed(!projectOverlayDisplayed)
  }

  const vimeoLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}&w=${width}&q=${quality || 75}`
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')

      // Remove scrolling when project overlay is shown
      if (projectOverlayDisplayed) {
        body?.classList.add('project-overlay-active')
      } else {
        body?.classList.remove('project-overlay-active')
      }
    }
  })

  return (
    <section id="work" className={styles.work}>
      <h2>work</h2>
      <div className={styles.projects}>
        {projectData.map((project) => (
          <Project
            key={project.id}
            project={project}
            handleModalDisplay={handleModalDisplay}
            vimeoLoader={vimeoLoader}
          />
        ))}
      </div>
      <ProjectModal
        vimeoLoader={vimeoLoader}
        projectData={projectData}
        modalIsActive={modalIsActive}
        modalData={modalData}
        setModalData={setModalData}
        currentProjectID={currentProjectID}
        setCurrentProjectID={setCurrentProjectID}
        handleModalDisplay={handleModalDisplay}
      />
    </section>
  )
}
