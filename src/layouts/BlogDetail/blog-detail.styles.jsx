import styled from "styled-components"
import { IconButton, Typography } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.typography.pxToRem("60")};
  padding-bottom: ${({ theme }) => theme.typography.pxToRem("44")};
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: ${({ theme }) => theme.typography.pxToRem("103")};
    padding-bottom: ${({ theme }) => theme.typography.pxToRem("76")};
  }
`

export const Date = styled(Typography)`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 2rem;
  opacity: 0.65;
  margin-bottom: 1rem;
`

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.25rem;
  line-height: 2.75rem;
  letter-spacing: -0.36px;
  margin-bottom: 1.25rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 4rem;
    line-height: 4.5rem;
    letter-spacing: -0.64px;
  }
`

export const Image = styled(CustomImage)`
  margin-bottom: 2.25rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: ${({ theme }) => theme.typography.pxToRem("60")};
  }
`

export const Content = styled.div`
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  > *:not(.fullWidth, .size-full) {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }
  .fullWidth,
  .size-full {
    max-width: 100%;
    width: 100%;
  }

  h1 {
    line-height: normal;
  }
`

export const SocialWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
  }
`

export const SocialTitle = styled(Typography)`
  font-size: 0.875rem;
  font-weight: 900;
  line-height: 1.75rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

export const IconWrapper = styled(IconButton)`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  svg {
    width: 20px;
    height: 20px;
  }
`

export const CopyButton = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.text.light};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  svg {
    margin-right: 0.75rem;
  }
  &.copyBtn:hover {
    background-color: rgba(0, 0, 0, 0.05) !important;
  }
`

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2.25rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 3rem;
  }
`

export const AuthorImage = styled(CustomImage)`
  width: 60px;
  height: 60px;
  img {
    border-radius: 50%;
  }
`

export const AuthorName = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem("15")};
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.65;
`
