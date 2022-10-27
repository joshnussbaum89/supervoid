// Components
import Image from 'next/future/image'
import Arrow from '../../Global/Arrow/Arrow'

// Styles
import styles from './ProjectModal.module.css'

export default function ProjectModal({
  vimeoIoImageLoader,
  projectData,
  modalIsActive,
  modalData,
  setModalData,
  currentProjectID,
  setCurrentProjectID,
  handleModalDisplay,
}) {
  // Update currently active modal state
  const updateModalData = () => {
    const { id, gif, client, project, description } =
      projectData[currentProjectID]

    setModalData({ id, gif, client, project, description })
  }

  // User clicks modal arrow >> navigate left or right
  const handleNavigationClick = (direction) => {
    if (direction === 'previous') {
      setCurrentProjectID((currentProjectID -= 1))
    } else {
      setCurrentProjectID((currentProjectID += 1))
    }

    updateModalData()
  }

  return modalIsActive ? (
    <div className={`${styles.projectModal} ${styles.active}`}>
      <div className={styles.modalContent}>
        <div className={styles.close} onClick={handleModalDisplay}>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.projectNavigation}>
          <div
            className={
              currentProjectID === 0
                ? `${styles.navigateLeft} ${styles.hide}`
                : styles.navigateLeft
            }
            onClick={() => handleNavigationClick('previous')}
          >
            <Arrow direction="left" size="30.725" />
          </div>
          <div
            className={
              currentProjectID === projectData.length - 1
                ? `${styles.navigateRight} ${styles.hide}`
                : styles.navigateRight
            }
            onClick={() => handleNavigationClick('next')}
          >
            <Arrow direction="right" size="30.725" />
          </div>
        </div>
        <Image
          src={modalData.gif}
          className={styles.image}
          loader={vimeoIoImageLoader}
          width={618}
          height={347}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={`${modalData.client} ${modalData.project}`}
        />
        <div className={styles.modalInfo}>
          <h3>{modalData.client}</h3>
          <p>
            <span className={styles.modalLabel}>Project: </span>
            {modalData.project}
          </p>
          <p className={styles.modalDate}>
            <span className={styles.modalLabel}>Description: </span>
            {modalData.description}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.projectModal}></div>
  )
}
