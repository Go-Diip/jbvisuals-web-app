import React, { useState } from "react"
import * as S from "./project-gallery.styles"
import PropTypes from "prop-types"
import { getSrc } from "gatsby-plugin-image"
import Lightbox from "react-image-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import { Box } from "@mui/material"

const ProjectGallery = ({ images }) => {
  if (!images) return null

  const galleryImages = images.map(({ image }) => getSrc(image?.localFile))

  return (
    <S.Wrapper>
      <SRLWrapper>
        {images.map(({ image }, index) => (
          <S.GalleryImage img={image} key={index} />
        ))}
      </SRLWrapper>
    </S.Wrapper>
  )
}

ProjectGallery.propTypes = {
  images: PropTypes.array,
}

export default ProjectGallery
