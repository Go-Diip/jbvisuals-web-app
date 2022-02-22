import React from "react"
import * as S from "./contact-row.styles"
import { Container } from "@mui/material"

const ContactRow = ({ title }) => {
  return (
    <S.Wrapper>
      <Container>
        <S.TitleWrapper>
          {title && <S.Title>{title}</S.Title>} <S.Line />
        </S.TitleWrapper>
        <S.Mail href="mailto:hello@jbvisuals.com">hello@jbvisuals.co</S.Mail>
      </Container>
    </S.Wrapper>
  )
}

export default ContactRow
