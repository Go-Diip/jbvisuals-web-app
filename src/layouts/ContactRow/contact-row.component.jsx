import React from "react"
import * as S from "./contact-row.styles"
import { Container } from "@mui/material"
import { Fade } from "react-awesome-reveal"

const ContactRow = ({ title }) => {
  return (
    <S.Wrapper>
      <Fade triggerOnce duration={2000}>
        <Container>
          <S.TitleWrapper>
            {title && <S.Title>{title}</S.Title>} <S.Line />
          </S.TitleWrapper>
          <S.Mail href="mailto:hello@jbvisuals.com">hello@jbvisuals.co</S.Mail>
        </Container>
      </Fade>
    </S.Wrapper>
  )
}

export default ContactRow
