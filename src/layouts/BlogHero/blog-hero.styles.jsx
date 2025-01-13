import styled from "styled-components"
import { Typography } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { css } from "styled-components"

export const Section = styled.section`
  height: 100dvh;
  /* min-height: 500px;
  max-height: 620px; */
  position: relative;
  /* ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 500px;
    max-height: 600px;
  } */
  min-height: 500px;
  max-height: 620px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 380px;
    max-height: 456px;
  }
  .MuiContainer-root {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
  }
  &.industries {
    min-height: 500px;
    max-height: 620px;
    ${({ theme }) => theme.breakpoints.up("md")} {
      min-height: 380px;
      max-height: 456px;
    }
  }
`

export const BgFilter = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(35, 40, 53, 1);
  z-index: 1;
`

export const BgImage = styled(CustomImage)`
  position: absolute;
  inset: 0;
  z-index: 1;
  mix-blend-mode: overlay;
  img {
    filter: grayscale(100%);
  }
  &.luminosity {
    mix-blend-mode: luminosity;
  }
  ${({ position }) =>
    position &&
    css`
      img {
        object-position: ${position};
      }
    `}
`

export const TopTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 0.875rem;
  font-weight: 900;
  line-height: 1.75rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.light};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 3.5rem;
  line-height: 4.25rem;
  letter-spacing: -0.56px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 5rem;
    line-height: 5.5rem;
    letter-spacing: -0.8px;
  }
`

export const BottomSection = styled.section`
  padding: 5.5rem 0;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 600px;
  }

  > .MuiContainer-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const BottomText = styled(Typography)`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.32px;
  margin-bottom: 2rem;
  padding: 0 1rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 2.25rem;
    max-width: 900px;
  }
`

export const SpotifyBtn = styled(CustomButton)`
  svg {
    margin-right: 8px;
    height: 24px;
    width: auto;
    path {
      fill: ${({ theme }) => theme.palette.text.light};
    }
  }
  .text {
    display: flex;
    align-items: center;
  }
`
