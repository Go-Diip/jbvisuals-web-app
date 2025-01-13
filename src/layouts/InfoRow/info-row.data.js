import { graphql } from "gatsby"

export const query = graphql`
  fragment InfoRow on WpPage_Pagebuilder_Layouts_InfoRow {
    fieldGroupName
    name
    role
    content
    reverse
    image {
      altText
      sourceUrl
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
