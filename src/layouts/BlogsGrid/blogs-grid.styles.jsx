import styled from "styled-components"
import NoGridCard from "../../components/NoGridCard/no-grid-card.component"
import CustomSelect from "../../components/custom-select/custom-select.component"

export const Section = styled.section`
  padding-top: 2rem;
  padding-bottom: 3.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: ${({ theme }) => theme.typography.pxToRem("76")};
    padding-bottom: 8rem;
  }
  .MuiGrid-item {
    &.MuiGrid-grid-xs-12 {
      ${({ theme }) => theme.breakpoints.down("sm")} {
        :not(:first-of-type) > a {
          border-top: 0;
        }
      }
    }
    &.MuiGrid-grid-sm-6 {
      ${({ theme }) => theme.breakpoints.between("sm", "md")} {
        :not(:nth-of-type(1), :nth-of-type(2)) > a {
          border-top: 0;
        }
        :not(:nth-of-type(2n), :last-of-type) > a {
          border-right: 0;
        }
      }
    }
    &.MuiGrid-grid-md-4 {
      ${({ theme }) => theme.breakpoints.between("md", "lg")} {
        /* :not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3)) > a {
          border-top: 0;
        } */
        :not(:nth-of-type(3n), :last-of-type) > a {
          border-right: 0;
        }
      }
    }
    &.MuiGrid-grid-lg-3 {
      ${({ theme }) => theme.breakpoints.up("lg")} {
        /* :not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4))
          > a {
          border-top: 0;
        } */
        :not(:nth-of-type(4n), :last-of-type) > a {
          border-right: 0;
        }
      }
    }
  }
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

export const StyledSelect = styled(CustomSelect)`
  max-width: 160px;
`

export const StyledCard = styled(NoGridCard)`
  gap: 0.75rem;
  position: relative;
  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 0.75rem;
  }
  svg {
    margin-top: 1rem;
    path {
      transition: all 0.3s ease-in-out;
    }
  }
`
