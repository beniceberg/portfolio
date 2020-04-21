import React, { FunctionComponent, useEffect } from "react"

import Error from "@components/error/error"
import SEO from "@atoms/seo/seo"

import play from "../helpers/dust"

const NotFoundPage: FunctionComponent = () => {
  useEffect(() => { play("d") }, [])
  return (
    <>
      <div id="canvas" />
      <SEO 
        title="404: Not found"
        description="This is an error page, you must have an unknown url"
      />
      <Error />>
    </>
)}

export default NotFoundPage
