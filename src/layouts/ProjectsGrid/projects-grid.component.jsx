import React, { useEffect, useState } from "react"
import * as S from "./projects-grid.styles"
import { graphql, useStaticQuery } from "gatsby"
import Masonry from "react-masonry-css"
import ProjectCard from "../../components/project-card/project-card.component"
import { getSrc } from "gatsby-plugin-image"

import { Container, useMediaQuery } from "@mui/material"
import { Fade } from "react-awesome-reveal"
import ProjectsLightbox from "../../components/projects-lightbox/projects-lightbox.component"
import { useTheme } from "@mui/system"

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
          projectBuilder {
            images {
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                  }
                }
                altText
                title
              }
            }
            vrIframe
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
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const [activeCategory, setActiveCategory] = useState("all")
  const [projectsToShow, setProjectsToShow] = useState(allProjects)
  const [projectTitle, setProjectTitle] = useState("")

  const [images, setImages] = useState([])

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

  const handleSetImages = project => {
    if (project) {
      setProjectTitle(project.title)
      const featuredImg = getSrc(project?.featuredImage?.node?.localFile)
      const galleryImgs = project?.projectBuilder?.images?.map(({ image }) =>
        getSrc(image?.localFile)
      )

      if (galleryImgs) {
        setImages([featuredImg, ...galleryImgs])
      } else {
        setImages([featuredImg])
      }
    }
  }
  return (
    <S.Wrapper id="works-section">
      <Fade triggerOnce duration={2000}>
        <Container maxWidth="xl">
          <S.CustomTabs
            centered
            value={activeCategory}
            variant={isMd ? "standard" : "scrollable"}
            scrollButtons="auto"
            // allowScrollButtonsMobile
            onChange={(e, newVal) => setActiveCategory(newVal)}
          >
            <S.CustomTab value="all" label="All" />
            {allCategories.map(({ databaseId, name }) => (
              <S.CustomTab key={databaseId} value={databaseId} label={name} />
            ))}
          </S.CustomTabs>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {projectsToShow.map((item, index) => (
              <ProjectCard
                handleImageClick={() => handleSetImages(item)}
                key={item.id}
                img={item.featuredImage?.node}
                title={item.title}
                vrIframe={item.projectBuilder?.vrIframe}
                // imageSize={index % 3 !== 0 ? "large" : "small"}
                uri={item.uri}
              />
            ))}
          </Masonry>
        </Container>
      </Fade>
      <ProjectsLightbox projectTitle={projectTitle} images={images} />
    </S.Wrapper>
  )
}
export default ProjectsGrid
