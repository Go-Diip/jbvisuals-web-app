import React from "react"
import * as S from "./centered-row.styles"
import parse from "html-react-parser"
import { Container } from "@mui/material"
import { Fade } from "react-awesome-reveal"

const CenteredRow = ({ content }) => {
  return (
    <S.Wrapper>
      <Fade riggerOnce>
        <Container maxWidth="md">
          {content && <S.Content>{parse(content)}</S.Content>}
        </Container>
      </Fade>
    </S.Wrapper>
  )
}

export default CenteredRow
