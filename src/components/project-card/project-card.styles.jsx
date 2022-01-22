import styled from "styled-components"
import Typography from "@mui/material/Typography"
import CustomLink from "../custom-link/custom-link.component"

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
`
