import styled from "styled-components"
import { IconButton } from "@mui/material"

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: white;
  //display: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  .navDesktop {
    display: none;
    position: relative;
    width: 100%;
    justify-content: space-between;

    .navLink {
      padding: 0 1rem;
      font-weight: 400;
    }
    .logo {
      display: flex;
      align-items: center;
      img {
        position: absolute;
        width: 80px;
        height: auto;
      }
    }
    .secondary {
      margin-left: 1rem;
    }
  }

  .navMobile {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
      position: absolute;
      height: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .navMobile {
      display: none;
    }
    .navDesktop {
      display: flex;
      align-items: center;
    }
  }
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
  width: 70px;
  height: 100%;
  object-fit: contain !important;
`
