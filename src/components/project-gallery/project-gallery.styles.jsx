import styled from "styled-components"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled.div`
  margin-top: 5em;
`

export const GalleryImage = styled(CustomImage)`
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 2em;
  }
`
