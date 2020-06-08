import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"

import BlockContent from "../block-content"
import Layout from "@atoms/layout/layout"
import SEO from "@atoms/seo/seo"
import styles from "./postSingle.module.css"
import { getBlogUrl } from "../../helpers/helpers"

export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      finished
      language {
        key
      }
      publishedAt(formatString: "YYYY/MM")
      title
      excerpt
      slug {
        current
      }
      author {
        name
      }
      mainImage {
        asset {
          fluid(maxWidth: 768) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
  }
`

type TPostSingle = {
  data: {
    post: {
      finished: boolean
      language: {
        slug: string
      }
      publishedAt: string
      title: string
      excerpt: string
      slug: {
        current: string
      }
      author: {
        name: string
      }
      mainImage: any /* ToDo: Fix typings on this */
      _rawBody: any /* ToDo: Fix typings on this */
    }
  }
}

const PostWarning: FunctionComponent<{ language: string }> = ({ language }) => (
  <div className={styles.warning}>
    {"en" === language
      ? `This article is in concept - almost done 😎`
      : `Dit artikel staat nog in concept - bijna klaar 😎`}
  </div>
)

const PostSingle: FunctionComponent<TPostSingle> = ({ data }) => {
  const {
    finished,
    title,
    excerpt,
    publishedAt,
    _rawBody,
    slug,
    mainImage,
    language,
  } = data.post

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        imageUrl={mainImage.asset.fluid.src}
        postUrl={getBlogUrl(slug.current)}
        publishedAt={publishedAt}
        type={"article"}
      />
      <article className={styles.wrapper}>
        <header>
          <h1>{title}</h1>
        </header>
        {!finished ? <PostWarning language={language.slug} /> : null}
        {_rawBody && <BlockContent finished={finished} blocks={_rawBody} />}
        {!finished ? <PostWarning language={language.slug} /> : null}
      </article>
    </Layout>
  )
}

export default PostSingle
