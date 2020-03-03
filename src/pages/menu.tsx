import React, { FunctionComponent } from "react"

import MenuWrapper from "@components/menu/menu"
import SEO from "@atoms/seo/seo"

const IndexPage: FunctionComponent = () => (
  <>
    <SEO
      title="Navigation"
      description="A static navigation page because who uses JavaScript?"
    />
    <MenuWrapper />
  </>
)

export default IndexPage
