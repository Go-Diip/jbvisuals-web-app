import styled from "styled-components"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import CustomButton from "../../custom-button/custom-button.component"
import CustomLink from "../../custom-link/custom-link.component"
import { Container, Typography } from "@mui/material"
import { Link } from "react-scroll"

export const ItemsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  padding: 2em 1em;
  z-index: 9999;
  width: 100%;
  position: fixed;
  top: 55px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  //.search {
  //  margin-bottom: 1em;
  //}
  //margin-top: 2rem;
`

export const InnerWrapper = styled.div``
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  //padding: 0.5rem 0;
`

export const MenuIcon = styled(IconButton)`
  z-index: 1;
`

export const InfoWrapper = styled.div``

export const LinkItem = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.main};
  display: block;
  text-align: center;
  transition: 0.3s all ease;
  font-weight: 400;
  :not(:first-child) {
    padding-top: 1em;
  }
`

export const ScrollItem = styled(Link)`
  color: ${({ theme }) => theme.palette.main};
  display: block;
  text-align: center;
  transition: 0.3s all ease;
  cursor: pointer;
  font-weight: 400;
  :not(:first-child) {
    padding-top: 1em;
  }
`
