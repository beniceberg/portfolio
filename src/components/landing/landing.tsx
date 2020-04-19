import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { TSiteMetaData } from "../../atoms/seo/seoTypes"
import Link from "@atoms/link/link"

import styles from "./landing.module.css"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const Landing: FunctionComponent = () => {
  const { site: { siteMetadata } }: TStaticQuerySite = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            author
          }
        }
      }
    `)

  return (
    <section className={styles.landing}>
      <p className={styles.intro}>
        <span>Hi, I'm <b>{siteMetadata.author}</b>.</span>
        <span>I'm a software developer settled in <b>Amsterdam</b>.</span>
      </p>
      <Link title="Find out more" to={"/about"} as="button" />
    </section>
)}

export default Landing
