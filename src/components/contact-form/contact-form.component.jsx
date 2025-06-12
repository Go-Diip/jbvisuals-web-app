import React, { useState } from "react"
import * as S from "./contact-form.styles"
import { Grid, Typography } from "@mui/material"
import CustomInput from "../custom-input/custom-input.component"
import { useForm } from "react-hook-form"
import { contactFormApi } from "../../apis/apis"
import Spinner from "../spinner/spinner.component"
import { isBrowser } from "../../utils"

const ContactForm = ({ setSuccessMessage }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const onSubmit = async data => {
    setErrorMessage("")
    setIsLoading(true)

    console.log("data", data)

    const form = new FormData()
    form.append("yourName", data.yourName)
    form.append("email", data.email)
    form.append("message", data.message)

    contactFormApi
      .post(`/445/feedback`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(response => {
        setIsLoading(false)
        if (response.data) {
          if (response.data.status === "mail_sent") {
            if (isBrowser() && window.gtag) {
              window.gtag("event", "form_submit", {
                event_category: "Forms",
                event_action: "Submit",
                event_label: "Contact",
              })
            }
            setSuccessMessage(response.data.message)
          } else {
            setErrorMessage(response.data.message)
          }
        }
      })
  }
  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Spinner />}
        <Grid container spacing={4}>
          <CustomInput
            name="yourName"
            isRequired
            autoComplete="name"
            register={register}
            errors={errors}
            placeholder="Name"
            halfWidth
          />
          <CustomInput
            name="email"
            isRequired
            register={register}
            errors={errors}
            autoComplete="email"
            placeholder="Email"
            halfWidth
          />
          <CustomInput
            rows={4}
            name="message"
            isRequired
            register={register}
            errors={errors}
            placeholder="Message"
          />
        </Grid>
        {errorMessage && (
          <Typography
            style={{ marginTop: "2em", textAlign: "left", color: "#d32f2f" }}
          >
            <b>{errorMessage}</b>
          </Typography>
        )}
        <S.ButtonWrapper>
          <S.Button className="secondary" type="submit">
            Send
          </S.Button>
        </S.ButtonWrapper>
      </form>
    </S.Wrapper>
  )
}

export default ContactForm
