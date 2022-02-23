import React from "react"
import * as S from "./contact-section.styles"
import { Container, Grid } from "@mui/material"
import ContactForm from "../../components/contact-form/contact-form.component"

const ContactSection = ({ topDescription, bottomDescription }) => {
  return (
    <S.Wrapper>
      <Container maxWidth="xl">
        <S.ContentWrapper>
          {topDescription && (
            <S.TopDescription>{topDescription}</S.TopDescription>
          )}
          <S.Line />
          {bottomDescription && (
            <S.BottomDescription>{bottomDescription}</S.BottomDescription>
          )}
        </S.ContentWrapper>
        <Grid container>
          <Grid item xs={12} md={6}>
            <S.GridWrapper className="lightGray">
              <S.Title>Contact Info</S.Title>
              <S.Line className="left" />
              <S.InfoWrapper>
                <S.InfoTitle>Phone</S.InfoTitle>
                <S.InfoLink href="tel:+79180832718">
                  <i>+7 (918) 0832718</i>
                </S.InfoLink>
                <S.InfoTitle>Email</S.InfoTitle>
                <S.InfoLink className="email" href="mailto:hello@jbvisuals.co">
                  <span>hello@jbvisuals.co</span>
                </S.InfoLink>
              </S.InfoWrapper>
            </S.GridWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <S.GridWrapper className="darkGray">
              <S.RightWrapper>
                <S.Title>Drop Us a Line</S.Title>
                <S.Line />
                <ContactForm />
              </S.RightWrapper>
            </S.GridWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default ContactSection
