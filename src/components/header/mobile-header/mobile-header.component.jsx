import React from "react"
import { Fade } from "@mui/material"

import * as S from "./mobile-header.styles.jsx"

const MobileHeader = ({ isHome, isActiveMenu, handleClose }) => {
  return (
    <Fade in={isActiveMenu} mountOnEnter unmountOnExit>
      <S.ItemsWrapper id="mobileItemsWrapper">
        <S.InnerWrapper>
          {isHome ? (
            <S.ScrollItem
              onClick={handleClose}
              to="works-section"
              smooth={true}
              duration={1000}
            >
              Our Work
            </S.ScrollItem>
          ) : (
            <S.LinkItem onClick={handleClose} url="/#works-section">
              Our Work
            </S.LinkItem>
          )}
          <S.LinkItem onClick={handleClose} url="/about/">
            About
          </S.LinkItem>
          <S.LinkItem onClick={handleClose} url="/contact/">
            Contact
          </S.LinkItem>
        </S.InnerWrapper>
      </S.ItemsWrapper>
    </Fade>
  )
}
export default MobileHeader
