import React, { FunctionComponent, useEffect } from "react"

import Landing from "@components/landing/landing"
import SEO from "@atoms/seo/seo"

import play from "../helpers/dust"

const IndexPage: FunctionComponent = () => {
  useEffect(() => { play() }, [])
  return (
    <>
      <div id="canvas" />
      <SEO
        title="Freelance full-stack developer"
        description="Freelance full-stack developer working with React, Vuejs and TypeScript in front-end and Expressjs in back-end."
      />
      <Landing/>
    </>
  )
}

export default IndexPage
