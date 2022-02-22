import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 2em 0;
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.typography.pxToRem(20)};
  margin-bottom: 1em;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const Description = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(20)};
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled(CustomImage)`
  height: 375px;
  width: 100%;
  img {
    height: 375px;
    width: 100%;
    object-fit: cover !important;
  }
`
