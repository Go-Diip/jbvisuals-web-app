import { graphql } from "gatsby"

export const query = graphql`
  fragment ContactSection on WpPage_Pagebuilder_Layouts_ContactSection {
    fieldGroupName
    topDescription
    bottomDescription
  }
`
