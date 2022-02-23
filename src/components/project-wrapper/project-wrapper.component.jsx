import React from "react"
import * as S from "./project-wrapper.styles"
import { Container } from "@mui/material"
import ProjectsGallery from "../projects-gallery/projects-gallery.component"

const ProjectWrapper = ({ title, location, architect, images }) => {
  return (
    <S.Wrapper>
      <Container>
        {title && <S.Title>{title}</S.Title>}
        {location && <S.Location>{location}</S.Location>}
        <ProjectsGallery images={images} />
      </Container>
    </S.Wrapper>
  )
}

export default ProjectWrapper
