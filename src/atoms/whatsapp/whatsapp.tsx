import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { TSiteMetaData } from "../seo/seoTypes"
import { normalizeTelNo } from "../../helpers/helpers"

// import styles from "./whatsapp.module.css"
import whatsapp from "@assets/images/whatsapp.svg"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

type WhatsAppPropType = {
  hideIcon?: Boolean
  showText?: Boolean
  className?: string
}

const WhatsApp: FunctionComponent<WhatsAppPropType> = ({ hideIcon, showText, className }) => {
  const { site: { siteMetadata } }: TStaticQuerySite = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        telNo
      }
    }
  }
`)
  return (
    <OutboundLink
      href={`https://wa.me/${normalizeTelNo(siteMetadata.telNo)}`}
      title="Chat with me on WhatsApp"
      target="_blank"
      rel="noopener"
      className={className}
    >
    {!hideIcon && <img src={whatsapp} alt="WhatsApp icon" />}
    {showText && siteMetadata.telNo}
    </OutboundLink>
)}

WhatsApp.propTypes = {
  hideIcon: PropTypes.bool,
  showText: PropTypes.bool,
  className: PropTypes.string
}

WhatsApp.defaultProps = {
  hideIcon: false,
  showText: true,
  className: ''
}

export default WhatsApp
