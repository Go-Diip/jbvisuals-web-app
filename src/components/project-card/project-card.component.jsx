import React from "react"
import * as S from "./project-card.styles.jsx"
import CustomImage from "../custom-image/custom-image.component"
import { Box } from "@mui/material"

const ProjectCard = ({ img, title, uri, handleImageClick, imageSize }) => {
  return (
    <S.Wrapper>
      <S.CardImage className={imageSize} img={img} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <S.Title>{title}</S.Title>
        <S.ViewMoreLink url={uri}>View More</S.ViewMoreLink>
      </Box>
    </S.Wrapper>
  )
}
export default ProjectCard
