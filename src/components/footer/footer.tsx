import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { TSiteMetaData } from "../../atoms/seo/seoTypes"

import styles from "./footer.module.css"
import WhatsApp from "@atoms/whatsapp/whatsapp"
import Github from "@atoms/github/github"
import Email from "@atoms/email/email"
import LinkedIn from "@atoms/linkedIn/linkedIn"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const Footer: FunctionComponent = () => {
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
  <footer className={styles.footer}>
    <p>
      <strong>{siteMetadata.author}</strong>
      <br />
      <Email at />
      <br />
      <WhatsApp />
      <br />
      <Github />
      <br />
      <LinkedIn />
    </p>
    <p className={styles.copyright}>© {new Date().getFullYear()} Ben Eisenberg</p>
  </footer>
)}

export default Footer
