import React from "react"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"

import { useMediaQuery } from "@mui/material"
import { GlobalStyles } from "../../styles/app.styles"
import "react-image-lightbox/style.css"

export default function TopLayout({ children, theme }) {
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  })

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"), {
    defaultMatches: true,
  })

  let navHeight = theme.navHeight
  let sectionPadding = theme.sectionPadding

  if (isLg) {
    navHeight = 0
    sectionPadding = "padding-top: 5em; padding-bottom: 5em;"
  }
  // else {
  //   navHeight = 80
  //   sectionPadding = "padding-top: 5em; padding-bottom: 5em;"
  // }

  return (
    <ThemeTopLayout theme={{ ...theme, navHeight, sectionPadding }}>
      <GlobalStyles />
      {children}
    </ThemeTopLayout>
  )
}
