import React from "react"
import * as S from "./no-grid-card.styles.jsx"
import parse from "html-react-parser"
import { useMediaQuery } from "@mui/material"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import PropTypes from "prop-types"
import CustomImage from "../custom-image/custom-image.component"
import { ORIENTATION } from "../../utils/constants"

const NoGridCard = ({
  orientation = ORIENTATION.COLUMN,
  img,
  title,
  description,
  date,
  className,
  url = "#",
  author,
}) => {
  const isXsScreen = useMediaQuery(theme.breakpoints.down("md"))
  const orientationToUse = isXsScreen ? ORIENTATION.COLUMN : orientation
  return (
    <S.CardWrapper className={`${className} ${orientationToUse}`} url={url}>
      {img && (
        <S.CardImage
          arPaddingPercentage={ORIENTATION.ROW === orientationToUse ? 36 : null}
          img={img}
          fit="cover"
          className={orientationToUse}
        />
      )}
      <S.TitleDescriptionWrapper
        className={`title-wrapper ${orientationToUse}`}
      >
        <div>
          {date && <S.Date className="date">{date}</S.Date>}
          {title && <S.CardTitle className="title">{parse(title)}</S.CardTitle>}
          {description && (
            <S.CardDescription className="description">
              {parse(description)}
            </S.CardDescription>
          )}
        </div>
        <S.BottomWrapper>
          {author ? <S.Author>{author}</S.Author> : <div />}
          <S.ArrowRightIcon />
        </S.BottomWrapper>
      </S.TitleDescriptionWrapper>
    </S.CardWrapper>
  )
}

CustomImage.propTypes = {
  orientation: PropTypes.string,
  img: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default NoGridCard
