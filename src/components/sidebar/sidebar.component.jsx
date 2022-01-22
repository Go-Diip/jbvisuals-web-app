import React from "react"
import * as S from "./sidebar.styles.jsx"
import Typography from "@mui/material/Typography"
import CustomLink from "../custom-link/custom-link.component"

const Sidebar = () => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.LinkItem>Our Work</S.LinkItem>
        <S.LinkItem url="/about/">About</S.LinkItem>
        <S.LinkItem url="/contact/">Contact</S.LinkItem>
      </S.TopWrapper>
      <S.MiddleWrapper>
        <CustomLink url="/">
          <img src="logo.png" alt="Logo" />
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
