import React, { useEffect, useState } from "react"
import * as S from "./projects-grid.styles"
import { graphql, useStaticQuery } from "gatsby"
import Masonry from "react-masonry-css"
import ProjectCard from "../../components/project-card/project-card.component"
import { getSrc } from "gatsby-plugin-image"

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

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

  console.log("projectsToShow", projectsToShow)

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
    <S.Wrapper>
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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {projectsToShow.map(({ id, featuredImage, title, uri }, index) => (
          <ProjectCard
            key={id}
            img={featuredImage?.node}
            title={title}
            imageSize={index % 2 === 0 ? "large" : "small"}
            handleImageClick={() => {
              setIsOpenLightbox(true)
              setPhotoIndex(index)
            }}
            uri={uri}
          />
        ))}
      </Masonry>
      {isOpenLightBox && (
        <Lightbox
          mainSrc={images[photoIndex]}
          imageTitle={projectsToShow[photoIndex].title}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpenLightbox(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </S.Wrapper>
  )
}
export default ProjectsGrid
