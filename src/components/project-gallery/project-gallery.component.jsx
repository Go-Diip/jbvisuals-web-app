import React from "react"
import * as S from "./project-gallery.styles"
import PropTypes from "prop-types"

const ProjectGallery = ({ images }) => {
  if (!images) return null
  return (
    <S.Wrapper>
      {images.map(({ image }, index) => (
        <S.GalleryImage img={image} key={index} />
      ))}
    </S.Wrapper>
  )
}

ProjectGallery.propTypes = {
  images: PropTypes.array,
}

export default ProjectGallery
