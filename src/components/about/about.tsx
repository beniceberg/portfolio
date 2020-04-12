import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { TSiteMetaData } from "../../atoms/seo/seoTypes"
import style from "./about.module.css"

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
    <section className={style.about}>
    <h1 className={style.title}>About me</h1>
    <p className={style.intro}>
      <span>{`Hi my name is ${siteMetadata.author}`}<b>(No sh*t)</b>.</span>
      <span>I'm a software developer settled in <b>Amsterdam</b>.</span>
      <span>I build fun, flexible and scalable applications.</span>
      <span>Want to find out more, or have a chat?</span>
      <span>{`Contact me at `}
        <a href={`mailto:${siteMetadata.email}?subject=Hi Ben`}>
            {siteMetadata.email.replace('@', `{at}`)}
        </a>
      </span>
    </p>
  </section>
)}

export default About
