import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import ProjectWrapper from "../../components/project-wrapper/project-wrapper.component"

export const query = graphql`
  query ProjectQuery($id: String!) {
    wpProject(id: { eq: $id }) {
      title
      date
      content
      featuredImage {
        node {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      projectBuilder {
        architect
        location
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
      seo {
        canonical
        title
        focuskw
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          title
        }
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          title
        }
      }
      id
      uri
    }
  }
`

const Project = ({ data }) => {
  const { seo, title, content, featuredImage, date, projectBuilder, uri } =
    data.wpProject
  return (
    <Layout seo={seo}>
      <ProjectWrapper title={title} {...projectBuilder} uri={uri} />
      {/*<Img fluid={featuredImage.imageFile.childImageSharp.fluid} />*/}
    </Layout>
  )
}

export default Project
