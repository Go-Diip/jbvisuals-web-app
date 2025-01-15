import React, { useState } from "react"
import * as S from "./contact-section.styles"
import { Container, Grid, Typography } from "@mui/material"
import ContactForm from "../../components/contact-form/contact-form.component"
import { Fade } from "react-awesome-reveal"

const ContactSection = ({ topDescription, bottomDescription }) => {
  const [successMessage, setSuccessMessage] = useState("")
  return (
    <S.Wrapper>
      <Container maxWidth="xl">
        <Fade triggerOnce>
          <S.ContentWrapper>
            {topDescription && (
              <S.TopDescription>{topDescription}</S.TopDescription>
            )}
            <S.Line />
            {bottomDescription && (
              <S.BottomDescription>{bottomDescription}</S.BottomDescription>
            )}
          </S.ContentWrapper>
        </Fade>
        <Fade triggerOnce>
          <Grid container>
            <Grid item xs={12} md={6}>
              <S.GridWrapper className="lightGray">
                <S.Title>Contact Info</S.Title>
                <S.Line className="left" />
                <S.InfoWrapper>
                  {/*<S.InfoTitle>WhatsApp</S.InfoTitle>*/}
                  {/*<S.InfoLink href="https://wa.me/79180832718">*/}
                  {/*  <i>+7 918 083-27-18</i>*/}
                  {/*</S.InfoLink>*/}
                  <S.InfoTitle>Ecuador</S.InfoTitle>
                  <S.InfoLink href="tel:+593969097789">
                    <i>+593 96-909-7789</i>
                  </S.InfoLink>
                  <S.InfoTitle>Switzerland</S.InfoTitle>
                  <S.InfoLink href="tel:+41765838361">
                    <i>+41 76 583 83 61</i>
                  </S.InfoLink>
                  <S.InfoTitle>Email</S.InfoTitle>
                  <S.InfoLink
                    className="email"
                    href="mailto:hello@jbvisuals.co"
                  >
                    <span>hello@jbvisuals.co</span>
                  </S.InfoLink>
                </S.InfoWrapper>
              </S.GridWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              <S.GridWrapper className="darkGray">
                {successMessage ? (
                  <Typography
                    sx={{
                      display: "flex",
                      height: "100%",
                      fontSize: "1.5rem",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {successMessage}
                  </Typography>
                ) : (
                  <S.RightWrapper>
                    <S.Title>Drop Us a Line</S.Title>
                    <S.Line />
                    <ContactForm setSuccessMessage={setSuccessMessage} />
                  </S.RightWrapper>
                )}
              </S.GridWrapper>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </S.Wrapper>
  )
}

export default ContactSection
