import React from "react"
import * as S from "./contact-form.styles"
import { Grid } from "@mui/material"
import CustomInput from "../custom-input/custom-input.component"

const ContactForm = ({}) => {
  return (
    <S.Wrapper>
      <form>
        <Grid container spacing={4}>
          <CustomInput
            name="yourName"
            isRequired
            autoComplete="name"
            placeholder="Name"
            halfWidth
          />
          <CustomInput
            name="yourEmail"
            isRequired
            autoComplete="email"
            placeholder="Email"
            halfWidth
          />
          <CustomInput name="yourSubject" placeholder="Subject" />
          <CustomInput
            rows={4}
            name="yourMessage"
            isRequired
            placeholder="Message"
          />
          <S.ButtonWrapper>
            <S.Button type="submit">Send</S.Button>
          </S.ButtonWrapper>
        </Grid>
      </form>
    </S.Wrapper>
  )
}

export default ContactForm
