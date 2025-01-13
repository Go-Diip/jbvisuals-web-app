import styled from "styled-components"
import ArrowRight from "../../assets/arrow-right.svg"
import CustomImage from "../custom-image/custom-image.component"
import Typography from "@mui/material/Typography"
import { Grid } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

export const CardWrapper = styled(CustomLink)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #c7c8c8;
  padding: 1.25rem;
  gap: 1.25rem;
  position: relative;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 1.25rem;
    height: 100%;
    gap: 2rem;

    &.row {
      gap: 1.25rem;
      flex-direction: row;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: transparent;
    transition: background 0.3s ease-in-out;
  }
  :hover {
    ::before {
      background: ${({ theme }) => theme.palette.secondary.main};
    }
    path {
      fill: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`

export const CardImage = styled(CustomImage)`
  &.row {
    width: 40%;
  }
  &.column {
    height: 180px;
    width: 100%;
    flex: 1 0 auto;
    max-height: 180px;
  }
`

export const TitleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &.row {
    width: 60%;
    svg {
      margin-top: 1.25rem;
    }
  }
  &.column {
    flex: 1 1 auto;
    justify-content: space-between;
  }
`

export const Date = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem("15")};
  font-weight: 500;
  line-height: 2rem;
  opacity: 0.65;
  margin-bottom: 0.5rem;
`

export const CardTitle = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: rgba(102, 104, 106, 1);
  font-size: 0.75rem;
  font-weight: 800;
  line-height: 1.75rem; /* 233.333% */
  letter-spacing: 0.075rem;
`
export const CardDescription = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  line-height: 1.3125rem; /* 131.25% */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
`
export const ArrowRightIcon = styled(ArrowRight)`
  margin-top: 2.5rem;
  margin-left: auto;
`

export const CustomGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

export const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const Author = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem("15")};
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.65;
`
