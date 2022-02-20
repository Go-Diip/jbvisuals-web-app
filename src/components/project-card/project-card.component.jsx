import React from "react"
import * as S from "./project-card.styles.jsx"
import CustomImage from "../custom-image/custom-image.component"
import { Box } from "@mui/material"

const ProjectCard = ({ img, title, uri, handleImageClick }) => {
  return (
    <S.Wrapper>
      <S.CardImage onClick={handleImageClick} img={img} />
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
