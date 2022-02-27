import React, { useEffect, useState } from "react"

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const ProjectsLightbox = ({ images, projectTitle }) => {
  const [photoIndex, setPhotoIndex] = useState([0])
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (images && images.length) {
      setIsOpen(true)
    }
  }, [images])

  if (!images || !images.length) return null

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={projectTitle}
        />
      )}
    </>
  )
}

export default ProjectsLightbox
