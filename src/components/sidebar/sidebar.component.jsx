import React from "react"
import * as S from "./sidebar.styles.jsx"
import Typography from "@mui/material/Typography"
import CustomLink from "../custom-link/custom-link.component"
import { Fade } from "react-awesome-reveal"
import { graphql, useStaticQuery } from "gatsby"

const Sidebar = () => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.LinkItem>Our Work</S.LinkItem>
        <S.LinkItem url="/about/">About</S.LinkItem>
        <S.LinkItem url="/contact/">Contact</S.LinkItem>
      </S.TopWrapper>
      <S.MiddleWrapper>
        <Fade direction="up" triggerOnce>
          <CustomLink url="/">
            <img src="/logo.png" alt="Logo" />
          </CustomLink>
        </Fade>
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
