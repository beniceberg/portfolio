import React, { FunctionComponent, MouseEventHandler } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

import styles from "./button.module.css"

type ButtonPropType = {
  title: string
  color?: string
  transparant?: Boolean
  onClick: MouseEventHandler
}

const Button: FunctionComponent<ButtonPropType> = ({ title, color = 'black', transparant, onClick }) => (
  <button
    className={classnames(styles.button, styles[color], { [styles.transparant]: transparant } )}
    tabIndex={0}
    onClick={onClick}
  >
    {title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  transparant: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  color: 'black',
  transparant: false,
}

export default Button