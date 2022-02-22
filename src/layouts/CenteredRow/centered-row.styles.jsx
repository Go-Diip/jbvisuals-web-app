import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)``

export const Content = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(25)};
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  font-weight: 300;
`
