import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  text-align: center;
`

export const Mail = styled.a`
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.primary};
  color: ${({ theme }) => theme.palette.text.primary};
  line-height: 42px;
  text-decoration: none;
  transition: 0.3s all ease;
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 42px;
  margin-bottom: 5px;
`

export const Line = styled.span`
  display: inline-block;
  width: 65px;
  height: 1px;
  background: #ccc;
  margin-bottom: 2em;

  &::after {
    content: "";
    width: 40px;
    height: 1px;
    display: block;
    background: #ccc;
    margin: 3px auto;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
