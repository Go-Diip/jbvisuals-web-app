import { graphql } from "gatsby"

export const query = graphql`
  fragment BlogHero on WpPage_Pagebuilder_Layouts_BlogHero {
    fieldGroupName
    title
    titleMaxWidth
    topTitle
    bgImage {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    mobileBgImage {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    imagePosition
    luminosity
    bottomText
    spotifyBtn {
      url
      target
      title
    }
    youtubeBtn {
      url
      target
      title
    }
    className
  }
`
