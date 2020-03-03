import React, { FunctionComponent } from "react"

import Layout from "@atoms/layout/layout"
import SEO from "@atoms/seo/seo"

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO
        title="Freelance full-stack developer"
        description="Freelance full-stack developer working with React, Vuejs and TypeScript in front-end and Expressjs in back-end."
      />
      <section>
        <h1>About me</h1>
        <p>
          <span>Born in <b>Tel Aviv</b>, brought up near <b>Antwerp</b>, settling in <b>Amsterdam</b></span>
          <br/>
          <span>Found my mojo in <b>Barcelona</b> at 26.</span>
          <br/>
          <span>I think I'm so cool, having lived in all those hip places. Yeah man!</span>
          <br/>
          <span>Peace ut</span>
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
