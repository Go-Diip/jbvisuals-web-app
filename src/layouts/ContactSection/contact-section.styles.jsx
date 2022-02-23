import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)``

export const ContentWrapper = styled.div`
  padding: 3em 0;
  text-align: center;
`

export const TopDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 42px;
`

export const BottomDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 300;
  letter-spacing: 2px;
  color: #686868;
  line-height: 42px;
`

export const Line = styled.span`
  display: inline-block;
  width: 65px;
  height: 1px;
  margin: 0 auto;
  background: #ccc;
  &::after {
    content: "";
    width: 40px;
    height: 1px;
    display: block;
    background: #ccc;
    margin: 3px auto;
  }

  &.left {
    &::after {
      content: "";
      width: 40px;
      height: 1px;
      display: block;
      background: #ccc;
      margin: 3px 0;
    }
  }
`

export const GridWrapper = styled.div`
  padding: 4em;
  height: 100%;
  &.lightGray {
    background-color: #fafafa;
  }

  &.darkGray {
    background-color: #eeeeee;
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 42px;
`

export const RightWrapper = styled.div`
  text-align: center;
`

export const InfoTitle = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.pxToRem(13)};
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 20px;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
`

export const InfoLink = styled.a`
  color: rgb(137, 137, 137);
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 300;
  letter-spacing: 0.7px;
  line-height: 20px;
  text-decoration: none;
  margin-bottom: 1em;

  &.email {
    span {
      color: rgb(50, 50, 50);
      border-bottom: 1px solid rgb(50, 50, 50);
    }
  }
`
