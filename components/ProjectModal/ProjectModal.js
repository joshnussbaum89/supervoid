// TODO: show/hide navigation arrows when all the way left or right

import Image from 'next/image'
import {
  projectModal,
  active,
  modalContent,
  close,
  top,
  bottom,
  projectNavigation,
  navigateLeft,
  navigateRight,
  image,
  modalInfo,
  modalClient,
  modalProject,
  modalLabel,
  modalDate,
} from './ProjectModal.module.css'

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
  const updateModalData = () => {
    const { id, gif, client, project, description } =
      projectData[currentProjectID]

    setModalData({ id, gif, client, project, description })
  }

  const handleNavigationClick = (direction) => {
    if (direction === 'previous') {
      setCurrentProjectID((currentProjectID -= 1))
    } else {
      setCurrentProjectID((currentProjectID += 1))
    }

    updateModalData()
  }

  return (
    <>
      {modalIsActive ? (
        <div className={`${projectModal} ${active}`}>
          <div className={modalContent}>
            <div className={close} onClick={handleModalDisplay}>
              <div className={top}></div>
              <div className={bottom}></div>
            </div>
            <div className={projectNavigation}>
              <div
                className={navigateLeft}
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
                className={navigateRight}
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
              className={image}
              loader={vimeoIoImageLoader}
              src={modalData.gif}
              alt={`${modalData.client} ${modalData.project}`}
              width="100%"
              height="100%"
              layout="responsive"
            />
            <div className={modalInfo}>
              <h3 className={modalClient}>{modalData.client}</h3>
              <p className={modalProject}>
                <span className={modalLabel}>Project: </span>
                {modalData.project}
              </p>
              <p className={modalDate}>
                <span className={modalLabel}>Description: </span>
                {modalData.description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={projectModal}></div>
      )}
    </>
  )
}
