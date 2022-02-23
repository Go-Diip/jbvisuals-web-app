import React from "react"
import * as S from "./projects-gallery.styles"

const ProjectsGallery = ({ images }) => {
  if (!images) return null
  return (
    <S.Wrapper>
      {images.map(({ image }, index) => (
        <S.GalleryImage img={image} key={index} />
      ))}
    </S.Wrapper>
  )
}

export default ProjectsGallery
