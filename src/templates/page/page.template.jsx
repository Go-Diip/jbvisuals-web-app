import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { getPageLayout } from "../../get-layout-utils"

export const query = graphql`
  query PageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      isFrontPage
      title
      content
      uri
      slug
      parentId
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
        opengraphModifiedTime
        opengraphImage {
          altText
          sourceUrl
          title
        }
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
      pageBuilder {
        layouts {
          ... on WpPage_Pagebuilder_Layouts_MiscContent {
            ...MiscContent
          }
          ... on WpPage_Pagebuilder_Layouts_HomeHero {
            ...HomeHero
          }
          ... on WpPage_Pagebuilder_Layouts_HomeIntroText {
            ...HomeIntroText
          }
          ... on WpPage_Pagebuilder_Layouts_ProjectsGrid {
            ...ProjectsGrid
          }
          ... on WpPage_Pagebuilder_Layouts_ContactRow {
            ...ContactRow
          }
          ... on WpPage_Pagebuilder_Layouts_InfoRow {
            ...InfoRow
          }
          ... on WpPage_Pagebuilder_Layouts_CenteredRow {
            ...CenteredRow
          }
          ... on WpPage_Pagebuilder_Layouts_ContactSection {
            ...ContactSection
          }
          ... on WpPage_Pagebuilder_Layouts_BlogHero {
            ...BlogHero
          }
          ... on WpPage_Pagebuilder_Layouts_BlogsGrid {
            ...BlogsGrid
          }
        }
        pageConfiguration {
          hideFooter
          hideHeaderItems
          isHome
        }
      }
    }
  }
`
const PageTemplate = ({ data }) => {
  const { seo, slug, pageBuilder, title } = data.wpPage
  const layouts = pageBuilder.layouts || []
  return (
    <Layout {...pageBuilder.pageConfiguration} seo={seo}>
      {layouts.map(layout => getPageLayout(layout))}
    </Layout>
  )
}

export default PageTemplate
