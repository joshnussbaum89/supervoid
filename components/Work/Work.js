// Components, hooks
import { useState } from 'react'
import Image from 'next/future/image'
import ProjectModal from '../ProjectModal/ProjectModal'

// Styles
import styles from './Work.module.css'

export default function Work({
  projectData,
  overlayDisplayed,
  setOverlayDisplayed,
}) {
  const [modalIsActive, setModalIsActive] = useState(false)
  const [modalData, setModalData] = useState({})
  const [currentProjectID, setCurrentProjectID] = useState(0)

  const handleModalDisplay = (event) => {
    const { currentTarget } = event

    const id = +currentTarget.getAttribute('data-id')
    const gif = currentTarget.getAttribute('data-gif')
    const client = currentTarget.getAttribute('data-client')
    const project = currentTarget.getAttribute('data-project')
    const description = currentTarget.getAttribute('data-description')

    setModalIsActive(!modalIsActive)
    setModalData({ id, gif, client, project, description })
    setCurrentProjectID(id)
    setOverlayDisplayed(!overlayDisplayed)
  }

  const vimeoIoImageLoader = ({ src, width, quality }) =>
    `${src}&w=${width}&q=${quality || 75}`

  return (
    <section id="work" className={styles.work}>
      <h2>work</h2>
      <div className={styles.projects}>
        {projectData.map((project) => (
          <div
            className={styles.projectContainer}
            key={project.id}
            data-id={project.id}
            data-gif={project.gif}
            data-client={project.client}
            data-project={project.project}
            data-description={project.description}
            onClick={handleModalDisplay}
          >
            <Image
              src={project.gif}
              className={styles.image}
              loader={vimeoIoImageLoader}
              width={720}
              height={405}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt={`${project.client} - ${project.description}`}
            />
            <div className={styles.projectOverlay}>
              <h3>{project.client}</h3>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        vimeoIoImageLoader={vimeoIoImageLoader}
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
