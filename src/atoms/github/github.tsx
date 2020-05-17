import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { TSiteMetaData } from "../../atoms/seo/seoTypes"

// import styles from "./github.module.css"
import github from "@assets/images/github.svg"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

type GithubPropType = {
  hideIcon?: Boolean
  showText?: Boolean
  className?: string
}

const Github: FunctionComponent<GithubPropType> = ({ hideIcon, showText, className }) => {
  const { site: { siteMetadata } }: TStaticQuerySite = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        github
      }
    }
  }
`)
  return (
    <OutboundLink
      href={siteMetadata.github}
      title="My GitHub Profile"
      target="_blank"
      rel="noopener"
      className={className}
    >
      {!hideIcon && <img src={github} alt="GitHub icon" />}
      {showText && siteMetadata.github.replace("https://", "")}
    </OutboundLink>
)}

Github.propTypes = {
  hideIcon: PropTypes.bool,
  showText: PropTypes.bool,
  className: PropTypes.string
}

Github.defaultProps = {
  hideIcon: false,
  showText: true,
  className: ''
}

export default Github
