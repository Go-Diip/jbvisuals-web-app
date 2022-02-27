import styled from "styled-components"
import Container from "@mui/material/Container"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled.section`
  height: calc(100vh - ${({ theme }) => theme.navHeight}px);

  ${({ theme }) => theme.breakpoints.up("lg")} {
    height: 100vh;
  }

  .swiper-pagination {
    bottom: 40px !important;
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    margin: 0 6px !important;
    background: ${({ theme }) => theme.palette.secondary.main};
  }
`

export const BgImage = styled(CustomBgImage)`
  height: calc(100vh - ${({ theme }) => theme.navHeight}px);

  ${({ theme }) => theme.breakpoints.up("lg")} {
    height: 100vh;
  }
`
