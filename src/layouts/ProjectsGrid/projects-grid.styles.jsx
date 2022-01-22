import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Tabs, Tab } from "@mui/material"

export const CustomTabs = styled(Tabs)`
  margin-bottom: 2em;
`

export const CustomTab = styled(Tab)`
  color: black;
  opacity: 0.4;

  &.Mui-selected {
    opacity: 1;
  }
`

export const Wrapper = styled(SectionWrapper)`
  .masonry-grid {
    display: flex;
    margin-left: -16px; /* gutter size offset */
    width: auto;
  }
  .masonry-grid_column {
    padding-left: 16px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    // background: grey;
    margin-bottom: 16px;
  }
`
