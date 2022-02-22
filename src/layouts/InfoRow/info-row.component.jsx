import React from "react"
import * as S from "./info-row.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"

const InfoRow = ({ name, role, description, image, reverse }) => {
  return (
    <S.Wrapper>
      <Container>
        <Grid container spacing={4} direction={reverse ? "row-reverse" : "row"}>
          <Grid item sm={12} md={6}>
            <S.InfoWrapper>
              {name && <S.Text>{name}</S.Text>}
              {role && <S.Text>{role}</S.Text>}
              {description && (
                <S.Description>{parse(description)}</S.Description>
              )}
            </S.InfoWrapper>
          </Grid>
          <Grid item sm={12} md={6}>
            <S.ImageWrapper>
              <S.Image img={image} />
            </S.ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default InfoRow
