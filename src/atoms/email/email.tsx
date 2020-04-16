import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import { TSiteMetaData } from "../seo/seoTypes"

// import styles from "./email.module.css"
import email from "@assets/images/email.svg"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

type EmailPropType = {
  hideIcon?: Boolean
  showText?: Boolean
  className?: string
  at?: Boolean
}

const Email: FunctionComponent<EmailPropType> = ({ hideIcon, showText, className, at }) => {
  const { site: { siteMetadata } }: TStaticQuerySite = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        email
      }
    }
  }
`)
  return (
    <a
      href={`mailto:${siteMetadata.email}?subject=Hi Ben`}
      title="Mail me"
      className={className}
    >
    {!hideIcon && <img src={email} alt="Email icon" />}
    {showText && siteMetadata.email.replace('@', at ? `{at}` : '@')}
    </a>
)}

Email.propTypes = {
  hideIcon: PropTypes.bool,
  showText: PropTypes.bool,
  className: PropTypes.string,
  at: PropTypes.bool,
}

Email.defaultProps = {
  hideIcon: false,
  showText: true,
  className: '',
  at: false
}

export default Email
