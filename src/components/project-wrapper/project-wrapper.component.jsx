import React from "react"
import * as S from "./project-wrapper.styles"
import { Container, Grid } from "@mui/material"
import ProjectGallery from "../project-gallery/project-gallery.component"
import PropTypes from "prop-types"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import { Fade } from "react-awesome-reveal"

const ProjectWrapper = ({ title, location, architect, images, uri }) => {
  return (
    <S.Wrapper>
      <Container>
        <Fade direction={"down"} triggerOnce>
          {title && <S.Title>{title}</S.Title>}
          {location && <S.Location>{location}</S.Location>}
        </Fade>
        <Grid container>
          <Grid item xs={12} md={8}>
            <ProjectGallery images={images} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Fade>
              <S.SocialWrapper>
                {architect && <S.Architect>Architect: {architect}</S.Architect>}
                <S.IconsWrapper>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://jbvisualsproduction.gatsbyjs.io${uri}`}
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://jbvisualsproduction.gatsbyjs.io${uri}`}
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?&url=https://jbvisualsproduction.gatsbyjs.io${uri}`}
                    target="_blank"
                  >
                    <TwitterIcon />
                  </a>
                </S.IconsWrapper>
              </S.SocialWrapper>
            </Fade>
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
