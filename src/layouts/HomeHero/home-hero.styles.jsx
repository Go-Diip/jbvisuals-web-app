import styled, { css } from "styled-components"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
const heightStyle = css`
  height: 350px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: 450px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: calc(100vh - ${({ theme }) => theme.navHeight}px);
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    height: 100vh;
  }
`
export const Wrapper = styled.section`
  ${heightStyle}

  .swiper-pagination {
    bottom: 20px !important;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    .swiper-pagination {
      bottom: 30px !important;
    }
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    margin: 0 6px !important;
    background: ${({ theme }) => theme.palette.secondary.main};
  }
`

export const BgImage = styled(CustomBgImage)`
  ${heightStyle};
`
