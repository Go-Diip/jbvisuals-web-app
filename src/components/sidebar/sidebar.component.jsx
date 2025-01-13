import React from "react"
import * as S from "./sidebar.styles.jsx"
import Typography from "@mui/material/Typography"
import CustomLink from "../custom-link/custom-link.component"
import { Fade } from "react-awesome-reveal"

const Sidebar = ({ isHome }) => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        {isHome ? (
          <S.ScrollItem to="works-section" smooth={true} duration={1000}>
            Our Work
          </S.ScrollItem>
        ) : (
          <S.LinkItem url="/#works-section">Our Work</S.LinkItem>
        )}
        <S.LinkItem url="/about/">About</S.LinkItem>
        <S.LinkItem url="/blog/">Blog</S.LinkItem>
        <S.LinkItem url="/contact/">Contact</S.LinkItem>
      </S.TopWrapper>
      <S.MiddleWrapper>
        <CustomLink url="/">
          <img src="/logo.png" alt="Logo" />
        </CustomLink>
      </S.MiddleWrapper>
      <S.BottomWrapper>
        <Typography>
          ©{new Date().getFullYear()} JB Visuals. <br /> All Rights Reserved
        </Typography>
      </S.BottomWrapper>
    </S.Wrapper>
  )
}
export default Sidebar
