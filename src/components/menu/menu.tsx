import React, { FunctionComponent, useEffect } from "react"
import { Link } from "gatsby"

import Button from "@atoms/button/button"

import styles from "./menu.module.css"

type MenuPropTypes = {
  handleEsc: Function
  open: Boolean
}

const Menu: FunctionComponent<MenuPropTypes> = ({ handleEsc, open }) => {
  const menu = [
    { to: "/", title: "Home", slug: "home" },
    { to: "/blog", title: "Blog", slug: "blog" },
    { to: "/cv", title: "C V", slug: "cv" },
  ]

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp)
    return () => {
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  const handleKeyUp = (e: KeyboardEvent) => e.key === 'Escape' && handleEsc()
  const handleClick = () => handleEsc()

  return (
    <div className={`${styles.wrapper} ${open ? ``: styles.hidden}`}>
      <div className={styles.buttonWrapper}>
        <Button title="Close" color="white" onClick={handleClick} transparant />
      </div>
      {menu.map(({to, slug, title}) => (
        <Link to={to} key={slug} onClick={handleClick}>{title}</Link>
      ))}
    </div>
  )
}

export default Menu
