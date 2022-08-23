import Image from 'next/image'
import {
  portfolio,
  projects,
  projectContainer,
  image,
  projectOverlay,
} from './Portfolio.module.css'

export default function Portfolio({ projectData, projectDataError }) {
  return (
    <section id="portfolio" className={portfolio}>
      <h2>portfolio</h2>
      {projectDataError ? (
        <h3>Failed to load portfolio, please reload the page and try again</h3>
      ) : !projectData ? (
        <h3>Loading...</h3>
      ) : (
        <div className={projects}>
          {JSON.parse(projectData).map((project) => (
            <div className={projectContainer} key={project.id}>
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
      )}
    </section>
  )
}
