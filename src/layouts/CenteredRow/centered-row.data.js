import { graphql } from "gatsby"

export const query = graphql`
  fragment CenteredRow on WpPage_Pagebuilder_Layouts_CenteredRow {
    fieldGroupName
    content
  }
`
