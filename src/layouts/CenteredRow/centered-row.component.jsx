import React from "react"
import * as S from "./centered-row.styles"
import parse from "html-react-parser"
import { Container } from "@mui/material"

const CenteredRow = ({ content }) => {
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        {content && <S.Content>{parse(content)}</S.Content>}
      </Container>
    </S.Wrapper>
  )
}

export default CenteredRow
