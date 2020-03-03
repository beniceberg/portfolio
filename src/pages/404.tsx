import React, { FunctionComponent } from "react"

import Layout from "@atoms/layout/layout"
import SEO from "@atoms/seo/seo"

const NotFoundPage: FunctionComponent = () => (
  <Layout>
    <>
      <SEO 
        title="404: Not found"
        description="This is an error page, you must have an unknown url"
      />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  </Layout>
)

export default NotFoundPage
