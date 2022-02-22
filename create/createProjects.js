const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpProject: { nodes: allProjects },
    },
  } = await graphql(`
    query {
      allWpProject {
        nodes {
          id
          uri
        }
      }
    }
  `)
  const projectTemplate = path.resolve(
    `./src/templates/project/project.template.jsx`
  )
  allProjects.forEach(project => {
    const path = `${project.uri}`
    createPage({
      // will be the url for the page
      path: path,
      // specify the component template of your choice
      component: slash(projectTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: project.id,
      },
    })
    reporter.info(`project created:  ${path}`)
  })

  reporter.info(`# -----> PROJECTS TOTAL: ${allProjects.length}`)
}
