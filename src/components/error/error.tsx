import React, { FunctionComponent } from "react"

import Link from "@atoms/link/link"

import styles from "./error.module.css"

const Landing: FunctionComponent = () => {
  return (
    <section className={styles.error}>
      <h1 className={styles.title}>Four Oh Four</h1>
      <p className={styles.description}>
        <span>You just hit a route that doesn&#39;t exist... the sadness.</span>
      </p>
      <Link title="Go back to site" to={"/about"} as="button" />
    </section>
)}

export default Landing
