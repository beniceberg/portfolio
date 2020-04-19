import React, { FunctionComponent, useEffect } from "react"

import About from "@components/about/about"

import Layout from "@atoms/layout/layout"
import SEO from "@atoms/seo/seo"

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO
        title="Freelance full-stack developer"
        description="Freelance full-stack developer working with React, Vuejs and TypeScript in front-end and Expressjs in back-end."
      />
      <About />
    </Layout>
  )
}

export default IndexPage
