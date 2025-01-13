import styled from "styled-components"
import {
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material"

export const StyledFormControl = styled(FormControl)`
  position: relative;
  .MuiOutlinedInput-input {
    /* padding-left: 1.45rem; */
  }
  fieldset {
    border-color: black;
  }
  max-height: 50vh;
`

export const StyledLabel = styled(InputLabel)`
  background-color: white;
  padding: 0 0.5rem;
  color: rgba(0, 0, 0, 0.5) !important;
  margin-left: -0.25rem;
`

export const Title = styled(Typography)`
  color: #5d5e62;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
`

export const StyledSelect = styled(NativeSelect)`
  margin: 0;
  .MuiInputBase-input {
    border-radius: 100px !important;
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) => theme.palette.text.light};
    padding: 11.5px 1.5rem;
    font-size: 1rem;
    line-height: normal;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &.selected {
    select {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
  svg {
    right: 16px;
    top: 12px;
  }
  ::before,
  ::after {
    border-bottom: 0 !important;
  }
`

export const ErrorMessage = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.error};
  margin-left: 14px;
  margin-top: 3px;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
`
