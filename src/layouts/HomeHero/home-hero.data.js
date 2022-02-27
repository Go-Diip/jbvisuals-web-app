import { graphql } from "gatsby"

export const query = graphql`
  fragment HomeHero on WpPage_Pagebuilder_Layouts_HomeHero {
    fieldGroupName
    images {
      image {
        altText
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`
