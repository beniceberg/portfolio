import React, { FunctionComponent } from "react"

import Excerpt from "./excerpt"
import styles from "./excerpt.module.css"
import { PostType } from "../post/postTypes"

type TExcerptWrapperProps = {
  posts: PostType[]
}

const ExcerptWrapper: FunctionComponent<TExcerptWrapperProps> = ({ posts }) => {
  return (
    <div className={styles.wrapper}>
      {posts.map((post: PostType, index: number) => {
        const { node } = post
        return (
          <Excerpt
            key={`excerpt-${index}`}
            title={node.title}
            excerpt={node.excerpt}
            slug={node.slug.current}
            publishedAt={node.publishedAt}
            language={node.language.key}
          />
        )
      })}
    </div>
  )
}

export default ExcerptWrapper
