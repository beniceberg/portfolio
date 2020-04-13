import React, { FunctionComponent, MouseEventHandler } from "react"
import classnames from "classnames"

import styles from "./button.module.css"

type ButtonPropType = {
  title: string
  color?: string
  transparant?: Boolean
  onClick: MouseEventHandler
}

const Button: FunctionComponent<ButtonPropType> = ({ title, color = 'black', onClick, transparant = false }) => (
  <button
    className={classnames(styles.button, styles[color], { [styles.transparant]: transparant } )}
    tabIndex={0}
    onClick={onClick}
  >
    {title}
  </button>
)

export default Button