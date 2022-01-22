import styled from "styled-components"
import Typography from "@mui/material/Typography"

export const Wrapper = styled.footer`
  color: white;
  padding: 4em 0;
  background-color: #fafafa;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .MuiContainer-root {
      padding-right: 2.5em;
      padding-left: 2.5em;
    }
  }
`

export const Logo = styled.img`
  width: 200px;
  height: auto;
  display: block;
  margin: auto;
`

export const Social = styled.div`
  text-align: center;
  margin-top: 2em;
  svg {
    fill: ${({ theme }) => theme.palette.text.content};
    width: 26px;
    transition: all 0.3s ease;
    height: auto;
  }
  a {
    padding: 0 0.8em;
    &:hover {
      svg {
        fill: black;
      }
    }
  }
`

export const Copyright = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.content};
  text-align: center;
  font-size: 14px;
  margin-top: 2em;
`
