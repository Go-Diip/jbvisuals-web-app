import React, { useEffect, useState } from "react"
import * as S from "./projects-grid.styles"
import { graphql, useStaticQuery } from "gatsby"
import Masonry from "react-masonry-css"
import ProjectCard from "../../components/project-card/project-card.component"
import { getSrc } from "gatsby-plugin-image"

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { Container } from "@mui/material"
import parse from "html-react-parser"
import { Fade } from "react-awesome-reveal"
import { SRLWrapper } from "simple-react-lightbox"

const ProjectsGrid = () => {
  const projectsQuery = useStaticQuery(graphql`
    query {
      allWpProjectCategory {
        nodes {
          name
          databaseId
        }
      }
      allWpProject(sort: { fields: date, order: DESC }) {
        nodes {
          title
          uri
          slug
          content
          id
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                }
              }
              altText
              title
            }
          }
          projectCategories {
            nodes {
              databaseId
            }
          }
        }
      }
    }
  `)

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  const allCategories = projectsQuery.allWpProjectCategory.nodes
  const allProjects = projectsQuery.allWpProject.nodes

  const [activeCategory, setActiveCategory] = useState("all")
  const [projectsToShow, setProjectsToShow] = useState(allProjects)
  const [isOpenLightBox, setIsOpenLightbox] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = projectsToShow.map(({ featuredImage }) =>
    getSrc(featuredImage?.node?.localFile)
  )

  useEffect(() => {
    if (activeCategory === "all") {
      setProjectsToShow(allProjects)
      return
    }
    setProjectsToShow(
      allProjects.filter(({ projectCategories }) =>
        projectCategories.nodes.find(
          ({ databaseId }) => databaseId === activeCategory
        )
      )
    )
  }, [activeCategory])
  return (
    <S.Wrapper id={"works-section"}>
      <Fade triggerOnce duration={2000}>
        <Container maxWidth="xl">
          <S.CustomTabs
            centered
            value={activeCategory}
            onChange={(e, newVal) => setActiveCategory(newVal)}
          >
            <S.CustomTab value="all" label="All" />
            {allCategories.map(({ databaseId, name }) => (
              <S.CustomTab key={databaseId} value={databaseId} label={name} />
            ))}
          </S.CustomTabs>
          <SRLWrapper options={{ caption: { showCaption: false } }}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {projectsToShow.map(
                ({ id, featuredImage, title, uri }, index) => (
                  <Fade>
                    <ProjectCard
                      key={id}
                      img={featuredImage?.node}
                      title={title}
                      imageSize={index % 2 === 0 ? "large" : "small"}
                      uri={uri}
                    />
                  </Fade>
                )
              )}
            </Masonry>
          </SRLWrapper>
        </Container>
      </Fade>

      {isOpenLightBox && (
        <Lightbox
          mainSrc={images[photoIndex]}
          // imageTitle={parse('<a id="replace">text</a>', {
          //   replace: domNode => {
          //     if (domNode.attribs && domNode.attribs.id === "replace") {
          //       return (
          //         <S.LinkWrapper>
          //           <S.SeeMoreLink url={projectsToShow[photoIndex].uri}>
          //             {projectsToShow[photoIndex].title}
          //           </S.SeeMoreLink>
          //         </S.LinkWrapper>
          //       )
          //     }
          //   },
          // })}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpenLightbox(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={parse('<a id="replace">text</a>', {
            replace: domNode => {
              if (domNode.attribs && domNode.attribs.id === "replace") {
                return (
                  <S.LinkWrapper>
                    <S.SeeMoreLink url={projectsToShow[photoIndex].uri}>
                      {projectsToShow[photoIndex].title}
                    </S.SeeMoreLink>
                  </S.LinkWrapper>
                )
              }
            },
          })}
        />
      )}
    </S.Wrapper>
  )
}
export default ProjectsGrid
