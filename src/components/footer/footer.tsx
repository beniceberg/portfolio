import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { TSiteMetaData } from "../../atoms/seo/seoTypes"

import { normalizeTelNo } from "../../helpers/helpers"

import styles from "./footer.module.css"
import github from "@assets/images/github.svg"
import whatsapp from "@assets/images/whatsapp.svg"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const Footer = () => {
  const { site: { siteMetadata } }: TStaticQuerySite = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
        telNo
        email
        github
      }
    }
  }
`)
  return (
  <footer className={styles.footer}>
    <p>
      <strong>{siteMetadata.author}</strong>
      <br />
      <span>{siteMetadata.email.replace('@', `{at}`)}</span>
      <br />
      <a
        href={`https://wa.me/${normalizeTelNo(siteMetadata.telNo)}`}
        title="Chat with me on WhatsApp"
        target="_blank"
        rel="noopener"
      >
        <img src={whatsapp} alt="WhatsApp icon" />
        {siteMetadata.telNo}
      </a>
      <br />
      <a
        href={siteMetadata.github}
        title="My GitHub Profile"
        target="_blank"
        rel="noopener"
      >
        <img src={github} alt="GitHub icon" />
        {siteMetadata.github}
      </a>
    </p>
  </footer>
)}

export default Footer
