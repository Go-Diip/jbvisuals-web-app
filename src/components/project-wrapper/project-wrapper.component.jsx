import React from "react"
import * as S from "./project-wrapper.styles"
import { Container } from "@mui/material"
import ProjectGallery from "../project-gallery/project-gallery.component"
import PropTypes from "prop-types"

const ProjectWrapper = ({ title, location, architect, images }) => {
  return (
    <S.Wrapper>
      <Container>
        {title && <S.Title>{title}</S.Title>}
        {location && <S.Location>{location}</S.Location>}
        <ProjectGallery images={images} />
      </Container>
    </S.Wrapper>
  )
}

ProjectWrapper.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  architect: PropTypes.string,
  images: PropTypes.array,
}

export default ProjectWrapper
