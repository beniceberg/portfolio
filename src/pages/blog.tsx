import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"

import Layout from "@atoms/layout/layout"
import SEO from "@atoms/seo/seo"
import ExcerptWrapper from "@components/excerpt/excerptWrapper"

import { PostType } from "../components/post/postTypes"
import { LocationPropType } from "../helpers/types"

type BlogPagePropTypes = LocationPropType & {
  data: {
    posts: {
      edges: PostType[]
    }
  }
}

export const query = graphql`
  query MyBlogPostsQuery {
    posts: allSanityPost(
      sort: { fields: publishedAt, order: DESC }
      filter: { mainImage: { _key: {}, _type: { eq: "image" } } }
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug {
            current
          }
          language {
            key
          }
          publishedAt(formatString: "YYYY/MM")
        }
      }
    }
  }
`

const BlogPage: FunctionComponent<BlogPagePropTypes> = ({ data, location }) => {
  return (
    <Layout location={location} >
      <SEO
        title="Blogs posts full-stack developer"
        description="Freelance full-stack developer working with React, Vuejs and TypeScript in front-end and Expressjs in back-end."
      />
      {data.posts.edges && <ExcerptWrapper posts={data.posts.edges} />}
    </Layout>
  )
}

export default BlogPage
