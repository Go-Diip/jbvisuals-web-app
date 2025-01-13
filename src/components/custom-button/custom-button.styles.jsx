import styled from "styled-components"
import Button from "@mui/material/Button"
import { darken } from "@mui/system"

export const CustomButton = styled(Button)`
  color: white;
  background-color: ${({ theme, color }) =>
    theme.palette[color]
      ? theme.palette[color].main
      : theme.palette.primary.main};
  padding: 0.5em 1.5em;
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 600 !important;
  border-radius: 4px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.5em 3em;
  }
  &.light {
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &.darkBorder {
    color: black;
    border: 1px black solid;
    background-color: transparent;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.lightBorder {
    color: white;
    border: 1px white solid;
    background-color: transparent;
  }

  &:not(.light):not(.darkBorder):hover {
    background-color: ${({ theme, color }) =>
      darken(
        theme.palette[color]
          ? theme.palette[color].main
          : theme.palette.primary.main,
        0.1
      )};
    //border: 1px solid ${({ theme }) =>
      darken(theme.palette.primary.main, 0.1)};
  }

  &.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }
`
