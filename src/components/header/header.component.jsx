import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Box, Container } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import CustomLink from "../custom-link/custom-link.component"

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const handleToggleMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  }
  return (
    <S.Wrapper>
      <Container>
        <S.NavWrapper>
          <CustomLink url="/">
            <S.Logo src="/logo.png" alt="Logo" />
          </CustomLink>
          <Box sx={{ display: { lg: "none", xs: "block" } }}>
            <S.MenuButton onClick={handleToggleMenu}>
              {isActiveMenu ? <CloseIcon /> : <MenuIcon />}
            </S.MenuButton>
          </Box>
        </S.NavWrapper>
      </Container>
    </S.Wrapper>
  )
}
export default Header
