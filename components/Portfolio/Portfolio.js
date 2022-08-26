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

export default function Portfolio({ projectData, projectDataError }) {
  const [modalIsActive, setModalIsActive] = useState(false)
  const [modalData, setModalData] = useState({})

  const handleModalDisplay = (event) => {
    const { currentTarget } = event

    const gif = currentTarget.getAttribute('data-gif')
    const client = currentTarget.getAttribute('data-client')
    const project = currentTarget.getAttribute('data-project')
    const description = currentTarget.getAttribute('data-description')

    setModalIsActive(!modalIsActive)
    setModalData({ gif, client, project, description })
  }
  return (
    <section id="portfolio" className={portfolio}>
      <h2>portfolio</h2>
      {/* {projectDataError ? (
        <h3>Failed to load portfolio, please reload the page and try again</h3>
      ) : !projectData ? (
        <h3>Loading...</h3>
      ) : ( */}
      <div className={projects}>
        {projectData.map((project) => (
          <div
            className={projectContainer}
            key={project.id}
            data-gif={project.gif}
            data-client={project.client}
            data-project={project.project}
            data-description={project.description}
            onClick={handleModalDisplay}
          >
            <Image
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
      {/* ) */}
      {/* } */}
      <ProjectModal
        modalIsActive={modalIsActive}
        modalData={modalData}
        handleModalDisplay={handleModalDisplay}
      />
    </section>
  )
}
