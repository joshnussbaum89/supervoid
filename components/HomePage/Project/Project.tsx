import Image, { ImageLoader } from 'next/image'
import { motion } from 'framer-motion'
import styles from './Project.module.css'

// Types
import { ProjectProps } from '../../../types'

export default function Project({
  project,
  handleModalDisplay,
  vimeoLoader,
}: {
  project: ProjectProps
  handleModalDisplay: (e: React.MouseEvent<HTMLElement>) => void
  vimeoLoader: ImageLoader
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.projectContainer}
      key={project.id}
      data-id={project.id}
      data-gif={project.gif}
      data-client={project.client}
      data-project={project.project}
      data-description={project.description}
      onClick={handleModalDisplay}
      tabIndex={0}
    >
      <Image
        src={project.gif}
        loader={vimeoLoader}
        width={740}
        height={416}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt={`${project.client} - ${project.description}`}
      />
      <div className={styles.projectOverlay}>
        <h3>{project.musicVideo ? project.project : project.client}</h3>
      </div>
    </motion.article>
  )
}
