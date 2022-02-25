import styled from "styled-components"
import Typography from "@mui/material/Typography"
import CustomLink from "../custom-link/custom-link.component"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled.div`
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
  transition: 0.5s all ease-in-out;
  &.small {
    height: 200px;
  }

  &.large {
    height: 500px;
  }
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`
