import React from "react"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import HomeHero from "../layouts/HomeHero/home-hero.component"
import { graphql, useStaticQuery } from "gatsby"
import HomeIntroText from "../layouts/HomeIntroText"
import ProjectsGrid from "../layouts/ProjectsGrid"
import InfoRow from "../layouts/InfoRow"
import CenteredRow from "../layouts/CenteredRow"
import ContactRow from "../layouts/ContactRow"

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

      <LayoutTitle>InfoRow</LayoutTitle>
      <InfoRow
        name="Julia Bogdan"
        role="Senior 3d artist, CEO."
        image={staticQuery.placeholder}
        description='<p>"Architectural visualization is an open field for experimentation, there is a thin line between the real and the imaginary. What we see with our eyes is real, although it may not yet exist in the material world."<br><br>Julia is an architect who is very passionate and inspired by art and photography. For her, each project is unique, so she does her best to transmit them to the world in their own special way.</p>'
      />
      <InfoRow
        name="Julia Bogdan"
        role="Senior 3d artist, CEO."
        reverse
        image={staticQuery.placeholder}
        description='<p>"Architectural visualization is an open field for experimentation, there is a thin line between the real and the imaginary. What we see with our eyes is real, although it may not yet exist in the material world."<br><br>Julia is an architect who is very passionate and inspired by art and photography. For her, each project is unique, so she does her best to transmit them to the world in their own special way.</p>'
      />

      <LayoutTitle>CenteredRow</LayoutTitle>
      <CenteredRow content='<p>"Architectural visualization is an open field for experimentation, there is a thin line between the real and the imaginary. What we see with our eyes is real, although it may not yet exist in the material world."<br><br>Julia is an architect who is very passionate and inspired by art and photography. For her, each project is unique, so she does her best to transmit them to the world in their own special way.</p>' />

      <LayoutTitle>ContactRow</LayoutTitle>
      <ContactRow title="Let's Work Together!" />
    </Layout>
  )
}

export default Layouts
