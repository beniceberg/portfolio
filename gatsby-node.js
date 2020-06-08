/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(
        sort: { fields: publishedAt, order: DESC }
        filter: { mainImage: { _key: {}, _type: { eq: "image" } } }
      ) {
        edges {
          node {
            id
            publishedAt(formatString: "YYYY/MM")
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach(edge => {
    const { id, slug } = edge.node
    const path = `blog/${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/components/post/postSingle.tsx"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
}
