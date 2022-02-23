import styled from "styled-components"
import CustomImage from "../custom-image/custom-image.component"
import { Fade } from "react-awesome-reveal"

export const Wrapper = styled.div`
  margin-top: 5em;
`

export const GalleryImage = styled(CustomImage)``

export const CustomFade = styled(Fade)`
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 2em;
  }
`
