import React, { FunctionComponent } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { TSiteMetaData } from "./seoTypes"

type TSeoProps = {
  lang?: string
  title: string
  description: string
  meta?: []
  imageUrl?: string
  postUrl?: string
  publishedAt?: string
  type?: string
}

type TStaticQuery = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const SEO: FunctionComponent<TSeoProps> = ({
  lang = "en",
  title,
  description,
  meta = [],
  imageUrl,
  postUrl,
  publishedAt,
  type,
}) => {
  const { site }: TStaticQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `author`,
      content: site.siteMetadata.author,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: type ? type : `website`,
    },
    {
      property: `og:site_name`,
      content: `${site.siteMetadata.title} ${site.siteMetadata.description}`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta)

  if (imageUrl) {
    metaTags.push({
      property: `og:image`,
      content: imageUrl,
    })
  }

  if (postUrl) {
    metaTags.push({
      property: `og:url`,
      content: `${site.siteMetadata.url}/${postUrl}`,
    })
  }

  if (publishedAt) {
    metaTags.push({
      property: `article:published_time`,
      content: publishedAt,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaTags}
    />
  )
}

export default SEO
