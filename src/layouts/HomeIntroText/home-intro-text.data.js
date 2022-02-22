import { graphql } from "gatsby"

export const query = graphql`
  fragment HomeIntroText on WpPage_Pagebuilder_Layouts_HomeIntroText {
    fieldGroupName
  }
`
