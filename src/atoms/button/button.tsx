import React, { FunctionComponent, MouseEventHandler } from "react"

import styles from "./button.module.css"
import style from "react-syntax-highlighter/dist/esm/styles/hljs/agate"

type ButtonPropType = {
  title: string
  color?: string
  transparant?: Boolean
  onClick: MouseEventHandler
}

const Button: FunctionComponent<ButtonPropType> = ({ title, color = 'black', onClick, transparant = false }) => (
  <button
    className={`${styles.button} ${styles[color]} ${transparant ? style.transparant : ``}`}
    tabIndex={0}
    onClick={onClick}
  >
    {title}
  </button>
)

export default Button