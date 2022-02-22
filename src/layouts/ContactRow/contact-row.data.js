import { graphql } from "gatsby"

export const query = graphql`
  fragment ContactRow on WpPage_Pagebuilder_Layouts_ContactRow {
    fieldGroupName
    title
  }
`
