import styled from "styled-components"
import Typography from "@mui/material/Typography"
import CustomLink from "../custom-link/custom-link.component"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled.div`
  overflow: hidden;
  margin-bottom: 0 !important;
  .gatsby-image-wrapper {
    cursor: pointer;
  }
`

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  color: black;
  padding: 0.5em 0;
`

export const ViewMoreLink = styled(CustomLink)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  color: black;
  text-align: right;
  border-bottom: 1px solid black;
`

export const CardImage = styled(CustomImage)`
  transition: 0.3s all ease-in-out;
  overflow: hidden;
  //&.small {
  //  height: 200px;
  //}
  //
  //&.large {
  //  height: 500px;
  //}
  //filter: grayscale(1);
  img {
    //transition: all 0.3s ease !important;
    filter: grayscale(1);
    transition: opacity 0.25s linear, transform 0.3s ease, filter 3s ease !important;
  }

  &:hover {
    //filter: none;
    img {
      transform: scale(1.1);
      filter: none;
    }
  }
`
