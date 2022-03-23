import styled from "styled-components"
import Typography from "@mui/material/Typography"
import CustomLink from "../custom-link/custom-link.component"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 0 !important;
  .gatsby-image-wrapper {
    cursor: pointer;
  }
`

export const VRBadge = styled.span`
  content: "";
  border-radius: 12px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: black;
  padding: 0.2rem 0.4rem;
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  color: white;
  z-index: 1;
  display: block;
  font-weight: bold;
`

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  color: black;
  padding: 0.5em 0;
  cursor: pointer;
`

export const ViewMoreLink = styled(CustomLink)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  color: black;
  text-align: right;
  border-bottom: 1px solid black;
`

export const CardImage = styled(CustomImage)`
  transition: 0.3s all ease;
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
    transition: opacity 0.25s linear, transform 0.3s ease, filter 0.3s ease !important;
  }

  &:hover {
    //filter: none;
    img {
      transform: scale(1.1);
      filter: none;
    }
  }
`
