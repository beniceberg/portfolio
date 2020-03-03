import React, { FunctionComponent, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Button from "@atoms/button/button"
import ben from "@assets/images/ben.jpg"
import Menu from "../menu/menu"

import styles from "./header.module.css"

import { TSiteMetaData } from "../../atoms/seo/seoTypes"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const Header: FunctionComponent = () => {
  const data: TStaticQuerySite = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleEsc = () => menuOpen && setMenuOpen(!menuOpen)

  return (
    <header id="header">
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logoWrapper} tabIndex={0}>
          <img className={styles.thumbnail} src={ben} alt="Ben" />
          <span className={styles.siteTitle}>
            {data.site.siteMetadata.title}
            <span className={styles.siteSubTitle}>
              {data.site.siteMetadata.description}
            </span>
          </span>
        </Link>

        <Button title="Menu" onClick={toggleMenu}/>
      </div>
      {menuOpen && <Menu handleEsc={handleEsc}/>}
    </header>
  )
}

export default Header
