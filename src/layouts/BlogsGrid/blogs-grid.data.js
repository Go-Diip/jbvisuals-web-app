import { graphql } from "gatsby"

export const query = graphql`
  fragment BlogsGrid on WpPage_Pagebuilder_Layouts_BlogsGrid {
    fieldGroupName
  }
`
