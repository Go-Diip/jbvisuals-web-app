import styled from "styled-components"
import CustomLink from "../custom-link/custom-link.component"

export const Wrapper = styled.nav`
  padding: 2em 1em;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: white;
  width: ${({ theme }) => theme.sidebarWidth}px;
  display: none;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: flex;
    flex-direction: column;
  } ;
`

export const TopWrapper = styled.div``

export const LinkItem = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.main};
  display: block;
  text-align: center;
  transition: 0.3s all ease;
  font-weight: 400;
  :not(:first-child) {
    padding-top: 1em;
  }
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`

export const MiddleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
  }
`

export const BottomWrapper = styled.div`
  p {
    text-align: center;
    color: ${({ theme }) => theme.palette.text.content};
    font-size: ${({ theme }) => theme.typography.pxToRem(11)};
  }
`
