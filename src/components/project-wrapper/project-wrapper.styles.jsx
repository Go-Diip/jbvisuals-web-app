import styled from "styled-components"
import SectionWrapper from "../section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"
import { PlayCircle } from "@mui/icons-material"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)``

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.pxToRem(38)};
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 35px;
  &::after {
    content: "";
    width: 40px;
    height: 1px;
    display: block;
    background: #ccc;
    margin: 0.5em 0;
  }
`

export const Location = styled.span`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: 300;
  letter-spacing: 0.7px;
  line-height: 28px;
`

export const SocialWrapper = styled.div`
  //position: fixed;
  //padding: 4em;
  padding: 5em 0 0 2em;
`

export const Architect = styled.span`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  font-weight: 300;
  letter-spacing: 0.7px;
  line-height: 28px;
`

export const ProjectDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  font-weight: 300;
  letter-spacing: 0.7px;
  line-height: 28px;
`

export const IconsWrapper = styled.div`
  text-align: left;
  margin-top: 2em;
  svg {
    fill: ${({ theme }) => theme.palette.text.content};
    width: 26px;
    transition: all 0.3s ease;
    height: auto;
  }
  a {
    margin-right: 1em;
    &:hover {
      svg {
        fill: black;
      }
    }
  }
`

export const VideoContainer = styled.div`
  margin-top: 5em;
  margin-bottom: -3em;
  display: block;
  position: relative;
  width: 100%;
  cursor: pointer;
`

export const AboutImage = styled(CustomImage)`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: block;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlayCircleIcon = styled(PlayCircle)`
  color: white;
  width: 3em;
  height: 3em;
`
