import React, { FunctionComponent, useEffect } from "react"

import construction from "@assets/images/under-construction.png"
import styles from "./construction.module.css"
import play from "@helpers/dust"

const Construction: FunctionComponent = () => {
  useEffect(() => { play() }, [])
  return (
    <>
      <div id="canvas" />
      <div className={styles.construction}>
        <h2 className={styles.title}>Wups, this page is under construction</h2>
        <img className={styles.image} src={construction} alt="Under construction" />
      </div>
    </>
)}

export default Construction
