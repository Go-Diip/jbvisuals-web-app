import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Box, Container } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import CustomLink from "../custom-link/custom-link.component"
import MobileHeader from "./mobile-header/mobile-header.component"
import CustomButton from "../custom-button/custom-button.component"
import { Link } from "react-scroll"

const Header = ({ isHome }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const handleToggleMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  }
  return (
    <S.Wrapper>
      <Container maxWidth="xl">
        <S.NavWrapper>
          <Box className="navMobile">
            <S.MenuButton onClick={handleToggleMenu}>
              {isActiveMenu ? <CloseIcon /> : <MenuIcon />}
            </S.MenuButton>
            <CustomLink className="logo" url="/">
              <S.Logo src="/logo.png" alt="Jbvisuals" />
            </CustomLink>
            <CustomButton className="secondary" href="/contact/">
              Free Quote
            </CustomButton>
          </Box>
          <Box className="navDesktop">
            <CustomLink className="logo" url="/">
              <S.Logo src="/logo.png" alt="Jbvisuals" />
            </CustomLink>
            <Box>
              {isHome ? (
                <Link
                  className="navLink"
                  to="works-section"
                  smooth={true}
                  duration={1000}
                >
                  Our Work
                </Link>
              ) : (
                <CustomLink className="navLink" url="/#works-section">
                  Our Work
                </CustomLink>
              )}
              <CustomLink className="navLink" url="/about/">
                About
              </CustomLink>
              <CustomLink className="navLink" url="/blog/">
                Blog
              </CustomLink>
              {/*<CustomLink className="navLink" url="/our-work/">*/}
              {/*  Contact*/}
              {/*</CustomLink>*/}
              <CustomButton className="secondary" href="/contact/">
                Get Your Free Quote
              </CustomButton>
            </Box>
          </Box>
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
