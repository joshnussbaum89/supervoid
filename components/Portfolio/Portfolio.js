import { useState } from 'react'
import Image from 'next/image'
import ProjectModal from '../ProjectModal/ProjectModal'
import {
  portfolio,
  projects,
  projectContainer,
  image,
  projectOverlay,
} from './Portfolio.module.css'

export default function Portfolio({ projectData }) {
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
  }

  const vimeoIoImageLoader = ({ src, width, quality }) =>
    `${src}&w=${width}&q=${quality || 75}`

  return (
    <section id="portfolio" className={portfolio}>
      <h2>portfolio</h2>
      <div className={projects}>
        {projectData.map((project) => (
          <div
            className={projectContainer}
            key={project.id}
            data-id={project.id}
            data-gif={project.gif}
            data-client={project.client}
            data-project={project.project}
            data-description={project.description}
            onClick={handleModalDisplay}
          >
            <Image
              loader={vimeoIoImageLoader}
              className={image}
              src={project.gif}
              alt={`${project.client} - ${project.description}`}
              width="100%"
              height="100%"
              layout="responsive"
            />
            <div className={projectOverlay}>
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
