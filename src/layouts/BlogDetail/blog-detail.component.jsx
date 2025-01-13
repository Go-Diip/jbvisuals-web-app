import React from "react"
import * as S from "./blog-detail.styles"
import { Container, Stack } from "@mui/material"
import parse from "html-react-parser"
import LinkedinIcon from "../../assets/linkedin-blue.svg"
import FacebookIcon from "../../assets/facebook-blue.svg"
import XIcon from "../../assets/x-blue.svg"
import CopyIcon from "../../assets/copy.svg"

const BlogDetail = ({
  date,
  title,
  featuredImage,
  content,
  slug,
  postFields,
  author,
}) => {
  const copyToClipboard = toCopy => {
    const el = document.createElement(`textarea`)
    el.value = toCopy
    el.setAttribute(`readonly`, ``)
    el.style.position = `absolute`
    el.style.left = `-9999px`
    document.body.appendChild(el)
    el.select()
    document.execCommand(`copy`)
    document.body.removeChild(el)
  }

  return (
    <S.Section>
      <Container>
        <S.Date>{date}</S.Date>
        <S.Title>{title}</S.Title>
        <S.AuthorWrapper>
          <S.AuthorImage img={author?.node?.image?.image} />
          <S.AuthorName>{`${author?.node?.firstName} ${author?.node?.lastName}`}</S.AuthorName>
        </S.AuthorWrapper>
        <S.Image img={featuredImage?.node} />
        {content && <S.Content>{parse(content)}</S.Content>}
        <S.SocialWrapper>
          <S.SocialTitle>Share Via</S.SocialTitle>
          <Stack direction="row" spacing={1} alignItems="center">
            <S.IconWrapper
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${
                process.env.GATSBY_WEBSITE_URL + "/blog/" + slug
              }`}
              target={"_blank"}
            >
              <LinkedinIcon />
            </S.IconWrapper>
            <S.IconWrapper
              href={`https://www.facebook.com/sharer/sharer.php?u=${
                process.env.GATSBY_WEBSITE_URL + "/blog/" + slug
              }`}
              target={"_blank"}
            >
              <FacebookIcon />
            </S.IconWrapper>
            <S.IconWrapper
              href={`https://twitter.com/intent/tweet?&url=${
                process.env.GATSBY_WEBSITE_URL + "/blog/" + slug
              }`}
              target={"_blank"}
            >
              <XIcon />
            </S.IconWrapper>
            <S.CopyButton
              className="copyBtn"
              onClick={() => copyToClipboard(window.location.href)}
            >
              <CopyIcon />
              Copy
            </S.CopyButton>
          </Stack>
        </S.SocialWrapper>
      </Container>
    </S.Section>
  )
}

export default BlogDetail
