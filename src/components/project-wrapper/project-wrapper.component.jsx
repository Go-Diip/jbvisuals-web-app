import React, { useState } from "react"
import * as S from "./project-wrapper.styles"
import { Container, Grid } from "@mui/material"
import PropTypes from "prop-types"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import LoadableModalVideo from "../../components/loadable-modal-video/loadable-modal-video"
import "react-modal-video/css/modal-video.min.css"
import ProjectsLightbox from "../projects-lightbox/projects-lightbox.component"
import CustomImage from "../custom-image/custom-image.component"
import { getSrc } from "gatsby-plugin-image"
import Lightbox from "react-image-lightbox"
import parse from "html-react-parser"

const ProjectWrapper = ({
  title,
  location,
  architect,
  images,
  uri,
  youtubeVideo,
  projectDescription,
  vrIframe,
}) => {
  const [isVideoOpen, setVideoOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleImgClick = index => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  if (!images) return null
  return (
    <S.Wrapper contained>
      {title && <S.Title>{title}</S.Title>}
      {location && <S.Location>{location}</S.Location>}
      <Grid container>
        <Grid item xs={12} md={8}>
          {youtubeVideo.image && youtubeVideo.videoId && (
            <S.VideoContainer
              onClick={() => (youtubeVideo?.videoId ? setVideoOpen(true) : "")}
            >
              <S.AboutImage img={youtubeVideo?.image} />
              <S.Overlay>
                <S.PlayCircleIcon />
              </S.Overlay>
            </S.VideoContainer>
          )}
          {vrIframe && <S.VrIframeWrapper>{parse(vrIframe)}</S.VrIframeWrapper>}

          {!vrIframe &&
            images.map((image, index) => (
              <S.ProjectImage
                key={`individual-project-img-${index}`}
                img={image}
                onClick={() => handleImgClick(index)}
              />
            ))}
        </Grid>
        <Grid item xs={12} md={4}>
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
        </Grid>
      </Grid>
      {youtubeVideo && (
        <LoadableModalVideo
          channel={"youtube"}
          isOpen={isVideoOpen}
          videoId={youtubeVideo.videoId}
          autoplay={1}
          onClose={() => setVideoOpen(false)}
        />
      )}
      {isOpen && (
        <Lightbox
          mainSrc={getSrc(images[photoIndex].localFile)}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={title}
        />
      )}
    </S.Wrapper>
  )
}

ProjectWrapper.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  architect: PropTypes.string,
  images: PropTypes.array.isRequired,
}

export default ProjectWrapper
