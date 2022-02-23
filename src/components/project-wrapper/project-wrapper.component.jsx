import React from "react"
import * as S from "./project-wrapper.styles"
import { Container, Grid } from "@mui/material"
import ProjectGallery from "../project-gallery/project-gallery.component"
import PropTypes from "prop-types"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import BehanceIcon from "../../assets/behance.svg"

const ProjectWrapper = ({ title, location, architect, images }) => {
  return (
    <S.Wrapper>
      <Container>
        {title && <S.Title>{title}</S.Title>}
        {location && <S.Location>{location}</S.Location>}
        <Grid container>
          <Grid item xs={12} md={8}>
            <ProjectGallery images={images} />
          </Grid>
          <Grid item xs={12} md={4}>
            <S.SocialWrapper>
              {architect && <S.Architect>Architect: {architect}</S.Architect>}
              <S.IconsWrapper>
                <a
                  href="https://www.facebook.com/pg/JBvisualization"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/juliabogdan_visuals/?hl=es"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.behance.net/julijabogdf901"
                  target="_blank"
                >
                  <BehanceIcon />
                </a>
              </S.IconsWrapper>
            </S.SocialWrapper>
          </Grid>
        </Grid>
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
