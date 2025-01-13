import React from "react"
import * as S from "./blog-hero.styles"
import { Container, Stack, useMediaQuery } from "@mui/material"
import SpotifyIcon from "../../assets/spotify.svg"
import YoutubeIcon from "../../assets/card-play.svg"
import { useTheme } from "@mui/system"

const BlogHero = ({
  topTitle,
  title,
  titleMaxWidth,
  bgImage,
  mobileBgImage,
  imagePosition,
  luminosity,
  bottomText,
  spotifyBtn,
  youtubeBtn,
  className,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
      <S.Section className={className}>
        <S.BgFilter />
        <S.BgImage
          fit="cover"
          img={isMobile && mobileBgImage ? mobileBgImage : bgImage}
          className={luminosity ? "luminosity" : ""}
          position={imagePosition}
        />
        <Container maxWidth="xl">
          {topTitle && <S.TopTitle>{topTitle}</S.TopTitle>}
          <S.Title variant="h1" style={{ maxWidth: titleMaxWidth }}>
            {title}
          </S.Title>
        </Container>
      </S.Section>
      {bottomText && (
        <S.BottomSection>
          <Container>
            <S.BottomText>{bottomText}</S.BottomText>
            {(spotifyBtn || youtubeBtn) && (
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                {spotifyBtn && (
                  <S.SpotifyBtn
                    href={spotifyBtn.url}
                    target={spotifyBtn.target}
                  >
                    <SpotifyIcon />
                    {spotifyBtn.title}
                  </S.SpotifyBtn>
                )}
                {youtubeBtn && (
                  <S.SpotifyBtn
                    href={youtubeBtn.url}
                    target={youtubeBtn.target}
                  >
                    <YoutubeIcon />
                    {youtubeBtn.title}
                  </S.SpotifyBtn>
                )}
              </Stack>
            )}
          </Container>
        </S.BottomSection>
      )}
    </>
  )
}

export default BlogHero
