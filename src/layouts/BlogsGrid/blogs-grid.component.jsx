import React, { useState } from "react"
import * as S from "./blogs-grid.styles"
import { Container, Grid } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { ORDER_OPTIONS } from "../../utils/constants"
import { orderPostsByDate } from "../../utils"

const BlogsGrid = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      allWpPost(sort: { date: DESC }) {
        nodes {
          title
          date(formatString: "MM.DD.YYYY")
          slug
          author {
            node {
              firstName
              lastName
            }
          }
          featuredImage {
            node {
              altText
              title
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          #          postFields {
          #            author {
          #              ... on WpTeamMember {
          #                title
          #              }
          #            }
          #          }
        }
      }
    }
  `)

  const [filterValue, setFilterValue] = useState(ORDER_OPTIONS.NEWEST.slug)

  const posts = staticQuery.allWpPost.nodes

  const handleChangeFilter = value => {
    let postsArray = [...posts]
    switch (value) {
      case ORDER_OPTIONS.NEWEST.value:
        postsArray = orderPostsByDate(postsArray, true)
        break
      case ORDER_OPTIONS.OLDEST.value:
        postsArray = orderPostsByDate(postsArray, false)
        break
    }
    return postsArray
  }

  const sortedPosts = handleChangeFilter(filterValue)

  return (
    <S.Section>
      <Container maxWidth="xl">
        {/*<S.TopWrapper>*/}
        {/*  <S.StyledSelect*/}
        {/*    items={ORDER_OPTIONS}*/}
        {/*    value={filterValue}*/}
        {/*    onChange={setFilterValue}*/}
        {/*  />*/}
        {/*</S.TopWrapper>*/}
        <Grid container rowSpacing={{ md: 2.5 }}>
          {sortedPosts?.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={`read-card-${index}`}>
              <S.StyledCard
                date={post.date}
                img={post.featuredImage?.node}
                url={`/blog/${post.slug}`}
                description={post.title}
                author={`${post.author?.node?.firstName} ${post.author?.node?.lastName}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </S.Section>
  )
}

export default BlogsGrid
