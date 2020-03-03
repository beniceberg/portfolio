import React, { FunctionComponent, MouseEventHandler } from "react"

import styles from "./button.module.css"

type ButtonPropType = {
  title: string
  color?: string
  onClick: MouseEventHandler
}

const Button: FunctionComponent<ButtonPropType> = ({ title, color = 'black', onClick }) => (
  <button className={`${styles.button} ${styles[color]}`} tabIndex={0} onClick={onClick}>
    {title}
  </button>
)

export default Button