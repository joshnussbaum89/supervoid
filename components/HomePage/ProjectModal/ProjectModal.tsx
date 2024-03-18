// Components
import { useCallback, useEffect, useRef } from 'react'
import Image, { ImageLoader } from 'next/image'

// Styles
import styles from './ProjectModal.module.css'

// Types
import { ProjectProps, ModalProps } from '../../../types'

interface ProjectModalProps {
  vimeoLoader: ImageLoader
  projectData: ProjectProps[]
  modalIsActive: boolean
  modalData?: ModalProps
  currentProjectID: number

  setModalData: (value: React.SetStateAction<ModalProps>) => void
  setCurrentProjectID: (value: React.SetStateAction<number>) => void
  handleModalDisplay: (event: React.MouseEvent<HTMLElement>) => void
}

export default function ProjectModal({
  vimeoLoader,
  projectData,
  modalIsActive,
  setModalData,
  currentProjectID,
  modalData,
  setCurrentProjectID,
  handleModalDisplay,
}: ProjectModalProps) {
  // Ref for dialog modal
  const ProjectModalRef = useRef<HTMLDialogElement>(null)

  // Update currently active modal state
  const updateModalData = useCallback(() => {
    const { id, gif, client, project, description } = projectData[currentProjectID]

    setModalData({ id, gif, client, project, description })
  }, [projectData, currentProjectID, setModalData])

  // On left or right arrow click >> navigate left or right
  const handleNavigationClick = (direction: string) => {
    if (direction === 'previous') {
      setCurrentProjectID((currentProjectID -= 1))
    } else {
      setCurrentProjectID((currentProjectID += 1))
    }
    updateModalData()
  }

  // On left or right key press >> navigate left or right
  useEffect(() => {
    const handleArrowPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && currentProjectID > 0) {
        setCurrentProjectID((currentProjectID -= 1))
      } else if (event.key === 'ArrowRight' && currentProjectID < projectData.length - 1) {
        setCurrentProjectID((currentProjectID += 1))
      }
      updateModalData()
    }

    window.addEventListener('keydown', handleArrowPress)

    return () => {
      window.removeEventListener('keydown', handleArrowPress)
    }
  }, [currentProjectID, projectData, setCurrentProjectID, updateModalData])

  // Remove scrolling when project overlay is shown
  // Handle modal display
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')

      if (modalIsActive) {
        body?.classList.add('overlay-active')
        ProjectModalRef.current?.showModal()
      } else {
        body?.classList.remove('overlay-active')
        ProjectModalRef.current?.close()
      }
    }
  }, [modalIsActive])

  return (
    <dialog className={styles.ProjectModal} ref={ProjectModalRef}>
      <button className={styles.close} onClick={handleModalDisplay}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </button>
      <button
        className={
          currentProjectID === 0 ? `${styles.navigateLeft} ${styles.hide}` : styles.navigateLeft
        }
        onClick={() => handleNavigationClick('previous')}
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30.725px"
          height="30.725px"
          viewBox="0 0 30.725 30.725"
        >
          <g>
            <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731 L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
          </g>
        </svg>
      </button>
      <button
        className={
          currentProjectID === projectData.length - 1
            ? `${styles.navigateRight} ${styles.hide}`
            : styles.navigateRight
        }
        onClick={() => handleNavigationClick('next')}
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30.725px"
          height="30.725px"
          viewBox="0 0 30.725 30.725"
        >
          <g>
            <path d="M24.078,26.457c0.977,0.978,0.977,2.559,0,3.536c-0.488,0.488-1.128,0.731-1.77,0.731c-0.639,0-1.278-0.243-1.768-0.731 L5.914,15.362l14.629-14.63c0.977-0.977,2.559-0.976,3.535,0c0.977,0.977,0.977,2.56,0,3.536L12.984,15.362L24.078,26.457z" />
          </g>
        </svg>
      </button>

      {modalIsActive && (
        <Image
          src={modalData?.gif || ''}
          loader={vimeoLoader}
          width={740}
          height={416}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={`${modalData?.client} ${modalData?.project}`}
        />
      )}
      <div className={styles.modalInfo}>
        <h3>{modalData?.project}</h3>
        <p>
          <span className={styles.modalLabel}>Client: </span>
          {modalData?.client}
        </p>
        <p className={styles.modalDate}>
          <span className={styles.modalLabel}>Description: </span>
          {modalData?.description}
        </p>
      </div>
    </dialog>
  )
}
