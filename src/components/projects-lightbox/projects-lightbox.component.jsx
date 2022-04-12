import React, { useEffect, useState } from "react"

import Lightbox from "react-image-lightbox"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"
import EmailIcon from "@mui/icons-material/Email"

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
          // toolbarButtons={[
          //   <FacebookShareButton
          //     url={window.location.href}
          //     children={<FacebookIcon />}
          //   />,
          //   <TwitterShareButton
          //     url={window.location.href}
          //     children={<TwitterIcon />}
          //   />,
          //   <PinterestShareButton
          //     url={window.location.href}
          //     children={<PinterestIcon />}
          //   />,
          //   <EmailShareButton
          //     url={window.location.href}
          //     children={<EmailIcon />}
          //   />,
          // ]}
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
