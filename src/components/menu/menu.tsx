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
  
  const removeEvent = () => {
    window.removeEventListener("keyup", handleKeyUp)
    window.removeEventListener("click", handleClick)
    handleEsc()
  }

  const handleKeyUp = (e: KeyboardEvent) => e.key === 'Escape' && removeEvent()
  const handleClick = (e: MouseEvent) => e.target && e.target.id !== 'menu' && removeEvent()
  
  useEffect(() => {
    open && window.addEventListener("keyup", handleKeyUp)
    open && window.addEventListener("click", handleClick)
  }, [open])

  return (
    <div className={`${styles.wrapper} ${open ? ``: styles.hidden}`} id="menu">
      <div className={styles.buttonWrapper}>
        <Button title="Close" color="white" onClick={removeEvent} transparant />
      </div>
      {menu.map(({to, slug, title}) => (
        <Link to={to} key={slug} onClick={removeEvent}>{title}</Link>
      ))}
    </div>
  )
}

export default Menu
