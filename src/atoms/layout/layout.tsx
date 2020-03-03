import React, { FunctionComponent } from "react"
import "normalize.css"

import "../../assets/css/global.css"
import "../../assets/css/fonts.css"
import styles from "./layout.module.css"

import Header from "@components/header/header"
import Footer from "@components/footer/footer"

const Layout: FunctionComponent = ({ children }) => (
  <div className={styles.layoutWrapper}>
    <Header />
    <main className={styles.main}>
      <section className={styles.content}>
        {children}
      </section>
    </main>
    <Footer />
  </div>
)

export default Layout
