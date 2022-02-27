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
                  <S.InfoTitle>Phone</S.InfoTitle>
                  <S.InfoLink href="tel:+79180832718">
                    <i>+7 (918) 0832718</i>
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
