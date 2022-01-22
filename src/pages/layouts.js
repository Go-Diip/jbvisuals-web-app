import React from "react"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import HomeHero from "../layouts/HomeHero/home-hero.component"
import { graphql, useStaticQuery } from "gatsby"
import HomeIntroText from "../layouts/HomeIntroText"
import ProjectsGrid from "../layouts/ProjectsGrid"

const Layouts = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "placeholder.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      placeholder2: file(relativePath: { eq: "placeholder-2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  console.log("image", staticQuery.placeholder)
  return (
    <Layout
      seo={{
        title: "Layouts - ONLY FOR DEV",
        metaRobotsNoindex: "noindex",
        metaRobotsNofollow: "nofollow",
      }}
    >
      <LayoutTitle>HomeHero</LayoutTitle>
      <HomeHero
        images={[
          staticQuery.placeholder,
          staticQuery.placeholder2,
          staticQuery.placeholder,
        ]}
      />

      <LayoutTitle>HomeIntroText</LayoutTitle>
      <HomeIntroText
        text={`Helo, this is jbviuals <br> we help translate your
          <span class="typing-words">
              <span>public space design</span>
              <span>interior design</span>
              <span>architecture</span>
          </span><br> into a real visual concept`}
      />

      <LayoutTitle>MiscContent</LayoutTitle>
      <MiscContent content={`<p>Some content Here</p>`} />

      <LayoutTitle>ProjectsGrid</LayoutTitle>
      <ProjectsGrid />
    </Layout>
  )
}

export default Layouts
