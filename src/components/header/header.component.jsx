import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Box, Container } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import CustomLink from "../custom-link/custom-link.component"
import MobileHeader from "./mobile-header/mobile-header.component"
import CustomButton from "../custom-button/custom-button.component"

const Header = ({ isHome }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const handleToggleMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  }
  return (
    <S.Wrapper>
      <Container>
        <S.NavWrapper>
          <S.MenuButton onClick={handleToggleMenu}>
            {isActiveMenu ? <CloseIcon /> : <MenuIcon />}
          </S.MenuButton>
          <CustomLink className="logo" url="/">
            <S.Logo src="/logo.png" alt="Jbvisuals" />
          </CustomLink>
          <CustomButton className="secondary" href="/contact/">
            Free Quote
          </CustomButton>
          {/*</Box>*/}
        </S.NavWrapper>
      </Container>
      <MobileHeader
        isHome={isHome}
        isActiveMenu={isActiveMenu}
        handleClose={() => setIsActiveMenu(false)}
      />
    </S.Wrapper>
  )
}
export default Header
