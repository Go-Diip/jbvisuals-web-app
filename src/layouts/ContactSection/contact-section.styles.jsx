import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 0;
  padding-bottom: 0;
  background-color: #fafafa;
`

export const ContentWrapper = styled.div`
  padding: 2rem 0;
  text-align: center;
  max-width: 750px;
  margin: auto;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 4rem 0;
  }

  h2 {
    font-weight: 600;
    margin: 1rem;
    font-size: ${({ theme }) => theme.typography.pxToRem(26)};
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(32)};
    }
  }
`

export const TopDescription = styled.h1`
  font-size: ${({ theme }) => theme.typography.pxToRem(36)};
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 42px;
  font-size: ${({ theme }) => theme.typography.pxToRem(28)};
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(38)};
  }
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
  padding: 2rem;
  height: 100%;
  &.lightGray {
    background-color: #fafafa;
  }

  &.darkGray {
    background-color: #eeeeee;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 4rem;
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.pxToRem(28)};
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 42px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(32)};
  }
`

export const ContactInfoText = styled(Typography)`
  font-size: 18px;
  a {
    color: black;
  }
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
