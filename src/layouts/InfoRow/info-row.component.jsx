import React from "react"
import * as S from "./info-row.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"
import { Fade } from "react-awesome-reveal"

const InfoRow = ({ name, role, content, image, reverse }) => {
  return (
    <S.Wrapper>
      <Container>
        <Fade triggerOnce>
          <Grid
            container
            spacing={4}
            direction={reverse ? "row-reverse" : "row"}
          >
            <S.LeftGrid item xs={12} md={6}>
              <S.InfoWrapper>
                {name && <S.Text>{name}</S.Text>}
                {role && <S.Text style={{ marginBottom: "0" }}>{role}</S.Text>}
                {content && <S.Description>{parse(content)}</S.Description>}
              </S.InfoWrapper>
            </S.LeftGrid>
            <S.RightGrid item xs={12} md={6}>
              <S.ImageWrapper>
                <S.Image img={image} />
              </S.ImageWrapper>
            </S.RightGrid>
          </Grid>
        </Fade>
      </Container>
    </S.Wrapper>
  )
}

export default InfoRow
