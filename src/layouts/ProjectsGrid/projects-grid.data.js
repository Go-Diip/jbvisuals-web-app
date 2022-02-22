import { graphql } from "gatsby"

export const query = graphql`
  fragment ProjectsGrid on WpPage_Pagebuilder_Layouts_ProjectsGrid {
    fieldGroupName
  }
`
