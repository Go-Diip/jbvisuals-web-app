import React from "react"

import * as S from "./footer.styles"
import Container from "@mui/material/Container"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import BehanceIcon from "./../../assets/behance.svg"

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <Container>
        <S.Logo src="/logo.png" alt="logo" />
        <S.Social>
          {/*<a href="https://www.facebook.com/pg/JBvisualization" target="_blank">*/}
          {/*  <FacebookIcon />*/}
          {/*</a>*/}
          <a
            href="https://www.instagram.com/jbvisuals_archviz/?hl=es"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a href="https://www.behance.net/jbvisuals_archviz" target="_blank">
            <BehanceIcon />
          </a>
        </S.Social>
        <S.Copyright>
          ©{new Date().getFullYear()} All Rights Reserved
          <br />
          Powered by{" "}
          <a
            target="_blank"
            style={{ color: "inherit" }}
            href="https://godiip.com/?utm_source=jb+visuals&utm_medium=link+on+bottom+of+website&utm_campaign=jb+visuals+powered+by+link"
          >
            Diip
          </a>
        </S.Copyright>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
