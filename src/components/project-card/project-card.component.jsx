import React from "react"
import * as S from "./project-card.styles.jsx"
import { Box } from "@mui/material"

const ProjectCard = ({ img, title, uri, imageSize, handleImageClick }) => {
  return (
    <S.Wrapper>
      <S.CardImage onClick={handleImageClick} className={imageSize} img={img} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <S.Title onClick={handleImageClick}>{title}</S.Title>
        <S.ViewMoreLink url={uri}>See more</S.ViewMoreLink>
      </Box>
    </S.Wrapper>
  )
}
export default ProjectCard
