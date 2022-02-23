import styled from "styled-components"
import SectionWrapper from "../section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)``

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.pxToRem(38)};
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 35px;
  &::after {
    content: "";
    width: 40px;
    height: 1px;
    display: block;
    background: #ccc;
    margin: 0.5em 0;
  }
`

export const Location = styled.span`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: 300;
  letter-spacing: 0.7px;
  line-height: 28px;
`
