import styled from "styled-components"
import { IconButton } from "@mui/material"

export const Wrapper = styled.nav`
  padding: 1em 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: white;
  display: none;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: flex;
    flex-direction: column;
  } ;
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuButton = styled(IconButton)`
  padding-right: 0;
  padding-left: 0;

  svg {
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain !important;
`
