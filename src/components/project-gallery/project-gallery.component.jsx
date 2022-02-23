import React, { useState } from "react"
import * as S from "./project-gallery.styles"
import PropTypes from "prop-types"
import { getSrc } from "gatsby-plugin-image"
import Lightbox from "react-image-lightbox"
import { Fade } from "react-awesome-reveal"

const ProjectGallery = ({ images }) => {
  const [isOpenLightBox, setIsOpenLightbox] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  if (!images) return null

  const galleryImages = images.map(({ image }) => getSrc(image?.localFile))

  return (
    <S.Wrapper>
      {images.map(({ image }, index) => (
        <S.CustomFade triggerOnce>
          <S.GalleryImage
            onClick={() => {
              setIsOpenLightbox(true)
              setPhotoIndex(index)
            }}
            img={image}
            key={index}
          />
        </S.CustomFade>
      ))}
      {isOpenLightBox && (
        <Lightbox
          mainSrc={galleryImages[photoIndex]}
          nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
          prevSrc={
            galleryImages[
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            ]
          }
          onCloseRequest={() => setIsOpenLightbox(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
        />
      )}
    </S.Wrapper>
  )
}

ProjectGallery.propTypes = {
  images: PropTypes.array,
}

export default ProjectGallery
