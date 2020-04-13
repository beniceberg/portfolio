import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { TSiteMetaData } from "../../atoms/seo/seoTypes"
import styles from "./about.module.css"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const About: FunctionComponent = () => {
  const { site: { siteMetadata } }: TStaticQuerySite = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
        email
      }
    }
  }
`)
  return (
    <section className={styles.about}>
    <h1 className={styles.title}>About me</h1>
    <p className={styles.intro}>
      <span>{`Hi my name is ${siteMetadata.author}`}<b>(No sh*t)</b>.</span>
      <span>I'm a software developer settled in <b>Amsterdam</b>.</span>
      <span>I build <b>fun</b>, <b>flexible</b> and <b>scalable</b> applications.</span>
      <span>Want to <b>find out more</b>, or have a chat?</span>
      <span>
        <b>Contact me</b>
        {` at `}
        <a href={`mailto:${siteMetadata.email}?subject=Hi Ben`}>
            {siteMetadata.email.replace('@', `{at}`)}
        </a>
      </span>
    </p>
  </section>
)}

export default About
