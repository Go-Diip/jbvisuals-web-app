import styled from "styled-components"
import Container from "@mui/material/Container"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled.section`
  height: 100vh;

  .swiper-pagination {
    bottom: 40px;
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    margin: 0 6px !important;
    &.swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

export const BgImage = styled(CustomBgImage)`
  height: 100vh;
`
