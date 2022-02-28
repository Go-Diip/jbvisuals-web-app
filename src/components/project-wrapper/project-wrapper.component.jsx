import React, { useState } from "react"
import * as S from "./project-wrapper.styles"
import { Container, Grid } from "@mui/material"
import PropTypes from "prop-types"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import { Fade } from "react-awesome-reveal"
import parse from "html-react-parser"
import LoadableModalVideo from "../../components/loadable-modal-video/loadable-modal-video"
import "react-modal-video/css/modal-video.min.css"
import ProjectsLightbox from "../projects-lightbox/projects-lightbox.component"
import CustomImage from "../custom-image/custom-image.component"
import { getSrc } from "gatsby-plugin-image"

const ProjectWrapper = ({
  title,
  location,
  architect,
  images,
  uri,
  youtubeVideo,
  projectDescription,
}) => {
  const [isVideoOpen, setVideoOpen] = useState(false)
  const [lightBoxImages, setLightboxImages] = useState([])
  const handleSetLightboxImages = () => {
    if (images) {
      setLightboxImages(images.map(image => getSrc(image.localFile)))
    }
  }
  return (
    <S.Wrapper>
      <Container>
        {title && <S.Title>{title}</S.Title>}
        {location && <S.Location>{location}</S.Location>}
        <Grid container>
          <Grid item xs={12} md={8}>
            {youtubeVideo.image && youtubeVideo.videoId && (
              <S.VideoContainer
                onClick={() =>
                  youtubeVideo?.videoId ? setVideoOpen(true) : ""
                }
              >
                <S.AboutImage img={youtubeVideo?.image} />
                <S.Overlay>
                  <S.PlayCircleIcon />
                </S.Overlay>
              </S.VideoContainer>
            )}

            {images.map(image => (
              <CustomImage
                style={{ margin: "1em 0" }}
                img={image}
                onClick={handleSetLightboxImages}
              />
            ))}

            <ProjectsLightbox images={lightBoxImages} projectTitle={title} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Fade triggerOnce>
              <S.SocialWrapper>
                {architect && <S.Architect>Architect: {architect}</S.Architect>}
                {projectDescription && (
                  <S.ProjectDescription>
                    {parse(projectDescription)}
                  </S.ProjectDescription>
                )}
                <S.IconsWrapper>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://jbvisuals.co${uri}`}
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://jbvisuals.co${uri}`}
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?&url=https://jbvisuals.co${uri}`}
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
      <LoadableModalVideo
        channel={"youtube"}
        isOpen={isVideoOpen}
        videoId={youtubeVideo.videoId}
        autoplay={1}
        onClose={() => setVideoOpen(false)}
      />
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
