// Components
import Image from 'next/image'

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
          </div>
          <div
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
          </div>
        </div>
        <Image
          src={modalData.gif}
          loader={vimeoIoImageLoader}
          width={618}
          height={347}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={`${modalData.client} ${modalData.project}`}
        />
        <div className={styles.modalInfo}>
          <h3>{modalData.project}</h3>
          <p>
            <span className={styles.modalLabel}>Client: </span>
            {modalData.client}
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
