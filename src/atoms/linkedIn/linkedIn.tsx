import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import { TSiteMetaData } from "../seo/seoTypes"

// import styles from "./linkedIn.module.css"
import linkedIn from "@assets/images/linkedIn.svg"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

type LinkedInPropType = {
  hideIcon?: Boolean
  showText?: Boolean
  className?: string
}

const LinkedIn: FunctionComponent<LinkedInPropType> = ({ hideIcon, showText, className }) => {
  const { site: { siteMetadata } }: TStaticQuerySite = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        linkedIn
      }
    }
  }
`)
  return (
    <a
      href={siteMetadata.linkedIn}
      title="My LinkedIn Profile"
      target="_blank"
      rel="noopener"
      className={className}
    >
      {!hideIcon && <img src={linkedIn} alt="LinkedIn icon" />}
      {showText && siteMetadata.linkedIn.replace('https://www.linkedin.com/', '')}
    </a>
)}

LinkedIn.propTypes = {
  hideIcon: PropTypes.bool,
  showText: PropTypes.bool,
  className: PropTypes.string
}

LinkedIn.defaultProps = {
  hideIcon: false,
  showText: true,
  className: ''
}

export default LinkedIn
