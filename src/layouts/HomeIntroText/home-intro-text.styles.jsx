import styled, { keyframes } from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: center;
  p {
    font-size: ${({ theme }) => theme.typography.pxToRem(28)};

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(52)};
    }
  }

  .Typewriter {
    display: inline-block;
    span {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`
