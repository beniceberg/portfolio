import React, { FunctionComponent, MouseEventHandler } from "react"
import { Link as GatsbyLink } from "gatsby"
import classnames from "classnames"
import PropTypes from "prop-types"

import styles from "./link.module.css"

type LinkPropType = {
  title: string
  to: string
  as?: string
  className?: string
  onClick?: MouseEventHandler
}

const Link: FunctionComponent<LinkPropType> = ({
  title,
  to,
  as,
  className,
  onClick,
}) => (
  <GatsbyLink
    to={to}
    tabIndex={0}
    className={classnames(styles[as], className)}
    onClick={onClick}
  >
    {title}
  </GatsbyLink>
)

Link.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Link.defaultProps = {
  as: 'link',
  className: '',
  onClick: () => {},
}

export default Link